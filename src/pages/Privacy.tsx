import { SEO } from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckCircle } from "lucide-react";

const brandTeal = "#337A75";
const brandGold = "#F4B400";
const brandLight = "#F5F5F5";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <Card
    className="shadow-md border"
    style={{ borderColor: brandTeal, backgroundColor: brandLight }}
  >
    <CardHeader
      style={{
        backgroundColor: brandTeal,
        color: "white",
        borderBottom: `2px solid ${brandGold}`,
      }}
    >
      <CardTitle className="text-lg font-semibold">{title}</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4 text-sm text-gray-700">{children}</CardContent>
  </Card>
);

const List = ({ items }: { items: string[] }) => (
  <ul className="space-y-2">
    {items.map((item, idx) => (
      <li key={idx} className="flex items-start gap-2">
        <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" style={{ color: brandGold }} />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const Privacy = () => (
  <div style={{ backgroundColor: brandLight }}>
    <SEO
      title="BuzRyde Privacy Policy"
      description="Learn how BuzRyde collects, protects, and uses your personal information for riders and drivers."
      path="/privacy"
    />
    <section className="container mx-auto px-4 py-16">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-4xl font-bold tracking-tight" style={{ color: brandTeal }}>
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm" style={{ color: brandGold }}>
          Last updated: {new Date().toLocaleDateString()}
        </p>
        <Separator className="my-6" style={{ backgroundColor: brandGold }} />
        <p className="text-lg text-gray-700">
          Your privacy matters to us at <strong>BuzRyde</strong>. This Privacy Policy explains how
          we collect, use, share, and protect your personal data when you use our rider and driver
          apps, websites, and services.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <Section title="1. Information We Collect">
          <List
            items={[
              "Personal details such as name, email, phone number, and profile photo.",
              "Account and login credentials to access our services.",
              "Trip details including pickup/drop-off locations, routes, and timestamps.",
              "Payment details for processing fares and payouts.",
              "Device and technical data like IP address, operating system, and app version.",
              "Location data (with your consent) for trip routing and safety features.",
            ]}
          />
        </Section>

        <Section title="2. How We Use Your Information">
          <List
            items={[
              "Provide and manage your bookings and trips.",
              "Ensure rider and driver safety through verification and trip tracking.",
              "Process payments and issue driver payouts.",
              "Communicate important updates, promotions, and policy changes.",
              "Improve our app performance and user experience.",
              "Comply with legal and regulatory requirements.",
            ]}
          />
        </Section>

        <Section title="3. Information Sharing">
          <p>We do not sell your personal information. We may share data only when necessary:</p>
          <List
            items={[
              "With drivers or riders to fulfill your booking.",
              "With payment processors to complete transactions.",
              "With law enforcement or regulators when required by law.",
              "With service providers who support our operations under confidentiality agreements.",
            ]}
          />
        </Section>

        <Section title="4. Data Retention">
          <p>
            We retain your personal data only as long as necessary for the purposes described in
            this policy or as required by law. Once data is no longer needed, we securely delete or
            anonymize it.
          </p>
        </Section>

        <Section title="5. Security Measures">
          <List
            items={[
              "Encryption of sensitive data during transmission and storage.",
              "Regular security audits and vulnerability testing.",
              "Restricted access to personal data to authorized personnel only.",
            ]}
          />
          <p>
            While we take strong measures to protect your data, no method of transmission over the
            internet is 100% secure. We encourage users to safeguard their account credentials.
          </p>
        </Section>

        <Section title="6. Your Privacy Rights">
          <List
            items={[
              "Access and request a copy of your personal data.",
              "Request corrections to inaccurate information.",
              "Request deletion of your account and personal data.",
              "Opt-out of promotional emails and push notifications.",
            ]}
          />
          <p>
            To exercise your rights, contact us at{" "}
            <a
              href="mailto:privacy@buzryde.com"
              style={{ color: brandTeal, fontWeight: "bold" }}
              className="hover:underline"
            >
              privacy@buzryde.com
            </a>
            .
          </p>
        </Section>

        <Section title="7. Cookies & Tracking">
          <p>
            Our website and apps use cookies and similar technologies to improve functionality,
            analyze traffic, and personalize your experience. You can manage your cookie
            preferences in your browser or device settings.
          </p>
        </Section>

        <Section title="8. Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. Any significant changes will be
            notified via email or app notifications. Continued use of our services after changes
            means you accept the updated policy.
          </p>
        </Section>

        <Section title="9. Contact Us">
          <p>
            If you have questions about this Privacy Policy, email us at{" "}
            <a
              href="mailto:privacy@buzryde.com"
              style={{ color: brandTeal, fontWeight: "bold" }}
              className="hover:underline"
            >
              privacy@buzryde.com
            </a>
            .
          </p>
        </Section>
      </div>
    </section>
  </div>
);

export default Privacy;


