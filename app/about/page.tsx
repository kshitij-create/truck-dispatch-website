"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Users, Target, Heart } from "lucide-react"

export default function About() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="bg-primary text-white py-12 md:py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About ProDispatch</h1>
            <p className="text-xl text-white/90">Dedicated to helping owner operators grow their business</p>
          </div>
        </section>

        {/* Story */}
        <section className="py-16 md:py-24 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-foreground">Our Story</h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                ProDispatch was founded on a simple belief: owner operators work incredibly hard but often don't have
                the right support system to maximize their earnings. We watched carriers spend 20+ hours per week making
                phone calls, negotiating rates, and handling paperwork—time that could be spent driving and earning.
              </p>

              <p className="text-lg">
                We built ProDispatch to be the back-office team that owner operators deserve. Our mission is to give
                carriers the professional support, market insights, and negotiating power of a large fleet, but with the
                flexibility and independence they value.
              </p>

              <p className="text-lg">
                Every carrier we work with is treated like our own business. We don't make money unless you make money,
                and we're committed to your long-term success.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24 px-4 bg-primary/5">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Our Values</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Heart className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-foreground">Integrity</h3>
                <p className="text-muted-foreground">
                  We believe in transparent pricing, honest communication, and treating our carriers as partners, not
                  just clients.
                </p>
              </div>

              <div className="text-center">
                <Target className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-foreground">Excellence</h3>
                <p className="text-muted-foreground">
                  We're committed to finding the best loads, negotiating the highest rates, and providing 24/7 support.
                </p>
              </div>

              <div className="text-center">
                <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-foreground">Partnership</h3>
                <p className="text-muted-foreground">
                  Your success is our success. We win when you win, and we're invested in your long-term growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 md:py-24 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">By The Numbers</h2>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { stat: "500+", label: "Active Carriers" },
                { stat: "10k+", label: "Monthly Loads" },
                { stat: "98%", label: "Satisfaction Rate" },
                { stat: "24/7", label: "Support Available" },
              ].map((item, i) => (
                <div key={i} className="text-center p-6 bg-primary/5 rounded-lg border border-primary/10">
                  <div className="text-4xl font-bold text-accent mb-2">{item.stat}</div>
                  <p className="text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Philosophy */}
        <section className="py-16 md:py-24 px-4 bg-primary/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-foreground">Our Dispatch Philosophy</h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                Our dispatchers aren't just booking generic loads—they understand the nuances of different truck types,
                seasonal markets, lane preferences, and cost structures. Each carrier gets matched with a dispatcher who
                specializes in their truck type.
              </p>

              <p className="text-lg">
                We treat every truck like our own business. That means looking beyond just the highest rate and
                considering factors like fuel costs, deadhead, bridge tolls, and your overall weekly efficiency.
              </p>

              <p className="text-lg">
                We believe in building relationships with brokers and shippers, which gives us access to premium loads
                that aren't available on public load boards. Our carriers get the inside track.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-20 px-4 bg-primary text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to work with us?</h2>
            <p className="text-lg text-white/90 mb-8">Join hundreds of successful carriers already using ProDispatch</p>
            <a
              href="/onboarding"
              className="inline-block bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Started Today
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
