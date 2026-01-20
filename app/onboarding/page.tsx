"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useState } from "react"
import { Mail, Phone } from "lucide-react"

export default function Onboarding() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    company: "",
    mc: "",
    truckType: "",
    trailerType: "",
    phone: "",
    email: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send to your backend
    setSubmitted(true)
    // Simulate form submission
    console.log("Form submitted:", formData)
  }

  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="bg-primary text-white py-12 md:py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Start Dispatching Today</h1>
            <p className="text-xl text-white/90">Get onboarded in minutes, find loads in hours</p>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16 md:py-24 px-4 bg-white">
          <div className="max-w-2xl mx-auto">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">✓</span>
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-3">Application Received!</h2>
                <p className="text-muted-foreground mb-6 text-lg">
                  Thanks for submitting your application. Our team will review it and contact you within 24 hours.
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p className="flex items-center justify-center gap-2">
                    <Phone size={18} />{" "}
                    <a href="tel:+1234567890" className="text-accent font-semibold hover:underline">
                      +1 5137-789993
                    </a>
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <Mail size={18} />{" "}
                    <a href="mailto:info@prodispatch.com" className="text-accent font-semibold hover:underline">
                      info@prodispatch.com
                    </a>
                  </p>
                </div>
              </div>
            ) : (
              <>
                <h2 className="text-3xl font-bold mb-8 text-foreground">Carrier Application</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Company Name *</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-white"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">MC Number *</label>
                    <input
                      type="text"
                      name="mc"
                      value={formData.mc}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-white"
                      placeholder="Your MC number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Primary Truck Type *</label>
                    <select
                      name="truckType"
                      value={formData.truckType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-white"
                    >
                      <option value="">Select truck type</option>
                      <option value="dry-van">Dry Van</option>
                      <option value="reefer">Reefer</option>
                      <option value="flatbed">Flatbed</option>
                      <option value="power-only">Power Only</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Trailer Type *</label>
                    <select
                      name="trailerType"
                      value={formData.trailerType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-white"
                    >
                      <option value="">Select trailer type</option>
                      <option value="53">53ft</option>
                      <option value="48">48ft</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-white"
                      placeholder="(123) 456-7890"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-white"
                      placeholder="your@email.com"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-lg transition-colors"
                  >
                    Submit Application
                  </button>
                </form>

                <p className="text-center text-sm text-muted-foreground mt-6">
                  We'll review your application and contact you within 24 hours
                </p>
              </>
            )}
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-24 px-4 bg-primary/5">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">What You Get After Onboarding</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Dedicated Dispatcher", desc: "A specialist focused on your truck type and lanes" },
                { title: "24/7 Support", desc: "Round-the-clock assistance for urgent needs" },
                { title: "Premium Loads", desc: "Access to loads not available on public boards" },
                { title: "Rate Negotiation", desc: "Our team negotiates the best rates for you" },
                { title: "Route Optimization", desc: "Smart planning to maximize your weekly earnings" },
                { title: "Full Documentation", desc: "We handle all paperwork and compliance" },
              ].map((benefit, i) => (
                <div key={i} className="bg-white p-6 rounded-lg border border-border">
                  <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Onboarding Questions</h2>

            <div className="space-y-6">
              {[
                {
                  q: "How long does onboarding take?",
                  a: "Usually 24-48 hours. We verify your information and get you into our system quickly.",
                },
                {
                  q: "What documents do I need?",
                  a: "Valid MC number, DOT certificate, proof of insurance, and driver qualifications file.",
                },
                {
                  q: "When will I get my first load?",
                  a: "Most carriers get their first load within 24-48 hours of approval.",
                },
                {
                  q: "Is there an onboarding fee?",
                  a: "No. Onboarding is completely free. You only pay when we book your truck.",
                },
              ].map((item, i) => (
                <div key={i} className="border-b border-border pb-6 last:border-b-0">
                  <h3 className="font-semibold text-foreground mb-2">{item.q}</h3>
                  <p className="text-muted-foreground">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
