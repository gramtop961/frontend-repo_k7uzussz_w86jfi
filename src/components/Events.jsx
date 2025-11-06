import { useEffect, useMemo, useState } from 'react'

const sampleEvents = [
  {
    id: 'e1',
    name: 'Hack the Future 2025',
    department: 'CSE',
    date: '2025-11-20T10:00:00',
    venue: 'Auditorium A',
    contact: { name: 'Ananya Singh', phone: '+91 98765 43210' },
    description: '24-hour hackathon focusing on AI, Web3, and sustainability challenges.'
  },
  {
    id: 'e2',
    name: 'Circuit Craze Workshop',
    department: 'ECE',
    date: '2025-11-18T09:30:00',
    venue: 'Electronics Lab 2',
    contact: { name: 'Rahul Verma', phone: '+91 99887 77665' },
    description: 'Hands-on workshop covering PCB design basics and IoT prototyping.'
  },
  {
    id: 'e3',
    name: 'RoboWars Showdown',
    department: 'ME',
    date: '2025-12-05T14:00:00',
    venue: 'Sports Complex',
    contact: { name: 'Priya Nair', phone: '+91 90123 45678' },
    description: 'Battle-ready bots compete in an adrenaline-packed arena.'
  },
  {
    id: 'e4',
    name: 'Cultural Night Fiesta',
    department: 'Cultural Club',
    date: '2025-11-30T18:00:00',
    venue: 'Open Air Theatre',
    contact: { name: 'Events Cell', phone: '+91 91234 56789' },
    description: 'Music, dance, drama and food stalls. Open to all students.'
  }
]

function formatDate(dt) {
  const d = new Date(dt)
  return d.toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' })
}

function EventCard({ event, onOpen }) {
  return (
    <div className="group rounded-xl bg-white/90 backdrop-blur shadow-md ring-1 ring-black/5 overflow-hidden hover:shadow-xl transition">
      <div className="h-2 w-full bg-gradient-to-r from-orange-500 to-rose-500" />
      <div className="p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-800">{event.name}</h3>
          <span className="text-xs px-2 py-1 rounded-full bg-orange-50 text-orange-600 ring-1 ring-orange-200">{event.department}</span>
        </div>
        <p className="mt-1 text-sm text-gray-500">{formatDate(event.date)} • {event.venue}</p>
        <p className="mt-3 text-sm text-gray-700 line-clamp-2">{event.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <button onClick={() => onOpen(event)} className="text-sm font-medium text-rose-600 hover:text-rose-700">More details</button>
          <button onClick={() => onOpen(event)} className="inline-flex items-center rounded-full bg-gradient-to-r from-orange-500 to-rose-500 text-white px-4 py-2 text-sm font-semibold shadow hover:brightness-110">
            Register
          </button>
        </div>
      </div>
    </div>
  )
}

function Modal({ open, onClose, children }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative z-10 max-w-xl w-full mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden">
        {children}
      </div>
    </div>
  )
}

function RegistrationForm({ event, onSuccess }) {
  const [form, setForm] = useState({
    name: '', roll: '', dept: '', year: '', email: '', phone: ''
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    if (event) {
      setSuccess(false)
    }
  }, [event])

  function handleChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  function saveToLocal() {
    const key = 'ceh_registrations'
    const list = JSON.parse(localStorage.getItem(key) || '[]')
    const payload = { ...form, eventId: event.id, eventName: event.name, ts: Date.now() }
    localStorage.setItem(key, JSON.stringify([payload, ...list]))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    // Simulate network
    setTimeout(() => {
      saveToLocal()
      setLoading(false)
      setSuccess(true)
      onSuccess?.()
    }, 800)
  }

  if (success) {
    return (
      <div className="p-6 text-center">
        <div className="mx-auto mb-3 h-12 w-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6"><path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.41a.75.75 0 1 0-1.06-1.06l-4.72 4.72-1.78-1.78a.75.75 0 1 0-1.06 1.06l2.31 2.31c.3.3.79.3 1.09 0l5.78-5.78Z" clipRule="evenodd"/></svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-800">Registration Successful</h3>
        <p className="mt-1 text-gray-600 text-sm">You will receive updates from the organizer shortly.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="md:col-span-2">
        <h3 className="text-lg font-semibold text-gray-800">Register for {event.name}</h3>
        <p className="text-sm text-gray-500">{formatDate(event.date)} • {event.venue}</p>
      </div>
      <input name="name" required value={form.name} onChange={handleChange} placeholder="Student Name" className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400" />
      <input name="roll" required value={form.roll} onChange={handleChange} placeholder="Roll Number / College ID" className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400" />
      <input name="dept" required value={form.dept} onChange={handleChange} placeholder="Department" className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400" />
      <input name="year" required value={form.year} onChange={handleChange} placeholder="Year of Study" className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400" />
      <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="Email" className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400" />
      <input name="phone" type="tel" required value={form.phone} onChange={handleChange} placeholder="Phone Number" className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400" />
      <div className="md:col-span-2 flex items-center justify-end gap-3 pt-2">
        <button type="button" onClick={onSuccess} className="px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100">Cancel</button>
        <button type="submit" disabled={loading} className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-orange-500 to-rose-500 text-white px-5 py-2 font-semibold shadow hover:brightness-110 disabled:opacity-60">
          {loading ? 'Submitting...' : 'Submit Registration'}
        </button>
      </div>
    </form>
  )
}

export default function Events() {
  const [query, setQuery] = useState('')
  const [dept, setDept] = useState('All')
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(null)

  const departments = useMemo(() => ['All', ...Array.from(new Set(sampleEvents.map(e => e.department)))], [])

  const filtered = useMemo(() => {
    return sampleEvents.filter(e => {
      const matchDept = dept === 'All' || e.department === dept
      const q = query.trim().toLowerCase()
      const matchQuery = !q || e.name.toLowerCase().includes(q)
      return matchDept && matchQuery
    })
  }, [query, dept])

  function openEvent(e) {
    setActive(e)
    setOpen(true)
  }

  function closeModal() {
    setOpen(false)
    setTimeout(() => setActive(null), 200)
  }

  return (
    <section id="events" className="relative bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="md:flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Upcoming & Ongoing Events</h2>
            <p className="mt-2 text-gray-600 max-w-2xl">Browse events across departments and register in one click.</p>
          </div>
          <div className="mt-6 md:mt-0 flex items-center gap-3">
            <input
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search by event name"
              className="w-60 rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400"
            />
            <select value={dept} onChange={e => setDept(e.target.value)} className="rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400">
              {departments.map(d => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(e => (
            <EventCard key={e.id} event={e} onOpen={openEvent} />
          ))}
        </div>
      </div>

      <Modal open={open} onClose={closeModal}>
        {active && (
          <div>
            <div className="p-6 border-b border-gray-100 flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{active.name}</h3>
                <p className="text-sm text-gray-500">{active.department} • {formatDate(active.date)} • {active.venue}</p>
              </div>
              <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800">About this event</h4>
                <p className="mt-2 text-gray-700 text-sm leading-relaxed">{active.description}</p>
                <div className="mt-4 text-sm text-gray-600 space-y-1">
                  <p><span className="font-medium text-gray-800">Organizer:</span> {active.department}</p>
                  <p><span className="font-medium text-gray-800">Date & Time:</span> {formatDate(active.date)}</p>
                  <p><span className="font-medium text-gray-800">Venue:</span> {active.venue}</p>
                  <p><span className="font-medium text-gray-800">Contact:</span> {active.contact.name} ({active.contact.phone})</p>
                </div>
              </div>
              <div className="rounded-xl border border-gray-100 shadow-sm">
                <RegistrationForm event={active} onSuccess={closeModal} />
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  )
}
