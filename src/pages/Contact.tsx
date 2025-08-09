import { SEO } from "@/components/SEO";
import { ContactForm } from "@/components/forms/ContactForm";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const brandTeal = "#337A75";
const brandGold = "#F4B400";
const brandLight = "#F5F5F5";

const Contact = () => (
  <div>
    <SEO
      title="Contact BuzRyde – Support & Inquiries"
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
      <div className="grid md:grid-cols-4 gap-8 text-center">
        {[
          {
            icon: Mail,
            title: "Email Us",
            text: "support@buzryde.com",
          },
          {
            icon: Phone,
            title: "Call Us",
            text: "+1 (800) 123-4567",
          },
          {
            icon: MapPin,
            title: "Visit Us",
            text: "Toronto, Ontario, Canada",
          },
          {
            icon: Clock,
            title: "Hours",
            text: "Mon–Fri: 9am – 6pm EST",
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

    {/* Contact Form Section */}
    <section
      className="py-16"
      style={{ backgroundColor: brandLight }}
    >
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
        {/* Form */}
        <div className="p-6 rounded-lg shadow-lg bg-white">
          <h2
            className="text-2xl font-semibold mb-4"
            style={{ color: brandTeal }}
          >
            Send Us a Message
          </h2>
          <p className="mb-6" style={{ color: "#555" }}>
            Fill out the form and we’ll get back to you within one business day.
          </p>
          <ContactForm />
        </div>

        {/* Map / Info */}
        <div className="p-6 rounded-lg shadow-lg bg-white">
          <h2
            className="text-2xl font-semibold mb-4"
            style={{ color: brandTeal }}
          >
            Our Location
          </h2>
          <p className="mb-4" style={{ color: "#555" }}>
            We operate across Canada, with headquarters in Toronto.
          </p>
          <div className="overflow-hidden rounded-lg shadow">
            <iframe
              title="BuzRyde Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.487303520362!2d-79.38318468451058!3d43.6532269791216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d6f14e8d53%3A0xb4b6e1b7b0c3b0!2sToronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2s!4v1683123456789!5m2!1sen!2s"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
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
          href="#"
          className="inline-block px-6 py-3 rounded-lg font-semibold"
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

