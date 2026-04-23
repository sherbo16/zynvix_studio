import { motion } from "framer-motion";
import Section, { SectionHeader, fadeUp, stagger } from "./Section";

const POINTS = [
  { icon: "⚡", title: "Fast Delivery", desc: "Most projects completed in 2–5 business days." },
  { icon: "✅", title: "Revision Friendly", desc: "We iterate until you're 100% satisfied." },
  { icon: "🎯", title: "Result-Oriented", desc: "Every design decision is made with your goal in mind." },
  { icon: "🔒", title: "Confidential & Professional", desc: "Your data and project details are always safe with us." },
  { icon: "💬", title: "Direct Communication", desc: "Work directly with the designer. No middlemen, no delays." },
  { icon: "💎", title: "Premium Quality", desc: "Studio-grade output at freelancer-friendly pricing." },
];

const WhyUs = () => (
  <Section id="why">
    <div className="relative rounded-3xl bg-surface-1 border border-white/5 p-8 md:p-14 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #00F5D4, #C026D3, transparent)" }}
      />
      <SectionHeader label="Why Us" title="Why Clients Choose Zynvix Studio" />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
        className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {POINTS.map((p) => (
          <motion.div
            key={p.title}
            variants={fadeUp}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="glass rounded-2xl p-6 transition-all duration-300 hover:border-brand-teal/30 hover:shadow-[0_0_30px_rgba(0,245,212,0.12)]"
          >
            <div className="text-2xl">{p.icon}</div>
            <h3 className="mt-3 text-lg font-bold text-foreground">{p.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </Section>
);

export default WhyUs;
