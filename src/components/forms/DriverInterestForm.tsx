import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { site } from "@/config/site";

export const DriverInterestForm = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", city: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nCity: ${form.city}`;
    const mailto = `mailto:${site.contactEmail}?subject=${encodeURIComponent("Driver Registration Interest")}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    toast({ title: "Opening your email app…", description: "Send the message to complete." });
  };

  const Field = ({ label, type = "text", value, onChange }: any) => (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <Input type={type} required value={value} onChange={onChange} />
    </div>
  );

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <Field label="Full name" value={form.name} onChange={(e: any) => setForm({ ...form, name: e.target.value })} />
      <Field label="Phone" value={form.phone} onChange={(e: any) => setForm({ ...form, phone: e.target.value })} />
      <Field label="Email" type="email" value={form.email} onChange={(e: any) => setForm({ ...form, email: e.target.value })} />
      <Field label="City" value={form.city} onChange={(e: any) => setForm({ ...form, city: e.target.value })} />
      <Button type="submit" variant="hero">Register interest</Button>
    </form>
  );
};
