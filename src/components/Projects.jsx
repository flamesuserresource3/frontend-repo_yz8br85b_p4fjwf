export default function Projects() {
  const projects = [
    {
      title: 'Interactive 3D Landing',
      desc: 'A hero section powered by Spline with smooth interactions and layered gradients.',
      tags: ['React', 'Spline', 'Tailwind'],
      link: '#',
    },
    {
      title: 'Realtime Dashboard',
      desc: 'Beautiful charts and live metrics with accessible UI patterns.',
      tags: ['React', 'WebSockets', 'D3'],
      link: '#',
    },
    {
      title: 'Design System',
      desc: 'A cohesive, scalable component library following shadcn/ui conventions.',
      tags: ['TypeScript', 'Storybook', 'Radix'],
      link: '#',
    },
  ];

  return (
    <section id="projects" className="relative py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Projects</h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-300">A selection of things I’ve been building recently.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <a key={idx} href={p.link} className="group rounded-xl border border-neutral-200 dark:border-neutral-800 p-5 hover:shadow-lg transition bg-white/70 dark:bg-neutral-900/70 backdrop-blur">
              <div className="h-36 w-full rounded-md bg-gradient-to-br from-indigo-500/20 via-violet-500/20 to-fuchsia-500/20 mb-4"></div>
              <h3 className="text-lg font-semibold group-hover:underline underline-offset-4">{p.title}</h3>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
