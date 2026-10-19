
import { Link } from "react-router-dom";
import { ArrowLeft, House } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative isolate flex min-h-[75vh] items-center justify-center overflow-hidden bg-[#f8fcfa] px-5 py-20 sm:min-h-screen">
      {/* Soft green background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_42%,rgba(91,190,157,0.20)_0%,rgba(212,243,231,0.30)_35%,transparent_72%)]"
      />

      {/* Green atmospheric layers */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[12%] -z-10 h-[42%] bg-[radial-gradient(ellipse_at_15%_60%,rgba(255,255,255,0.98)_0%,transparent_45%),radial-gradient(ellipse_at_75%_45%,rgba(255,255,255,0.95)_0%,transparent_48%),radial-gradient(ellipse_at_48%_80%,rgba(184,229,215,0.55)_0%,transparent_58%)] blur-2xl"
      />

      {/* Decorative green circles */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-20 -z-10 h-80 w-80 rounded-full border border-emerald-800/[0.06]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 top-32 -z-10 h-56 w-56 rounded-full border border-emerald-800/[0.06]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-20 -z-10 h-96 w-96 rounded-full bg-emerald-300/10 blur-3xl"
      />

      {/* Error content */}
      <section className="mx-auto w-full max-w-4xl text-center">
        <div className="relative">
          <p
            aria-hidden="true"
            className="select-none bg-gradient-to-b from-[#147c55] via-[#55a990] to-[#d5f0e7] bg-clip-text text-[clamp(9rem,30vw,22rem)] font-black leading-[0.82] tracking-[-0.09em] text-transparent"
          >
            404
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-2xl sm:mt-10">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-emerald-700 sm:text-sm">
            Page not found
          </p>

          <h1 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            Sorry, that page could not be found.
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
            The page you are looking for may have been moved, removed, or
            the address may be incorrect. Let's get you back on track.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#087f53] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-900/10 transition duration-300 hover:-translate-y-0.5 hover:bg-[#066b46] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700 sm:w-auto"
            >
              <House size={17} aria-hidden="true" />
              Go Back Home
            </Link>

            <button
              type="button"
              onClick={() => window.history.back()}
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-emerald-900/15 bg-white/80 px-7 py-3 text-sm font-semibold text-slate-700 transition duration-300 hover:border-emerald-700/30 hover:bg-emerald-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700 sm:w-auto"
            >
              <ArrowLeft size={17} aria-hidden="true" />
              Previous Page
            </button>
          </div>
        </div>

        <p className="mt-14 text-xs font-medium tracking-wide text-slate-400">
          BE THE CHANGE FOUNDATION
          <span className="mx-2 text-emerald-500">•</span>
          Creating a better tomorrow
        </p>
      </section>
    </main>
  );
}
