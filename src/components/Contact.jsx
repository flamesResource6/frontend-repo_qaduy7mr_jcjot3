import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Instagram } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');

    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('success');
        e.currentTarget.reset();
      } else {
        setStatus(data?.detail || 'error');
      }
    } catch (err) {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="relative w-full bg-slate-950 py-20 text-slate-100">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <div className="rounded-full bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 p-2 ring-1 ring-white/10">
            <Mail className="h-5 w-5 text-emerald-300" />
          </div>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Contact</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur"
          >
            <div className="grid gap-4">
              <input name="name" required placeholder="Your name" className="rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-400 outline-none focus:border-emerald-400/50" />
              <input type="email" name="email" required placeholder="Your email" className="rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-400 outline-none focus:border-emerald-400/50" />
              <textarea name="message" required rows="5" placeholder="Your message" className="rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-400 outline-none focus:border-emerald-400/50" />
            </div>
            <div className="mt-4 flex items-center gap-3">
              <button type="submit" disabled={status === 'sending'} className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-cyan-400 to-emerald-400 px-5 py-2.5 text-sm font-semibold text-slate-900 disabled:opacity-60">
                <Send className="h-4 w-4" /> {status === 'sending' ? 'Sending...' : 'Send message'}
              </button>
              {status === 'success' && <span className="text-sm text-emerald-300">Message sent! I’ll get back to you soon.</span>}
              {status && status !== 'success' && status !== 'sending' && <span className="text-sm text-rose-300">{String(status)}</span>}
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur"
          >
            <h3 className="mb-3 text-lg font-semibold">Prefer socials?</h3>
            <p className="mb-4 text-sm text-slate-300">DM me on Instagram for quick chats, or use the form—your message goes straight to my inbox.</p>
            <a
              href="https://instagram.com/ssya"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
            >
              <Instagram className="h-4 w-4" /> @ssya
            </a>
            <div className="mt-6 grid grid-cols-3 gap-3">
              <img className="h-28 w-full rounded-lg object-cover" src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop" alt="Daily life 1" />
              <img className="h-28 w-full rounded-lg object-cover" src="https://images.unsplash.com/photo-1579892239804-00e520393fb3?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxEYWlseSUyMGxpZmUlMjAyfGVufDB8MHx8fDE3NjI2OTUyMTB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Daily life 2" />
              <img className="h-28 w-full rounded-lg object-cover" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop" alt="Daily life 3" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
