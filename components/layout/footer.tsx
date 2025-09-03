"use client";

import Link from "next/link";
import { useState } from "react";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ExternalLink, MapPin, Phone, Mail, Send, Globe, Users, FileText, ChartArea } from "lucide-react";

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

  const quickLinks = [
    { href: "/", label: "Home", icon: Globe },
    { href: "/statistics", label: "Statistics", icon: ChartArea },
    { href: "/olimpiads", label: "Olimpiads", icon: Users },
    { href: "/methodology", label: "Methodology", icon: FileText },
    { href: "/partners", label: "Partners", icon: Users },
    { href: "/about", label: "About", icon: Globe },
  ];

  return (
    <footer
      className="w-full py-20 bg-gradient-to-br from-[#0E3150] via-[#0E3150] to-[#1a4a7a] dark:from-[#010B2B] dark:via-[#010B2B] dark:to-[#1a2a4a] text-white scroll-mt-20"
      id="contact"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16" id="contact">
          {/* Left Column — Contact Info + Single-branch Map */}
          <div className="space-y-10">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Get in Touch
              </h2>
              <p className="text-gray-300 max-w-lg text-lg leading-relaxed">
                Contact us and visit our center. The location of our main branch
                is shown on the map below.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="p-3 rounded-lg bg-blue-500/20">
                  <MapPin className="h-6 w-6 text-blue-300" />
                </div>
                <div className="space-y-1">
                  <span className="text-blue-200 block text-sm font-medium uppercase tracking-wider">Location</span>
                  <span className="leading-relaxed text-gray-200">
                    100099, Otchopar-1, Darvozakent ko'chasi, 60-uy, Yunusobod
                    tumani, Toshkent, O'zbekiston
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="p-3 rounded-lg bg-green-500/20">
                  <Phone className="h-6 w-6 text-green-300" />
                </div>
                <div className="space-y-1">
                  <span className="text-green-200 block text-sm font-medium uppercase tracking-wider">Phone</span>
                  <span className="text-gray-200 text-lg font-medium">+998 77 550 33 66</span>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="p-3 rounded-lg bg-purple-500/20">
                  <Mail className="h-6 w-6 text-purple-300" />
                </div>
                <div className="space-y-1">
                  <span className="text-purple-200 block text-sm font-medium uppercase tracking-wider">Email</span>
                  <span className="text-gray-200 text-lg font-medium">info@olympcenter.uz</span>
                </div>
              </div>
            </div>

            {/* Single-branch Google Maps embed */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/20">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-400 opacity-30 blur-lg pointer-events-none" />
              <div className="relative w-full h-48 md:h-64">
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
              <Button className="w-full py-4 text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02]">
                <ExternalLink className="mr-3 h-5 w-5" />
                Get Directions
              </Button>
            </a>
          </div>

          {/* Right Column — Contact Form + Nav */}
          <div className="space-y-10">
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
                <p className="text-gray-300 text-lg">Send us a message and we'll get back to you soon.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <input
                      type="text"
                      placeholder="Full Name *"
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className={`w-full p-4 bg-white/5 backdrop-blur-sm border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all duration-200 ${errors.name
                          ? "border-red-400 focus:border-red-400"
                          : "border-white/20 focus:border-blue-400/50"
                        }`}
                    />
                    {errors.name && (
                      <p className="text-red-300 text-sm">{errors.name}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <input
                      type="email"
                      placeholder="Email (optional)"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className="w-full p-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <input
                    type="text"
                    placeholder="Company (optional)"
                    value={form.company}
                    onChange={(e) => handleChange("company", e.target.value)}
                    className="w-full p-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 transition-all duration-200"
                  />
                </div>

                {/* Phone like the other page */}
                <div className="space-y-2">
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
                      height: "56px", // match other inputs
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      color: "white",
                      border: errors.phone
                        ? "1px solid #f87171"
                        : "1px solid rgba(255, 255, 255, 0.2)",
                      borderRadius: "0.75rem", // rounded-xl
                      paddingLeft: "56px", // makes space for flag dropdown
                      fontSize: "16px",
                    }}
                    buttonStyle={{
                      border: "none",
                      background: "transparent",
                    }}
                    dropdownStyle={{ maxHeight: "150px" }}
                    enableSearch
                  />

                  {errors.phone && (
                    <p className="text-red-300 text-sm">{errors.phone}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <textarea
                    placeholder="Message *"
                    rows={5}
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    className={`w-full p-4 bg-white/5 backdrop-blur-sm border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400/50 resize-none transition-all duration-200 ${errors.message
                        ? "border-red-400 focus:border-red-400"
                        : "border-white/20 focus:border-blue-400/50"
                      }`}
                  />
                  {errors.message && (
                    <p className="text-red-300 text-sm">
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 text-lg font-semibold bg-gradient-to-r from-white to-gray-100 text-[#0E3150] hover:from-gray-100 hover:to-gray-200 cursor-pointer shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02]"
                >
                  <Send className="mr-3 h-5 w-5" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>

                {isSuccess && (
                  <div className="p-4 rounded-xl bg-green-500/20 border border-green-400/30 text-center">
                    <p className="text-green-300 text-lg font-medium">
                      ✅ Your message has been sent! Soon we will contact you.
                    </p>
                  </div>
                )}
              </form>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-center lg:text-left">Quick Links</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {quickLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group flex items-center gap-3 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200 hover:scale-105"
                  >
                    <div className="p-2 rounded-lg bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors duration-200">
                      <link.icon className="w-4 h-4 text-blue-300" />
                    </div>
                    <span className="text-gray-200 group-hover:text-white font-medium transition-colors duration-200">
                      {link.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-20 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-center md:text-left">
            © 2025 Science Olympiad Center. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm">
            <Link
              href="/terms"
              className="text-gray-400 hover:text-white transition-colors duration-200 hover:scale-105"
            >
              Terms &amp; Conditions
            </Link>
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-white transition-colors duration-200 hover:scale-105"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
