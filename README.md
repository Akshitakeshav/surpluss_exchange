# Surplus Exchange

Surplus Exchange is a modern web application designed to facilitate the efficient management and exchange of surplus goods. Built with a focus on speed, reliability, and ease of use, it leverages a robust tech stack to provide a seamless user experience.

## 🚀 Features

- **Real-time Dashboard**: Monitor surplus items and delivery statuses.
- **Map Integration**: Visualize pick-up and drop-off locations using Leaflet.
- **AI-Powered Insights**: Integrated with Google's Generative AI for smart suggestions and descriptions.
- **Modern UI**: Clean, responsive design built with Tailwind CSS and Radix UI components.
- **Secure Authentication**: Powered by Supabase for robust user management.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Database/Auth**: [Supabase](https://supabase.com/)
- **Maps**: [Leaflet](https://leafletjs.com/)
- **AI**: [Google Gemini Pro API](https://ai.google.dev/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/), [Lucide React](https://lucide.dev/), [Sonner](https://sonner.stevenly.me/)

## 📦 Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- npm or yarn
- A Supabase project
- A Google Gemini API Key

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Akshitakeshav/surpluss_exchange.git
   cd surplus
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env.local` file in the root directory and add the following:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   GOOGLE_GEMINI_API_KEY=your_gemini_api_key
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📜 License

This project is licensed under the MIT License.
