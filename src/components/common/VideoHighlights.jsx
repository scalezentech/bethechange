
import {
  Award,
  Users,
  MapPin,
  Target,
  Sun,
  CalendarDays,
  Trophy,
  Play,
} from "lucide-react";

const defaultVideos = [
  {
    id: "M2se98GU4SU",
  },
  {
    id: "Nyx0SLbtNbo",
  },
];

const defaultHighlights = [
  {
    icon: Award,
    text: "Recognition of outstanding educators across Maharashtra",
    color: "text-amber-500",
  },
  {
    icon: Users,
    text: "Participation of 1300+ dedicated teachers",
    color: "text-purple-700",
  },
  {
    icon: MapPin,
    text: "Held at the spiritual city of Shirdi",
    color: "text-pink-500",
  },
  {
    icon: Target,
    text: "Celebrating excellence in education",
    color: "text-blue-500",
  },
  {
    icon: Sun,
    text: "Inspiring stories of educational impact",
    color: "text-amber-500",
  },
];

function VideoCard({ video }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200/70 bg-white transition duration-300 shadow-lg">
      <div className="relative aspect-video w-full bg-black">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${video.id}`}
          title={video.title}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  );
}

function EventStat({ value, label, icon: Icon }) {
  return (
    <div className="flex min-w-0 items-center gap-2 rounded-lg bg-white/70 shadow-lg px-2.5 py-3 sm:gap-3 sm:px-3">
      {Icon && (
        <Icon
          size={19}
          aria-hidden="true"
          className="hidden shrink-0 text-blue-600 sm:block"
        />
      )}

      <div className="min-w-0">
        <p className="text-xl font-extrabold leading-tight text-blue-600 sm:text-2xl">
          {value}
        </p>
        <p className="mt-1 text-[10px] leading-4 text-slate-600 sm:text-xs">
          {label}
        </p>
      </div>
    </div>
  );
}

export default function VideoHighlights({
  heading = "Video Highlights",
  subtitle = "Watch the memorable moments from our prestigious award ceremony",
  videos = defaultVideos,
  eventTitle = "About the Event",
  eventDescription = "The Rajya Adarsh Shikshak Puraskar 2025 was successfully conducted on 29 June 2025 at Shirdi, Maharashtra.",
  eventDetails = "This prestigious event celebrated the contributions of exemplary educators and witnessed the participation of over 1300 teachers from across the state.",
  highlights = defaultHighlights,
  stats = [
    { value: "1300+", label: "Teachers Participated", icon: Users },
    { value: "50+", label: "Awards Presented", icon: Trophy },
    { value: "1", label: "Day Event", icon: CalendarDays },
  ],
}) {
  return (
    <section className="relative isolate overflow-hidden bg-linear-to-b from-white via-[#fbfcfd] to-[#f4f6f8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-[68px]">
      {/* Decorative background dots */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(circle, #dbeafe 0 7px, transparent 8px)",
          backgroundSize: "163px 163px",
          backgroundPosition: "23px 27px",
        }}
      />

      {/* Foreground content */}
      <div className="relative z-10 mx-auto max-w-287">
        {/* Section heading */}
        <header className="mb-10 text-center sm:mb-12">
          <h2 className="text-2xl font-bold tracking-tight text-[#344456] sm:text-3xl">
            {heading}
          </h2>

          <div className="mx-auto mt-2 flex w-20 flex-col gap-1.5">
            <span className="h-1 w-full rounded-full bg-[#20ae65]" />
            <span className="h-1 w-full rounded-full bg-[#1687ed]" />
          </div>

          <p className="mt-4 text-sm leading-6 text-slate-500 sm:text-base">
            {subtitle}
          </p>
        </header>

        {/* Videos and event information */}
        <div className="grid items-start gap-6 lg:grid-cols-2 lg:gap-7">
          {/* Video list */}
          <div className="min-w-0 rounded-2xl bg-white/80 p-2.5 shadow-[0_5px_20px_rgba(15,23,42,0.035)] sm:p-3">
            <div className="flex flex-col gap-3.5">
              {videos.map((video, index) => (
                <VideoCard
                  key={`${video.id}-${index}`}
                  video={video}
                />
              ))}
            </div>
          </div>

          {/* Event details card */}
          <article className="min-w-0 rounded-2xl border border-white bg-white p-5 shadow-[0_12px_35px_rgba(15,23,42,0.09)] sm:p-6 lg:p-7">
            <h3 className="text-xl font-bold text-[#344456] sm:text-2xl">
              {eventTitle}
            </h3>

            <div className="mt-2 h-[2px] w-14 rounded-full bg-[#1687ed]" />

            <p className="mt-4 text-sm font-medium leading-6 text-[#344456]">
              {eventDescription}
            </p>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              {eventDetails}
            </p>

            {/* Event highlights */}
            <h4 className="mt-6 text-sm font-bold text-[#344456] sm:text-base">
              Event Highlights
            </h4>

            <ul className="mt-2 divide-y divide-slate-100">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <li
                    key={`${item.text}-${index}`}
                    className="flex items-start gap-3 py-3 text-sm leading-5 text-slate-600"
                  >
                    <Icon
                      size={16}
                      aria-hidden="true"
                      className={`mt-0.5 shrink-0 ${item.color || "text-blue-500"}`}
                    />

                    <span>{item.text}</span>
                  </li>
                );
              })}
            </ul>

            {/* Event statistics */}
            <div className="mt-5 grid grid-cols-3 gap-2 rounded-xl bg-linear-to-r from-slate-50 to-slate-100 shadow-lg p-2 sm:gap-2.5 sm:p-3">
              {stats.map((stat, index) => (
                <EventStat
                  key={`${stat.label}-${index}`}
                  value={stat.value}
                  label={stat.label}
                  icon={stat.icon}
                />
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
