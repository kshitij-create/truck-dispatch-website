"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CheckCircle, UserCheck, Search, Truck } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      icon: UserCheck,
      title: "Submit Your Details",
      description:
        "Provide your MC number, truck type, and contact information. We verify everything and get you set up in our system.",
    },
    {
      number: "2",
      icon: CheckCircle,
      title: "Dispatcher Assigned",
      description: "You'll be assigned a dedicated dispatcher who specializes in your truck type and preferred lanes.",
    },
    {
      number: "3",
      icon: Search,
      title: "We Find & Negotiate Loads",
      description:
        "Our team actively searches load boards and broker networks to find the best available loads for your truck.",
    },
    {
      number: "4",
      icon: Truck,
      title: "You Drive, We Handle Everything",
      description:
        "We manage all broker communication, paperwork, and follow-ups while you focus on safe driving and delivery.",
    },
  ]

  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="bg-primary text-white py-12 md:py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h1>
            <p className="text-xl text-white/90">Simple 4-step process to start growing your business</p>
          </div>
        </section>

        {/* Steps */}
        <section className="py-16 md:py-24 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent text-white font-bold text-lg">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <step.icon className="w-6 h-6 text-accent mb-2" />
                    <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Visual Timeline */}
            <div className="mt-16 hidden md:flex justify-between items-center">
              {[1, 2, 3, 4].map((step, i) => (
                <div key={step} className="flex-1 flex items-center">
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full border-2 border-accent bg-white text-accent font-bold">
                    {step}
                  </div>
                  {i < 3 && <div className="flex-1 h-1 bg-accent/30 mx-4"></div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 px-4 bg-primary/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">What to Expect</h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-border">
                <h3 className="font-semibold text-lg text-foreground mb-2">How quickly will I get my first load?</h3>
                <p className="text-muted-foreground">
                  Most carriers get their first load within 24-48 hours of signup. It depends on your truck type,
                  availability, and preferred lanes.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-border">
                <h3 className="font-semibold text-lg text-foreground mb-2">What if I don't like the loads offered?</h3>
                <p className="text-muted-foreground">
                  You maintain full control. There's no contract forcing you to take specific loads. We work to
                  understand your preferences and find matches you're comfortable with.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-border">
                <h3 className="font-semibold text-lg text-foreground mb-2">How much will it cost?</h3>
                <p className="text-muted-foreground">
                  Simple, transparent pricing: 5% of the booked load rate. That's it. No hidden fees, no weekly
                  minimums, no contracts.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-border">
                <h3 className="font-semibold text-lg text-foreground mb-2">Can I cancel anytime?</h3>
                <p className="text-muted-foreground">
                  Absolutely. No long-term contracts. If you're not happy, you can cancel anytime. We earn your business
                  every day.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-20 px-4 bg-primary text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to get started?</h2>
            <p className="text-lg text-white/90 mb-8">Join hundreds of successful carriers using ProDispatch</p>
            <a
              href="/onboarding"
              className="inline-block bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Start Dispatching
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
