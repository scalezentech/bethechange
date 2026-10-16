import { ExternalLink } from "lucide-react";

export default function RecentInitiative({
  title,
  date,
  location,
  description,
  videoId,
  link,
  Icon = "",
  linkText = "Learn More",
  videoPosition = "left",
}) {
  const videoOnLeft = videoPosition === "left";
  const paragraphs = Array.isArray(description) ? description : [description];

  return (
    <section className="bg-[#f8f9f7] py-10 sm:py-12 lg:py-12">
      <div className="mx-auto grid max-w-[1600px] items-center gap-8 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:px-10">
        <div className={`min-w-0 lg:col-span-4 ${videoOnLeft ? "lg:order-1" : "lg:order-2"}`}>
          <div className="mx-auto w-full max-h-[90vh] overflow-hidden rounded-[28px] shadow-[0_15px_30px_rgba(0,0,0,0.16)]">
            <div className="relative aspect-9/16 w-full bg-black">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${videoId}`}
                title={title}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        <div className={`min-w-0 lg:col-span-8 ${videoOnLeft ? "lg:order-2" : "lg:order-1"}`}>
          <span className="inline-flex items-center rounded-full bg-[#e4f0e7] px-5 py-3 text-sm font-medium leading-5 text-[#236b42]">
            Recent Initiatives
          </span>

          <h2 className="mt-4 text-2xl  font-bold leading-[1.2] tracking-tight text-[#242424] sm:text-3xl lg:text-[42px]">
            <span>{title}</span> 
            {Icon&&(<Icon className="text-[#F59E0B] inline-block" size={35}/>)}
          </h2>

          {(location || date) && (
            <p className="mt-2 text-sm font-semibold leading-6 text-[#666666] sm:text-base">
              {[location, date].filter(Boolean).join(" · ")}
            </p>
          )}

          <div className="mt-5 space-y-4 text-sm leading-[1.8] text-[#242424] sm:text-base sm:leading-[1.8]">
            {paragraphs.filter(Boolean).map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#286b43] px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-[#1d5433]"
            >
              {linkText}
              <ExternalLink size={15} />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}