"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Zap, FileText, MapPin, Briefcase, TrendingUp, Users } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: TrendingUp,
      title: "Load Booking & Negotiation",
      description:
        "We negotiate the highest possible rate based on lane, fuel costs, and current market demand. Our experienced dispatchers leverage relationships with major brokers to secure premium loads.",
    },
    {
      icon: MapPin,
      title: "Route Planning",
      description:
        "Smart lane analysis to reduce deadhead mileage and increase weekly revenue. We optimize your routes to maximize earning potential and minimize downtime between loads.",
    },
    {
      icon: Users,
      title: "Broker Communication",
      description:
        "We handle all calls, emails, confirmations, and follow-ups with brokers. Our team manages the entire communication process so you can focus on driving safely.",
    },
    {
      icon: FileText,
      title: "Paperwork & Compliance",
      description:
        "Rate confirmations, PODs, factoring coordination, and all compliance documentation. We ensure everything is properly documented and submitted on time.",
    },
    {
      icon: Zap,
      title: "24/7 Support",
      description:
        "Round-the-clock support for urgent load needs and emergencies. Our team is always available to help resolve issues quickly and keep your truck running.",
    },
    {
      icon: Briefcase,
      title: "Factoring Support",
      description:
        "We coordinate with factoring companies and help you understand payment options. Get your money faster with our established broker relationships.",
    },
  ]

  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="bg-primary text-white py-12 md:py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Our Core Services</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Everything you need to keep your truck moving and maximize earnings
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-24 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, i) => (
                <div
                  key={i}
                  className="border border-border rounded-lg p-8 hover:border-accent/50 hover:shadow-lg transition-all"
                >
                  <service.icon className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-2xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why These Services Matter */}
        <section className="py-16 md:py-24 px-4 bg-primary/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Why Professional Dispatch Matters</h2>
            <div className="space-y-6 text-foreground">
              <p className="text-lg leading-relaxed">
                As an owner operator, your time is money. Spending hours per week calling brokers, negotiating rates,
                and handling paperwork cuts into your earning potential. That's where we come in.
              </p>
              <p className="text-lg leading-relaxed">
                Our professional dispatch team handles all the administrative work while you focus on what you do best -
                driving safely and efficiently. We're essentially your back-office team, working around the clock to
                keep your truck profitable.
              </p>
              <p className="text-lg leading-relaxed">
                With access to multiple load boards, established broker relationships, and real-time market data, we
                find loads that match your truck type and preferred lanes - not just any load that comes through.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
