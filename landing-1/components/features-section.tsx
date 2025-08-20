import { Card, CardContent } from "@/components/ui/card"
import { BarChart3, Leaf, Zap, Recycle } from "lucide-react"

const features = [
  {
    icon: Leaf,
    title: "Carbon Footprint Tracking",
    description:
      "Monitor and reduce your environmental impact in real-time. Get detailed insights into your energy consumption and carbon emissions.",
    gradient: "from-emerald-500 to-green-600",
  },
  {
    icon: Zap,
    title: "Smart Energy Optimization",
    description:
      "AI-powered energy management that automatically optimizes your consumption patterns to minimize waste and maximize savings.",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: Recycle,
    title: "Sustainability Reporting",
    description:
      "Generate comprehensive sustainability reports for stakeholders. Track progress towards your net-zero goals effortlessly.",
    gradient: "from-teal-500 to-cyan-600",
  },
  {
    icon: BarChart3,
    title: "Green Analytics Dashboard",
    description:
      "Beautiful, intuitive dashboard showing your environmental impact, cost savings, and sustainability metrics at a glance.",
    gradient: "from-lime-500 to-green-600",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-gradient-to-br from-white to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sustainable Solutions for{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              Modern Business
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how EcoFlow helps businesses reduce their environmental impact while increasing profitability
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur"
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}
                >
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
