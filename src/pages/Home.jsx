import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">Ready to ride the wave?</h3>
            <p className="mt-2 text-slate-300">One conversation to align strategy, design, and tech.</p>
          </div>
          <a href="/contact" className="inline-flex items-center rounded-full bg-cyan-300 px-6 py-3 font-semibold text-slate-900 hover:scale-[1.03] transition-transform">Start a project</a>
        </div>
      </section>
    </>
  )
}
