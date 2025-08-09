export const site = {
  name: "BuzRyde",
  baseUrl: "https://buzryde.app",
  contactEmail: "team@buzryde.com",
  supportEmail: "support@buzryde.com",
  phone: "+1 (555) 123-4567",
  social: {
    twitter: "https://twitter.com/buzryde",
    instagram: "https://instagram.com/buzryde",
    facebook: "https://facebook.com/buzryde",
    linkedin: "https://linkedin.com/company/buzryde",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "FAQs", href: "/faqs" },
    { label: "Download", href: "/download" },
    { label: "Drivers", href: "/drivers" },
  ],
} as const;
