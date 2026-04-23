import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Section, { SectionHeader, fadeUp, stagger } from "./Section";

const ITEMS = [
  {
    quote: "Zynvix Studio designed my resume and I got shortlisted in less than a week! The quality is absolutely premium.",
    name: "Priya R.",
    role: "Software Engineer",
    g: "from-[#00F5D4] to-[#2B86C5]",
  },
  {
    quote: "My portfolio website looks insanely good. Clients have been reaching out ever since it went live. 10/10.",
    name: "Karthik M.",
    role: "Freelance Developer",
    g: "from-[#FF3CAC] to-[#784BA0]",
  },
  {
    quote: "The event poster they designed for our college fest went viral on Instagram. Highly professional team!",
    name: "Sneha T.",
    role: "Event Coordinator",
    g: "from-[#FF6B35] to-[#FF3CAC]",
  },
];

const Testimonials = () => (
  <Section id="testimonials">
    <SectionHeader label="Testimonials" title="What Our Clients Say" />

    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={stagger}
      className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6"
    >
      {ITEMS.map((t) => (
        <motion.figure
          key={t.name}
          variants={fadeUp}
          whileHover={{ y: -8, transition: { duration: 0.3 } }}
          className="glass rounded-2xl p-7 transition-all duration-300 hover:border-brand-teal/30"
        >
          <div className="flex items-center gap-1 text-amber-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
          </div>
          <blockquote className="mt-4 italic text-foreground/90 leading-relaxed">
            "{t.quote}"
          </blockquote>
          <figcaption className="mt-6 flex items-center gap-3">
            <span className={`h-11 w-11 rounded-full bg-gradient-to-br ${t.g}`} />
            <div>
              <div className="font-bold text-foreground">{t.name}</div>
              <div className="text-xs text-muted-foreground">{t.role}</div>
            </div>
          </figcaption>
        </motion.figure>
      ))}
    </motion.div>
  </Section>
);

export default Testimonials;
