
import { ArrowRight, Users, HandHeart, Target, Sprout } from "lucide-react";
import { Link } from "react-router-dom";

import RecentInitiativeShowcase from "../../components/common/RecentInitiativeShowcase";

import ourVisionWomenImg from "../../assets/images/about/about-left.png"

const visionSteps = [
    {
        number: "01",
        title: "Engage",
        description:
            "Connect rural communities with corporates, young urban India, nonprofit organisations, and government bodies.",
        icon: Users,
    },
    {
        number: "02",
        title: "Empower",
        description:
            "Help communities gain the knowledge, support, and opportunities needed to drive their own development.",
        icon: HandHeart,
    },
    {
        number: "03",
        title: "Execute",
        description:
            "Support communities in implementing programmes that create meaningful and lasting improvements in their lives.",
        icon: Target,
    },
    {
        number: "04",
        title: "Exit",
        description:
            "Enable communities to become self-reliant role models and change agents for others.",
        icon: Sprout,
    },
];

const OurVision = () => {
    return (
        <main className="overflow-hidden bg-white">
            {/* Main vision section: reuses your existing component */}
            <RecentInitiativeShowcase
                initiativeTitle="Our Vision"
                title="Empowering Communities: Our Vision at Be The Change Foundation"
                images={[
                    ourVisionWomenImg
                ]}
                description={[
                    "Our vision is to empower society through the integration of better innovative practices, modern technology, and strong values. We aspire to create a world where everyone has equal access to opportunities and where lasting, positive change is possible.",
                    "Our strategy is to Engage, Empower, Execute and Exit. We work to connect communities with organisations and institutions, empower people to transform their own lives, and enable them to become role models and change agents for the rest of the country.",
                ]}
                primaryButtonText="Who We Are?"
                primaryButtonLink="/about-us"
                secondaryButtonText="Donate For Nature"
                secondaryButtonLink="https://razorpay.me/@bethechangefoundation5072"
                contentPosition="right"
            />


            {/* Our four-step strategy */}
            <section className="relative overflow-hidden bg-[#f7faf7] px-5 py-16 sm:px-8 sm:py-20">
                <div className="mx-auto max-w-7xl">
                    <div className="mx-auto mb-12 max-w-2xl text-center">
                        <span className="mb-3 inline-block text-sm font-bold uppercase tracking-[0.2em] text-green-700">
                            Our Approach
                        </span>

                        <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                            Turning our vision into{" "}
                            <span className="text-green-700">lasting change</span>
                        </h2>

                        <p className="mt-4 leading-7 text-gray-600">
                            Our four-step strategy puts communities at the centre of
                            development and helps them build a sustainable future.
                        </p>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {visionSteps.map((step) => {
                            const Icon = step.icon;

                            return (
                                <article
                                    key={step.number}
                                    className="
                            group relative isolate overflow-hidden rounded-2xl
                            border border-white/80
                            bg-gradient-to-br from-white via-slate-100 to-slate-300
                            p-6
                            shadow-[0_8px_24px_rgba(15,23,42,0.10),inset_0_1px_0_rgba(255,255,255,0.95)]
                            transition-all duration-500 ease-out
                            hover:-translate-y-2 hover:border-emerald-300
                            hover:shadow-[0_20px_40px_rgba(15,23,42,0.16),inset_0_1px_0_rgba(255,255,255,1)]
                        "
                                >
                                    {/* Metallic reflection */}
                                    <div
                                        aria-hidden="true"
                                        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(125deg,rgba(255,255,255,0.9)_0%,transparent_28%,rgba(148,163,184,0.12)_48%,rgba(255,255,255,0.65)_68%,transparent_100%)]"
                                    />

                                    {/* Subtle brushed-metal texture */}
                                    <div
                                        aria-hidden="true"
                                        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.16] bg-[repeating-linear-gradient(115deg,rgba(255,255,255,0.6)_0px,rgba(255,255,255,0.6)_1px,transparent_1px,transparent_4px)]"
                                    />

                                    <div className="relative">
                                        <div className="mb-7 flex items-center justify-between">
                                            <span className="font-mono text-sm font-bold tracking-[0.2em] text-slate-500 transition-colors group-hover:text-emerald-700">
                                                {step.number}
                                            </span>

                                            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/90 bg-gradient-to-br from-white via-slate-100 to-slate-300 text-emerald-700 shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_4px_10px_rgba(15,23,42,0.10)] transition-all duration-300 group-hover:scale-105 group-hover:from-emerald-50 group-hover:to-emerald-200">
                                                <Icon size={23} strokeWidth={1.8} />
                                            </div>
                                        </div>

                                        <div className="mb-4 h-px w-full bg-gradient-to-r from-slate-300 via-white to-transparent" />

                                        <h3 className="text-xl font-bold tracking-tight text-slate-800 transition-colors duration-300 group-hover:text-emerald-800">
                                            {step.title}
                                        </h3>

                                        <p className="mt-3 text-sm leading-7 text-slate-600">
                                            {step.description}
                                        </p>

                                        <div
                                            aria-hidden="true"
                                            className="mt-6 h-1 w-10 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-300 transition-all duration-300 group-hover:w-16"
                                        />
                                    </div>
                                </article>
                            );
                        })}
                    </div>

                    <div className="mt-10 text-center">
                        <Link
                            to="/area-of-work"
                            className="inline-flex items-center gap-2 rounded-lg bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800"
                        >
                            Explore Our Work
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
};

export default OurVision;
