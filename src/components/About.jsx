import { motion } from 'framer-motion';
import { Award, User } from 'lucide-react';

export default function About() {
  const achievements = [
    { title: 'Top Performer – Frontend', desc: 'Recognized for delivering high-quality, aesthetic UIs with strong accessibility.' },
    { title: 'Open Source Contributor', desc: 'Contributions to design systems and animation libraries.' },
    { title: 'Hackathon Winner', desc: 'Built a modern portfolio generator with AI-assisted workflows.' },
  ];

  return (
    <section id="about" className="relative w-full bg-slate-950 py-20 text-slate-100">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex items-center gap-3">
          <div className="rounded-full bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 p-2 ring-1 ring-white/10">
            <User className="h-5 w-5 text-cyan-300" />
          </div>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">About ssya</h2>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-slate-300"
          >
            I craft digital experiences that blend technology and elegance. My focus is on interactive interfaces, smooth transitions, and meaningful storytelling through design. Outside of work, I document daily life—what I learn, build, and enjoy.
          </motion.p>

          <div className="grid gap-4">
            {achievements.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group rounded-xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur hover:bg-white/[0.06]"
              >
                <div className="mb-2 flex items-center gap-2 text-cyan-300">
                  <Award className="h-4 w-4" />
                  <span className="text-sm font-medium">{a.title}</span>
                </div>
                <p className="text-sm text-slate-300/90">{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
