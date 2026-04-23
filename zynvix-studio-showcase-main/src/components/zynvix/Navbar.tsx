import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/70 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex h-16 items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5">
          <span className="text-gradient-brand text-xl font-extrabold tracking-tight drop-shadow-[0_0_12px_rgba(0,245,212,0.35)]">
            Zynvix Studio
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-[#888888]">
          {NAV.map((n) => (
            <li key={n.href}>
              <a href={n.href} className="nav-link">{n.label}</a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-full border border-brand-teal px-5 py-2 text-sm font-semibold text-brand-teal transition-all duration-300 hover:bg-brand-teal hover:text-background hover:shadow-[0_0_24px_rgba(0,245,212,0.5)]"
        >
          Start a Project
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((s) => !s)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground/90"
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <X className="h-6 w-6" />
              </motion.span>
            ) : (
              <motion.span key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <Menu className="h-6 w-6" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="md:hidden overflow-hidden bg-[#0D0D0D] border-t border-white/5"
          >
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.06 } } }}
              className="container mx-auto py-6 flex flex-col gap-5 text-lg"
            >
              {NAV.map((n) => (
                <motion.li
                  key={n.href}
                  variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
                >
                  <a onClick={() => setOpen(false)} href={n.href} className="text-foreground/90 hover:text-brand-teal transition-colors">
                    {n.label}
                  </a>
                </motion.li>
              ))}
              <motion.li variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}>
                <a
                  onClick={() => setOpen(false)}
                  href="#contact"
                  className="inline-flex rounded-full border border-brand-teal px-5 py-2 text-sm font-semibold text-brand-teal"
                >
                  Start a Project
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
