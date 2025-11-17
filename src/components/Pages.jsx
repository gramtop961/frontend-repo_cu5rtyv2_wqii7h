import { motion } from 'framer-motion'

export function WaveLabPage() {
  return (
    <main className="bg-slate-950 text-white">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1,y:0}} transition={{duration:.7}} className="text-4xl md:text-6xl font-extrabold">WaveLab — Web & E‑commerce</motion.h1>
        <p className="mt-4 text-slate-300 max-w-3xl">From portfolio sites to conversion-optimized Shopify stores, we design and ship custom experiences that perform beautifully.</p>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[{name:'Launch',price:'from 3000 CHF',features:['Single‑page site','Fast delivery','Polished visuals']},{name:'Grow',price:'from 6000 CHF',features:['Multi‑page site','CMS + Analytics','On‑brand animations']},{name:'Shopify',price:'from 3000 CHF',features:['Custom theme','Product setup','Optimized checkout']}].map((p, i) => (
            <motion.div key={p.name} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.05}} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p className="mt-1 text-cyan-300 font-medium">{p.price}</p>
              <ul className="mt-4 space-y-2 text-slate-300 text-sm">
                {p.features.map(f => <li key={f}>• {f}</li>)}
              </ul>
              <a href="/contact" className="mt-6 inline-block rounded-full bg-cyan-300 text-slate-900 font-semibold px-5 py-2 hover:scale-[1.02] transition-transform">Start</a>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
}

export function DigitalSignagePage() {
  return (
    <main className="bg-slate-950 text-white">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1,y:0}} transition={{duration:.7}} className="text-4xl md:text-6xl font-extrabold">Digital Signage</motion.h1>
        <p className="mt-4 text-slate-300 max-w-3xl">Transparent LED screens and LED totems that captivate without clutter. Turn retail fronts, lobbies, and events into immersive canvases.</p>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {[{t:'Transparent LED',d:'See‑through displays that overlay motion graphics onto the real world.'},{t:'LED Totems',d:'Freestanding, high‑impact media pillars for spaces that need presence.'},{t:'Advantages',d:'High brightness, modular sizes, energy efficient, remote content control.'},{t:'Use cases',d:'Retail windows, trade fairs, real‑estate showrooms, hospitality.'}].map((b,i)=> (
            <motion.div key={b.t} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.05}} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">{b.t}</h3>
              <p className="mt-2 text-slate-300">{b.d}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
}

export function BrandingPage() {
  return (
    <main className="bg-slate-950 text-white">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1,y:0}} transition={{duration:.7}} className="text-4xl md:text-6xl font-extrabold">Branding</motion.h1>
        <p className="mt-4 text-slate-300 max-w-3xl">Logos, identity systems, and brand language designed to resonate. We build brands with memory and momentum.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[{t:'Logo Systems',d:'Adaptive marks with motion and static variants.'},{t:'Identity Kits',d:'Type, color, and components that scale across touchpoints.'},{t:'Brand Strategy',d:'Positioning, voice, and narrative frameworks.'}].map((b,i)=> (
            <motion.div key={b.t} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.05}} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">{b.t}</h3>
              <p className="mt-2 text-slate-300">{b.d}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
}

export function ContactPage() {
  return (
    <main className="bg-slate-950 text-white">
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1,y:0}} transition={{duration:.7}} className="text-4xl md:text-5xl font-extrabold">Start your project</motion.h1>
        <p className="mt-4 text-slate-300">Tell us about your goals and we’ll craft the right wave to ride.</p>

        <form onSubmit={(e)=>e.preventDefault()} className="mt-10 grid gap-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input required placeholder="Name" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50" />
            <input required type="email" placeholder="Email" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50" />
          </div>
          <input placeholder="Company" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50" />
          <select className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/50">
            <option className="bg-slate-900">Web & E‑commerce</option>
            <option className="bg-slate-900">Digital Signage</option>
            <option className="bg-slate-900">Branding</option>
            <option className="bg-slate-900">Multiple</option>
          </select>
          <textarea rows="5" placeholder="Tell us about your project" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50" />
          <button className="mt-2 inline-flex items-center justify-center rounded-full bg-cyan-300 text-slate-900 font-semibold px-6 py-3 hover:scale-[1.02] transition-transform">Send message</button>
          <p className="text-sm text-slate-400">We respond within 1–2 business days.</p>
        </form>
      </section>
    </main>
  )
}
