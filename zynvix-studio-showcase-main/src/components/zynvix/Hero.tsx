import { useMemo } from "react";
import { motion } from "framer-motion";

const HEADING = "Zynvix Studio";

const letterVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(12px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: "easeOut" as const } },
};

const blobRadii = [
  "60% 40% 30% 70% / 60% 30% 70% 40%",
  "30% 60% 70% 40% / 50% 60% 30% 60%",
  "50% 50% 20% 80% / 25% 80% 20% 75%",
  "70% 30% 50% 50% / 40% 60% 30% 70%",
  "40% 60% 60% 40% / 70% 30% 70% 30%",
  "55% 45% 70% 30% / 30% 60% 40% 70%",
  "35% 65% 40% 60% / 60% 30% 70% 40%",
  "65% 35% 55% 45% / 45% 55% 65% 35%",
];

const Hero = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: 38 }).map(() => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        d: 4 + Math.random() * 6,
        delay: Math.random() * 4,
        o: 0.2 + Math.random() * 0.3,
      })),
    []
  );

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-24">
      {/* Hero-only grid */}
      <div aria-hidden className="absolute inset-0 bg-grid opacity-100 pointer-events-none" />
      {/* Ground glow */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-[60%] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(0,245,212,0.10) 0%, transparent 70%)",
        }}
      />

      {/* Drifting particles */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        {particles.map((p, i) => (
          <motion.span
            key={i}
            className="absolute h-[2px] w-[2px] rounded-full bg-white"
            style={{ left: `${p.x}%`, top: `${p.y}%`, opacity: p.o }}
            animate={{ y: [0, -30, 0], opacity: [p.o, p.o * 0.3, p.o] }}
            transition={{ duration: p.d, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      <div className="container relative mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-6 items-center py-12 lg:py-20">
        {/* LEFT — text */}
        <div className="lg:col-span-3">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-brand-teal animate-shimmer-pulse"
          >
            <span>✦</span> Premium Freelance Studio
          </motion.div>

          {/* 3D glass heading */}
          <div className="relative mt-6">
            <h1
              aria-hidden
              className="absolute inset-0 font-extrabold leading-[0.95] heading-glass-blur select-none"
              style={{ fontSize: "clamp(56px, 11vw, 120px)", fontWeight: 900 }}
            >
              {HEADING}
            </h1>
            <motion.h1
              className="relative font-black leading-[0.95] heading-glass"
              style={{ fontSize: "clamp(56px, 11vw, 120px)", fontWeight: 900 }}
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.05, delayChildren: 0.15 } } }}
            >
              {HEADING.split("").map((ch, i) => (
                <motion.span key={i} variants={letterVariants} className="inline-block">
                  {ch === " " ? "\u00A0" : ch}
                </motion.span>
              ))}
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 max-w-xl text-foreground text-xl md:text-2xl font-medium"
          >
            We don't just design. We build your digital identity.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-3 text-sm md:text-base text-muted-foreground flex flex-wrap items-center gap-x-2 gap-y-1"
          >
            <span>Resumes that get jobs</span>
            <span className="h-1 w-1 rounded-full bg-brand-teal inline-block" />
            <span>Portfolios that get clients</span>
            <span className="h-1 w-1 rounded-full bg-brand-teal inline-block" />
            <span>Posters that sell</span>
          </motion.p>
        </div>

        {/* RIGHT — animated blob */}
        <div className="lg:col-span-2 relative h-[420px] md:h-[520px] lg:h-[560px]">
          {/* ambient secondary blobs */}
          <div className="absolute -top-10 -left-10 h-60 w-60 rounded-full bg-brand-teal/15 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-60 w-60 rounded-full bg-brand-magenta/15 blur-3xl" />

          <motion.div
            className="absolute inset-6 md:inset-10"
            animate={{ y: [0, -20, 0, 20, 0], rotate: [0, 360] }}
            transition={{
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            }}
          >
            <motion.div
              className="h-full w-full"
              style={{
                background:
                  "radial-gradient(circle at 70% 40%, #FF6B35 0%, #FF3CAC 35%, #784BA0 65%, #2B86C5 100%)",
                filter: "blur(2px) drop-shadow(0 0 80px rgba(255,60,172,0.45)) drop-shadow(0 0 120px rgba(0,245,212,0.25))",
              }}
              animate={{
                borderRadius: blobRadii,
                opacity: [0.85, 1, 0.9, 1, 0.85],
              }}
              transition={{
                borderRadius: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
