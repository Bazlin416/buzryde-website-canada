import { SEO } from "@/components/SEO";

const brandTeal = "#337A75";
const brandGold = "#F4B400";
const brandLight = "#F5F5F5";

const Download = () => (
  <div>
    <SEO
      title="Download BuzRyde App"
      description="Get the BuzRyde app for iOS and Android. Fast, safe ride hailing across Canada."
      path="/download"
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
          Get the BuzRyde App
        </h1>
        <p className="max-w-2xl mx-auto text-lg opacity-90 mb-8">
          Your journey starts here—whether you’re riding across town or earning
          as a driver. Download BuzRyde today and experience safe, fast, and
          reliable rides across Canada.
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a href="https://apps.apple.com/ke/app/buzryde-ride/id6739767230" aria-label="Download on the App Store">
            <img
              src="/images/appstore-badge.svg"
              alt="Download on the App Store"
              className="h-14"
              loading="lazy"
            />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.buzryde.com&pcampaignid=web_share" aria-label="Get it on Google Play">
            <img
              src="/images/google-play-badge.png"
              alt="Get it on Google Play"
              className="h-14"
              loading="lazy"
            />
          </a>
        </div>
      </div>
    </section>

    {/* Benefits Section */}
    <section className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-3 gap-8 text-center">
        {[
          {
            title: "For Riders",
            text: "Book rides in seconds, track your driver live, and pay securely—all in one app.",
            color: brandTeal,
          },
          {
            title: "For Drivers",
            text: "Maximize your earnings with flexible hours and in-app navigation tools.",
            color: brandGold,
          },
          {
            title: "For Communities",
            text: "Connecting cities, towns, and neighborhoods with safe, reliable transport.",
            color: brandTeal,
          },
        ].map((item, i) => (
          <div
            key={i}
            className="p-6 rounded-lg shadow-lg"
            style={{
              backgroundColor: brandLight,
              borderTop: `4px solid ${item.color}`,
            }}
          >
            <h3
              className="text-xl font-semibold mb-2"
              style={{ color: item.color }}
            >
              {item.title}
            </h3>
            <p style={{ color: "#333" }}>{item.text}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Steps to Get Started */}
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
              title: "Download the App",
              text: "Get BuzRyde from the App Store or Google Play.",
            },
            {
              step: "2",
              title: "Sign Up",
              text: "Create an account as a rider or driver in minutes.",
            },
            {
              step: "3",
              title: "Start Your Journey",
              text: "Book your first ride or accept your first trip request.",
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
          Ready to Ride or Earn?
        </h2>
        <p className="mb-6 max-w-xl mx-auto opacity-90">
          Download the BuzRyde app today and be part of Canada’s most reliable
          ride-hailing network.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a href="#" aria-label="Download on the App Store">
            <img
              src="/images/appstore-badge.svg"
              alt="Download on the App Store"
              className="h-14"
              loading="lazy"
            />
          </a>
          <a href="#" aria-label="Get it on Google Play">
            <img
              src="/images/google-play-badge.png"
              alt="Get it on Google Play"
              className="h-14"
              loading="lazy"
            />
          </a>
        </div>
      </div>
    </section>
  </div>
);

export default Download;

