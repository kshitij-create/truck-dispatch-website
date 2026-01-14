"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Phone, CheckCircle, Truck, Users, TrendingUp } from "lucide-react"

export default function Home() {
  return (
    <>
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary to-primary/90 text-white py-12 md:py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                Professional Truck Dispatch Services
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto text-balance">
                We negotiate top rates, handle brokers, and keep your truck moving — 24/7 support for owner operators
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link
                  href="tel:+1234567890"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Phone size={20} />
                  Call / WhatsApp Now
                </Link>
                <Link
                  href="/onboarding"
                  className="bg-white hover:bg-white/90 text-primary px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Get a Load Today
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Service Highlights */}
        <section className="py-12 md:py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">What We Do</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Users, title: "Broker Negotiation", desc: "Get the best rates on every load" },
                { icon: CheckCircle, title: "Paperwork Handling", desc: "RC, POD, factoring coordination" },
                { icon: Truck, title: "Load Planning", desc: "Smart lanes to maximize revenue" },
                { icon: TrendingUp, title: "Rate Maximization", desc: "Market-based pricing strategy" },
              ].map((service, i) => (
                <div
                  key={i}
                  className="bg-muted/50 p-6 rounded-lg border border-border hover:border-accent/50 transition-colors"
                >
                  <service.icon className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-12 md:py-20 px-4 bg-primary/5">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Why Choose ProDispatch</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: "No Forced Contracts", desc: "Complete flexibility - cancel anytime" },
                { title: "Pay Only on Booked Loads", desc: "You only pay when we book your truck" },
                { title: "Experienced Dispatchers", desc: "Dedicated team treating your truck like their own" },
                { title: "Transparent Fees", desc: "3-6% per booked load, no hidden charges" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Truck Types Preview */}
        <section className="py-12 md:py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              We Dispatch All Truck Types
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { name: "Dry Van", icon: "🚛" },
                { name: "Reefer", icon: "❄️" },
                { name: "Flatbed", icon: "🧱" },
                { name: "Power Only", icon: "⚡" },
              ].map((type, i) => (
                <Link
                  key={i}
                  href="/truck-types"
                  className="text-center p-6 rounded-lg border border-border hover:border-accent hover:bg-primary/5 transition-all group"
                >
                  <div className="text-4xl mb-4">{type.icon}</div>
                  <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                    {type.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2">Premium dispatch service</p>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/truck-types" className="text-accent hover:text-accent/80 font-semibold transition-colors">
                View detailed specs →
              </Link>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-12 md:py-20 px-4 bg-primary/5">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">
              Trusted by Owner Operators Nationwide
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { stat: "500+", label: "Active Carriers" },
                { stat: "10k+", label: "Loads Booked Monthly" },
                { stat: "24/7", label: "Support Available" },
              ].map((item, i) => (
                <div key={i}>
                  <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{item.stat}</div>
                  <p className="text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-20 px-4 bg-primary text-white">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Ready to Grow Your Trucking Business?</h2>
            <p className="text-lg text-white/90">
              Join hundreds of successful owner operators earning more with ProDispatch
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                href="/onboarding"
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Start Dispatching Now
              </Link>
              <Link
                href="/contact"
                className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-lg font-semibold transition-colors border border-white/30"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
