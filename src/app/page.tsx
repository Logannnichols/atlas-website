"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const navLinks = [
  { href: "#how-it-works", label: "How It Works" },
  { href: "#testimonials", label: "Testimonials" },
];

const stats = [
  { label: "Pipeline Generated", value: "$15M+" },
  { label: "Average Win-Rate Lift", value: "28%" },
  { label: "Sales Leaders Embedded", value: "12" },
];

const steps = [
  {
    title: "1. Diagnose",
    body: "We audit your funnel, conversion rates, CRM hygiene, and sales process to identify revenue bottlenecks quickly.",
  },
  {
    title: "2. Architect",
    body: "Your dedicated growth lead builds a practical operating plan for demand generation, outbound motions, and forecast discipline.",
  },
  {
    title: "3. Execute",
    body: "We run weekly sprints with your team, provide frontline coaching, and track progress against measurable goals.",
  },
  {
    title: "4. Scale",
    body: "With repeatable systems in place, we help you hire the right reps, improve onboarding, and keep momentum compounding.",
  },
];

const testimonials = [
  {
    quote:
      "Atlas turned a chaotic pipeline into a predictable growth engine in under 90 days.",
    name: "Maya Chen",
    role: "CEO, Finch Commerce",
  },
  {
    quote:
      "Our close rate improved every month once Atlas brought accountability and process clarity.",
    name: "Jordan Alvarez",
    role: "Founder, OrbitIQ",
  },
  {
    quote:
      "It felt like adding a world-class VP of Sales without the full-time executive overhead.",
    name: "Priya Nwosu",
    role: "COO, North Harbor Labs",
  },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className="min-h-screen bg-atlas-dark text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-atlas-dark/90 backdrop-blur-md">
        <nav className="mx-auto w-full max-w-6xl px-5 py-4 sm:px-6">
          <div className="flex items-center justify-between">
            <a href="#" className="text-sm font-semibold tracking-wide text-white">
              Atlas Growth Partners
            </a>
            <div className="hidden items-center gap-7 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/80 transition hover:text-atlas-blue"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <a
              href="#book"
              className="rounded-full bg-atlas-blue px-4 py-2 text-sm font-semibold text-atlas-dark transition hover:brightness-110"
            >
              Book a Call
            </a>
          </div>
          <div className="mt-4 flex items-center gap-5 md:hidden">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/80 transition hover:text-atlas-blue"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main>
        <section className="mx-auto grid w-full max-w-6xl gap-10 px-5 pb-20 pt-16 sm:px-6 lg:grid-cols-2 lg:pb-24 lg:pt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-7"
          >
            <p className="inline-block rounded-full border border-atlas-blue/40 bg-atlas-blue/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-atlas-blue">
              Revenue Operations for Growth Teams
            </p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Your sales team. Our management.
            </h1>
            <p className="max-w-xl text-base text-white/75 sm:text-lg">
              Atlas Growth Partners installs the strategy, systems, and
              accountability your team needs to consistently grow pipeline and
              close more revenue.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#book"
                className="rounded-full bg-atlas-blue px-6 py-3 text-sm font-semibold text-atlas-dark transition hover:brightness-110"
              >
                Book Your Growth Audit
              </a>
              <a
                href="#book"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-atlas-blue hover:text-atlas-blue"
              >
                Talk to an Operator
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.65 }}
            className="rounded-2xl border border-white/10 bg-atlas-surface p-6 sm:p-8"
          >
            <p className="text-sm uppercase tracking-[0.18em] text-atlas-blue">
              Embedded Leadership
            </p>
            <h2 className="mt-4 text-2xl font-semibold">
              Practical systems for compounding growth
            </h2>
            <ul className="mt-6 space-y-4 text-sm text-white/80 sm:text-base">
              <li className="rounded-xl border border-white/10 bg-atlas-dark p-4">
                Weekly forecast and pipeline cadences
              </li>
              <li className="rounded-xl border border-white/10 bg-atlas-dark p-4">
                Outbound and inbound conversion playbooks
              </li>
              <li className="rounded-xl border border-white/10 bg-atlas-dark p-4">
                KPI dashboards your whole team can trust
              </li>
            </ul>
          </motion.div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-5 pb-16 sm:px-6 sm:pb-20">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                className="rounded-2xl border border-white/10 bg-atlas-surface p-6"
              >
                <p className="text-3xl font-semibold text-atlas-blue sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-white/75">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section
          id="how-it-works"
          className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-6 lg:pb-24"
        >
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-atlas-blue">
              How It Works
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              A simple operating model that your team can execute every week
            </h2>
          </div>

          <div className="space-y-3">
            {steps.map((step, index) => {
              const isOpen = activeIndex === index;

              return (
                <div
                  key={step.title}
                  className="overflow-hidden rounded-xl border border-white/10 bg-atlas-surface"
                >
                  <button
                    type="button"
                    onClick={() => setActiveIndex(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-semibold sm:text-lg">
                      {step.title}
                    </span>
                    <span className="text-atlas-blue">{isOpen ? "−" : "+"}</span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                      >
                        <p className="px-5 pb-5 text-sm text-white/75 sm:px-6 sm:text-base">
                          {step.body}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        <section
          id="testimonials"
          className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-6 lg:pb-24"
        >
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-atlas-blue">
              Testimonials
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Trusted by founders and revenue leaders
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.figure
                key={testimonial.name}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ delay: index * 0.1, duration: 0.45 }}
                className="rounded-2xl border border-white/10 bg-atlas-surface p-6"
              >
                <blockquote className="text-white/85">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-5 text-sm text-white/70">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p>{testimonial.role}</p>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </section>

        <section id="book" className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-6">
          <div className="rounded-2xl border border-atlas-blue/35 bg-atlas-blue/10 p-8 text-center sm:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-atlas-blue">
              Ready to Scale Revenue?
            </p>
            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold sm:text-4xl">
              Book a strategy call and leave with clear next steps for your
              sales engine.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-white/75 sm:text-base">
              In 30 minutes, we will review your current motion and identify the
              highest-leverage improvements to unlock growth.
            </p>
            <a
              href="#book"
              className="mt-8 inline-flex rounded-full bg-atlas-blue px-7 py-3 text-sm font-semibold text-atlas-dark transition hover:brightness-110"
            >
              Book Now
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-white/65 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} Atlas Growth Partners</p>
          <div className="flex items-center gap-5">
            <a href="#how-it-works" className="transition hover:text-atlas-blue">
              How It Works
            </a>
            <a href="#testimonials" className="transition hover:text-atlas-blue">
              Testimonials
            </a>
            <a href="#book" className="transition hover:text-atlas-blue">
              Book
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
