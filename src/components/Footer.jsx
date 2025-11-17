export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Brand Waves. All rights reserved.</p>
        <div className="flex items-center gap-6 text-slate-400 text-sm">
          <a href="/contact" className="hover:text-white transition-colors">Start a project</a>
          <a href="mailto:hello@brandwaves.studio" className="hover:text-white transition-colors">hello@brandwaves.studio</a>
        </div>
      </div>
    </footer>
  )
}
