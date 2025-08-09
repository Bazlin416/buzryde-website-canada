import { NavLink } from "react-router-dom";
import { site } from "@/config/site";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

// Brand Colors
const brandTeal = "#337A75";
const brandGold = "#F4B400";
const brandLight = "#F5F5F5";

export const SiteFooter = () => {
  return (
    <footer
      className="border-t relative"
      style={{
        background: `linear-gradient(to bottom, ${brandTeal} 0%, ${brandTeal} 80%, ${brandLight} 100%)`,
        color: "#fff",
      }}
    >
      {/* Top Section */}
      <div className="container mx-auto px-4 py-14 grid gap-10 md:grid-cols-5">

        {/* Brand + Logo + Social + Badges */}
        <div>
          <p className="text-sm max-w-sm leading-relaxed opacity-90">
            Innovative, reliable, and community-driven ride hailing across
            Canada. Connecting riders and drivers, one trip at a time.
          </p>

          {/* Social icons */}
          <div className="flex gap-4 mt-4">
            {[
              { icon: Facebook, label: "Facebook" },
              { icon: Instagram, label: "Instagram" },
              { icon: Twitter, label: "Twitter" },
            ].map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                className="transition-colors"
                style={{ color: "#fff" }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = brandGold)
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "#fff")
                }
                aria-label={label}
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* App Store & Google Play badges */}
          <div className="flex flex-wrap gap-3 mt-4">
            <a href="https://apps.apple.com/ke/app/buzryde-ride/id6739767230" target="_blank" rel="noopener noreferrer">
              <img
                src="/images/appstore-badge.svg"
                alt="App Store"
                className="h-10 w-auto object-contain"
                loading="lazy"
              />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.buzryde.com&pcampaignid=web_share" target="_blank" rel="noopener noreferrer">
              <img
                src="/images/google-play-badge.png"
                alt="Google Play"
                className="h-10 w-auto object-contain"
                loading="lazy"
              />
            </a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h3
            className="text-sm font-semibold mb-4 uppercase tracking-wide"
            style={{ color: brandGold }}
          >
            Company
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <NavLink to="/about" className="hover:underline">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/download" className="hover:underline">
                Download
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3
            className="text-sm font-semibold mb-4 uppercase tracking-wide"
            style={{ color: brandGold }}
          >
            Support
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <NavLink to="/faqs" className="hover:underline">
                FAQs
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:underline">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/drivers" className="hover:underline">
                Driver Signup
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3
            className="text-sm font-semibold mb-4 uppercase tracking-wide"
            style={{ color: brandGold }}
          >
            Legal
          </h3>
          <ul className="space-y-2 text-sm mb-4">
            <li>
              <NavLink to="/terms" className="hover:underline">
                Terms of Service
              </NavLink>
            </li>
            <li>
              <NavLink to="/privacy" className="hover:underline">
                Privacy Policy
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3
            className="text-sm font-semibold mb-4 uppercase tracking-wide"
            style={{ color: brandGold }}
          >
            Stay Updated
          </h3>
          <p className="text-sm opacity-90 mb-3">
            Get the latest updates on new features, driver opportunities, and
            exclusive offers.
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
              className="px-4 py-2 text-sm rounded-md transition-colors w-full sm:w-auto"
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
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};





