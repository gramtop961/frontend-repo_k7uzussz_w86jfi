export function About() {
  return (
    <section id="about" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">About Campus Event Hub</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            This platform helps B.Tech students stay updated with all department and cultural events, register easily, and never miss an opportunity. Explore hackathons, workshops, cultural fests, and guest lectures — all in one place.
          </p>
          <ul className="mt-6 space-y-2 text-gray-700">
            <li>• Discover events across departments</li>
            <li>• Filter and search to find what interests you</li>
            <li>• One-click registration with instant confirmation</li>
          </ul>
        </div>
        <div className="rounded-2xl bg-gradient-to-br from-orange-100 to-rose-100 p-8 ring-1 ring-orange-200/60">
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-extrabold text-rose-600">50+</div>
              <div className="text-sm text-gray-600">Annual Events</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-rose-600">10</div>
              <div className="text-sm text-gray-600">Departments</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-rose-600">5k+</div>
              <div className="text-sm text-gray-600">Registrations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Contact Us</h2>
          <p className="mt-2 text-gray-600">Have questions or want to collaborate on an event? Reach out to us.</p>
          <div className="mt-6 space-y-2 text-gray-700">
            <p>Campus Events Cell</p>
            <p>Email: events@college.edu</p>
            <p>Phone: +91 90000 00000</p>
            <div className="flex gap-3 mt-3">
              <a href="#" className="text-rose-600 hover:underline">Instagram</a>
              <a href="#" className="text-rose-600 hover:underline">Facebook</a>
              <a href="#" className="text-rose-600 hover:underline">LinkedIn</a>
            </div>
          </div>
        </div>
        <form className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 p-6 grid grid-cols-1 gap-4">
          <input placeholder="Your Name" className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400" />
          <input type="email" placeholder="Your Email" className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400" />
          <textarea rows="4" placeholder="Message" className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400" />
          <button type="button" className="justify-self-start inline-flex items-center rounded-full bg-gradient-to-r from-orange-500 to-rose-500 text-white px-6 py-2.5 text-sm font-semibold shadow hover:brightness-110">Send Message</button>
        </form>
      </div>
    </section>
  )
}
