import { useEffect, useState } from 'react';
import { Menu, X, Home, User, GitBranch, Mail, Award } from 'lucide-react';

const links = [
  { href: '#home', label: 'Home', icon: Home },
  { href: '#about', label: 'About', icon: User },
  { href: '#projects', label: 'Projects', icon: GitBranch },
  { href: '#contact', label: 'Contact', icon: Mail },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-30 transition ${scrolled ? 'backdrop-blur bg-slate-950/60 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <a href="#home" className="text-sm font-semibold tracking-tight text-white">
          ssya<span className="text-emerald-300">.dev</span>
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map(({ href, label, icon: Icon }) => (
            <a key={href} href={href} className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm text-slate-200 hover:bg-white/10">
              <Icon className="h-4 w-4 text-emerald-300" />
              {label}
            </a>
          ))}
          <a href="#about" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 px-3 py-2 text-sm font-semibold text-slate-900">
            <Award className="h-4 w-4" /> Achievements
          </a>
        </nav>
        <button onClick={() => setOpen(!open)} className="rounded-md p-2 text-white md:hidden">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-slate-950/80 px-6 py-3 backdrop-blur md:hidden">
          <div className="flex flex-col gap-2">
            {links.map(({ href, label }) => (
              <a key={href} href={href} className="rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-white/10" onClick={() => setOpen(false)}>
                {label}
              </a>
            ))}
            <a href="#about" className="rounded-lg bg-gradient-to-r from-cyan-400 to-emerald-400 px-3 py-2 text-sm font-semibold text-slate-900" onClick={() => setOpen(false)}>
              Achievements
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
