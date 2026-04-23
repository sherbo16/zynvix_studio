import { motion } from "framer-motion";
import { Instagram, Mail } from "lucide-react";
import { fadeUp, stagger } from "./Section";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => (
  <footer className="relative bg-background border-t border-white/5">
    <div
      aria-hidden
      className="absolute inset-x-0 top-0 h-px"
      style={{ background: "linear-gradient(90deg, transparent, #00F5D4, #C026D3, transparent)" }}
    />
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={stagger}
      className="container mx-auto py-14"
    >
      <motion.div variants={fadeUp} className="text-center max-w-xl mx-auto">
        <h3 className="text-2xl font-extrabold text-gradient-brand drop-shadow-[0_0_12px_rgba(0,245,212,0.35)]">
          Zynvix Studio
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Premium freelance studio crafting digital identities that stand out.
        </p>
      </motion.div>

      <motion.ul variants={fadeUp} className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
        {LINKS.map((l, i) => (
          <li key={l.href} className="flex items-center gap-6">
            <a href={l.href} className="nav-link">{l.label}</a>
            {i < LINKS.length - 1 && <span className="text-white/15">|</span>}
          </li>
        ))}
      </motion.ul>

      <motion.div variants={fadeUp} className="mt-8 flex items-center justify-center gap-3">
        <a
          aria-label="Instagram"
          href="https://instagram.com/zynvix_studio"
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full glass text-foreground hover:text-brand-teal hover:shadow-[0_0_24px_rgba(0,245,212,0.45)] transition-all duration-300"
        >
          <Instagram className="h-4 w-4" />
        </a>
        <a
          aria-label="Email"
          href="mailto:zynvixstudio@gmail.com"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full glass text-foreground hover:text-brand-teal hover:shadow-[0_0_24px_rgba(0,245,212,0.45)] transition-all duration-300"
        >
          <Mail className="h-4 w-4" />
        </a>
      </motion.div>

      <motion.p variants={fadeUp} className="mt-8 text-center text-xs text-muted-foreground">
        © 2026 Zynvix Studio. All Rights Reserved. Crafted with <span className="text-brand-magenta">❤</span> in Chennai, India.
      </motion.p>
    </motion.div>
  </footer>
);

export default Footer;
