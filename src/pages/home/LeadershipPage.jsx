import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  Award,
  Building2,
  CalendarDays,
  GraduationCap,
  Handshake,
  HeartHandshake,
  Leaf,
  Sparkles,
  Target,
  Globe2,
  BriefcaseBusiness,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

import mayurDhokchaule from "../../assets/images/founder/Mayur Dhokchaule.jpg";
import rachanaSalunke from "../../assets/images/founder/Rachana Salunke.jpeg";
import abhishekTupe from "../../assets/images/founder/Abhishek Tupe.jpg";

const leadership = [
  {
    name: "Ms. Rachana Salunke",
    role: "Secretary, Be The Change Foundation",
    image: rachanaSalunke,
    socials: [
      {
        name: "Facebook",
        url: "https://www.facebook.com/Racchoo/",
        Icon: FaFacebookF,
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/rachana_mayur_dhokchaule",
        Icon: FaInstagram,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rachana-dhokchaulele-01909527a",
        Icon: FaLinkedinIn,
      },
    ],
    paragraphs: [
      "Rachana Salunke is a dedicated philanthropist and social worker who actively contributes to social, educational, cultural, and community development initiatives through Be The Change Foundation.",
      "As Secretary, she plays a vital role in planning, managing, and coordinating educational initiatives, talent recognition programs, social awareness campaigns, art and cultural events, and women empowerment activities.",
    ],
  },
  {
    name: "Mr. Abhishek Tupe",
    role: "Executive Officer, Be The Change Foundation",
    image: abhishekTupe,
    socials: [
      {
        name: "Facebook",
        url: "https://www.facebook.com/share/1BtM8iZMiB/",
        Icon: FaFacebookF,
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/abhishektupeofficial",
        Icon: FaInstagram,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/abhishek-tupe-079294213",
        Icon: FaLinkedinIn,
      },
    ],
    paragraphs: [
      "Abhishek Tupe serves as Executive Officer of the Trust, helping manage its administration and operations. He oversees day-to-day activities and supports the planning, execution, and coordination of projects.",
      "He coordinates with staff members, volunteers, and committees to help ensure that initiatives are implemented smoothly and that the Foundation's objectives are supported by effective administration.",
    ],
  },
];

const achievements = [
  {
    Icon: GraduationCap,
    title: "Educational Excellence",
    description: "5+ years of leadership in CBSE schools and NDA academies",
    color: "blue",
  },
  {
    Icon: BriefcaseBusiness,
    title: "Business Innovation",
    description: "Founder of ScaleZen Technologies Private Limited",
    color: "violet",
  },
  {
    Icon: Handshake,
    title: "Social Impact",
    description: "Addressing poverty, illiteracy, and social inequality",
    color: "amber",
  },
  {
    Icon: Leaf,
    title: "Sustainable Development",
    description: "Aligned with UN Sustainable Development Goals",
    color: "green",
  },
];

const backgroundDots = Array.from({ length: 90 }, (_, index) => ({
  id: index,
  size: index % 5 === 0 ? 18 : index % 3 === 0 ? 12 : 7,
}));

export default function LeadershipPage() {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    const randomPosition = () => ({
      x: Math.random() * 96 + 2,
      y: Math.random() * 96 + 2,
      opacity: Math.random() * 0.45 + 0.15,
      scale: Math.random() * 0.8 + 0.6,
    });

    setDots(
      backgroundDots.map((dot) => ({
        ...dot,
        ...randomPosition(),
      }))
    );

    const interval = window.setInterval(() => {
      setDots((currentDots) =>
        currentDots.map((dot) =>
          Math.random() > 0.55
            ? { ...dot, ...randomPosition() }
            : {
                ...dot,
                opacity: Math.random() * 0.45 + 0.15,
              }
        )
      );
    }, 1800);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#f5f7fa] text-slate-800">
      {/* Animated sparkling background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#ffffff_0%,#f5f7fa_68%)]" />

        {dots.map((dot) => (
          <span
            key={dot.id}
            className="absolute rounded-full transition-[left,top,opacity,transform] duration-[1800ms] ease-in-out"
            style={{
              left: `${dot.x}%`,
              top: `${dot.y}%`,
              width: dot.size,
              height: dot.size,
              opacity: dot.opacity,
              transform: `translate(-50%, -50%) scale(${dot.scale})`,
              background:
                dot.id % 3 === 0
                  ? "#bfdbfe"
                  : dot.id % 3 === 1
                    ? "#bbf7d0"
                    : "#fde68a",
              boxShadow:
                dot.id % 5 === 0
                  ? "0 0 18px rgba(59,130,246,0.2)"
                  : "0 0 12px rgba(16,185,129,0.08)",
            }}
          />
        ))}
      </div>

      {/* Page heading */}
      <section className="relative z-10 px-5 pb-10 pt-12 sm:px-8 sm:pb-14 sm:pt-16">
        <div className="mx-auto max-w-5xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-700 shadow-sm ">
            <Sparkles size={14} />
            Leadership
          </span>

          <h1 className="mx-auto mt-6 max-w-4xl text-3xl font-extrabold leading-tight tracking-tight text-slate-800 sm:text-4xl md:text-5xl lg:text-[54px]">
            About President of{" "}
            <span className="bg-gradient-to-r from-blue-700 via-indigo-600 to-emerald-600 bg-clip-text text-transparent">
              Be The Change Foundation
            </span>
          </h1>

          <div className="mx-auto mt-6 flex items-center justify-center gap-2">
            <span className="h-px w-10 bg-blue-500" />
            <span className="h-2.5 w-2.5 rotate-45 bg-amber-400" />
            <span className="h-px w-10 bg-emerald-500" />
          </div>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
            Meet the visionary leader driving social transformation across
            India.
          </p>
        </div>
      </section>

      {/* President profile */}
      <section className="relative z-10 px-5 pb-16 sm:px-8 sm:pb-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Portrait panel */}
          <div className="relative mx-auto w-full max-w-[390px]">
            <div
              aria-hidden="true"
              className="absolute -inset-5 rounded-[40px] bg-gradient-to-br from-blue-200/50 via-white/30 to-emerald-200/50 "
            />

            <div className="relative overflow-hidden rounded-[30px] border border-white/90 bg-white/80 p-4 shadow-[0_24px_80px_-30px_rgba(15,23,42,0.28)]  sm:p-6">
              <div className="relative mx-auto flex aspect-[4/4.2] max-h-[440px] items-center justify-center overflow-hidden rounded-[23px] bg-linear-to-br from-blue-50 via-slate-100 to-emerald-50">
                <img
                  src={mayurDhokchaule}
                  alt="Hon. Mayur Dhokchaule, President of Be The Change Foundation"
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-[1.04]"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/75 via-slate-900/20 to-transparent p-5 pt-20 text-white">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-3 py-1.5 text-xs font-semibold ">
                    <Award size={14} className="text-amber-300" />
                    Founder & President
                  </span>
                </div>
              </div>

              <div className="px-1 pb-1 pt-6 text-center">
                <h2 className="text-2xl font-extrabold tracking-tight text-slate-800">
                  Hon. Mayur Dhokchaule Sir
                </h2>

                <p className="mt-2 font-semibold text-blue-700">
                  President, Be The Change Foundation
                </p>

                <div className="mt-5 grid grid-cols-1 gap-3 text-left sm:grid-cols-2">
                  <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-3.5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                      <CalendarDays size={19} />
                    </span>
                    <span>
                      <span className="block text-xs text-slate-500">
                        Founded
                      </span>
                      <span className="mt-1 block text-sm font-semibold text-slate-700">
                        28th April 2022
                      </span>
                    </span>
                  </div>

                  <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-3.5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
                      <GraduationCap size={20} />
                    </span>
                    <span>
                      <span className="block text-xs text-slate-500">
                        Experience
                      </span>
                      <span className="mt-1 block text-sm font-semibold text-slate-700">
                        5+ years as Principal
                      </span>
                    </span>
                  </div>

                  <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-3.5 sm:col-span-2">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                      <Building2 size={19} />
                    </span>
                    <span>
                      <span className="block text-xs text-slate-500">
                        Company
                      </span>
                      <span className="mt-1 block text-sm font-semibold text-slate-700">
                        ScaleZen Technologies
                      </span>
                    </span>
                  </div>
                </div>

                <div className="mt-6 border-t border-slate-100 pt-5">
                  <p className="mb-3 text-sm font-bold text-slate-700">
                    Connect with Mayur Sir
                  </p>

                  <div className="flex flex-wrap justify-center gap-2">
                    <a
                      href="https://www.linkedin.com/mayurdhokchaule"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-blue-100 bg-blue-50 px-4 py-2.5 text-sm font-semibold text-blue-700 transition hover:-translate-y-0.5 hover:bg-blue-100"
                    >
                      <FaLinkedinIn size={16} />
                      LinkedIn
                    </a>

                    <a
                      href="https://www.facebook.com/MayurDhokchaule"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-indigo-100 bg-indigo-50 px-4 py-2.5 text-sm font-semibold text-indigo-700 transition hover:-translate-y-0.5 hover:bg-indigo-100"
                    >
                      <FaFacebookF size={16} />
                      Facebook
                    </a>

                    <a
                      href="https://www.instagram.com/MayurDhokchaule"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-indigo-100 bg-indigo-50 px-4 py-2.5 text-sm font-semibold text-indigo-700 transition hover:-translate-y-0.5 hover:bg-indigo-100"
                    >
                      <FaInstagram size={16} />
                      Instagram
                    </a>

                    <a
                      href="https://www.x.com/MayurDhokchule"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-indigo-100 bg-indigo-50 px-4 py-2.5 text-sm font-semibold text-indigo-700 transition hover:-translate-y-0.5 hover:bg-indigo-100"
                    >
                      <FaTwitter size={16} />
                      X(Twitter)
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Biography */}
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-800">
              <HeartHandshake size={17} />
              A vision for meaningful change
            </div>

            <div className="space-y-7">
              <article className="border-b border-slate-200 pb-7">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-xl">
                    🌟
                  </span>
                  <h3 className="text-lg font-bold text-slate-800 sm:text-xl">
                    Visionary Social Entrepreneur
                  </h3>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                  Mayur Dhokchaule is a social entrepreneur, educational
                  consultant, and visionary leader who founded{" "}
                  <strong className="text-slate-800">
                    Be The Change Foundation on 28th April 2022
                  </strong>
                  , with a commitment to driving social transformation through
                  education, innovation, and value-based initiatives.
                </p>
              </article>

              <article className="border-b border-slate-200 pb-7">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-violet-100 text-xl">
                    🏛️
                  </span>
                  <h3 className="text-lg font-bold text-slate-800 sm:text-xl">
                    Delhi Experience & Inspiration
                  </h3>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                  His four-year stay in the Indian capital, New Delhi,
                  influenced his understanding of social issues and grassroots
                  activism. This experience strengthened his passion for
                  community service and inspired his mission to create
                  meaningful impact at scale.
                </p>
              </article>

              <article className="border-b border-slate-200 pb-7">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-xl">
                    📚
                  </span>
                  <h3 className="text-lg font-bold text-slate-800 sm:text-xl">
                    Educational Leadership
                  </h3>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                  With a strong academic and professional background in
                  education, he has served as a principal in CBSE-affiliated
                  English-medium schools and NDA preparatory academies. He is
                  also the founder of{" "}
                  <strong className="text-slate-800">
                    ScaleZen Technologies Private Limited
                  </strong>
                  , an educational consultancy firm.
                </p>
              </article>
            </div>

            <div className="mt-8 rounded-3xl border border-amber-200/80 bg-gradient-to-br from-amber-50 to-yellow-100/80 p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-amber-600 shadow-sm">
                  <Target size={23} />
                </span>
                <h3 className="text-lg font-extrabold text-slate-800">
                  Foundation Mission
                </h3>
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-700">
                Under his leadership, Be The Change Foundation aims to empower
                society by addressing core challenges such as poverty, hunger,
                illiteracy, caste discrimination, unemployment, corruption, and
                injustice.
              </p>
            </div>

            <div className="mt-4 rounded-3xl border border-cyan-200/80 bg-gradient-to-br from-cyan-50 to-sky-100/80 p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-cyan-700 shadow-sm">
                  <Globe2 size={22} />
                </span>
                <h3 className="text-lg font-extrabold text-slate-800">
                  Vision Statement
                </h3>
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-700">
                Be The Change Foundation envisions a world where freedom from
                servitude, ignorance, and inequality is not a privilege but a
                right for all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach and impact */}
      <section className="relative z-10 px-5 pb-16 sm:px-8 sm:pb-20">
        <div className="mx-auto max-w-6xl rounded-[30px] border border-white bg-white/75 p-5 shadow-[0_20px_70px_-35px_rgba(15,23,42,0.2)]  sm:p-8 lg:p-10">
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl border-l-4 border-emerald-500 bg-gradient-to-r from-emerald-50 to-white p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-emerald-700 shadow-sm">
                  <Sparkles size={22} />
                </span>
                <h3 className="text-lg font-bold text-slate-800">
                  Innovative Approach
                </h3>
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Combining modern technology, sustainable practices, and
                ethical governance to create scalable solutions in education
                and community development.
              </p>
            </article>

            <article className="rounded-3xl border-l-4 border-blue-500 bg-gradient-to-r from-blue-50 to-white p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-blue-700 shadow-sm">
                  <Globe2 size={22} />
                </span>
                <h3 className="text-lg font-bold text-slate-800">
                  Global Impact & SDGs
                </h3>
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Promoting public interest and the common good while aligning
                community initiatives with the United Nations Sustainable
                Development Goals.
              </p>
            </article>
          </div>

          <div className="mt-10">
            <div className="mb-6 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
                Leadership in action
              </p>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-800 sm:text-3xl">
                Key Achievements & Impact
              </h2>
              <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500" />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {achievements.map(({ Icon, title, description, color }) => {
                const iconColors = {
                  blue: "bg-blue-100 text-blue-700",
                  violet: "bg-violet-100 text-violet-700",
                  amber: "bg-amber-100 text-amber-700",
                  green: "bg-emerald-100 text-emerald-700",
                };

                return (
                  <article
                    key={title}
                    className="group flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-4 transition duration-300 hover:-translate-y-1 hover:border-slate-200 hover:shadow-lg sm:p-5"
                  >
                    <span
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-105 ${iconColors[color]}`}
                    >
                      <Icon size={25} />
                    </span>

                    <div>
                      <h3 className="font-bold text-slate-800">{title}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        {description}
                      </p>
                    </div>

                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership team */}
      <section className="relative z-10 px-5 pb-20 sm:px-8 sm:pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
                The people behind the mission
              </span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-800 sm:text-4xl">
                Our Leadership Team
              </h2>
              <p className="mt-3 max-w-xl leading-7 text-slate-500">
                Dedicated people working together to turn our vision into
                meaningful community impact.
              </p>
            </div>

            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-600">
              <HeartHandshake size={17} className="text-emerald-600" />
              Working for change
            </span>
          </div>

          <div className="space-y-6">
            {leadership.map((person, index) => (
              <article
                key={person.name}
                className="group grid overflow-hidden rounded-[28px] border border-white bg-white/85 shadow-[0_16px_50px_-35px_rgba(15,23,42,0.25)]  transition duration-300 hover:border-blue-100 hover:shadow-[0_25px_65px_-35px_rgba(37,99,235,0.25)] md:grid-cols-[240px_1fr] lg:grid-cols-[280px_1fr]"
              >
                <div className="relative min-h-[300px] overflow-hidden bg-gradient-to-br from-blue-50 via-slate-100 to-emerald-50 md:min-h-full">
                  <img
                    src={person.image}
                    alt={person.name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.04]"
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/70 to-transparent p-5 pt-16">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-3 py-1.5 text-xs font-semibold text-white ">
                      <Award size={14} />
                      Leadership {String(index + 2).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                <div className="p-5 sm:p-7 lg:p-9">
                  <span className="inline-flex rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700">
                    {person.role}
                  </span>

                  <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-slate-800 sm:text-3xl">
                    {person.name}
                  </h3>

                  <div className="mt-4 space-y-3">
                    {person.paragraphs.map((paragraph, paragraphIndex) => (
                      <p
                        key={paragraphIndex}
                        className="text-sm leading-7 text-slate-600 sm:text-base"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-slate-100 pt-5">
                    <span className="mr-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                      Connect
                    </span>

                    {person.socials.map(({ name, url, Icon }) => (
                      <a
                        key={name}
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${person.name} on ${name}`}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                      >
                        <Icon size={17} />
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      
    </main>
  );
}