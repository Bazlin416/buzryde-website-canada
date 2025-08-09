import { SEO } from "@/components/SEO";
import { Hero } from "@/components/sections/Hero";
//import { Testimonials } from "@/components/sections/Testimonials";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Car, Handshake, ShieldCheck } from "lucide-react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

// Brand Colors
const brandTeal = "#337A75";
const brandGold = "#F4B400";
const brandLight = "#F5F5F5";

const features = [
  {
    icon: Car,
    title: "Seamless rides",
    text: "Book in seconds with live ETAs, cashless payments, and upfront pricing you can trust."
  },
  {
    icon: ShieldCheck,
    title: "Safety built-in",
    text: "Background-checked drivers, trip tracking, and 24/7 support keep every ride secure."
  },
  {
    icon: Handshake,
    title: "Community first",
    text: "We put drivers and riders first, building fair and reliable mobility across Canadian cities."
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
        title="BuzRyde – Reliable Ride Hailing in Canada"
        description="BuzRyde connects riders and drivers with fast, safe, and reliable ride hailing across Canada. Download on iOS and Android."
        path="/"
      />
      <Hero />

      <section className="container mx-auto px-4 py-20">
        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
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

        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-10 mb-16">
          {stats.map((s) => (
            <Stat key={s.label} value={s.value} label={s.label} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
          <NavLink to="/download">
            <Button
              size="lg"
              className="px-8 text-base font-semibold"
              style={{ backgroundColor: brandTeal, color: "#fff" }}
            >
              Download the App
            </Button>
          </NavLink>
          <NavLink to="/drivers">
            <Button
              variant="outline"
              size="lg"
              className="px-8 text-base font-semibold"
              style={{
                borderColor: brandGold,
                color: brandGold
              }}
            >
              Drive with BuzRyde
            </Button>
          </NavLink>
        </div>
      </section>

      {/* Testimonials */}
      {/* <Testimonials /> */}
    </div>
  );
};

export default Index;


