# 🚀 Victorious Digital Enterprises (VDE) Platform

## Project Overview

Victorious Digital Enterprises (VDE) is a modern, clean, digital services and courses platform, combining the visual aesthetic of a professional agency (Kodfec style) with the transactional layout of a marketplace (Fiverr style). The core of the platform is a robust, custom **User Wallet System** integrated with local payment gateways (Paystack/Flutterwave). The primary goal is a secure, clean, and highly functional platform.

## ✨ Key Features & Scope

### 1\. **Core Modules**

- **Services Module:** Admin-managed services with user order placement UI.
- **Courses Module:** Admin-managed courses with user checkout options (Wallet/Direct payment).
- **Contact & Messaging:** Contact form and WhatsApp integration; Admin UI to view and manage user messages.

### 2\. **Critical Financial & Security Features**

- **Custom User Wallet System (Phase 5):**
  - Allows **card-only deposits**.
  - Features instant balance update, spending history, deposit history, and wallet payment options.
  - Full **Admin controls** for manual Credit/Debit adjustments.
- **Secure Payment Integration (Phase 7):** Integration with **Paystack/Flutterwave** for secure API callbacks, real-time crediting, and detailed payment logs.
- **Exclusive Admin Access (Phase 3):**
  - Single Admin owner with a **private, hidden login URL** (`/vd-admin-login`).
  - Admin login must be completely separate from the user flow.

### 3\. **UI/UX & Branding**

- **Style:** Clean, modern, high-contrast, light-mode design (Kodfec/Fiverr influence).
- **Brand Colors:** **Blue, White, Purple, and Gold**.
- **Responsiveness:** All UI elements (public pages, forms, and Admin Dashboard) must be fully **mobile-responsive**.
- **Admin Dashboard:** Functionality-focused UI featuring modular cards, analytics charts, and comprehensive management tables (Users, Services, Transactions).

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
