import { SEO } from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckCircle } from "lucide-react";

const brandTeal = "#337A75";
const brandGold = "#F4B400";
const brandLight = "#F5F5F5";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <Card
    className="shadow-sm"
    style={{
      border: `1px solid ${brandTeal}33`,
      backgroundColor: brandLight,
    }}
  >
    <CardHeader
      style={{
        borderBottom: `2px solid ${brandGold}`,
        backgroundColor: `${brandTeal}05`,
      }}
    >
      <CardTitle
        className="text-lg font-semibold"
        style={{ color: brandTeal }}
      >
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent
      className="space-y-4 text-sm"
      style={{ color: "#555" }}
    >
      {children}
    </CardContent>
  </Card>
);

const List = ({ items }: { items: string[] }) => (
  <ul className="space-y-2">
    {items.map((item, idx) => (
      <li key={idx} className="flex items-start gap-2">
        <CheckCircle
          className="w-5 h-5 shrink-0 mt-0.5"
          style={{ color: brandGold }}
        />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const Terms = () => (
  <div>
    <SEO
      title="BuzRyde Terms of Service"
      description="Read BuzRyde’s Terms of Service for riders and drivers, including usage guidelines, payments, safety, and legal obligations."
      path="/terms"
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
          Terms of Service
        </h1>
        <p className="opacity-90">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </section>

    {/* Intro Text */}
    <section className="container mx-auto px-4 py-16">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <p
          className="text-lg"
          style={{ color: "#444" }}
        >
          Welcome to <strong>BuzRyde</strong>. These Terms of Service (“Terms”)
          govern your access to and use of the BuzRyde platform, mobile apps,
          and related services. By using our Services, you agree to these Terms
          and our Privacy Policy.
        </p>
        <Separator
          className="my-8"
          style={{ backgroundColor: brandGold }}
        />
      </div>

      {/* Terms Sections */}
      <div className="grid gap-8 md:grid-cols-2">
        <Section title="1. Eligibility">
          <p>
            You must be at least 18 years old to use BuzRyde as a rider or
            driver. Drivers must also hold a valid driver’s license, insurance,
            and operate a vehicle meeting local safety requirements.
          </p>
        </Section>

        <Section title="2. Account Registration">
          <p>
            Provide accurate, up-to-date details when creating your account.
            You’re responsible for keeping your login credentials secure and for
            all actions under your account.
          </p>
        </Section>

        <Section title="3. Use of Services">
          <List
            items={[
              "Comply with all traffic laws and regulations.",
              "Avoid fraudulent, unsafe, or harmful behavior.",
              "Use the platform only for lawful ride services or bookings.",
            ]}
          />
        </Section>

        <Section title="4. Booking & Cancellations">
          <p>
            Fares are shown before booking. Cancellation fees may apply and vary
            by location. Excessive last-minute cancellations may lead to
            suspension.
          </p>
        </Section>

        <Section title="5. Payments">
          <p>
            Riders authorize charges to their payment method for fares, tolls,
            surcharges, and taxes. Drivers receive payouts as per our fee
            structure and schedule.
          </p>
        </Section>

        <Section title="6. Driver Obligations">
          <List
            items={[
              "Maintain a clean, roadworthy vehicle.",
              "Treat riders with professionalism and courtesy.",
              "Follow in-app navigation unless unsafe.",
            ]}
          />
        </Section>

        <Section title="7. Safety">
          <p>
            We verify drivers via background checks and offer in-app safety
            tools. Misuse of safety features or threatening behavior may result
            in removal from the platform.
          </p>
        </Section>

        <Section title="8. Ratings & Reviews">
          <p>
            Both riders and drivers can rate each other. Persistent low ratings
            or serious complaints may lead to account suspension.
          </p>
        </Section>

        <Section title="9. Intellectual Property">
          <p>
            All content, branding, and tech on BuzRyde belong to us or our
            licensors. Unauthorized copying or distribution is prohibited.
          </p>
        </Section>

        <Section title="10. Limitation of Liability">
          <p>
            BuzRyde is not liable for indirect or incidental damages. Our total
            liability is capped at the amount paid by you in the 3 months before
            a claim.
          </p>
        </Section>

        <Section title="11. Termination">
          <p>
            We may suspend or terminate accounts at any time for violating
            Terms, unsafe conduct, or fraudulent activity.
          </p>
        </Section>

        <Section title="12. Governing Law">
          <p>
            Governed by Ontario, Canada laws. Disputes are handled in Ontario
            courts.
          </p>
        </Section>

        <Section title="13. Updates">
          <p>
            We may update these Terms periodically. Continued use means you
            accept the new Terms.
          </p>
        </Section>

        <Section title="14. Contact Us">
          <p>
            Questions? Email us at{" "}
            <a
              href="mailto:support@buzryde.com"
              style={{ color: brandTeal }}
              className="hover:underline"
            >
              support@buzryde.com
            </a>
            .
          </p>
        </Section>
      </div>
    </section>
  </div>
);

export default Terms;


