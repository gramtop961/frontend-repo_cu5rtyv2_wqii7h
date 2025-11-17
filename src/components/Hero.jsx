import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-[100vh] w-full overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/poZi6bJ4-Htwt04i/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/40 to-slate-950/90 pointer-events-none" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white"
        >
          Ride the Wave of Digital Success
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8, ease: 'easeOut' }}
          className="mt-6 text-lg md:text-xl max-w-2xl text-slate-300"
        >
          Brand Waves crafts evocative, high-converting digital experiences across web, signage, and branding — unified under one expert-led studio.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a href="/contact" className="group relative inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 font-semibold text-slate-900 transition-transform hover:scale-105">
            Start a Project
            <span className="absolute inset-0 -z-10 rounded-full bg-cyan-300/40 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a href="#services" className="text-slate-200 hover:text-white transition-colors">Explore services</a>
        </motion.div>
      </div>
    </section>
  )
}
