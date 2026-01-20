"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Phone, Mail, Clock } from "lucide-react"

export default function Contact() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="bg-primary text-white py-12 md:py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
            <p className="text-xl text-white/90">Available 24/7 for your questions and urgent needs</p>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 md:py-24 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <Phone className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Phone</h3>
                <a href="tel:+1234567890" className="text-accent hover:underline font-semibold">
                  +1 5137-789993
                </a>
                <p className="text-muted-foreground text-sm mt-1">Call or WhatsApp anytime</p>
              </div>

              <div className="text-center">
                <Mail className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Email</h3>
                <a href="mailto:info@prodispatch.com" className="text-accent hover:underline font-semibold">
                  info@prodispatch.com
                </a>
                <p className="text-muted-foreground text-sm mt-1">Response within 2 hours</p>
              </div>

              <div className="text-center">
                <Clock className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Hours</h3>
                <p className="font-semibold text-foreground">24/7 Support</p>
                <p className="text-muted-foreground text-sm mt-1">Always available for you</p>
              </div>
            </div>

            {/* Message Section */}
            <div className="max-w-2xl mx-auto bg-primary/5 rounded-lg p-8 border border-border text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">Why Contact Us?</h2>
              <ul className="space-y-3 text-muted-foreground text-left">
                <li className="flex items-center gap-3">
                  <span className="text-accent text-xl">→</span>
                  <span>Questions about our services</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-accent text-xl">→</span>
                  <span>Need help with onboarding</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-accent text-xl">→</span>
                  <span>Urgent load needs</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-accent text-xl">→</span>
                  <span>Feedback or suggestions</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-accent text-xl">→</span>
                  <span>Partnership inquiries</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 px-4 bg-primary/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Frequently Asked Questions</h2>

            <div className="space-y-6">
              {[
                {
                  q: "What is your support response time?",
                  a: "We aim to respond to all inquiries within 2 hours. For urgent issues, call our 24/7 hotline.",
                },
                {
                  q: "Do you operate on weekends and holidays?",
                  a: "Yes! We operate 24/7, including weekends and holidays. Your truck never stops, and neither do we.",
                },
                {
                  q: "Can I reach my dispatcher directly?",
                  a: "Absolutely. Each carrier gets direct contact info for their assigned dispatcher for quick communication.",
                },
                {
                  q: "What if I have an urgent load request?",
                  a: "Call our emergency line at +1  5137-789993. We have dispatchers standing by to help.",
                },
                {
                  q: "How do I update my information?",
                  a: "You can update your profile anytime via our carrier portal or call your dispatcher.",
                },
                {
                  q: "What payment methods do you accept?",
                  a: "We process payments via direct deposit, check, or electronic transfer - whatever works best for you.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-lg border border-border">
                  <h3 className="font-semibold text-foreground mb-2">{item.q}</h3>
                  <p className="text-muted-foreground">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-20 px-4 bg-primary text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Still have questions?</h2>
            <p className="text-lg text-white/90 mb-8">Reach out anytime. We're here to help you succeed.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+1234567890"
                className="inline-block bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Call Us Now
              </a>
              <a
                href="mailto:info@prodispatch.com"
                className="inline-block bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-lg font-semibold transition-colors border border-white/30"
              >
                Send Email
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
