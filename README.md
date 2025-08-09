# **BuzRyde Website**

> Official website for **BuzRyde**, a modern ridesharing platform for Canadian cities — built with a focus on performance, accessibility, and brand consistency.

---

## **Table of Contents**

1. [Overview](#overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Folder Structure](#folder-structure)
5. [Getting Started](#getting-started)
6. [Environment Variables](#environment-variables)
7. [Development Workflow](#development-workflow)
8. [Brand Guidelines](#brand-guidelines)
9. [Pages & Components](#pages--components)
10. [Styling Conventions](#styling-conventions)
11. [Testing](#testing)
12. [Deployment](#deployment)
13. [Contributing](#contributing)
14. [License](#license)

---

## **Overview**

The **BuzRyde Website** is a fully responsive web application that serves as the public-facing marketing and information platform for the BuzRyde ride-hailing service. It includes marketing pages, driver recruitment forms, legal policy pages, and a branded UI designed for clarity and trust.

The project is built with modern React tooling, follows accessibility best practices, and has been optimized for speed, mobile performance, and SEO.

---

## **Features**

* **Responsive Layout** — Optimized for mobile, tablet, and desktop.
* **Brand Integration** — Consistent use of official brand colors and logo across all pages.
* **SEO Optimized** — Meta tags and structured data for better search visibility.
* **Accessible Navigation** — Keyboard-friendly, ARIA-compliant menu.
* **Driver Interest Form** — Lead capture form for potential BuzRyde drivers.
* **Contact Form** — Customer inquiry form with validation.
* **Privacy Policy Page** — Clear breakdown of data handling practices.
* **Performance-Oriented** — Lightweight, modern components with minimal render overhead.

---

## **Tech Stack**

* **Frontend Framework**: [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
* **Routing**: [React Router](https://reactrouter.com/)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/) + custom brand colors
* **Icons**: [Lucide React](https://lucide.dev/)
* **Forms**: Custom form components with validation
* **SEO**: Custom `<SEO>` component for meta tags
* **Build Tool**: Vite or CRA (depending on project setup)
* **Hosting**: Compatible with Netlify, Vercel, or any static hosting provider

---

## **Folder Structure**

```
.
├── README.md
├── components.json
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── public
│   ├── favicon.ico
│   ├── images
│   │   ├── appstore-badge.svg
│   │   ├── buzryde-logo.jpg
│   │   └── google-play-badge.png
│   ├── placeholder.svg
│   └── robots.txt
├── src
│   ├── App.css
│   ├── App.tsx
│   ├── components
│   │   ├── SEO.tsx
│   │   ├── forms
│   │   │   ├── ContactForm.tsx
│   │   │   └── DriverInterestForm.tsx
│   │   ├── layout
│   │   │   ├── Layout.tsx
│   │   │   ├── SiteFooter.tsx
│   │   │   └── SiteHeader.tsx
│   │   ├── sections
│   │   │   ├── Hero.tsx
│   │   │   └── Testimonials.tsx
│   │   └── ui
│   │       ├── accordion.tsx
│   │       ├── alert-dialog.tsx
│   │       ├── alert.tsx
│   │       ├── aspect-ratio.tsx
│   │       ├── avatar.tsx
│   │       ├── badge.tsx
│   │       ├── breadcrumb.tsx
│   │       ├── button.tsx
│   │       ├── calendar.tsx
│   │       ├── card.tsx
│   │       ├── carousel.tsx
│   │       ├── chart.tsx
│   │       ├── checkbox.tsx
│   │       ├── collapsible.tsx
│   │       ├── command.tsx
│   │       ├── context-menu.tsx
│   │       ├── dialog.tsx
│   │       ├── drawer.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── form.tsx
│   │       ├── hover-card.tsx
│   │       ├── input-otp.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── menubar.tsx
│   │       ├── navigation-menu.tsx
│   │       ├── pagination.tsx
│   │       ├── popover.tsx
│   │       ├── progress.tsx
│   │       ├── radio-group.tsx
│   │       ├── resizable.tsx
│   │       ├── scroll-area.tsx
│   │       ├── select.tsx
│   │       ├── separator.tsx
│   │       ├── sheet.tsx
│   │       ├── sidebar.tsx
│   │       ├── skeleton.tsx
│   │       ├── slider.tsx
│   │       ├── sonner.tsx
│   │       ├── switch.tsx
│   │       ├── table.tsx
│   │       ├── tabs.tsx
│   │       ├── textarea.tsx
│   │       ├── toast.tsx
│   │       ├── toaster.tsx
│   │       ├── toggle-group.tsx
│   │       ├── toggle.tsx
│   │       ├── tooltip.tsx
│   │       └── use-toast.ts
│   ├── config
│   │   └── site.ts
│   ├── hooks
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── index.css
│   ├── lib
│   │   └── utils.ts
│   ├── main.tsx
│   ├── pages
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Download.tsx
│   │   ├── Drivers.tsx
│   │   ├── FAQs.tsx
│   │   ├── Index.tsx
│   │   ├── NotFound.tsx
│   │   ├── Privacy.tsx
│   │   ├── Services.tsx
│   │   ├── Terms.tsx
│   │   └── TestimonialsPage.tsx
│   └── vite-env.d.ts
├── tailwind.config.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## **Getting Started**

### **1. Clone the repository**

```bash
git clone https://github.com/yourusername/buzryde-web.git
cd buzryde-web
```

### **2. Install dependencies**

```bash
npm install
# or
yarn install
```

### **3. Start the development server**

```bash
npm run dev
# or
yarn dev
```

The app will be available at **[http://localhost:5173/](http://localhost:5173/)** (Vite) or **[http://localhost:3000/](http://localhost:3000/)** (CRA).

---

## **Environment Variables**

Create a `.env` file in the root directory and configure any required variables:

```
VITE_API_BASE_URL=https://api.buzryde.com
VITE_FORM_SUBMIT_KEY=your_form_service_key
```

---

## **Development Workflow**

1. **Branching**: Create feature branches using the format `feat/feature-name` or `fix/bug-description`.
2. **Code Style**: Follow ESLint + Prettier configurations (run `npm run lint` before commits).
3. **Commits**: Use [Conventional Commits](https://www.conventionalcommits.org/) for clear history.
4. **Testing**: Add tests where applicable before PR submission.
5. **Pull Requests**: All PRs must be reviewed and pass automated checks before merging.

---

## **Brand Guidelines**

* **Colors**:

  * `brandTeal = #337A75`
  * `brandGold = #F4B400`
  * `brandLight = #F5F5F5`
* **Logo**:

  * Location: `/public/images/buzryde-logo.jpg`
  * Used in `SiteHeader` and other branding placements.
* **Typography**:

  * Headings: Bold, clear sans-serif.
  * Body: Neutral sans-serif with legible contrast.
* **Spacing**:

  * Consistent use of Tailwind spacing units for clean layouts.

---

## **Pages & Components**

### **Main Pages**

* **Home** — Hero section, features, and CTA.
* **Drivers** — Recruitment details, driver benefits, registration form.
* **Contact** — Inquiry form with validation.
* **Privacy Policy** — Detailed legal and data protection information.

### **Core Components**

* **`SEO`** — Handles title, description, and meta tags.
* **`SiteHeader`** — Responsive navigation with logo.
* **Form Components** — DriverInterestForm & ContactForm.
* **UI Elements** — Button, Card, Separator, Iconography.

---

## **Styling Conventions**

* **Tailwind Utility-First**: Use Tailwind classes for styling.
* **Brand Colors**: Always use `brandTeal`, `brandGold`, and `brandLight` constants.
* **Responsive First**: Design for mobile and scale up.
* **Accessibility**: Ensure sufficient contrast and semantic HTML.

---

## **Testing**

* **Manual Testing**: Check all pages on mobile and desktop views.
* **Browser Support**: Chrome, Firefox, Safari, Edge.
* **Performance**: Lighthouse scores should remain above 90 for Performance, Accessibility, SEO.

---

## **Deployment**

### Deploying to Vercel

```bash
npm run build
vercel deploy
```

### Deploying to Netlify

```bash
npm run build
netlify deploy
```

The build output is located in `/dist` (Vite) or `/build` (CRA).

---

## **Contributing**

We welcome contributions!

1. Fork the repo
2. Create a feature branch (`git checkout -b feat/new-feature`)
3. Commit changes (`git commit -m "feat: add new feature"`)
4. Push branch (`git push origin feat/new-feature`)
5. Open a Pull Request

---

## **License**

This project is licensed under the **MIT License**.
See [LICENSE](LICENSE) for details.

---


