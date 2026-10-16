import { CalendarDays, MapPin } from "lucide-react";

export default function FeaturedSpeaker({
    name,
    designation,
    description,
    date,
    location,
    videoId,
    videoPosition = "left",
}) {
    const videoOnLeft = videoPosition === "left";
    const paragraphs = Array.isArray(description) ? description : [description];

    return (
        <section className="bg-white py-12 sm:py-16 lg:py-20">
            <div className="mx-auto grid max-w-[1600px] items-center gap-8 px-5 sm:px-8 lg:grid-cols-2 lg:gap-14 lg:px-10">
                <div className={videoOnLeft ? "lg:order-1" : "lg:order-2"}>
                    <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black shadow-lg">
                        <iframe
                            src={`https://www.youtube-nocookie.com/embed/${videoId}`}
                            title={name}
                            className="absolute inset-0 h-full w-full rounded-2xl border-0 scale-105"
                            loading="lazy"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        />
                    </div>
                </div>

                <div
                    className={`rounded-2xl bg-white p-6 shadow-[0_10px_35px_rgba(0,0,0,0.09)] sm:p-8 lg:min-h-[420px] lg:p-8 ${videoOnLeft ? "lg:order-2" : "lg:order-1"
                        }`}
                >
                    <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#242424] sm:text-4xl lg:text-[42px]">
                        {name}
                    </h2>

                    {designation && (
                        <h3 className="mt-3 text-2xl font-bold leading-snug text-[#1877f2] sm:text-3xl">
                            {designation}
                        </h3>
                    )}

                    <div className="mt-7 space-y-4 text-base leading-8 text-[#555555]">
                        {paragraphs.filter(Boolean).map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>

                    {(date || location) && (
                        <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-base font-semibold text-[#555555]">
                            {date && (
                                <span className="inline-flex items-center gap-3">
                                    <CalendarDays size={21} className="shrink-0 text-[#1877f2]" />
                                    {date}
                                </span>
                            )}
                            {location && (
                                <span className="inline-flex items-center gap-2">
                                    <MapPin size={21} className="shrink-0 text-[#1877f2]" />
                                    {location}
                                </span>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}