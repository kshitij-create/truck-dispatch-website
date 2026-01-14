"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function TruckTypes() {
  const types = [
    {
      name: "Dry Van",
      icon: "🚛",
      loads: "General freight, grocery, retail, automotive parts",
      lanes: "All major US lanes, high volume",
      earning: "$2,500 - $4,500 per week",
    },
    {
      name: "Reefer",
      icon: "❄️",
      loads: "Perishables, food products, pharmaceuticals",
      lanes: "Produce regions, seasonal demand",
      earning: "$3,000 - $5,000 per week",
    },
    {
      name: "Flatbed",
      icon: "🧱",
      loads: "Heavy equipment, machinery, building materials",
      lanes: "Construction hubs, industrial areas",
      earning: "$3,500 - $5,500 per week",
    },
    {
      name: "Power Only",
      icon: "⚡",
      loads: "Chassi loads, specialized cargo",
      lanes: "Port areas, distribution centers",
      earning: "$2,000 - $3,500 per week",
    },
  ]

  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="bg-primary text-white py-12 md:py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Truck Types We Dispatch</h1>
            <p className="text-xl text-white/90">Specialized dispatch services for every truck configuration</p>
          </div>
        </section>

        {/* Truck Types */}
        <section className="py-16 md:py-24 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {types.map((type, i) => (
                <div key={i} className="border-2 border-border rounded-lg p-8 hover:border-accent transition-colors">
                  <div className="text-5xl mb-4">{type.icon}</div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">{type.name}</h2>

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Typical Loads</h3>
                      <p className="text-muted-foreground">{type.loads}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Common Lanes</h3>
                      <p className="text-muted-foreground">{type.lanes}</p>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <h3 className="font-semibold text-foreground mb-1">Weekly Earning Potential</h3>
                      <p className="text-accent text-lg font-bold">{type.earning}</p>
                      <p className="text-sm text-muted-foreground mt-1">*Varies by experience and lanes</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Earnings Calculator */}
        <section className="py-16 md:py-24 px-4 bg-primary/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-foreground">Ready to Start Earning More?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our transparent pricing model means you keep more of what you earn. With ProDispatch, owner operators
              typically see 15-25% increase in weekly revenue within the first month.
            </p>
            <a
              href="/onboarding"
              className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
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
