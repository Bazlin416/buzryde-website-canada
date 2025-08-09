import { SEO } from "@/components/SEO";
import { DriverInterestForm } from "@/components/forms/DriverInterestForm";
import { CheckCircle2, Clock, DollarSign, ShieldCheck, Smartphone } from "lucide-react";

const brandTeal = "#337A75";
const brandGold = "#F4B400";
const brandLight = "#F5F5F5";

const Drivers = () => (
  <div>
    <SEO
      title="Drive with BuzRyde"
      description="Earn on your schedule with BuzRyde. Register your interest to drive in Canadian cities."
      path="/drivers"
    />

    {/* Hero Section */}
    <section
      className="py-20 text-center relative"
      style={{
        background: `linear-gradient(135deg, ${brandTeal}cc, ${brandGold}cc)`,
        color: brandLight,
      }}
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Drive with BuzRyde
        </h1>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          Flexible hours, fair earnings, and safety tools built to help you
          succeed. Join our growing network of drivers across Canada today.
        </p>
      </div>
    </section>

    {/* Benefits Section */}
    <section className="container mx-auto px-4 py-16">
      <h2
        className="text-3xl font-bold text-center mb-10"
        style={{ color: brandTeal }}
      >
        Why Drive with Us?
      </h2>
      <div className="grid md:grid-cols-4 gap-8 text-center">
        {[
          {
            icon: DollarSign,
            title: "Fair Earnings",
            text: "Transparent fees and fast weekly payouts you can count on.",
          },
          {
            icon: Clock,
            title: "Flexible Hours",
            text: "You choose when and where to drive—day or night.",
          },
          {
            icon: ShieldCheck,
            title: "Safety First",
            text: "In-app emergency tools and 24/7 support for peace of mind.",
          },
          {
            icon: Smartphone,
            title: "Smart Tools",
            text: "In-app navigation, demand insights, and rider matching.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="p-6 rounded-lg shadow-lg"
            style={{
              backgroundColor: brandLight,
              borderTop: `4px solid ${brandGold}`,
            }}
          >
            <item.icon
              className="h-10 w-10 mx-auto mb-4"
              style={{ color: brandTeal }}
            />
            <h3
              className="text-lg font-semibold mb-2"
              style={{ color: brandTeal }}
            >
              {item.title}
            </h3>
            <p style={{ color: "#333" }}>{item.text}</p>
          </div>
        ))}
      </div>
    </section>

    {/* How It Works */}
    <section
      className="py-16"
      style={{ backgroundColor: brandLight }}
    >
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl font-bold text-center mb-10"
          style={{ color: brandTeal }}
        >
          How to Get Started
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            {
              step: "1",
              title: "Register Interest",
              text: "Fill out our quick form with your details.",
            },
            {
              step: "2",
              title: "Complete Onboarding",
              text: "Submit your documents and pass our verification process.",
            },
            {
              step: "3",
              title: "Start Driving",
              text: "Open the app and accept your first trip request.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-lg shadow-md bg-white"
              style={{
                borderTop: `4px solid ${brandGold}`,
              }}
            >
              <div
                className="w-12 h-12 mx-auto flex items-center justify-center rounded-full font-bold text-lg mb-4"
                style={{
                  backgroundColor: brandTeal,
                  color: brandLight,
                }}
              >
                {item.step}
              </div>
              <h3
                className="text-xl font-semibold mb-2"
                style={{ color: brandTeal }}
              >
                {item.title}
              </h3>
              <p style={{ color: "#555" }}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Registration Form Section */}
    <section className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Benefits List */}
        <div className="space-y-4">
          {[
            "Fair, transparent fees",
            "Flexible schedule",
            "Fast payouts",
            "In-app safety features",
            "24/7 driver support",
            "Opportunities in multiple cities",
          ].map((b, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle2
                className="h-5 w-5 mt-0.5"
                style={{ color: brandTeal }}
              />
              <span style={{ color: "#333" }}>{b}</span>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="max-w-md p-6 rounded-lg shadow-lg" style={{ backgroundColor: brandLight }}>
          <h3
            className="text-xl font-semibold mb-4"
            style={{ color: brandTeal }}
          >
            Register Your Interest
          </h3>
          <DriverInterestForm />
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section
      className="py-16 text-center"
      style={{
        background: `linear-gradient(135deg, ${brandGold}cc, ${brandTeal}cc)`,
        color: brandLight,
      }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Start Earning?
        </h2>
        <p className="mb-6 max-w-xl mx-auto opacity-90">
          Join a growing network of drivers who move Canada forward—one ride at a time.
        </p>
        <a
          href="#"
          className="inline-block px-6 py-3 rounded-lg font-semibold"
          style={{
            backgroundColor: brandLight,
            color: brandTeal,
          }}
        >
          Register Now
        </a>
      </div>
    </section>
  </div>
);

export default Drivers;

