import { motion } from "framer-motion";
import Section, { SectionHeader, fadeUp, stagger } from "./Section";

const STATS = [
  { value: "100%", label: "Satisfaction" },
  { value: "3 Days", label: "Avg. Delivery" },
];


const About = () => (
  <Section id="about">
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={stagger}
      className="glass rounded-3xl p-8 md:p-14"
    >
      <SectionHeader
        label="About Us"
        title="Built for creators who refuse to be ordinary."
        subtitle="Zynvix Studio is a Chennai-based premium freelance creative studio. We combine strategy, design, and technology to craft digital identities that stand out. Whether you're a student, professional, or entrepreneur — we make you look exceptional online and on paper."
      />

      <motion.div
        variants={stagger}
        className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5"
      >
        {STATS.map((s) => (
          <motion.div
            key={s.label}
            variants={fadeUp}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="glass rounded-2xl p-8 text-center hover:border-brand-teal/30 hover:shadow-[0_0_40px_rgba(0,245,212,0.15)] transition-all duration-300"
          >
            <div className="text-4xl md:text-5xl font-black text-gradient-brand">{s.value}</div>
            <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  </Section>
);

export default About;
