"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function FAQ() {
  const [expanded, setExpanded] = useState<number | null>(null)

  const faqs = [
    {
      category: "Getting Started",
      items: [
        {
          q: "How do I apply?",
          a: "Fill out our carrier application form on the onboarding page. We'll review it within 24 hours and contact you.",
        },
        {
          q: "What documents do I need?",
          a: "Valid MC number, active DOT certificate, proof of insurance, and current driver qualifications file.",
        },
        {
          q: "How long does onboarding take?",
          a: "Usually 24-48 hours from initial contact to getting your first load opportunity.",
        },
        {
          q: "Is there an onboarding fee?",
          a: "No. Our service is completely free to join. You only pay when we book a load for you.",
        },
      ],
    },
    {
      category: "Services & Rates",
      items: [
        {
          q: "How much do your services cost?",
          a: "Simple: 5% of each booked load rate. No hidden fees, no monthly minimums, no contracts.",
        },
        {
          q: "When do I pay your fee?",
          a: "You pay directly from your load payment. If you earn $2,000 on a load, we take $100 and you get $1,900.",
        },
        {
          q: "Can I cancel anytime?",
          a: "Yes. There are no contracts. You can cancel our services anytime with no penalties.",
        },
        {
          q: "What if I don't like a load?",
          a: "You're never forced to take a load. We work with you to find loads that match your preferences.",
        },
      ],
    },
    {
      category: "Loads & Dispatch",
      items: [
        {
          q: "How quickly will I get my first load?",
          a: "Most carriers get booked within 24-48 hours. It depends on your truck type, availability, and preferred lanes.",
        },
        {
          q: "What types of loads do you book?",
          a: "We book loads for all truck types: Dry Van, Reefer, Flatbed, and Power Only across all major US lanes.",
        },
        {
          q: "How are loads assigned?",
          a: "Your dedicated dispatcher will call or text you with load details. You can accept or decline - your choice.",
        },
        {
          q: "Do you guarantee minimum loads?",
          a: "No guarantees, but our goal is to keep your truck moving. Most of our carriers average 3-4 loads per week.",
        },
        {
          q: "Can I specify my preferred lanes?",
          a: "Absolutely. Tell your dispatcher your preferences - some prefer regional, some prefer long haul, etc.",
        },
      ],
    },
    {
      category: "Support & Communication",
      items: [
        {
          q: "What kind of support do you offer?",
          a: "Full 24/7 support: dispatcher services, paperwork handling, broker communication, and emergency assistance.",
        },
        {
          q: "Who is my contact?",
          a: "Each carrier is assigned a dedicated dispatcher who specializes in your truck type. They're your main point of contact.",
        },
        {
          q: "Can I reach my dispatcher anytime?",
          a: "Yes. Your dispatcher's direct contact info is provided after onboarding. They're available when you need them.",
        },
        {
          q: "What if I have an urgent issue?",
          a: "Call our 24/7 emergency line: +1 (234) 567-890. We have dispatchers standing by.",
        },
      ],
    },
    {
      category: "Payments & Money",
      items: [
        {
          q: "How do I get paid?",
          a: "You receive payment directly from the broker for the load. Our fee (5%) is deducted from that payment.",
        },
        {
          q: "How long until I get paid?",
          a: "Depends on the broker, usually 7-15 days after delivery. We coordinate with factoring companies if needed.",
        },
        {
          q: "Do you offer factoring?",
          a: "We don't provide factoring, but we coordinate with leading factoring companies and help expedite payments.",
        },
        {
          q: "Can I get an advance on my loads?",
          a: "Some brokers offer advances. We can help you explore those options.",
        },
      ],
    },
    {
      category: "Compliance & Safety",
      items: [
        {
          q: "Do you help with compliance?",
          a: "We ensure all loads meet compliance requirements and handle PODs and rate confirmations properly.",
        },
        {
          q: "What about inspection reports?",
          a: "We guide you through the process and help document everything correctly.",
        },
        {
          q: "Are there safety requirements?",
          a: "Yes. Clean driving record and valid license required. We work only with safe, professional drivers.",
        },
      ],
    },
  ]

  const toggleExpanded = (index: number) => {
    setExpanded(expanded === index ? null : index)
  }

  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="bg-primary text-white py-12 md:py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-white/90">Everything you need to know about ProDispatch</p>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="py-16 md:py-24 px-4 bg-white">
          <div className="max-w-4xl mx-auto space-y-12">
            {faqs.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h2 className="text-2xl font-bold text-foreground mb-6 pb-4 border-b-2 border-primary">
                  {section.category}
                </h2>
                <div className="space-y-3">
                  {section.items.map((item, itemIndex) => {
                    const globalIndex =
                      faqs.slice(0, sectionIndex).reduce((acc, s) => acc + s.items.length, 0) + itemIndex
                    return (
                      <div key={globalIndex} className="border border-border rounded-lg overflow-hidden">
                        <button
                          onClick={() => toggleExpanded(globalIndex)}
                          className="w-full flex items-center justify-between p-4 hover:bg-primary/5 transition-colors text-left"
                        >
                          <h3 className="font-semibold text-foreground">{item.q}</h3>
                          {expanded === globalIndex ? (
                            <ChevronUp className="w-5 h-5 text-accent flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-accent flex-shrink-0" />
                          )}
                        </button>
                        {expanded === globalIndex && (
                          <div className="px-4 pb-4 bg-primary/5 text-muted-foreground border-t border-border">
                            {item.a}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="py-12 md:py-20 px-4 bg-primary/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Still have questions?</h2>
            <p className="text-lg text-muted-foreground mb-8">Our team is available 24/7 to answer any questions</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+1234567890"
                className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Call Us
              </a>
              <a
                href="/contact"
                className="inline-block bg-white hover:bg-muted text-primary px-8 py-3 rounded-lg font-semibold transition-colors border-2 border-primary"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
