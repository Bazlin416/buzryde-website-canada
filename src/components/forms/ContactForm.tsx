import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { site } from "@/config/site";

export const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:${site.supportEmail}?subject=${encodeURIComponent(
      `BuzRyde Contact — ${form.name}`
    )}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.location.href = mailto;
    toast({ title: "Opening your email app…", description: "Send the message to complete." });
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label className="text-sm font-medium">Name</label>
        <Input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
      </div>
      <div>
        <label className="text-sm font-medium">Email</label>
        <Input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
      </div>
      <div>
        <label className="text-sm font-medium">Message</label>
        <Textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
      </div>
      <Button type="submit" variant="hero">Send message</Button>
    </form>
  );
};
