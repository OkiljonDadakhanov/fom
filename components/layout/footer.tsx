"use client";

import Link from "next/link";
import { useState } from "react";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ExternalLink, MapPin, Phone, Mail, Send } from "lucide-react";

export function Footer() {
  // ---- Form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "+998",
    message: "",
    company: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Full name is required";
    if (!form.phone.trim()) e.phone = "Phone number is required";
    if (!form.message.trim()) e.message = "Message is required";
    // email is optional by request
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setIsSuccess(false);
    try {
      const res = await fetch("/api/telegram/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.ok) {
        setIsSuccess(true);
        setForm({
          name: "",
          email: "",
          phone: "+998",
          message: "",
          company: "",
        });
        // auto-hide success after a few seconds
        setTimeout(() => setIsSuccess(false), 4000);
      } else {
        alert(data.error || "Failed to send. Please try again later.");
      }
    } catch (e) {
      alert("Failed to send. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="w-full py-16 bg-[#0E3150] dark:bg-[#010B2B] text-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column — Contact Info + Single-branch Map */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Contacts</h2>
              <p className="text-gray-300 max-w-md">
                Contact us and visit our center. The location of our main branch
                is shown on the map below.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-300 mt-1" />
                <div>
                  <span className="text-gray-400 block text-sm">Location</span>
                  <span className="leading-snug">
                    100099, Otchopar-1, Darvozakent ko‘chasi, 60-uy, Yunusobod
                    tumani, Toshkent, O‘zbekiston
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
            >
              <Button className="w-full mt-3 bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-800 hover:to-blue-600">
                <ExternalLink className="mr-2 h-4 w-4" />
                Get direction
              </Button>
            </a>
          </div>

          {/* Right Column — Contact Form + Nav */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-8">Contact Us</h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name *"
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className={`w-full p-3 bg-transparent border rounded-md focus:outline-none ${
                      errors.name
                        ? "border-red-500"
                        : "border-gray-600 focus:border-white"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email is optional */}
                <div>
                  <input
                    type="email"
                    placeholder="Email (optional)"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className="w-full p-3 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:border-white"
                  />
                </div>

                {/* Company (optional) */}
                <div>
                  <input
                    type="text"
                    placeholder="Company (optional)"
                    value={form.company}
                    onChange={(e) => handleChange("company", e.target.value)}
                    className="w-full p-3 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:border-white"
                  />
                </div>

                {/* Phone like the other page */}
                <div>
                  <PhoneInput
                    country={"uz"}
                    value={form.phone}
                    onChange={(value) => handleChange("phone", value)}
                    inputProps={{
                      name: "phone",
                      required: true,
                    }}
                    containerStyle={{ width: "100%" }}
                    inputStyle={{
                      width: "100%",
                      height: "48px", // match other inputs
                      backgroundColor: "transparent",
                      color: "white",
                      border: errors.phone
                        ? "1px solid #f87171"
                        : "1px solid #4b5563", // red-500 or gray-600
                      borderRadius: "0.375rem", // rounded-md
                      paddingLeft: "48px", // makes space for flag dropdown
                    }}
                    buttonStyle={{
                      border: "none",
                      background: "transparent",
                    }}
                    dropdownStyle={{ maxHeight: "150px" }}
                    enableSearch
                  />

                  {errors.phone && (
                    <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <textarea
                    placeholder="Message *"
                    rows={4}
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    className={`w-full p-3 bg-transparent border rounded-md focus:outline-none resize-none ${
                      errors.message
                        ? "border-red-500"
                        : "border-gray-600 focus:border-white"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-[#0E3150] hover:bg-gray-200 cursor-pointer"
                >
                  <Send className="mr-2 h-4 w-4 " />
                  {isSubmitting ? "Sending..." : "Send"}
                </Button>

                {isSuccess && (
                  <p className="text-green-400 text-sm text-center animate-pulse">
                    ✅ Your message has been sent!
                  </p>
                )}
              </form>
            </div>

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
          <p className="text-sm text-gray-400">2025 All rights reserved</p>
          <div className="flex gap-8 text-sm">
            <Link
              href="/terms"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Terms &amp; Conditions
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
