import { SEO } from "@/components/SEO";
import {
  CheckCircle2,
  Clock,
  ShieldCheck,
  Smartphone,
  MapPin,
  DollarSign,
  Users,
  Award,
} from "lucide-react";

const brandTeal = "#337A75";
const brandGold = "#F4B400";
const brandLight = "#F5F5F5";

const Feature = ({ icon: Icon, title, text }: any) => (
  <div
    className="rounded-lg shadow-md p-6 text-center"
    style={{
      backgroundColor: brandLight,
      border: `1px solid ${brandGold}33`,
    }}
  >
    <Icon className="h-8 w-8 mb-3" style={{ color: brandGold }} />
    <h3
      className="text-lg font-semibold mb-1"
      style={{ color: brandTeal }}
    >
      {title}
    </h3>
    <p className="text-sm" style={{ color: brandTeal, opacity: 0.85 }}>
      {text}
    </p>
  </div>
);

const Services = () => {
  return (
    <div>
      <SEO
        title="BuzRyde Services – For Riders and Drivers"
        description="Explore BuzRyde features for riders and drivers: safe trips, upfront pricing, and fair earnings."
        path="/services"
      />

      {/* Hero Section */}
      <section
        className="py-20 text-center relative"
        style={{
          background: `linear-gradient(135deg, ${brandTeal}cc, ${brandGold}cc)`,
          color: brandLight,
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Our Services
          </h1>
          <p className="max-w-2xl mx-auto text-lg opacity-90">
            Whether you’re catching a ride or building your driving business,
            BuzRyde delivers technology, safety, and reliability every time.
          </p>
        </div>
        <div
          className="absolute top-0 left-0 w-40 h-40 rounded-full blur-3xl"
          style={{ backgroundColor: `${brandGold}55` }}
        />
        <div
          className="absolute bottom-0 right-0 w-60 h-60 rounded-full blur-3xl"
          style={{ backgroundColor: `${brandTeal}55` }}
        />
      </section>

      {/* Main Services */}
      <section className="container mx-auto px-4 py-16">
        <p
          className="mb-10 max-w-2xl text-center mx-auto"
          style={{ color: brandTeal, opacity: 0.85 }}
        >
          Built to move with you—whether you’re a daily commuter, a weekend
          explorer, or an entrepreneur behind the wheel. Our services are
          designed to make every trip smooth, safe, and fair.
        </p>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Riders */}
          <div>
            <h2
              className="text-2xl font-semibold mb-6"
              style={{ color: brandTeal }}
            >
              For Riders
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <Feature
                icon={Smartphone}
                title="One-tap booking"
                text="Find a nearby driver in seconds with live ETAs."
              />
              <Feature
                icon={CheckCircle2}
                title="Upfront pricing"
                text="Know your fare before you go—no surprises."
              />
              <Feature
                icon={ShieldCheck}
                title="Safety-first"
                text="Verified drivers, trip tracking, and 24/7 support."
              />
              <Feature
                icon={Clock}
                title="On your schedule"
                text="Ride anytime—day or night—across Canadian cities."
              />
              <Feature
                icon={MapPin}
                title="Wide coverage"
                text="Available in major cities and growing every month."
              />
              <Feature
                icon={Award}
                title="Quality experience"
                text="Clean, comfortable rides with professional service."
              />
            </div>
          </div>

          {/* Drivers */}
          <div>
            <h2
              className="text-2xl font-semibold mb-6"
              style={{ color: brandTeal }}
            >
              For Drivers
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <Feature
                icon={DollarSign}
                title="Fair earnings"
                text="Transparent fees and fast payouts you can count on."
              />
              <Feature
                icon={Clock}
                title="Flexible hours"
                text="Drive when it works for you—your schedule, your goals."
              />
              <Feature
                icon={ShieldCheck}
                title="Safety tools"
                text="In-app safety features and dedicated support."
              />
              <Feature
                icon={Smartphone}
                title="Powerful app"
                text="Smart navigation and demand insights built-in."
              />
              <Feature
                icon={Users}
                title="Community focus"
                text="Join a network of trusted Canadian drivers."
              />
              <Feature
                icon={Award}
                title="Driver recognition"
                text="Performance rewards and loyalty programs."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        className="py-16 text-center"
        style={{
          background: `linear-gradient(135deg, ${brandGold}cc, ${brandTeal}cc)`,
          color: brandLight,
        }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            Experience the BuzRyde Difference
          </h2>
          <p className="mb-6 max-w-xl mx-auto opacity-90">
            Safer rides, better earnings, and a growing community of Canadians
            who trust BuzRyde for their daily journeys.
          </p>
          <a
            href="/signup"
            className="px-6 py-3 rounded-lg font-semibold"
            style={{
              backgroundColor: brandLight,
              color: brandTeal,
              border: `2px solid ${brandLight}`,
            }}
          >
            Get Started Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;

