import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="w-full py-16 bg-[#0E3150] dark:bg-[#010B2B] text-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Contacts</h2>
              <p className="text-gray-300 max-w-md">
                Ut sagittis suscipit in viverra. Felis adipiscing varius dictum
                non orci id. Cras mattis volutpat placerat nisl libero eleifend
                quis bibendum.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-gray-400 min-w-[80px]">Phone :</span>
                <span>+998 (71) 202-41-11</span>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-gray-400 min-w-[80px]">Email :</span>
                <span>info@newuu.uz</span>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-gray-400 min-w-[80px]">Location :</span>
                <span>Mirzo Ulugbek, Movarounnahri 1</span>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="w-full h-40 bg-gray-700 rounded-md"></div>
          </div>

          {/* Right Column - Contact Form and Navigation */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-8">Contact Us</h2>

              {/* Contact Form */}
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-3 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:border-white"
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:border-white"
                />

                <textarea
                  placeholder="Context"
                  rows={4}
                  className="w-full p-3 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:border-white resize-none"
                ></textarea>

                <Button className="w-full bg-white text-[#0E3150] hover:bg-gray-200">
                  Send
                </Button>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <Link
                href="/"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link
                href="/statistics"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Statistics
              </Link>
              <Link
                href="/news"
                className="text-gray-300 hover:text-white transition-colors"
              >
                News / Events
              </Link>
              <Link
                href="/olimpiads"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Olimpiads
              </Link>
              <Link
                href="/methodology"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Methodology
              </Link>
              <Link
                href="/partners"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Partners
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">2025 Alright Reserved</p>
          <div className="flex gap-8 text-sm">
            <Link
              href="/terms"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
