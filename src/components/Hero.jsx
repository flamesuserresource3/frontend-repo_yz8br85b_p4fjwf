import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-widest text-neutral-600 dark:text-neutral-300 mb-3">Portfolio</p>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white">Hi, I’m Shyam</h1>
          <p className="mt-4 text-neutral-700 dark:text-neutral-200 text-lg leading-relaxed">
            A modern, playful developer crafting interactive web experiences with a focus on performance, accessibility, and clean design.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#projects" className="px-5 py-3 rounded-md bg-black text-white dark:bg-white dark:text-black font-medium hover:opacity-90 transition">View Projects</a>
            <a href="#contact" className="px-5 py-3 rounded-md border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800 transition">Contact</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent dark:from-neutral-950 dark:via-neutral-950/50"></div>
    </section>
  );
}
