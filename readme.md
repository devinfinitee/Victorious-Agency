# 🚀 Victorious Digital Enterprises (VDE) Platform

## Project Overview

Victorious Digital Enterprises (VDE) is a modern, premium digital services and courses platform featuring a cutting-edge dark-themed UI with glassmorphism effects, smooth GSAP animations, and comprehensive dashboard systems for Admins, Instructors, and Students.

## 🎨 Design Features

- **Modern Dark UI:** Gradient backgrounds with slate-900/slate-950 color scheme
- **Glassmorphism:** Frosted glass effects with backdrop blur
- **GSAP Animations:** Smooth scroll-triggered animations and interactive elements
- **Gradient Accents:** Blue, purple, and pink gradient combinations
- **Responsive Design:** Fully optimized for all device sizes

---

## 📋 Application Routes

### **Public Routes**

| Route | Description |
|-------|-------------|
| `/` | Home page with hero, services, courses, and team sections |
| `/services` | Browse all digital services offered |
| `/courses` | Explore available courses |
| `/contact` | Contact form and information |
| `/login` | User login page (no third-party auth) |
| `/register` | New user registration (no third-party auth) |

### **Admin Dashboard Routes**

| Route | Description |
|-------|-------------|
| `/dashboard/admin` | Admin overview with platform statistics |
| `/dashboard/admin/users` | User management interface |
| `/dashboard/admin/courses` | Course management system |
| `/dashboard/admin/transactions` | Transaction history and management |
| `/dashboard/admin/analytics` | Platform analytics and insights |
| `/dashboard/admin/settings` | Admin settings and configuration |

### **Instructor/Seller Dashboard Routes**

| Route | Description |
|-------|-------------|
| `/dashboard/instructor` | Instructor overview with earnings and stats |
| `/dashboard/instructor/courses` | Manage instructor's courses |
| `/dashboard/instructor/wallet` | Wallet and earnings management |
| `/dashboard/instructor/analytics` | Course performance analytics |
| `/dashboard/instructor/profile` | Instructor profile settings |

### **User/Student Dashboard Routes**

| Route | Description |
|-------|-------------|
| `/dashboard/user` | User overview with enrolled courses |
| `/dashboard/user/courses` | User's purchased/enrolled courses |
| `/dashboard/user/wallet` | User wallet and transactions |
| `/dashboard/user/settings` | User account settings |

## ✨ Key Features & Scope

### 1\. **Core Modules**

- **Services Module:** Admin-managed services with user order placement UI.
- **Courses Module:** Admin-managed courses with user checkout options (Wallet/Direct payment).
- **Contact & Messaging:** Contact form and WhatsApp integration; Admin UI to view and manage user messages.
- **Multi-Role Dashboards:** Separate dashboards for Admins, Instructors/Sellers, and Students/Users
- **Mock Data Integration:** Comprehensive mock data for realistic dashboard previews

### 2\. **Critical Financial & Security Features**

- **Custom User Wallet System (Phase 5):**
  - Allows **card-only deposits**.
  - Features instant balance update, spending history, deposit history, and wallet payment options.
  - Full **Admin controls** for manual Credit/Debit adjustments.
- **Secure Payment Integration (Phase 7):** Integration with **Paystack/Flutterwave** for secure API callbacks, real-time crediting, and detailed payment logs.
- **Role-Based Access Control:** Separate interfaces for Admin, Instructor, and User roles

### 3\. **UI/UX & Branding**

- **Style:** Modern dark theme with glassmorphism and gradient accents
- **Brand Colors:** **Blue (#3B82F6), Purple (#A855F7), Pink (#EC4899), and gradient combinations**
- **Responsiveness:** All UI elements (public pages, forms, and Admin Dashboard) must be fully **mobile-responsive**.
- **Animations:** GSAP-powered smooth animations with ScrollTrigger
- **Dashboard Design:** Modern card-based layouts with comprehensive statistics and data visualization

### 4\. **Authentication**

- **No Third-Party Auth:** Custom email/password authentication only
- **Login & Registration:** Clean, modern forms with dark theme styling
- **No Google/Apple Sign-in:** Simplified authentication flow

---

## 🛠 Project Structure & Setup

This project uses a **React.js frontend** (optimized for the Replit structure) and requires a separate backend API service for all data and financial logic.

### File Structure (Standard React Convention)

```
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/       # Reusable UI components (Header, Footer, ServiceCard)
│   ├── pages/            # Main views (Home, Services, Courses, Auth, Admin)
│   ├── assets/           # Images, Fonts, Styles
│   ├── context/          # Global state management (e.g., Auth, Wallet)
│   ├── services/         # Handlers for API/Payment integration
│   ├── App.js            # Main router and layout
│   └── index.js          # Entry point
├── .env                  # Environment Variables (CRITICAL for security)
├── package.json
└── README.md
```

### Getting Started (Development)

1.  **Clone the Repository:**

    ```bash
    git clone [repository-url]
    cd victorious-digital-enterprises
    ```

2.  **Install Dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Configure Environment Variables:**
    Create a **`.env`** file in the root directory. **These variables are critical for security and payment integration.**

    ```env
    # BACKEND API
    REACT_APP_API_BASE_URL="[Your_Deployed_Backend_API_URL]"

    # PAYMENT GATEWAY (Phase 7 - Paystack Example)
    REACT_APP_PAYSTACK_PUBLIC_KEY="pk_live_xxxxxxxxxxxxxxxxxxxxxxxxxxx"

    # SECURITY (Phase 3 - Admin Path)
    REACT_APP_ADMIN_LOGIN_PATH="/vd-admin-login"
    ```

4.  **Run the Application:**

    ```bash
    npm start
    # or
    yarn start
    ```

    The application will run on your local development server, typically at `http://localhost:3000`.

---

## ✅ Deployment & Maintenance

The deployment process (Phase 9) requires coordinating the frontend deployment with the backend API and database setup.

1.  **SSL/Domain:** Ensure the production domain uses **HTTPS (SSL)**.
2.  **Security Hardening:** Final deployment must include **environment variable setup** and, if implemented, **Admin IP/device restriction** rules.

### Handover Documentation (Phase 10)

The developer must provide complete documentation covering:

- Source Code access and guide.
- Comprehensive Admin, Wallet Management, and Payment setup guides.
- Database schema and maintenance instructions.

## 📊 Dashboard Frontend Architecture

This section documents the **frontend-only** dashboards you requested. Backend logic (auth, database, payments, wallet calculations) will be wired in later phases.

### Roles & Dashboards

- **Instructor / Admin (Course Seller)**
- **User / Student**
- **Super Admin / Manager**

Each role has its own dashboard pages but shares a **common layout** (sidebar + top bar) and visual style based on the existing Tailwind + shadcn UI system.

---

### Tech Stack (Frontend)

- **Framework:** React 18 + TypeScript (Vite)
- **Routing:** `wouter`
- **Styling:** Tailwind CSS with CSS variables defined in `client/src/index.css`
- **UI Components:** shadcn-style components (`Button`, `Input`, `Sidebar`, `Dialog`, etc.) in `client/src/components/ui`
- **State / Data:** `@tanstack/react-query` (for future API calls)
- **Charts:** `recharts` (for analytics visualizations)
- **Animation:** GSAP (to be used for section/page transitions and micro-interactions)

Main app entry:

- `client/src/main.tsx` – mounts React app.
- `client/src/App.tsx` – sets up providers and application routes.

---

### Route Overview

All routes are configured in `client/src/App.tsx` using `wouter`'s `<Switch>` and `<Route>` components.

#### Public Site Routes

- `/` – Landing page (Home)
- `/services` – Services listing
- `/courses` – Courses listing
- `/contact` – Contact page
- `/login` – Authentication (login)
- `/register` – Authentication (register)

> These correspond to React pages in `client/src/pages` (e.g. `Home.tsx`, `Services.tsx`, `Courses.tsx`, etc.).

#### Instructor / Admin Dashboard (Course Seller)

Base path (suggested): `/dashboard/instructor`

- `/dashboard/instructor` – **Overview**
  - Stat cards: total courses, total sales, wallet balance, active students.
  - Small revenue chart and quick actions.
- `/dashboard/instructor/courses` – **Manage Courses**
  - Table/grid of courses with thumbnail, title, price, status, and actions.
- `/dashboard/instructor/courses/new` – **Create / Edit Course**
  - Form to upload course thumbnail (UI only), title, caption, price, course link.
- `/dashboard/instructor/wallet` – **Wallet System**
  - Wallet balance display, transaction history table, deposits/withdrawals tabs.
- `/dashboard/instructor/analytics` – **Analytics & Charts**
  - Charts for revenue over time, top-performing courses, student counts.
- `/dashboard/instructor/profile` – **Private Profile Edit**
  - Profile picture upload UI, name, headline, bio, social links.

Public instructor profile (visible to users):

- `/instructor/:id` – **Public Instructor Profile**
  - Read-only view showing avatar, bio, and list of published courses.

#### User / Student Dashboard

Base path (suggested): `/dashboard/user`

- `/dashboard/user` – **Overview**
  - Summary cards (purchased courses count, wallet balance, etc.).
- `/dashboard/user/courses` – **My Courses**
  - Grid of purchased courses with thumbnails and "Go to course" buttons.
- `/dashboard/user/wallet` – **Wallet**
  - Wallet balance, transaction history, and tabs for deposits vs purchases.
- `/dashboard/user/settings` – **Profile & Settings**
  - Basic user profile (avatar, name, email), notification preferences.

#### Super Admin / Manager Dashboard

Base path (suggested): `/dashboard/admin` (or `/dashboard/super-admin`)

- `/dashboard/admin` – **Global Overview**
  - Global stat cards (total users, instructors, revenue, courses).
  - Combined charts for platform activity and revenue.
- `/dashboard/admin/users` – **User Management**
  - Table of all users with roles, status, and actions (view, later: disable).
- `/dashboard/admin/courses` – **All Courses**
  - Platform-wide course list by instructor, price, status, total sales.
- `/dashboard/admin/transactions` – **Money Tracking**
  - Global transaction list and revenue breakdown.
- `/dashboard/admin/analytics` – **Advanced Analytics**
  - Deeper charts: revenue by instructor, category, time range.
- `/dashboard/admin/settings` – **Platform Settings** (UI only for now).

All of these pages are frontend‐only stubs until the backend API is wired in.

---

### Layout & Components

The dashboards share a consistent layout built from reusable components.

- **Sidebar Layout:**
  - Implemented via `client/src/components/ui/sidebar.tsx`.
  - Responsive behavior: collapses to a mobile drawer on small screens.
- **Top Bar / Header:**
  - Contains page title, user avatar with dropdown, and theme toggle.
- **Cards & Tables:**
  - Use Tailwind utility classes (+ existing `Button`, `Input`, `Table`, etc.).
  - Follow spacing and grid rules from `design_guidelines.md`.

All layouts aim to be **mobile-first**, using responsive Tailwind classes like:

- `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` for cards.
- `overflow-x-auto` for tables on smaller screens.

---

### GSAP Animations

GSAP is installed and will be applied progressively to dashboards for:

- **Page/Section Entry:**
  - Fade/slide-in effects for dashboard hero sections and stat cards.
  - Staggered animations when cards first appear.
- **Micro-Interactions:**
  - Subtle hover/press effects on important cards or CTAs.
- **Scroll-based Enhancements:**
  - Optional scroll-triggered animations on analytics-heavy pages.

Implementation pattern (per React component):

1. Import GSAP.
2. Use `useRef` to target a container.
3. Use `useEffect` to run a GSAP timeline for entry animations.

Animations will be kept **lightweight** so they don't hurt performance or accessibility.

---

### Backend Integration Notes (Future Work)

- All dashboard data is currently **mocked/static** on the frontend.
- Future integration steps:
  - Replace mocked data with calls to your Express/Drizzle backend using `react-query`.
  - Secure routes based on auth/role (Instructor/User/Admin).
  - Connect wallet and payment flows to Paystack/Flutterwave.

This README section should give you a clear map of where each dashboard page lives and how to extend or modify the frontend as you continue building the full-stack application.
