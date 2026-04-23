import { motion } from "framer-motion";
import Section, { SectionHeader, fadeUp, stagger } from "./Section";

const PROJECTS = [
  {
    title: "Modern Resume Pack",
    label: "Resume Design",
    desc: "Minimalist resume system that doubled interview callbacks for a senior engineer.",
    gradient: "from-[#00F5D4] to-[#2B86C5]",
    h: "h-72 md:h-80",
  },
  {
    title: "Developer Portfolio",
    label: "Portfolio Website",
    desc: "Cinematic portfolio with case studies — generated 12 client inquiries in week one.",
    gradient: "from-[#FF3CAC] to-[#784BA0]",
    h: "h-80 md:h-96",
  },
  {
    title: "College Fest Poster",
    label: "Event Poster",
    desc: "Bold typographic poster series that went viral across Instagram & WhatsApp.",
    gradient: "from-[#FF6B35] to-[#FF3CAC]",
    h: "h-80 md:h-96",
  },
  {
    title: "Startup Marketing Site",
    label: "Custom Website",
    desc: "High-converting landing page with smooth motion, built for a D2C launch.",
    gradient: "from-[#784BA0] to-[#00F5D4]",
    h: "h-72 md:h-80",
  },
];

const Work = () => (
  <Section id="work">
    <SectionHeader
      label="Our Work"
      title="Projects That Speak Louder Than Words"
    />

    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={stagger}
      className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      {PROJECTS.map((p) => (
        <motion.article
          key={p.title}
          variants={fadeUp}
          whileHover={{ y: -8, transition: { duration: 0.3 } }}
          className="group rounded-2xl overflow-hidden bg-surface-1 border border-white/5 transition-all duration-300 hover:border-brand-teal/30"
        >
          <div className={`relative overflow-hidden ${p.h}`}>
            <div
              className={`absolute inset-0 bg-gradient-to-br ${p.gradient} transition-transform duration-500 group-hover:scale-105`}
            />
            <div className="absolute inset-0 bg-noise" />
            <span className="absolute top-4 left-4 inline-flex items-center rounded-full glass px-3 py-1 text-xs font-medium text-foreground">
              {p.label}
            </span>
          </div>
          <div className="p-6">
            <h3 className="text-lg md:text-xl font-bold text-foreground">{p.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            <span className="mt-4 inline-block text-sm font-semibold text-brand-teal opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
              View Project →
            </span>
          </div>
        </motion.article>
      ))}
    </motion.div>
  </Section>
);

export default Work;
