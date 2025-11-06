import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] w-full overflow-hidden bg-black">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays - pointer-events-none so Spline stays interactive */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-24 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
          Campus Event Hub
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
          Discover, Participate, and Shine in Campus Events!
        </p>
        <div className="mt-8 flex justify-center">
          <a
            href="#events"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-rose-500 px-6 py-3 text-white font-semibold shadow-lg shadow-orange-500/30 hover:brightness-110 transition"
          >
            View Events
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path d="M13.5 4.5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0V6.31l-6.22 6.22a.75.75 0 1 1-1.06-1.06L17.44 5.25h-2.19a.75.75 0 0 1-.75-.75Z" />
              <path d="M6 5.25A2.25 2.25 0 0 0 3.75 7.5v12A2.25 2.25 0 0 0 6 21.75h12A2.25 2.25 0 0 0 20.25 19.5v-6a.75.75 0 0 0-1.5 0v6A.75.75 0 0 1 18 20.25H6A.75.75 0 0 1 5.25 19.5v-12A.75.75 0 0 1 6 6.75h6a.75.75 0 0 0 0-1.5H6Z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
