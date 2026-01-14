"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CheckCircle } from "lucide-react"

export default function Pricing() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="bg-primary text-white py-12 md:py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Transparent Pricing</h1>
            <p className="text-xl text-white/90">Simple, fair rates with no hidden fees or long-term contracts</p>
          </div>
        </section>

        {/* Pricing Card */}
        <section className="py-16 md:py-24 px-4 bg-white">
          <div className="max-w-2xl mx-auto">
            <div className="border-2 border-accent rounded-lg p-8 md:p-12 bg-white">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">5% Per Load</h2>
              <p className="text-muted-foreground text-lg mb-8">That's our rate. Simple, transparent, and fair.</p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">No Hidden Fees</h3>
                    <p className="text-muted-foreground text-sm">
                      What you see is what you pay. No setup fees, no monthly minimums.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">Pay Only on Booked Loads</h3>
                    <p className="text-muted-foreground text-sm">
                      If we don't book your truck, you don't pay us. Simple as that.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">No Contracts</h3>
                    <p className="text-muted-foreground text-sm">
                      Cancel anytime. We earn your business every single day.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">Real-Time Transparency</h3>
                    <p className="text-muted-foreground text-sm">
                      See exactly how much you're earning per load in real time.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
                <h3 className="font-semibold text-foreground mb-4">Example Breakdown</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Load Rate</span>
                    <span className="font-semibold text-foreground">$2,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Our Fee (5%)</span>
                    <span className="font-semibold text-foreground">-$100</span>
                  </div>
                  <div className="border-t border-border pt-3 flex justify-between">
                    <span className="font-semibold text-foreground">You Earn</span>
                    <span className="font-bold text-accent text-lg">$1,900</span>
                  </div>
                </div>
              </div>

              <a
                href="/onboarding"
                className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-semibold transition-colors text-center"
              >
                Start Your Free Trial
              </a>
            </div>
          </div>
        </section>

        {/* Value Comparison */}
        <section className="py-16 md:py-24 px-4 bg-primary/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Why ProDispatch Saves You Money</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-50 border border-red-200 rounded-lg p-8">
                <h3 className="font-bold text-lg text-foreground mb-4">Going It Alone</h3>
                <ul className="space-y-3 text-muted-foreground text-sm">
                  <li className="flex gap-2">
                    <span>❌</span>
                    <span>20+ hours/week calling brokers (lost driving time)</span>
                  </li>
                  <li className="flex gap-2">
                    <span>❌</span>
                    <span>Longer deadhead between loads</span>
                  </li>
                  <li className="flex gap-2">
                    <span>❌</span>
                    <span>Lower rates (less negotiating power)</span>
                  </li>
                  <li className="flex gap-2">
                    <span>❌</span>
                    <span>More downtime and stress</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-8">
                <h3 className="font-bold text-lg text-foreground mb-4">With ProDispatch</h3>
                <ul className="space-y-3 text-muted-foreground text-sm">
                  <li className="flex gap-2">
                    <span>✓</span>
                    <span>Focus on driving (more billable hours)</span>
                  </li>
                  <li className="flex gap-2">
                    <span>✓</span>
                    <span>Optimized lanes reduce empty miles</span>
                  </li>
                  <li className="flex gap-2">
                    <span>✓</span>
                    <span>Better rates through our relationships</span>
                  </li>
                  <li className="flex gap-2">
                    <span>✓</span>
                    <span>Peace of mind and less stress</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 bg-white border-2 border-accent rounded-lg p-8 text-center">
              <p className="text-muted-foreground mb-2">Average Monthly Increase</p>
              <p className="text-4xl md:text-5xl font-bold text-accent">$3,000 - $5,000</p>
              <p className="text-muted-foreground mt-2">With optimization and better load negotiations</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-20 px-4 bg-primary text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Earning More Today</h2>
            <p className="text-lg text-white/90 mb-8">
              5% fee for professional dispatch - that's it. No hidden costs, no contracts.
            </p>
            <a
              href="/onboarding"
              className="inline-block bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Started Free
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
