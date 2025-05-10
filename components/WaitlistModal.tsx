"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import Image from "next/image";

export function WaitlistModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/mgvkzgzd", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setName("");
        setEmail("");
      } else {
        const data = await response.json();
        console.error("Form submission failed:", data);
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleShare = () => {
    const shareData = {
      title: "Join Dottra 🎉",
      text: "Dottra is launching soon! I just joined the waitlist — you should too 👇",
      url: "https://dottra.co",
    };

    if (navigator.share) {
      navigator.share(shareData).catch((err) => {
        console.error("Share failed:", err);
      });
    } else {
      navigator.clipboard.writeText(shareData.url);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl p-8 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Logo Section */}
        <div className="flex items-center gap-3 mb-6">
          <Image
            src="/logo.png?height=40&width=40"
            alt="Dottra Logo"
            width={40}
            height={40}
            className="rounded"
          />
          <span className="text-2xl font-bold text-[#0047AB]">Dottra</span>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Join Our Waitlist
        </h3>

        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center gap-4 py-8 text-center animate-in fade-in zoom-in duration-500">
            <div className="bg-green-100 text-green-700 rounded-full p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <h4 className="text-xl font-semibold text-gray-800">
              You're on the waitlist!
            </h4>
            <p className="text-gray-600 text-sm max-w-xs">
              Thanks for signing up. We’ll notify you as soon as Dottra launches
              and keep you updated.
            </p>

            <div className="flex flex-col gap-2 w-full pt-2">
              <Button
                onClick={handleShare}
                className="w-full bg-green-600 hover:bg-green-700 text-white"
              >
                Share with Friends
              </Button>
              <Button
                onClick={onClose}
                variant="outline"
                className="w-full border-gray-300 text-gray-700"
              >
                Close
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name
              </label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className="border-[#0047AB]/30 focus-visible:ring-[#0047AB]"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="border-[#0047AB]/30 focus-visible:ring-[#0047AB]"
                required
              />
            </div>

            <div className="text-sm text-gray-500 space-y-2">
              <p>
                By joining the waitlist, you agree to our
                <a
                  href="/terms"
                  className="text-[#0047AB] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms of Service
                </a>
                and
                <a
                  href="/privacy"
                  className="text-[#0047AB] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
                .
              </p>
              <p>
                We'll only use your email to notify you when we launch and share
                important updates. No spam, ever.
              </p>
            </div>

            <div className="pt-4">
              <Button
                type="submit"
                className="w-full bg-[#0047AB] hover:bg-[#003b8e] relative"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="animate-pulse">Submitting...</span>
                ) : (
                  "Join Waitlist"
                )}
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
