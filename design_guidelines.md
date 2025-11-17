# Victorious Digital Enterprises - Design Guidelines

## Design Approach
**System:** Custom design inspired by modern marketplace platforms (Fiverr, Upwork) with unique VDE branding and dark-mode-first philosophy.

## Core Design Principles
- **Dark Mode Default:** All interfaces designed for dark theme first, with light mode as secondary
- **Card-Heavy Layout:** Service and course showcases use prominent card-based designs
- **Minimal Icons:** Use sparingly; prioritize typography and visual hierarchy
- **Trust & Professionalism:** Design conveys expertise in digital services

---

## Color Palette (Strict Implementation)

### Dark Mode (Default)
- **Primary Blue:** For CTAs, links, accents, and interactive elements
- **Purple:** For secondary actions, highlights, premium features, gradients
- **Gold:** For badges, premium indicators, success states, highlights
- **Background Dark:** Deep charcoal/near-black (#0f1419 or similar)
- **Card Background:** Lighter dark (#1a1f2e or similar) for elevated surfaces
- **Text Primary:** White (#ffffff) for headings
- **Text Secondary:** Light gray (#9ca3af) for body text

### Light Mode (Toggle)
- **Background Light:** Pure white (#ffffff)
- **Card Background:** Light gray (#f9fafb)
- **Text Primary:** Dark gray (#111827)
- **Text Secondary:** Medium gray (#6b7280)
- **Maintain:** Blue, Purple, Gold colors remain consistent across themes

---

## Typography System

### Font Stack
- **Primary:** Inter, system-ui, -apple-system, sans-serif
- **Headings:** Bold weights (700-800)
- **Body:** Regular (400) and Medium (500)

### Scale
- **Hero Headline:** 3.5rem (mobile: 2.5rem) - Bold
- **Page Title:** 2.5rem (mobile: 2rem) - Bold
- **Section Heading:** 2rem (mobile: 1.5rem) - Bold
- **Card Title:** 1.25rem - Semibold
- **Body Text:** 1rem - Regular
- **Small Text:** 0.875rem - Regular

---

## Layout & Spacing

### Spacing System (Tailwind Units)
- **Common units:** 2, 4, 6, 8, 12, 16, 20, 24
- **Section padding:** py-16 to py-24 (desktop), py-12 (mobile)
- **Card padding:** p-6 to p-8
- **Element gaps:** gap-4, gap-6, gap-8

### Container Widths
- **Max-width:** max-w-7xl for main content
- **Centered:** mx-auto with px-4 to px-8

### Grid Systems
- **Service/Course Cards:** grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- **Stats/Overview:** grid-cols-2 lg:grid-cols-4
- **Admin Tables:** Full-width responsive tables

---

## Component Library

### Navigation Header
- **Sticky dark header** with logo (left), navigation links (center), Login/Register + Theme Toggle (right)
- **Mobile:** Hamburger menu with slide-out drawer
- Height: h-16 to h-20

### Hero Section
- **Full-width with gradient overlay** (blue to purple gradient)
- **Large hero image:** Background showing digital workspace/tech theme with blur overlay
- **Content:** Centered headline, subtitle, dual CTAs ("Get Started" + "View Services")
- **CTAs:** Blurred background buttons (backdrop-blur-sm) with primary blue and secondary purple
- Height: min-h-[600px] to min-h-[700px]

### Service/Course Cards
- **Elevated cards** with subtle border, rounded corners (rounded-lg to rounded-xl)
- **Structure:** Image/icon top, title, brief description, price/badge, CTA button
- **Hover:** Subtle lift effect (transform scale or shadow increase)
- **Pricing:** Gold accent for price display
- **Grid layout:** 3 columns on desktop, 2 on tablet, 1 on mobile

### Dashboard Cards (Admin)
- **Stat cards:** Large number display, label, icon/indicator, trend arrow
- **Purple gradient accents** for premium features
- **Glass-morphism effect:** backdrop-blur with semi-transparent backgrounds

### Forms & Inputs
- **Dark input fields** with lighter borders, focus state with blue accent
- **Labels:** Small text above inputs
- **Validation:** Red for errors, green for success, inline messaging
- **Buttons:** Full-width on mobile, auto-width on desktop

### Wallet Interface
- **Balance display:** Large prominent number with gold accent
- **Transaction tables:** Alternating row backgrounds, compact spacing
- **Deposit button:** Primary blue, prominent placement
- **History tabs:** Segmented control for Deposits/Spending

### Tables (Admin)
- **Striped rows** for readability
- **Action buttons:** Small icon buttons or dropdowns on right
- **Pagination:** Bottom-centered
- **Responsive:** Horizontal scroll on mobile with sticky first column

### Modals/Dialogs
- **Centered overlay** with dark backdrop
- **Card-style content** with rounded corners
- **Actions:** Right-aligned, primary + secondary buttons

### Theme Toggle
- **Icon-based switch** (sun/moon) in header
- **Smooth transitions:** All color changes animate with transition-colors duration-200
- **Persistent:** Save preference to localStorage

---

## Page-Specific Layouts

### Homepage Sections (6-8 sections)
1. **Hero** - Full-width with CTA
2. **Services Preview** - 6 featured service cards in 3-column grid
3. **Why Choose Us** - 4-column benefit icons with text
4. **Courses Highlight** - 3 featured course cards
5. **Portfolio Showcase** - Masonry grid or carousel of work samples
6. **Team Section** - Team member cards with photos (3-4 members)
7. **Testimonials** - 2-column testimonial cards with user photos
8. **Footer** - Multi-column with links, contact, newsletter signup

### Services Page
- **Filter sidebar** (left) with categories and price ranges
- **Card grid** (right) with sorting options
- **Service detail page:** Large hero, detailed description, pricing table, order form

### Courses Page
- **Similar to Services** but with course-specific filters (difficulty, duration)
- **Course detail:** Video preview area, curriculum accordion, instructor info, purchase options

### Admin Dashboard
- **Sidebar navigation** (left, collapsible on mobile)
- **Main content area:** Overview cards at top, then tabbed/sectioned content
- **Analytics:** Charts using minimal design (line/bar charts with blue/purple gradients)

---

## Animations
- **Minimal use:** Fade-ins on scroll (once per element)
- **Card hovers:** Subtle scale or shadow transitions
- **Page transitions:** Smooth fade between routes
- **Loading states:** Skeleton screens or spinner (blue/purple)
- **Avoid:** Excessive scroll-triggered animations, parallax effects

---

## Images

### Hero Section
- **Large background image:** Modern digital workspace, team collaboration, or abstract tech visual
- **Treatment:** Dark overlay (40-60% opacity) with blue-purple gradient blend
- **Placement:** Full-width background, content overlay centered

### Service/Course Cards
- **Thumbnail images:** Representative icons or imagery for each service/course
- **Dimensions:** 16:9 aspect ratio, consistent across all cards
- **Fallback:** Abstract gradient backgrounds if no image available

### Portfolio Section
- **Work samples:** Client project screenshots or mockups
- **Grid display:** Masonry or equal-height grid
- **Lightbox:** Click to expand full view

### Team Section
- **Professional headshots:** Team member photos
- **Circular or rounded square** crop
- **Placement:** Above name and role text

---

## Accessibility & Interactions
- **Focus states:** Visible blue outline on all interactive elements
- **Keyboard navigation:** Full support across all components
- **Form validation:** Real-time inline feedback
- **Loading states:** Clear indicators during async operations
- **Error handling:** User-friendly messages, not technical jargon