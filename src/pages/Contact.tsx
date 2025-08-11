import { SEO } from "@/components/SEO";
import { ContactForm } from "@/components/forms/ContactForm";
import { Mail, MapPin, Clock } from "lucide-react";

const brandTeal = "#337A75";
const brandGold = "#F4B400";
const brandLight = "#F5F5F5";

const Contact = () => (
  <div>
    <SEO
      title="Contact BuzRyde"
      description="Get in touch with BuzRyde for support, feedback, or partnerships. We’re here to help."
      path="/contact"
    />

    {/* Hero Section */}
    <section
      className="py-20 text-center"
      style={{
        background: `linear-gradient(135deg, ${brandTeal}cc, ${brandGold}cc)`,
        color: brandLight,
      }}
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Contact Us
        </h1>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          Whether you’re a rider, driver, or partner, our team is here to help.
        </p>
      </div>
    </section>

    {/* Contact Info Section */}
    <section className="container mx-auto px-4 py-16">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
        {[
          {
            icon: Mail,
            title: "Email Us",
            text: "support@buzryde.com",
          },
          {
            icon: MapPin,
            title: "Service Area",
            text: "We operate across Canada — all towns and cities.",
          },
          {
            icon: Clock,
            title: "Hours",
            text: "Mon–Fri: 9am – 6pm EST",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            style={{
              backgroundColor: brandLight,
              borderTop: `4px solid ${brandGold}`,
            }}
          >
            <div
              className="flex items-center justify-center mx-auto mb-4 w-16 h-16 rounded-full"
              style={{
                backgroundColor: `${brandTeal}15`, // subtle transparent teal
              }}
            >
              <item.icon
                className="h-8 w-8"
                style={{ color: brandTeal }}
              />
            </div>
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

    {/* Contact Form Section */}
    <section
      className="py-16"
      style={{ backgroundColor: brandLight }}
    >
      <div className="container mx-auto px-4 flex justify-center">
        <div className="w-full lg:w-7/12 p-6 rounded-lg shadow-lg bg-white">
          <h2
            className="text-2xl font-semibold mb-4 text-center"
            style={{ color: brandTeal }}
          >
            Send Us a Message
          </h2>
          <p className="mb-6 text-center" style={{ color: "#555" }}>
            Fill out the form and we’ll get back to you within one business day.
          </p>
          <ContactForm />
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <section
      className="py-16 text-center"
      style={{
        background: `linear-gradient(135deg, ${brandGold}cc, ${brandTeal}cc)`,
        color: brandLight,
      }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">
          We’re Here to Help
        </h2>
        <p className="mb-6 max-w-xl mx-auto opacity-90">
          Our support team is ready to assist you with any questions about
          rides, driving, or partnerships.
        </p>
        <a
          href="mailto:support@buzryde.com"
          className="inline-block px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-shadow duration-300"
          style={{
            backgroundColor: brandLight,
            color: brandTeal,
          }}
        >
          Get Support
        </a>
      </div>
    </section>
  </div>
);

export default Contact;



