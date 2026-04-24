/**
 * Global ambient background: dot grid + noise. Place at app root, fixed behind everything.
 */
const BackgroundFX = () => (
  <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
    <div className="absolute inset-0 bg-dot-grid opacity-60" />
    <div className="absolute inset-0 bg-noise" />
    {/* faint corner glows */}
    <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-brand-teal/10 blur-3xl" />
    <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-brand-magenta/10 blur-3xl" />
  </div>
);

export default BackgroundFX;
