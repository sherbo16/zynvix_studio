import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import Section, { fadeUp, stagger } from "./Section";

// Initialize EmailJS - Replace with your Public Key from emailjs.com
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY");

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const templateParams = {
      to_email: "zynvixstudio@gmail.com",
      from_name: formData.get("name"),
      from_email: formData.get("email"),
      service: formData.get("service"),
      message: formData.get("details"),
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID",
        templateParams
      );
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Message sent! We'll be in touch within 24 hours. ✓");
    } catch (error) {
      setSubmitting(false);
      console.error("Email error:", error);
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <Section id="contact">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start"
      >
        {/* Left */}
        <motion.div variants={fadeUp}>
          <span className="inline-block text-xs font-semibold tracking-[0.25em] text-brand-teal uppercase">
            Contact
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-black tracking-tight text-foreground">
            Let's Build Something Incredible Together
          </h2>
          <p className="mt-4 text-muted-foreground text-base md:text-lg">
            Have a project in mind? Fill out the form or reach us directly.
          </p>

          <ul className="mt-10 space-y-5">
            {[
              { Icon: Mail, label: "zynvixstudio@gmail.com", href: "mailto:zynvixstudio@gmail.com" },
              { Icon: Phone, label: "+91 8124771611", href: "tel:+918124771611" },
              { Icon: MapPin, label: "Chennai, Tamil Nadu, India" },
              { Icon: Instagram, label: "@zynvix_studio", href: "https://instagram.com/zynvix_studio" },
            ].map(({ Icon, label, href }) => {
              const inner = (
                <span className="flex items-center gap-4 group">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl glass text-brand-teal shadow-[0_0_24px_rgba(0,245,212,0.25)] transition-all duration-300 group-hover:shadow-[0_0_36px_rgba(0,245,212,0.5)]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-foreground/90 group-hover:text-brand-teal transition-colors">{label}</span>
                </span>
              );
              return (
                <li key={label}>
                  {href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{inner}</a> : inner}
                </li>
              );
            })}
          </ul>

          <div className="mt-8 flex items-center gap-3">
            <a
              aria-label="Instagram"
              href="https://instagram.com/zynvix_studio"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full glass text-foreground hover:text-brand-teal hover:shadow-[0_0_24px_rgba(0,245,212,0.45)] transition-all duration-300"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              aria-label="Email"
              href="mailto:zynvixstudio@gmail.com"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full glass text-foreground hover:text-brand-teal hover:shadow-[0_0_24px_rgba(0,245,212,0.45)] transition-all duration-300"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </motion.div>

        {/* Right — form */}
        <motion.form
          variants={fadeUp}
          onSubmit={onSubmit}
          className="glass rounded-3xl p-7 md:p-9 space-y-5"
        >
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
            <input
              required
              name="name"
              type="text"
              placeholder="Your name"
              className="w-full rounded-lg bg-surface-2 border border-white/10 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/30 transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
            <input
              required
              name="email"
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-lg bg-surface-2 border border-white/10 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/30 transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Service Required</label>
            <select
              required
              name="service"
              defaultValue=""
              className="w-full rounded-lg bg-surface-2 border border-white/10 px-4 py-3 text-foreground focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/30 transition-all"
            >
              <option value="" disabled>Select a service…</option>
              <option>Resume Making</option>
              <option>Portfolio Website</option>
              <option>Poster Design</option>
              <option>Custom Website</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Project Details</label>
            <textarea
              required
              name="details"
              rows={5}
              placeholder="Tell us about your project, timeline, and goals…"
              className="w-full rounded-lg bg-surface-2 border border-white/10 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/30 transition-all resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-full px-6 py-3.5 text-sm font-bold text-background bg-gradient-to-r from-brand-teal to-brand-magenta transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(0,245,212,0.5)] disabled:opacity-70"
          >
            {submitting ? "Sending…" : "Send Message"}
          </button>
        </motion.form>
      </motion.div>
    </Section>
  );
};

export default Contact;
