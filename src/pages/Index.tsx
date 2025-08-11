import { SEO } from "@/components/SEO";
import { Hero } from "@/components/sections/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Car, Handshake, ShieldCheck, MapPin, Users, DollarSign } from "lucide-react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

// Brand Colors
const brandTeal = "#337A75";
const brandGold = "#F4B400";
const brandLight = "#F5F5F5";

// Combined Features from Index & About
const features = [
  {
    icon: Car,
    title: "Seamless Rides",
    text: "Book in seconds with live ETAs, cashless payments, and upfront pricing you can trust."
  },
  {
    icon: ShieldCheck,
    title: "Safety Built-In",
    text: "Background-checked drivers, trip tracking, and 24/7 support keep every ride secure."
  },
  {
    icon: Handshake,
    title: "Community First",
    text: "We put drivers and riders first, building fair and reliable mobility across Canadian cities."
  },
  {
    icon: MapPin,
    title: "Local Expertise",
    text: "We understand the unique needs of Canadian cities, from weather challenges to urban design."
  },
  {
    icon: Users,
    title: "Safety First",
    text: "In-app safety features and real-time ride tracking ensure peace of mind."
  },
  {
    icon: DollarSign,
    title: "Fair Earnings",
    text: "Transparent fare structures and timely payments support our driver community’s success."
  }
];

const stats = [
  { value: "50+", label: "Canadian cities served" },
  { value: "24/7", label: "Dedicated customer support" },
  { value: "4.9★", label: "Community rating" }
];

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center">
    <div className="text-4xl font-extrabold" style={{ color: brandTeal }}>{value}</div>
    <div className="text-sm text-muted-foreground">{label}</div>
  </div>
);

const Index = () => {
  return (
    <div style={{ backgroundColor: brandLight }}>
      <SEO
        title="BuzRyde – Reliable Ride"
        description="BuzRyde connects riders and drivers with fast, safe, and reliable ride hailing across Canada. Download on iOS and Android."
        path="/"
      />

      {/* Hero */}
      <Hero />

      {/* About BuzRyde Intro */}
      <section
        className="py-20 text-center relative"
        style={{
          background: `linear-gradient(135deg, ${brandTeal}cc, ${brandGold}cc)`,
          color: brandLight,
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            About BuzRyde
          </h1>
          <p className="max-w-2xl mx-auto text-lg opacity-90">
            Connecting communities, empowering drivers, and transforming urban
            mobility across Canada — one ride at a time.
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

      {/* Mission, Vision, Values */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Mission",
              text: "To seamlessly connect riders and drivers while prioritizing safety, fairness, and accessibility for all."
            },
            {
              title: "Vision",
              text: "To empower every Canadian city with reliable mobility solutions, sustainable driver earnings, and greener transport."
            },
            {
              title: "Values",
              text: "Safety, transparency, reliability, inclusivity, and community impact guide every decision we make."
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-lg shadow-md p-6 text-center"
              style={{
                backgroundColor: brandLight,
                border: `1px solid ${brandGold}33`,
              }}
            >
              <h3
                className="text-xl font-semibold mb-2"
                style={{ color: brandTeal }}
              >
                {item.title}
              </h3>
              <p className="text-sm" style={{ color: brandTeal, opacity: 0.8 }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose BuzRyde (Combined Features) */}
      <section className="container mx-auto px-4 py-16">
        <h2
          className="text-3xl font-bold text-center mb-10"
          style={{ color: brandTeal }}
        >
          Why Choose BuzRyde
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f) => (
            <motion.div
              key={f.title}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              <Card
                className="h-full shadow-sm hover:shadow-lg transition-shadow"
                style={{ borderColor: brandTeal }}
              >
                <CardHeader>
                  <f.icon className="h-8 w-8 mb-4" style={{ color: brandGold }} />
                  <CardTitle className="text-lg font-semibold" style={{ color: brandTeal }}>
                    {f.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {f.text}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-3 gap-10">
          {stats.map((s) => (
            <Stat key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16" style={{ backgroundColor: `${brandTeal}05` }}>
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-10" style={{ color: brandTeal }}>
            Our Story
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            {[
              "BuzRyde was born from a simple idea: transportation should be easy, safe, and beneficial for both riders and drivers.",
              "Founded in Canada to solve local commuting challenges while ensuring fair earnings for drivers.",
              "Operating across multiple Canadian cities, using technology to connect communities.",
              "Helping people get to work, meet friends, and explore — every ride strengthens the community."
            ].map((point, idx) => (
              <div
                key={idx}
                className="flex items-start p-4 rounded-lg shadow-sm bg-white"
              >
                <CheckCircle
                  className="flex-shrink-0 w-6 h-6 mr-3"
                  style={{ color: brandGold }}
                />
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: brandTeal, opacity: 0.85 }}
                >
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Download */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-6" style={{ color: brandTeal }}>
          Get the BuzRyde App
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://apps.apple.com/ke/app/buzryde-ride/id6739767230"
            className="w-48 h-16"
          >
            <img
              src="/images/appstore-badge.svg"
              alt="App Store"
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.buzryde.com&pcampaignid=web_share"
            className="w-48 h-16"
          >
            <img
              src="/images/google-play-badge.png"
              alt="Google Play"
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </a>
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
            Join the BuzRyde Movement
          </h2>
          <p className="mb-6 max-w-xl mx-auto opacity-90">
            Whether you’re a rider looking for a better commute or a driver
            seeking fair earnings, BuzRyde is here to move you forward.
          </p>
          <a
            href="/contact"
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

export default Index;




