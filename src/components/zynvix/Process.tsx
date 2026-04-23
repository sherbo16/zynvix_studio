import { motion } from "framer-motion";
import Section, { SectionHeader, fadeUp, stagger } from "./Section";

const STEPS = [
  { n: "01", title: "Discover", desc: "We understand your goals, audience, and requirements through a detailed brief." },
  { n: "02", title: "Design", desc: "Our team crafts visually compelling concepts tailored to your brand identity." },
  { n: "03", title: "Develop", desc: "From mockups to a polished, pixel-perfect final product — built with precision." },
  { n: "04", title: "Deliver", desc: "Fast turnaround, revisions included, and full handover with ongoing support." },
];

const Process = () => (
  <Section id="process">
    <SectionHeader label="Our Process" title="How We Bring Your Vision to Life" />

    <div className="relative mt-16">
      {/* Desktop dashed line */}
      <div
        aria-hidden
        className="hidden md:block absolute top-7 left-[8%] right-[8%] h-px"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,245,212,0.5) 50%, transparent 50%)",
          backgroundSize: "12px 1px",
          boxShadow: "0 0 12px rgba(0,245,212,0.4)",
        }}
      />

      <motion.ol
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
        className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6"
      >
        {STEPS.map((s) => (
          <motion.li key={s.n} variants={fadeUp} className="relative text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-background border border-brand-teal/40 text-brand-teal font-bold shadow-[0_0_24px_rgba(0,245,212,0.4)]">
              {s.n}
            </div>
            <h3 className="mt-5 text-lg font-bold text-foreground">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground max-w-xs mx-auto">{s.desc}</p>
          </motion.li>
        ))}
      </motion.ol>
    </div>
  </Section>
);

export default Process;
