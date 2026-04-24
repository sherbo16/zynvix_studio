import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}

export const SectionHeader = ({ label, title, subtitle, align = "center" }: SectionHeaderProps) => (
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-100px" }}
    variants={stagger}
    className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
  >
    <motion.span
      variants={fadeUp}
      className="inline-block text-xs font-semibold tracking-[0.25em] text-brand-teal uppercase"
    >
      {label}
    </motion.span>
    <motion.h2
      variants={fadeUp}
      className="mt-3 text-3xl md:text-5xl font-black tracking-tight text-foreground"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p variants={fadeUp} className="mt-4 text-muted-foreground text-base md:text-lg">
        {subtitle}
      </motion.p>
    )}
  </motion.div>
);

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

const Section = ({ id, children, className = "" }: SectionProps) => (
  <section id={id} className={`relative py-20 md:py-28 ${className}`}>
    <div className="container relative mx-auto">{children}</div>
  </section>
);

export default Section;
