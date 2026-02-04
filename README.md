# ♻️ Surplus Exchange

**Bridging the Gap Between Surplus and Hunger.**

Surplus Exchange is a state-of-the-art platform designed to combat food waste and food insecurity. By connecting donors with local NGOs and volunteers through an AI-powered ecosystem, we ensure that surplus food reaches those who need it most, quickly and safely.

---

## 🌟 Our Mission

Every year, millions of tons of food are wasted while millions go hungry. **Surplus Exchange** aims to solve this logistical and verification challenge by providing a seamless, real-time platform for food rescue. Our goal is to create a zero-waste community where surplus resources are redistributed efficiently.

## 🚀 Key Features

- **🤖 AI-Powered Verification**: Uses Google Gemini AI to analyze photos of donated food, verifying its freshness, type, and quantity instantly.
- **🗺️ Interactive Logistics**: Integrated Leaflet maps allow donors, volunteers, and NGOs to coordinate pick-ups and deliveries with precision.
- **📊 Impact Dashboard**: A real-time tracker for all users to see their contributions, including "CO2 Offset", "Food Saved (kg)", and "Meals Provided".
- **🤝 Role-Based Access**: Specialized interfaces for **Donors** (Restaurants/Individuals), **NGOs** (Receivers), and **Volunteers** (Couriers).
- **📱 Responsive & Modern UI**: A premium, mobile-first design built with Tailwind CSS v3 and Radix UI for maximum accessibility.
- **⚡ Real-time Updates**: Instant notifications and status tracking powered by Supabase Realtime.

---

## 🛠️ How It Works

Our process is designed to be as fast as possible to maintain food safety:

1.  **Snap & Upload**: A donor takes a photo of the surplus food.
2.  **AI Analysis**: The system automatically generates descriptions and checks for quality.
3.  **NGO Alert**: Nearby NGOs receive a notification and can claim the donation.
4.  **Volunteer Pick-up**: A local volunteer accepts the delivery task.
5.  **Verified Delivery**: The volunteer delivers the food, and the impact stats are updated for everyone involved.

---

## � Tech Stack

- **Frontend**: [Next.js 15+](https://nextjs.org/) (App Router), [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/), [Lucide Icons](https://lucide.dev/)
- **Backend & Database**: [Supabase](https://supabase.com/) (PostgreSQL + Auth + Realtime)
- **Artificial Intelligence**: [Google Gemini Pro API](https://ai.google.dev/)
- **Mapping**: [Leaflet.js](https://leafletjs.com/) with [React Leaflet](https://react-leaflet.js.org/)
- **Components**: [Radix UI](https://www.radix-ui.com/), [Sonner](https://sonner.stevenly.me/) (Toast notifications)

---

## 📦 Getting Started

### Prerequisites

- **Node.js**: v18.0 or higher
- **Supabase Account**: A project with a `profiles` and `donations` table.
- **Google AI Studio Key**: For Gemini API access.

### Installation

1.  **Clone the Repo**:
    ```bash
    git clone https://github.com/Akshitakeshav/surpluss_exchange.git
    cd surplus
    ```

2.  **Install Dependencies**:
    ```bash
    npm install
    ```

3.  **Environment Setup**:
    Create a `.env.local` and populate:
    ```env
    NEXT_PUBLIC_SUPABASE_URL=your_project_url
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
    GOOGLE_GEMINI_API_KEY=your_gemini_key
    ```

4.  **Launch**:
    ```bash
    npm run dev
    ```

---

## 🤝 Contributing

We welcome contributions to make food rescue more efficient! Feel free to open issues or submit pull requests.

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

---

*Built with ❤️ for the SurplusConnect Hackathon.*
