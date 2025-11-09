import { motion } from 'framer-motion';
import { ExternalLink, GitBranch } from 'lucide-react';

const projects = [
  {
    title: 'Interactive Portfolio',
    desc: '3D-enhanced hero with Spline, animated sections, and elegant theming.',
    link: 'https://example.com',
    image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1600&auto=format&fit=crop',
    tags: ['React', 'Spline', 'Tailwind'],
  },
  {
    title: 'Design System',
    desc: 'Reusable UI components with accessibility and theming baked in.',
    link: 'https://example.com',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop',
    tags: ['Design', 'Accessibility', 'Docs'],
  },
  {
    title: 'Motion Playground',
    desc: 'Micro-interactions and transitions using Framer Motion.',
    link: 'https://example.com',
    image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1600&auto=format&fit=crop',
    tags: ['Framer', 'Animation'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-slate-950 py-20 text-slate-100">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <div className="rounded-full bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 p-2 ring-1 ring-white/10">
            <GitBranch className="h-5 w-5 text-emerald-300" />
          </div>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Selected Projects</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={i}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] shadow-lg shadow-black/30"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              </div>
              <div className="flex items-start justify-between p-5">
                <div>
                  <h3 className="mb-1 text-lg font-semibold">{p.title}</h3>
                  <p className="text-sm text-slate-300/90">{p.desc}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-full bg-white/10 px-2 py-0.5 text-xs text-slate-200">{t}</span>
                    ))}
                  </div>
                </div>
                <ExternalLink className="mt-1 h-4 w-4 text-slate-400 transition group-hover:text-emerald-300" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
