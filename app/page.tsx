"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Database,
  Globe,
  LineChart,
  Lock,
  Users,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { WaitlistModal } from "@/components/WaitlistModal";

export default function Home() {
  const [showWaitlistModal, setShowWaitlistModal] = useState(false);

  return (
    <div className="flex min-h-screen flex-col relative">
      <header className="sticky top-0 z-40 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png?height=40&width=40"
              alt="Dottra Logo"
              width={40}
              height={40}
              className="rounded"
            />
            <span className="text-2xl font-bold text-[#0047AB]">Dottra</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#features"
              className="text-sm font-medium text-gray-600 hover:text-[#0047AB]"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium text-gray-600 hover:text-[#0047AB]"
            >
              How It Works
            </Link>
            <Link
              href="#use-cases"
              className="text-sm font-medium text-gray-600 hover:text-[#0047AB]"
            >
              Use Cases
            </Link>
            <Link
              href="#impact"
              className="text-sm font-medium text-gray-600 hover:text-[#0047AB]"
            >
              Social Impact
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-gray-600 hover:text-[#0047AB]"
            >
              Contact Us
            </Link>
          </nav>
          <div>
            <Button
              className="bg-[#0047AB] hover:bg-[#003b8e]"
              onClick={() => setShowWaitlistModal(true)}
            >
              Join Waitlist
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white py-20 md:py-32">
          <div className="container relative z-10">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl md:text-6xl">
                  Decentralized Data
                  <span className="text-[#0047AB]">Aggregation</span> Platform
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl">
                  Capture and structure rich, granular data from
                  underrepresented communities, empowering better
                  decision-making through detailed, verifiable, and distributed
                  data collection.
                </p>
                <div className="max-w-md space-y-2">
                  <p className="text-sm font-medium text-[#0047AB]">
                    Join our waitlist to be the first to know when we launch
                  </p>
                  <form
                    className="flex gap-2"
                    onSubmit={(e) => {
                      e.preventDefault();
                      setShowWaitlistModal(true);
                    }}
                  >
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 border-[#0047AB]/30 focus-visible:ring-[#0047AB] cursor-pointer select-none"
                      onFocus={(e) => e.target.blur()}
                      readOnly
                      tabIndex={-1}
                    />
                    <Button
                      type="submit"
                      className="bg-[#0047AB] hover:bg-[#003b8e]"
                    >
                      Join Waitlist
                    </Button>
                  </form>
                  <p className="text-xs text-gray-500">
                    By signing up, you agree to our
                    <Link href="#" className="underline hover:text-[#0047AB]">
                      Terms
                    </Link>
                    and
                    <Link href="#" className="underline hover:text-[#0047AB]">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </div>
              </div>
              <div className="relative lg:pl-8">
                <div className="relative overflow-hidden rounded-xl shadow-xl">
                  <Image
                    src="/hero-bg.webp?height=600&width=800"
                    alt="Dottra Platform"
                    width={800}
                    height={600}
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 lg:block">
                  <div className="bg-[#0047AB] text-white p-4 rounded-lg shadow-lg">
                    <p className="text-sm font-medium">
                      Trusted by organizations worldwide
                    </p>
                    <p className="text-xs opacity-80">
                      Governments • NGOs • Research Institutions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#0047AB]/5 to-transparent"></div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-gradient-to-br from-[#0047AB]/10 to-transparent">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="order-2 lg:order-1">
                <div className="space-y-6">
                  <div className="inline-block px-4 py-1 bg-[#0047AB]/10 text-[#0047AB] font-medium rounded-full text-sm">
                    Our Mission
                  </div>
                  <h2 className="text-3xl font-bold text-black sm:text-4xl">
                    Democratizing Data Through Decentralization
                  </h2>
                  <p className="text-lg text-gray-600">
                    At Dottra, we're revolutionizing data collection by shifting
                    from slow, expensive centralized methods to rapid,
                    community-powered decentralized approaches that capture
                    real-time insights from underrepresented populations.
                  </p>

                  <div className="space-y-4 pt-2">
                    <div className="flex gap-4 items-start">
                      <div className="w-24 h-10 rounded-full bg-[#0047AB] text-white flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-black">
                          Empower Communities
                        </h3>
                        <p className="text-gray-600">
                          We enable communities to tell their own stories
                          through data in days, not years, giving voice to those
                          who have been historically overlooked.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="w-24 h-10 rounded-full bg-[#0047AB] text-white flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-black">
                          Accelerate Impact
                        </h3>
                        <p className="text-gray-600">
                          Our decentralized approach delivers actionable
                          insights up to 10x faster than traditional methods,
                          enabling rapid response to community needs.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="w-24 h-10 rounded-full bg-[#0047AB] text-white flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-black">
                          Ensure Trust
                        </h3>
                        <p className="text-gray-600">
                          Our decentralized validation system ensures data
                          integrity while maintaining community ownership,
                          creating a more equitable information ecosystem.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative">
                  <div className="overflow-hidden rounded-xl">
                    <Image
                      src="/bulb.webp?height=600&width=600"
                      alt="Our Mission"
                      width={600}
                      height={600}
                      className="object-cover rounded-xl"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 lg:block">
                    <div className="bg-[#0047AB] text-white p-4 rounded-lg shadow-lg max-w-xs">
                      <p className="text-sm font-medium">
                        "Decentralized data collection is not just faster—it's
                        more democratic, inclusive, and accurate."
                      </p>
                      <p className="text-xs opacity-80 mt-1">
                        — Dottra Founding Principle
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-black">
                Traditional <span className="text-[#0047AB]">vs</span>.
                Decentralized Approach
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                See how Dottra's decentralized data collection revolutionizes
                the speed and quality of insights compared to traditional
                methods.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-gray-700"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-black">
                    Traditional Methods
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Centralized data collection that takes months or years to
                  complete and process.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4 text-gray-700"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18 18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-black">Time-Consuming</h4>
                      <p className="text-sm text-gray-600">
                        National surveys take 1-2 years from planning to
                        publication
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4 text-gray-700"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18 18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-black">Expensive</h4>
                      <p className="text-sm text-gray-600">
                        High costs for field teams, equipment, and
                        administration
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4 text-gray-700"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18 18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-black">
                        Limited Representation
                      </h4>
                      <p className="text-sm text-gray-600">
                        Misses micro-demographics and niche populations
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4 text-gray-700"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18 18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-black">
                        Outdated on Arrival
                      </h4>
                      <p className="text-sm text-gray-600">
                        Data is often obsolete by the time it's published
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border-2 border-[#0047AB]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#0047AB]/10 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-[#0047AB]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#0047AB]">
                    Dottra's Approach
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Decentralized data collection that delivers insights in days
                  or weeks, not months or years.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#0047AB]/10 flex-shrink-0 flex items-center justify-center mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4 text-[#0047AB]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-black">
                        Rapid Collection
                      </h4>
                      <p className="text-sm text-gray-600">
                        Community-driven data gathering in days or weeks
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#0047AB]/10 flex-shrink-0 flex items-center justify-center mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4 text-[#0047AB]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-black">Cost-Effective</h4>
                      <p className="text-sm text-gray-600">
                        Significantly lower costs through distributed collection
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#0047AB]/10 flex-shrink-0 flex items-center justify-center mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4 text-[#0047AB]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-black">
                        Inclusive Representation
                      </h4>
                      <p className="text-sm text-gray-600">
                        Captures data from previously invisible communities
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#0047AB]/10 flex-shrink-0 flex items-center justify-center mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4 text-[#0047AB]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-black">
                        Real-Time Insights
                      </h4>
                      <p className="text-sm text-gray-600">
                        Continuous data flow enables immediate decision-making
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Laplace Quote Section */}
        <section className="py-16 bg-gradient-to-br from-[#0047AB]/5 to-transparent">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-xl border-l-4 border-[#0047AB] shadow-sm relative">
                {/* <div className="absolute -top-0.5 -left-0.5 text-6xl text-[#0047AB] opacity-30">"</div> */}
                <blockquote className="text-gray-700 italic relative z-10">
                  <p className="mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-quote-icon lucide-quote"
                    >
                      <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                      <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                    </svg>
                    We may regard the present state of the universe as the
                    effect of its past and the cause of its future. An intellect
                    which at a certain moment would know all forces that set
                    nature in motion, and all positions of all items of which
                    nature is composed — if this intellect were also vast enough
                    to submit these data to analysis — it would embrace in a
                    single formula the movements of the greatest bodies of the
                    universe and those of the tiniest atom; for such an
                    intellect nothing would be uncertain and the future just
                    like the past would be present before its eyes.
                  </p>
                  <footer className="text-right font-medium text-black">
                    — Pierre-Simon Laplace, 1814
                  </footer>
                </blockquote>
                {/* <div className="absolute -bottom-4 -right-4 text-6xl text-[#0047AB] opacity-30">"</div> */}
              </div>
              <p className="text-center mt-8 text-lg text-gray-600 italic">
                At Dottra, we believe that better data leads to better
                predictions and outcomes for all communities.
              </p>
              <div className="flex justify-center mt-8">
                <Button
                  className="bg-[#0047AB] hover:bg-[#003b8e]"
                  onClick={() => setShowWaitlistModal(true)}
                >
                  Join Our Mission
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="bg-gray-50 py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-black sm:text-4xl">
                Why Choose Dottra?
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Our platform revolutionizes how data is collected, verified, and
                utilized from underrepresented communities.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-[#0047AB]/10 rounded-lg flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-[#0047AB]" />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">
                  Decentralized Collection
                </h3>
                <p className="text-gray-600">
                  Enable individuals and communities to contribute structured
                  datasets in a secure, distributed environment.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-[#0047AB]/10 rounded-lg flex items-center justify-center mb-4">
                  <Lock className="h-6 w-6 text-[#0047AB]" />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">
                  Verified & Trustworthy
                </h3>
                <p className="text-gray-600">
                  Uses statistical methods and machine learning to rigorously
                  validate submissions, ensuring data integrity.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-[#0047AB]/10 rounded-lg flex items-center justify-center mb-4">
                  <LineChart className="h-6 w-6 text-[#0047AB]" />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">
                  Real-Time Insights
                </h3>
                <p className="text-gray-600">
                  Access timely, localized data that improves program design and
                  resource distribution decisions.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-[#0047AB]/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-[#0047AB]" />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">
                  Community Empowerment
                </h3>
                <p className="text-gray-600">
                  Shifts power from centralized institutions to the people
                  contributing the data, fostering transparency and equity.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-[#0047AB]/10 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-[#0047AB]" />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">
                  Global Accessibility
                </h3>
                <p className="text-gray-600">
                  Makes data from niche or overlooked population segments
                  accessible to decision-makers worldwide.
                </p>
              </div>
              <div className="bg-[#0047AB] p-8 rounded-xl shadow-sm text-white">
                <h3 className="text-xl font-bold mb-4">
                  Ready to transform how you collect and use data?
                </h3>
                <p className="mb-6 opacity-90">
                  Join our waitlist today and be among the first to experience
                  Dottra.
                </p>
                <Button
                  variant="outline"
                  className="bg-white text-[#0047AB] hover:bg-gray-100 border-white"
                  onClick={() => setShowWaitlistModal(true)}
                >
                  Join Waitlist <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-black sm:text-4xl">
                How Dottra Works
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Our platform simplifies the process of collecting, verifying,
                and utilizing data from underrepresented communities.
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="order-2 lg:order-1">
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0047AB] text-white flex items-center justify-center font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2">
                        Data Contribution
                      </h3>
                      <p className="text-gray-600">
                        Communities and individuals submit structured data
                        through user-friendly forms with built-in validation.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0047AB] text-white flex items-center justify-center font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2">
                        Verification & Processing
                      </h3>
                      <p className="text-gray-600">
                        Our system uses statistical methods and machine learning
                        to verify trends and detect inconsistencies.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0047AB] text-white flex items-center justify-center font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2">
                        Secure Storage
                      </h3>
                      <p className="text-gray-600">
                        Verified data is securely stored with metadata, tagging,
                        and version tracking to maintain integrity.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0047AB] text-white flex items-center justify-center font-bold">
                      4
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2">
                        Analysis & Insights
                      </h3>
                      <p className="text-gray-600">
                        Users access real-time dashboards and reports to derive
                        actionable insights for decision-making.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative">
                  <div className="overflow-hidden rounded-xl">
                    <Image
                      src="/how-it-works.webp?height=600&width=600"
                      alt="How Dottra Works"
                      width={600}
                      height={600}
                      className="object-cover rounded-xl"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 lg:block">
                    <div className="bg-black text-white p-4 rounded-lg shadow-lg">
                      <p className="text-sm font-medium">
                        Built on Laravel & Material UI
                      </p>
                      <p className="text-xs opacity-80">
                        Robust architecture with IPFS integration
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section id="use-cases" className="bg-gray-50 py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-black sm:text-4xl">
                Who Benefits from Dottra?
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Our platform serves a diverse range of stakeholders who need
                accurate, granular data from underrepresented communities.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-black mb-4">
                  Government Bodies
                </h3>
                <p className="text-gray-600 mb-4">
                  Optimize programs like the Constituency Development Fund (CDF)
                  by allocating resources based on verified community needs
                  rather than outdated data.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm italic text-gray-600">
                    "Dottra would enable us to make evidence-based decisions for
                    infrastructure projects at a granular level we've never had
                    access to before."
                  </p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-black mb-4">
                  NGOs & Humanitarian Organizations
                </h3>
                <p className="text-gray-600 mb-4">
                  Plan more effective interventions by understanding actual
                  conditions on the ground in education, healthcare, or
                  sanitation sectors.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm italic text-gray-600">
                    "With Dottra, we could track food insecurity in real-time
                    and adjust our aid distribution accordingly, maximizing our
                    impact."
                  </p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-black mb-4">
                  Research Institutions
                </h3>
                <p className="text-gray-600 mb-4">
                  Access high-resolution datasets from niche demographics that
                  are typically overlooked in traditional research
                  methodologies.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm italic text-gray-600">
                    "Dottra would revolutionize our ability to study
                    marginalized communities with unprecedented detail and
                    accuracy."
                  </p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-black mb-4">
                  Social Impact Organizations
                </h3>
                <p className="text-gray-600 mb-4">
                  Scale initiatives with verified, community-driven insights
                  that improve program design and resource allocation.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm italic text-gray-600">
                    "The granular data from Dottra would help us identify
                    exactly where our clean water initiatives would have the
                    greatest impact."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Impact Section */}
        <section id="impact" className="py-20">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-xl">
                  <Image
                    src="/comms.png?height=600&width=800"
                    alt="Social Impact"
                    width={800}
                    height={600}
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-black sm:text-4xl">
                  Creating Positive Social Impact
                </h2>
                <p className="text-lg text-gray-600">
                  Dottra empowers underrepresented communities by enabling them
                  to take control of their data and tell their own stories.
                </p>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0047AB]/20 text-[#0047AB] flex items-center justify-center">
                      <ChevronRight className="h-4 w-4" />
                    </div>
                    <p className="text-gray-600">
                      <span className="font-medium text-black">
                        Community Empowerment:
                      </span>
                      Communities share their realities in real-time instead of
                      waiting for costly national surveys.
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0047AB]/20 text-[#0047AB] flex items-center justify-center">
                      <ChevronRight className="h-4 w-4" />
                    </div>
                    <p className="text-gray-600">
                      <span className="font-medium text-black">
                        Transparency & Equity:
                      </span>
                      Shifts power from centralized institutions to the people
                      contributing the data.
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0047AB]/20 text-[#0047AB] flex items-center justify-center">
                      <ChevronRight className="h-4 w-4" />
                    </div>
                    <p className="text-gray-600">
                      <span className="font-medium text-black">
                        Better Resource Allocation:
                      </span>
                      Ensures funds and services are directed based on actual
                      needs rather than assumptions.
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0047AB]/20 text-[#0047AB] flex items-center justify-center">
                      <ChevronRight className="h-4 w-4" />
                    </div>
                    <p className="text-gray-600">
                      <span className="font-medium text-black">
                        Inclusive Development:
                      </span>
                      Builds a model that listens, adapts, and responds to those
                      most often ignored.
                    </p>
                  </li>
                </ul>
                <div className="pt-4">
                  <Button
                    className="bg-[#0047AB] hover:bg-[#003b8e]"
                    onClick={() => setShowWaitlistModal(true)}
                  >
                    Join Our Mission
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section
          id="contact"
          className="py-20 bg-gradient-to-br from-[#0047AB]/5 to-transparent"
        >
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-black sm:text-4xl">
                Contact Us
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Have questions about Dottra? We'd love to hear from you. Reach
                out to our team using any of the methods below.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-black mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#0047AB]/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="h-5 w-5 text-[#0047AB]" />
                      </div>
                      <div>
                        <h4 className="font-medium text-black">Email</h4>
                        <a
                          href="mailto:muswalo@dottra.co"
                          className="text-[#0047AB] hover:underline"
                        >
                          muswalo@dottra.co
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#0047AB]/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="h-5 w-5 text-[#0047AB]" />
                      </div>
                      <div>
                        <h4 className="font-medium text-black">Phone</h4>
                        <a
                          href="tel:+1234567890"
                          className="text-gray-600 hover:text-[#0047AB]"
                        >
                          +260 973 400 223
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#0047AB]/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-5 w-5 text-[#0047AB]" />
                      </div>
                      <div>
                        <h4 className="font-medium text-black">Office</h4>
                        <address className="text-gray-600 not-italic">
                          Dottra HQ, Lusaka, Zambia
                        </address>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#0047AB] p-8 rounded-xl shadow-sm text-white">
                  <h3 className="text-xl font-bold mb-4">Join Our Waitlist</h3>
                  <p className="mb-6 opacity-90">
                    Be among the first to experience Dottra when we launch. Sign
                    up for our waitlist today.
                  </p>
                  <form
                    className="space-y-3"
                    onSubmit={(e) => {
                      e.preventDefault();
                      setShowWaitlistModal(true);
                    }}
                  >
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:ring-white/50 cursor-pointer select-none"
                      readOnly
                      onFocus={(e) => e.target.blur()}
                      tabIndex={-1}
                    />
                    <Button
                      type="submit"
                      variant="secondary"
                      className="w-full bg-white text-[#0047AB] hover:bg-gray-100"
                    >
                      Join Waitlist
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#0047AB] text-white py-20">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto space-y-6">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Be Part of the Data Revolution
              </h2>
              <p className="text-lg opacity-90">
                Join our waitlist today and be among the first to experience how
                Dottra is transforming data collection and utilization for
                underrepresented communities.
              </p>
              <div className="max-w-md mx-auto space-y-2">
                <form
                  className="flex gap-2"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setShowWaitlistModal(true);
                  }}
                >
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:ring-white/50 cursor-pointer select-none"
                    readOnly
                    onFocus={(e) => e.target.blur()}
                    tabIndex={-1}
                  />
                  <Button
                    type="submit"
                    variant="secondary"
                    className="bg-white text-[#0047AB] hover:bg-gray-100"
                  >
                    Join Waitlist
                  </Button>
                </form>
                <p className="text-xs opacity-70">
                  By signing up, you agree to our
                  <Link href="#" className="underline hover:opacity-100">
                    Terms
                  </Link>
                  and
                  <Link href="#" className="underline hover:opacity-100">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-black sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Have questions about Dottra? Find answers to the most common
                questions below.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-black mb-2">
                  What makes Dottra different from traditional data collection?
                </h3>
                <p className="text-gray-600">
                  Dottra is decentralized, allowing communities to contribute
                  their own data rather than relying on top-down collection. It
                  uses advanced validation methods to ensure accuracy and
                  provides real-time insights.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-black mb-2">
                  How does Dottra ensure data quality and integrity?
                </h3>
                <p className="text-gray-600">
                  We use statistical methods and machine learning to verify
                  submissions, detect inconsistencies, and validate trends. Our
                  system includes rigorous validation rules and metadata
                  tracking.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-black mb-2">
                  When will Dottra be available?
                </h3>
                <p className="text-gray-600">
                  Dottra is currently in pre-development stage. Join our
                  waitlist to be notified when we launch and to get early access
                  to the platform.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-black mb-2">
                  What types of organizations can benefit from Dottra?
                </h3>
                <p className="text-gray-600">
                  Dottra serves governments, NGOs, research institutions, and
                  social impact organizations that need detailed, verified data
                  from underrepresented communities.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/logo-black.png?height=40&width=40"
                  alt="Dottra Logo"
                  width={40}
                  height={40}
                  className="rounded bg-white"
                />
                <span className="text-2xl font-bold text-white">Dottra</span>
              </div>
              <p className="text-gray-400 text-sm">
                A decentralized data aggregation platform empowering better
                decision-making through detailed, verifiable data collection.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Platform</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#features"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#how-it-works"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link
                    href="#use-cases"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    Use Cases
                  </Link>
                </li>
                <li>
                  <Link
                    href="#impact"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    Social Impact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Join Our Waitlist</h3>
              <form
                className="space-y-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  setShowWaitlistModal(true);
                }}
              >
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus-visible:ring-[#0047AB] cursor-pointer select-none"
                  readOnly
                  onFocus={(e) => e.target.blur()}
                  tabIndex={-1}
                />
                <Button
                  type="submit"
                  className="w-full bg-[#0047AB] hover:bg-[#003b8e]"
                >
                  Join Waitlist
                </Button>
              </form>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Dottra. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/260973400223"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Contact us on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="white"
          stroke="white"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375a9.869 9.869 0 0 1-1.516-5.26c0-5.445 4.455-9.885 9.942-9.885a9.865 9.865 0 0 1 7.022 2.91 9.788 9.788 0 0 1 2.909 6.99c-.004 5.444-4.46 9.885-9.935 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652a12.062 12.062 0 0 0 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.246-6.165-3.498-8.445" />
        </svg>
      </a>

      <WaitlistModal
        isOpen={showWaitlistModal}
        onClose={() => setShowWaitlistModal(false)}
      />
    </div>
  );
}
