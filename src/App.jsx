import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Events from './components/Events'
import { About, Contact } from './components/InfoSections'

function Footer() {
  return (
    <footer className="bg-black text-white/70">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-6">
        <div>
          <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-orange-500 to-rose-500 shadow-md ring-1 ring-white/20 flex items-center justify-center text-white font-black">CEH</div>
          <p className="mt-3 text-sm">Campus Event Hub — your gateway to everything happening on campus.</p>
        </div>
        <div className="text-sm">
          <div className="font-semibold text-white">Quick Links</div>
          <ul className="mt-2 space-y-1">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#events" className="hover:text-white">Events</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div className="text-sm">
          <div className="font-semibold text-white">My Registrations</div>
          <RegistrationsList />
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 text-xs text-center">© {new Date().getFullYear()} Campus Event Hub. All rights reserved.</div>
      </div>
    </footer>
  )
}

function RegistrationsList() {
  const key = 'ceh_registrations'
  let items = []
  try {
    items = JSON.parse(localStorage.getItem(key) || '[]').slice(0, 4)
  } catch {}
  if (!items.length) return <p className="mt-2 text-white/50">No registrations yet.</p>
  return (
    <ul className="mt-2 space-y-1">
      {items.map((r, idx) => (
        <li key={idx} className="flex items-center justify-between gap-2">
          <span className="truncate">{r.eventName}</span>
          <span className="text-white/50 text-[11px]">{new Date(r.ts).toLocaleDateString()}</span>
        </li>
      ))}
    </ul>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <Hero />
        <Events />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
