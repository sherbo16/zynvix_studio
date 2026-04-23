import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Section, { SectionHeader, fadeUp, stagger } from "./Section";

const SERVICES = [
  {
    icon: "📄",
    title: "Professional Resume Making & Career Branding",
    desc: "ATS-optimized, professionally designed resumes that get shortlisted. Stand out from thousands of applicants with a resume that tells your story powerfully.",
  },
  {
    icon: "💻",
    title: "Portfolio & Personal Website Development",
    desc: "Custom-built personal portfolio websites that showcase your skills, projects, and personality. Designed to convert visitors into clients or recruiters into hirers.",
  },
  {
    icon: "🎨",
    title: "Poster Making & Graphic Design",
    desc: "Scroll-stopping event posters, social media creatives, and brand visuals. Every design is crafted with intention, precision, and premium aesthetics.",
  },
  {
    icon: "🌐",
    title: "Custom Website Development",
    desc: "Fully functional, responsive, and beautifully designed websites for businesses, startups, and individuals. Clean code, fast loading, and modern UI.",
  },
];

const Services = () => (
  <Section id="services">
    <SectionHeader
      label="What We Do"
      title="Premium Services Crafted to Elevate You"
    />

    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={stagger}
      className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      {SERVICES.map((s) => (
        <motion.article
          key={s.title}
          variants={fadeUp}
          whileHover={{ y: -8, transition: { duration: 0.3 } }}
          className="group relative overflow-hidden rounded-2xl bg-surface-1 border border-white/5 p-8 transition-all duration-300 hover:border-brand-teal/30 hover:shadow-[0_0_50px_rgba(0,245,212,0.12)]"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="text-3xl mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl glass shadow-[0_0_24px_rgba(0,245,212,0.25)]">
            {s.icon}
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-foreground">{s.title}</h3>
          <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
          <a
            href="#contact"
            className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand-teal"
          >
            Learn More
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </a>
        </motion.article>
      ))}
    </motion.div>
  </Section>
);

export default Services;
