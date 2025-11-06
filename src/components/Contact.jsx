import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  const items = [
    { href: 'mailto:hello@shyam.dev', label: 'Email', icon: Mail },
    { href: 'https://github.com/', label: 'GitHub', icon: Github },
    { href: 'https://linkedin.com/', label: 'LinkedIn', icon: Linkedin },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Get in touch</h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-300">Open to collaborations, freelance, and full-time opportunities.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {items.map(({ href, label, icon: Icon }) => (
            <a key={label} href={href} className="flex items-center gap-3 rounded-xl border border-neutral-200 dark:border-neutral-800 p-5 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800">
                <Icon size={18} />
              </span>
              <div>
                <p className="font-medium">{label}</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 truncate">{href}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
