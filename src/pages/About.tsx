import { SEO } from "@/components/SEO";

const brandTeal = "#337A75";
const brandGold = "#F4B400";
const brandLight = "#F5F5F5";

const About = () => {
  return (
    <div>
      <SEO
        title="About BuzRyde"
        description="Discover BuzRyde’s mission to connect Canadian communities with fast, safe, and reliable ride hailing."
        path="/about"
      />

      {/* Hero Header */}
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
              text: "To seamlessly connect riders and drivers while prioritizing safety, fairness, and accessibility for all. We aim to make ride-hailing as dependable as public transport, but far more comfortable and efficient.",
            },
            {
              title: "Vision",
              text: "To empower every Canadian city with reliable mobility solutions, ensure sustainable driver earnings, and reduce the environmental footprint of urban transportation.",
            },
            {
              title: "Values",
              text: "Safety, transparency, reliability, inclusivity, and community impact guide every decision we make — from driver onboarding to app features and customer service.",
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

      {/* Our Story */}
      <section
        className="py-16"
        style={{ backgroundColor: `${brandTeal}05` }}
      >
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ color: brandTeal }}
          >
            Our Story
          </h2>
          <p className="mb-6" style={{ color: brandTeal, opacity: 0.85 }}>
            BuzRyde was born from a simple idea: transportation should be easy,
            safe, and beneficial for both riders and drivers. Founded in Canada,
            our platform was built to address local commuting challenges while
            providing fair earnings for drivers and exceptional service for
            passengers.
          </p>
          <p style={{ color: brandTeal, opacity: 0.85 }}>
            Today, we operate across multiple Canadian cities, using technology
            to bring people closer together — whether it’s getting to work,
            meeting friends, or exploring new neighborhoods. Every ride helps
            strengthen the community.
          </p>
        </div>
      </section>

      {/* Why Choose BuzRyde */}
      <section className="container mx-auto px-4 py-16">
        <h2
          className="text-3xl font-bold text-center mb-10"
          style={{ color: brandTeal }}
        >
          Why Choose BuzRyde
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Local Expertise",
              text: "We understand the unique needs of Canadian cities, from weather challenges to urban design.",
            },
            {
              title: "Safety First",
              text: "Background-checked drivers, in-app safety features, and real-time ride tracking ensure peace of mind.",
            },
            {
              title: "Fair Earnings",
              text: "Transparent fare structures and timely payments support our driver community’s success.",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-lg shadow-md"
              style={{
                backgroundColor: `${brandLight}`,
                border: `1px solid ${brandGold}33`,
              }}
            >
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: brandTeal }}
              >
                {feature.title}
              </h3>
              <p style={{ color: brandTeal, opacity: 0.8 }}>{feature.text}</p>
            </div>
          ))}
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

export default About;

