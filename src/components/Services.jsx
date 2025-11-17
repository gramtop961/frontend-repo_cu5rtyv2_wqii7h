import { motion } from 'framer-motion'
import { MonitorSmartphone, Store, Sparkles } from 'lucide-react'

const services = [
  {
    icon: MonitorSmartphone,
    title: 'WaveLab — Web & E‑commerce',
    desc: 'Custom websites and Shopify stores designed to move people — and metrics.',
    href: '/wavelab',
    accent: 'from-cyan-400 to-blue-600'
  },
  {
    icon: Store,
    title: 'Digital Signage',
    desc: 'Transparent LED screens and LED totems that turn spaces into living canvases.',
    href: '/digital-signage',
    accent: 'from-sky-400 to-cyan-500'
  },
  {
    icon: Sparkles,
    title: 'Branding',
    desc: 'Logos, identity systems, and brand strategy with clarity and depth.',
    href: '/branding',
    accent: 'from-indigo-400 to-purple-500'
  }
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.12),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.10),transparent_40%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-bold text-white mb-12"
        >
          A single studio. Three currents of expertise.
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.a
              key={s.title}
              href={s.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/[0.08] transition-colors"
            >
              <div className={`absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br ${s.accent} opacity-30 blur-2xl group-hover:opacity-50 transition-opacity`} />
              <s.icon className="h-8 w-8 text-cyan-300" />
              <h3 className="mt-4 text-xl font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-slate-300">{s.desc}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-cyan-300 group-hover:translate-x-1 transition-transform">
                Learn more
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-80"><path d="M5 12H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
