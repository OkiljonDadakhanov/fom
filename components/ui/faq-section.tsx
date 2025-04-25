"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/container";
import { ChevronDown, ChevronUp, ChevronRight } from "lucide-react";

// Sample FAQ data
const faqItems = [
  {
    id: 1,
    question: "How do I register for a science olympiad?",
    answer:
      "Registration for our science olympiads is done through our online portal. Simply create an account, select the olympiad you're interested in, and follow the registration steps. Some olympiads may have specific eligibility requirements, so be sure to check those before registering.",
  },
  {
    id: 2,
    question: "What age groups can participate in the olympiads?",
    answer:
      "We offer olympiads for various age groups, from elementary school to high school students. Each olympiad has specific age or grade requirements, which are listed on the individual olympiad pages. We also have special programs for exceptionally talented younger students.",
  },
  {
    id: 3,
    question: "How can I prepare for a science olympiad?",
    answer:
      "We offer comprehensive preparation materials including practice tests, study guides, and online courses. Additionally, we run regular preparation workshops and coaching sessions. Our resources section contains free materials to help you get started.",
  },
  {
    id: 4,
    question: "Are there any fees to participate in the olympiads?",
    answer:
      "Most of our olympiads have a nominal registration fee that helps cover administrative costs. However, we offer fee waivers for students with financial need. Some of our introductory and local olympiads are completely free to participate in.",
  },
  {
    id: 5,
    question: "How are the olympiads judged and scored?",
    answer:
      "Each olympiad has its own scoring system, typically involving a combination of multiple-choice questions and open-ended problems. Judging is done by a panel of experts in the relevant field. Detailed scoring rubrics are provided to participants before the competition.",
  },
  {
    id: 6,
    question: "Can international students participate?",
    answer:
      "Yes, many of our olympiads are open to international students. Some have specific international divisions, while others welcome participants from around the world in the same competition. Check the specific olympiad details for international eligibility.",
  },
];

export default function FAQSection() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-950">
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about our science olympiads
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item) => (
              <div
                key={item.id}
                className="border rounded-lg overflow-hidden bg-card"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="flex justify-between items-center w-full p-4 md:p-6 text-left font-medium focus:outline-none"
                >
                  <span className="text-lg">{item.question}</span>
                  {openItem === item.id ? (
                    <ChevronUp className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
                  )}
                </button>
                {openItem === item.id && (
                  <div className="p-4 md:p-6 pt-0 md:pt-0 text-muted-foreground">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
