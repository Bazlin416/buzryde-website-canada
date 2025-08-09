import { SEO } from "@/components/SEO";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const brandTeal = "#337A75";
const brandGold = "#F4B400";
const brandLight = "#F5F5F5";

const faqs = [
  {
    q: "How do I request a ride?",
    a: "Open the BuzRyde app, enter your destination, review the upfront price, and tap 'Request'. A nearby driver will be matched instantly, and you can track their arrival in real time."
  },
  {
    q: "What payment methods are accepted?",
    a: "We accept all major credit and debit cards, as well as select digital wallets. Our cashless system ensures your trip is quick, secure, and hassle-free."
  },
  {
    q: "How does BuzRyde ensure safety?",
    a: "All drivers undergo identity verification, background checks, and vehicle inspections. Trips are GPS-tracked, and the app includes an emergency contact button and real-time ride sharing with friends or family."
  },
  {
    q: "How do I become a driver?",
    a: "Visit our Drivers page and submit your interest. We’ll guide you through the onboarding process, including document checks, vehicle inspection, and training."
  },
  {
    q: "Can I schedule rides in advance?",
    a: "Yes! You can schedule rides up to 30 days in advance in most cities, perfect for airport trips, important meetings, or special events."
  },
  {
    q: "Is BuzRyde available in my city?",
    a: "We are rapidly expanding across Canada. Check the coverage section in the app or on our website to see if we operate in your city."
  },
  {
    q: "What happens if I leave something in the car?",
    a: "If you believe you left an item in a BuzRyde vehicle, you can report it directly in the app. We’ll connect you with your driver to arrange its return."
  },
  {
    q: "How are fares calculated?",
    a: "Fares are based on the estimated time and distance of your trip, plus applicable local fees and surge pricing during high-demand periods. The price is shown upfront before you confirm."
  },
  {
    q: "Can drivers choose their working hours?",
    a: "Absolutely! Drivers are independent contractors who choose when and how often they drive. We provide flexible options so you can work on your own schedule."
  },
  {
    q: "What is your cancellation policy?",
    a: "You can cancel a ride before a driver arrives without charge in most cases. If the driver is already on the way and close to pickup, a small cancellation fee may apply."
  },
];

const FAQs = () => (
  <div>
    <SEO
      title="BuzRyde FAQs – Using the App, Safety, Payments"
      description="Find answers about BuzRyde rides, payments, safety features, driver onboarding, and more in Canada."
      path="/faqs"
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
          Frequently Asked Questions
        </h1>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          Got questions? We’ve got answers. Learn how BuzRyde works for riders and drivers.
        </p>
      </div>
    </section>

    {/* FAQ List */}
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6"
        style={{
          backgroundColor: brandLight,
          border: `1px solid ${brandGold}33`
        }}
      >
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              style={{
                borderBottom: `1px solid ${brandGold}33`,
              }}
            >
              <AccordionTrigger
                style={{
                  color: brandTeal,
                  fontWeight: 600,
                  fontSize: "1rem",
                }}
              >
                {f.q}
              </AccordionTrigger>
              <AccordionContent style={{ color: brandTeal, opacity: 0.85 }}>
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
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
          Still have questions?
        </h2>
        <p className="mb-6 max-w-xl mx-auto opacity-90">
          Our support team is available 24/7 to help you with anything you need.
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
          Contact Support
        </a>
      </div>
    </section>
  </div>
);

export default FAQs;
