import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { site } from "@/config/site";
import { Menu, X } from "lucide-react";
import { useState } from "react";

// Brand Colors
const brandTeal = "#337A75";
const brandGold = "#F4B400";

export const SiteHeader = () => {
  const [open, setOpen] = useState(false);
  return (
    <header
      className="sticky top-0 z-40 border-b"
      style={{
        backgroundColor: brandTeal,
        color: "#fff",
      }}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <img
            src="/images/buzryde-logo.jpg"
            alt="BuzRyde Logo"
            className="h-10 w-auto object-contain"
          />
          <span className="text-lg font-bold tracking-tight">{site.name}</span>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {site.nav.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              end
              className={({ isActive }) =>
                `relative text-sm transition-colors pb-1 ${isActive
                  ? "font-semibold"
                  : "opacity-90 hover:opacity-100"
                }`
              }
              style={({ isActive }) => ({
                color: "#fff",
                borderBottom: isActive ? `2px solid ${brandGold}` : "none",
              })}
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink to="/contact">
            <Button
              size="sm"
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
              Contact
            </Button>
          </NavLink>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          style={{ color: "#fff" }}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className="md:hidden border-t"
          style={{
            borderColor: "rgba(255,255,255,0.2)",
            backgroundColor: brandTeal,
          }}
        >
          <div className="container mx-auto px-4 py-3 flex flex-col gap-3">
            {site.nav.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={() => setOpen(false)}
                className="text-sm py-2 rounded-md transition-colors"
                style={{
                  color: "#fff",
                }}
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink to="/contact" onClick={() => setOpen(false)}>
              <Button
                className="w-full"
                size="sm"
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
                Contact
              </Button>
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};


