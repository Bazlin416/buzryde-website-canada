import { NavLink } from "react-router-dom";
import { site } from "@/config/site";
import { Facebook, Instagram, Twitter } from "lucide-react";

// Brand Colors
const brandTeal = "#337A75";
const brandGold = "#F4B400";
const brandLight = "#F5F5F5";

export const SiteFooter = () => {
  return (
    <footer
      className="relative text-white"
      style={{
        background: `linear-gradient(to bottom, ${brandTeal} 0%, ${brandTeal} 80%, ${brandLight} 100%)`,
      }}
    >
      {/* Top Section */}
      <div className="container mx-auto px-4 py-14 grid gap-12 md:grid-cols-4">

        {/* Brand + Logo + Social  */}
        <div className="flex flex-col items-start">
          <img
            src="/images/buzryde-logo.jpg"
            alt="BuzRyde Logo"
            className="h-14 w-auto mb-4 rounded-md shadow-md bg-white p-1"
          />
          <p className="text-sm max-w-sm leading-relaxed opacity-90 mb-5">
            Innovative, reliable, and community-driven ride hailing across Canada.
            Connecting riders and drivers, one trip at a time.
          </p>

          {/* Social icons */}
          <div className="flex gap-4 mb-5">
            {[
              {
                icon: Facebook,
                label: "Facebook",
                url: "https://www.facebook.com/BuzRyde"
              },
              {
                icon: Instagram,
                label: "Instagram",
                url: "https://www.instagram.com/BuzRyde"
              },
              {
                icon: Twitter,
                label: "X (Twitter)",
                url: "https://twitter.com/BuzRyde"
              },
            ].map(({ icon: Icon, label, url }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label={label}
              >
                <Icon className="h-5 w-5 text-white" />
              </a>
            ))}
          </div>
        </div>

        {/* Support */}
        <FooterColumn title="Support">
          <FooterLink to="/faqs">FAQs</FooterLink>
          <FooterLink to="/contact">Contact</FooterLink>
          <FooterLink to="/drivers">Driver Signup</FooterLink>
        </FooterColumn>

        {/* Legal */}
        <FooterColumn title="Legal">
          <FooterLink to="/terms">Terms of Service</FooterLink>
          <FooterLink to="/privacy">Privacy Policy</FooterLink>
        </FooterColumn>

        {/* Newsletter */}
        <div>
          <h3
            className="text-sm font-semibold mb-4 uppercase tracking-wide"
            style={{ color: brandGold }}
          >
            Stay Updated
          </h3>
          <p className="text-sm opacity-90 mb-3">
            Get the latest updates on new features, driver opportunities, and exclusive offers.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Subscribed!");
            }}
            className="flex flex-col sm:flex-row items-center gap-2"
          >
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 text-sm rounded-md focus:outline-none"
              style={{
                border: `1px solid ${brandGold}`,
                color: "#000",
              }}
              required
            />
            <button
              type="submit"
              className="px-4 py-2 text-sm rounded-md transition-colors w-full sm:w-auto font-medium"
              style={{
                backgroundColor: brandGold,
                color: "#000",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.backgroundColor = "#d99b00")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.backgroundColor = brandGold)
              }
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div
        className="border-t"
        style={{
          borderColor: "rgba(255,255,255,0.15)",
          backgroundColor: brandTeal,
        }}
      >
        <div className="container mx-auto px-4 py-6 text-xs flex flex-col md:flex-row items-center justify-between gap-3">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Footer Column Component
const FooterColumn = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div>
    <h3
      className="text-sm font-semibold mb-4 uppercase tracking-wide"
      style={{ color: brandGold }}
    >
      {title}
    </h3>
    <ul className="space-y-2 text-sm">{children}</ul>
  </div>
);

// Footer Link Component
const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <li>
    <NavLink to={to} className="hover:underline">
      {children}
    </NavLink>
  </li>
);






