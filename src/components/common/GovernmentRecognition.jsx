
import {
    Landmark,
    Target,
    ShieldCheck,
    ChartNoAxesColumn,
    Handshake,
    Globe2,
    Eye,
    CheckCircle2,
    GraduationCap,
    FileCheck,
    Sun,
} from "lucide-react";

import certificateImage from "../../assets/images/NITIAYOG-2025.jpg";

const focusAreas = [
    { label: "Education & Literacy", icon: GraduationCap },
    { label: "Social Welfare", icon: Handshake },
    { label: "Sustainable Development", icon: Globe2 },
];

const additionalRecognitions = [
    { label: "12A Registration", icon: GraduationCap },
    { label: "80G Certification", icon: FileCheck },
    { label: "FCRA Compliant", icon: Sun },
];

const foundationValues = [
    {
        title: "Transparency",
        subtitle: "100% Accountable",
        icon: ShieldCheck,
    },
    {
        title: "Impact Driven",
        subtitle: "Measurable Results",
        icon: ChartNoAxesColumn,
    },
    {
        title: "Community Focus",
        subtitle: "Grassroots Impact",
        icon: Handshake,
    },
    {
        title: "Sustainable Goals",
        subtitle: "UN SDG Aligned",
        icon: Globe2,
    },
];

export default function GovernmentRecognition() {
    return (
        <section className="relative isolate overflow-hidden bg-gradient-to-br from-white via-[#f7f8f9] to-[#e9edef] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            {/* Background decorations */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-[24%] top-[32%] z-0 h-9 w-9 rounded-full bg-green-600/10"
            />

            <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-[13%] left-[35%] z-0 h-9 w-9 rounded-full bg-green-700/10"
            />

            <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-[13%] right-[15%] z-0 h-9 w-9 rounded-full bg-green-700/10"
            />

            <div className="relative z-10 mx-auto max-w-[1400px]">
                {/* Section heading */}
                <header className="mb-12 text-center sm:mb-16">
                    <h2 className="inline-flex max-w-full items-center justify-center rounded-full bg-white px-6 py-5 text-center text-lg font-extrabold uppercase leading-snug tracking-wide text-[#25445f] shadow-[0_12px_35px_rgba(0,0,0,0.12)] sm:px-10 sm:text-2xl lg:text-[30px]">
                        Recognized by the Government of India
                    </h2>

                    <div
                        aria-hidden="true"
                        className="mt-5 flex items-center justify-center gap-1.5"
                    >
                        <span className="h-1 w-[72px] rounded-full bg-orange-400" />
                        <span className="h-1 w-[72px] rounded-full bg-gray-200" />
                        <span className="h-1 w-[72px] rounded-full bg-green-700" />
                    </div>
                </header>

                {/* Main columns */}
                <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12">
                    {/* Left: Impact areas */}
                    <article className="relative overflow-hidden rounded-[26px] border border-white bg-white p-6 shadow-[0_18px_55px_rgba(0,0,0,0.10)] sm:p-8 lg:p-10">
                        {/* Gradient top border */}
                        <div
                            aria-hidden="true"
                            className="absolute inset-x-0 top-0 z-10 h-1 bg-gradient-to-r from-blue-500 via-green-500 to-amber-400"
                        />

                        <div className="mx-auto flex h-[76px] w-[76px] items-center justify-center rounded-full border-2 border-blue-200 bg-blue-50 shadow-[0_5px_18px_rgba(0,102,255,0.12)]">
                            <div className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-md">
                                <Target size={29} strokeWidth={1.8} aria-hidden="true" />
                            </div>
                        </div>

                        <h3 className="mt-6 text-center text-xl font-bold text-[#25445f] sm:text-2xl">
                            Explore Our Impact Areas
                        </h3>

                        <p className="mt-3 text-center text-sm leading-6 text-slate-500 sm:text-base">
                            Want to see our areas of Work. Click here to View More
                        </p>

                        {/* Focus areas */}
                        <div className="mt-7 space-y-3">
                            {focusAreas.map(({ label, icon: Icon }) => (
                                <div
                                    key={label}
                                    className="flex items-center gap-3 rounded-full bg-gradient-to-r from-gray-50 to-gray-200 px-4 py-3"
                                >
                                    <Icon
                                        size={22}
                                        className="shrink-0 text-[#16884d]"
                                        aria-hidden="true"
                                    />

                                    <span className="text-sm text-slate-700">{label}</span>
                                </div>
                            ))}
                        </div>

                        {/* View more button */}
                        <div className="mt-8 text-center">
                            <a
                                href="/areas-of-work"
                                className="inline-flex min-h-[58px] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 px-7 py-4 text-sm font-bold text-white shadow-[0_10px_24px_rgba(0,102,255,0.28)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(0,102,255,0.35)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-300"
                            >
                                <Eye size={18} aria-hidden="true" />
                                Click here to View More
                                
                            </a>
                        </div>

                        {/* Additional recognitions */}
                        <div className="mt-8">
                            <h4 className="mb-5 text-center text-sm font-bold text-[#25445f] sm:text-base">
                                Additional Recognitions
                            </h4>

                            <div className="flex flex-wrap justify-center gap-3">
                                {additionalRecognitions.map(({ label, icon: Icon }) => (
                                    <span
                                        key={label}
                                        className="inline-flex items-center justify-center gap-2 rounded-2xl border border-amber-400 bg-amber-100 px-3 py-3 text-xs font-medium text-amber-900"
                                    >
                                        <Icon
                                            size={15}
                                            className="shrink-0 text-amber-600"
                                            aria-hidden="true"
                                        />
                                        {label}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </article>

                    {/* Right: NITI Aayog certification */}
                    <div className="min-w-0">
                        <div className="mb-8 text-center">
                            <div className="inline-flex max-w-full items-center justify-center gap-3 rounded-[24px] border-2 border-blue-500 bg-white/70 px-5 py-4 text-[#25445f] sm:px-7">
                                <Landmark
                                    size={27}
                                    className="shrink-0 text-slate-500"
                                    aria-hidden="true"
                                />

                                <h3 className="text-base font-bold sm:text-xl">
                                    NITI Aayog Certification
                                </h3>
                            </div>

                            <p className="mx-auto mt-5 max-w-md text-sm leading-6 text-slate-600 sm:text-[15px]">
                                Our NGO is recognized by the Government of India, and we have
                                also received certification from NITI Aayog.
                            </p>
                        </div>

                        {/* Outer wrapper: allows the badge to overlap the card */}
                        <div className="relative isolate pt-7 sm:pt-8">
                            {/* Verified badge */}
                            <div className="absolute right-3 top-7 z-50 inline-flex -translate-y-1/2 items-center gap-2 rounded-full bg-gradient-to-r from-green-600 to-green-800 px-3 py-2.5 text-white shadow-[0_8px_22px_rgba(22,130,65,0.3)] sm:right-5 sm:top-8 sm:px-5">
                                <CheckCircle2
                                    size={22}
                                    fill="white"
                                    className="shrink-0 text-green-700"
                                    aria-hidden="true"
                                />

                                <span className="leading-tight">
                                    <span className="block text-[11px] font-extrabold sm:text-sm">
                                        Verified Organization
                                    </span>

                                    <span className="block text-[9px] font-medium sm:text-[10px]">
                                        Government Recognized
                                    </span>
                                </span>
                            </div>

                            {/* Certificate card */}
                            <article className="relative z-10 rounded-[22px] overflow-hidden border border-gray-100 bg-white p-5 shadow-[0_18px_55px_rgba(0,0,0,0.10)] sm:p-7">
                                {/* Gradient top border */}
                                <div
                                    aria-hidden="true"
                                    className="absolute inset-x-0 top-0 z-10 h-1 rounded-t-[22px] bg-gradient-to-r from-blue-500 via-green-500 to-amber-400"
                                />

                                {/* Certificate image */}
                                <div className="mt-3 overflow-hidden rounded-xl bg-gray-50 p-2 sm:p-4">
                                    <img
                                        src={certificateImage}
                                        alt="NITI Aayog NGO Darpan registration certificate for Be The Change Foundation"
                                        loading="lazy"
                                        decoding="async"
                                        className="mx-auto block h-auto max-h-[650px] w-full object-contain"
                                    />
                                </div>

                                {/* Registration details */}
                                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                                    <div className="rounded-xl border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-200/80 px-3 py-5 text-center">
                                        <p className="text-xs text-slate-500">Registration:</p>
                                        <p className="mt-3 text-sm font-bold text-slate-700">
                                            NGO Darpan
                                        </p>
                                    </div>

                                    <div className="rounded-xl border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-200/80 px-3 py-5 text-center">
                                        <p className="text-xs text-slate-500">Authority:</p>
                                        <p className="mt-3 text-sm font-bold text-slate-700">
                                            NITI Aayog
                                        </p>
                                    </div>

                                    <div className="rounded-xl border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-200/80 px-3 py-5 text-center">
                                        <p className="text-xs text-slate-500">Status:</p>
                                        <p className="mt-3 inline-flex items-center justify-center gap-1.5 text-sm font-bold text-green-600">
                                            <span
                                                aria-hidden="true"
                                                className="h-1.5 w-1.5 rounded-full bg-green-600"
                                            />
                                            Active
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>

                {/* Foundation values */}
                <div className="mt-12 grid grid-cols-2 gap-6 rounded-[26px] border border-white bg-white px-5 py-9 shadow-[0_18px_55px_rgba(0,0,0,0.08)] sm:mt-16 sm:grid-cols-4 sm:gap-4 sm:px-8 sm:py-12 lg:mt-24">
                    {foundationValues.map(({ title, subtitle, icon: Icon }) => (
                        <div
                            key={title}
                            className="flex flex-col items-center text-center"
                        >
                            <div className="flex h-[64px] w-[64px] items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-blue-200 text-blue-600">
                                <Icon
                                    size={30}
                                    strokeWidth={1.8}
                                    aria-hidden="true"
                                />
                            </div>

                            <h3 className="mt-4 text-sm font-bold text-slate-700 sm:text-base">
                                {title}
                            </h3>

                            <p className="mt-2 text-xs leading-5 text-slate-500 sm:text-sm">
                                {subtitle}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
