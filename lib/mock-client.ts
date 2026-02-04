/**
 * This is a persistent mock Supabase client that uses a local JSON file (db.json)
 * to simulate a database for the demo.
 */

import { MOCK_PROFILES } from './mock-data';
import fs from 'fs';
import path from 'path';

const DB_PATH = path.join(process.cwd(), 'db.json');

// Helper to load/save data from disk
function loadDB() {
    if (!fs.existsSync(DB_PATH)) {
        const initialData = {
            profiles: [...MOCK_PROFILES],
            donations: [],
            claims: [],
            tasks: [],
        };
        fs.writeFileSync(DB_PATH, JSON.stringify(initialData, null, 2));
        return initialData;
    }
    const content = fs.readFileSync(DB_PATH, 'utf-8');
    return JSON.parse(content);
}

function saveDB(data: any) {
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
}

class MockQueryBuilder {
    private table: string;
    private filters: Array<(item: any) => boolean> = [];
    private _order: { column: string; ascending: boolean } | null = null;
    private _limit: number | null = null;

    constructor(table: string) {
        this.table = table;
    }

    select(query: string = '*') {
        return this;
    }

    eq(column: string, value: any) {
        this.filters.push(item => item[column] === value);
        return this;
    }

    in(column: string, values: any[]) {
        this.filters.push(item => values.includes(item[column]));
        return this;
    }

    order(column: string, { ascending = true } = {}) {
        this._order = { column, ascending };
        return this;
    }

    limit(count: number) {
        this._limit = count;
        return this;
    }

    async single() {
        const data = loadDB();
        let items = data[this.table] || [];
        for (const filter of this.filters) {
            items = items.filter(filter);
        }
        return { data: items[0] || null, error: null };
    }

    private execute() {
        const data = loadDB();
        let items = data[this.table] || [];

        // Apply filters
        for (const filter of this.filters) {
            items = items.filter(filter);
        }

        // Apply sorting
        if (this._order) {
            const { column, ascending } = this._order;
            items = [...items].sort((a, b) => {
                const valA = a[column];
                const valB = b[column];
                if (valA < valB) return ascending ? -1 : 1;
                if (valA > valB) return ascending ? 1 : -1;
                return 0;
            });
        }

        // Apply limit
        if (this._limit !== null) {
            items = items.slice(0, this._limit);
        }

        return items;
    }

    async then(resolve: any) {
        const data = this.execute();
        return resolve({ data, error: null });
    }

    async insert(item: any) {
        const dbContent = loadDB();
        const tableData = dbContent[this.table] || [];
        const newItem = {
            id: Math.random().toString(36).substr(2, 9),
            created_at: new Date().toISOString(),
            ...item
        };
        tableData.push(newItem);
        dbContent[this.table] = tableData;
        saveDB(dbContent);
        return { data: newItem, error: null };
    }

    async update(updates: any) {
        const dbContent = loadDB();
        const tableData = dbContent[this.table] || [];
        let modified = false;

        const newTableData = tableData.map((item: any) => {
            let match = true;
            for (const filter of this.filters) {
                if (!filter(item)) {
                    match = false;
                    break;
                }
            }
            if (match) {
                modified = true;
                return { ...item, ...updates };
            }
            return item;
        });

        if (modified) {
            dbContent[this.table] = newTableData;
            saveDB(dbContent);
        }
        return { data: null, error: null };
    }
}

export const mockSupabase = {
    auth: {
        async getUser() {
            // For demo, return the first profile (Donor) by default
            const db = loadDB();
            const donor = db.profiles.find((p: any) => p.role === 'DONOR') || db.profiles[0];
            return {
                data: {
                    user: {
                        id: donor.id,
                        email: 'demo@example.com',
                        user_metadata: { role: donor.role, full_name: donor.full_name }
                    }
                },
                error: null
            };
        },
        async signInWithPassword({ email }: { email: string }) {
            return { data: { user: { id: 'donor-1' } }, error: null };
        },
        async signUp({ email, options }: any) {
            return { data: { user: { id: 'new-user' } }, error: null };
        },
        async signOut() {
            return { error: null };
        }
    },
    from(table: string) {
        return new MockQueryBuilder(table);
    },
    storage: {
        from(bucket: string) {
            return {
                async upload(path: string, file: File) { return { data: {}, error: null }; },
                getPublicUrl(path: string) {
                    return { data: { publicUrl: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400' } };
                }
            };
        }
    }
};
