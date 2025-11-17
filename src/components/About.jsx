import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="relative py-24 bg-slate-950">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-bold text-white"
        >
          Seamless, expert-led, and unmistakably premium.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="mt-6 text-lg text-slate-300"
        >
          Brand Waves is your single point of contact for every digital need. We unify strategy, design, and technology so you don’t juggle vendors — you surf a smooth, end-to-end flow.
        </motion.p>
      </div>
    </section>
  )
}
