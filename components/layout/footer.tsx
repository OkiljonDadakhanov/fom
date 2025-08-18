"use client";

import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ExternalLink, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full py-16 bg-[#0E3150] dark:bg-[#010B2B] text-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column — Contact Info + Single-branch Map */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Contacts</h2>
              <p className="text-gray-300 max-w-md">
                Biz bilan bog‘laning va markazimizga tashrif buyuring. Quyidagi xaritada asosiy filialimiz joylashuvi
                ko‘rsatilgan.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-300 mt-1" />
                <div>
                  <span className="text-gray-400 block text-sm">Location</span>
                  <span className="leading-snug">
                    100099, Otchopar-1, Darvozakent ko‘chasi, 60-uy, Yunusobod tumani, Toshkent, O‘zbekiston
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-blue-300 mt-1" />
                <div>
                  <span className="text-gray-400 block text-sm">Phone</span>
                  <span>+998 77 550 33 66</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-blue-300 mt-1" />
                <div>
                  <span className="text-gray-400 block text-sm">Email</span>
                  <span>info@olympcenter.uz</span>
                </div>
              </div>
            </div>

            {/* Single-branch Google Maps embed */}
            <div className="relative rounded-lg overflow-hidden shadow-lg ring-1 ring-white/10">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-600 to-blue-400 opacity-20 blur-md pointer-events-none" />
              <div className="relative w-full h-44 md:h-64">
                <iframe
                  title="Fan Olimpiadalari Markazi"
                  className="w-full h-full"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d748.7898071054376!2d69.29949832101188!3d41.348892668938966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef5fa8d575101%3A0xbceea98f74bfe973!2sToshkent%20viloyati%20O%CA%BBqituvchilari%20malaka%20oshirish!5e0!3m2!1sen!2s!4v1745846060244!5m2!1sen!2s"
                />
              </div>
            </div>

            <a
              href="https://www.google.com/maps/place/Toshkent+viloyati+O%CA%BBqituvchilari+malaka+oshirish/@41.348892668938966,69.29949832101188,19z/data=!4m6!3m5!1s0x38aef5fa8d575101:0xbceea98f74bfe973!8m2!3d41.3488927!4d69.2994983!16s%2Fg%2F11mcd9q8zf"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button className="w-full mt-3 bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-800 hover:to-blue-600">
                <ExternalLink className="mr-2 h-4 w-4" />
                Yo‘nalishni olish
              </Button>
            </a>
          </div>

          {/* Right Column — Contact Form + Nav */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-8">Contact Us</h2>

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
                  placeholder="Message"
                  rows={4}
                  className="w-full p-3 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:border-white resize-none"
                />
                <Button className="w-full bg-white text-[#0E3150] hover:bg-gray-200">Send</Button>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/statistics" className="text-gray-300 hover:text-white transition-colors">
                Statistics
              </Link>
              <Link href="/news" className="text-gray-300 hover:text-white transition-colors">
                News / Events
              </Link>
              <Link href="/olimpiads" className="text-gray-300 hover:text-white transition-colors">
                Olimpiads
              </Link>
              <Link href="/methodology" className="text-gray-300 hover:text-white transition-colors">
                Methodology
              </Link>
              <Link href="/partners" className="text-gray-300 hover:text-white transition-colors">
                Partners
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">2025 All rights reserved</p>
          <div className="flex gap-8 text-sm">
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
