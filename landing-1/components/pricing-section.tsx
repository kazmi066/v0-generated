import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Leaf, Zap, TreePine } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$39",
    period: "/month",
    description: "Perfect for small eco-conscious businesses",
    features: [
      "Up to 5 team members",
      "Basic carbon tracking",
      "Energy monitoring dashboard",
      "Monthly sustainability reports",
      "Email support",
    ],
    popular: false,
    icon: Leaf,
    gradient: "from-emerald-500 to-green-600",
  },
  {
    name: "Growth",
    price: "$79",
    period: "/month",
    description: "Advanced tools for growing green businesses",
    features: [
      "Up to 25 team members",
      "AI-powered energy optimization",
      "Real-time carbon footprint tracking",
      "Custom sustainability goals",
      "Priority support",
      "Advanced analytics",
      "API access",
    ],
    popular: true,
    icon: Zap,
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Complete sustainability solutions for large organizations",
    features: [
      "Unlimited team members",
      "Enterprise-grade analytics",
      "Custom integrations",
      "Dedicated sustainability consultant",
      "24/7 support",
      "White-label options",
      "Compliance reporting",
      "Carbon offset marketplace",
    ],
    popular: false,
    icon: TreePine,
    gradient: "from-teal-500 to-cyan-600",
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sustainable Pricing for{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              Every Business
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan to start your sustainability journey. All plans include carbon offset credits.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                plan.popular
                  ? "border-emerald-500 shadow-lg scale-105 bg-gradient-to-br from-emerald-50 to-green-50"
                  : "border-gray-200 hover:border-emerald-200 bg-white"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader className="text-center pb-8">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${plan.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <plan.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                <p className="text-gray-600 mt-2">{plan.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full py-3 font-semibold transition-all hover:scale-105 ${
                    plan.popular
                      ? "bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white shadow-lg"
                      : "bg-gray-100 hover:bg-emerald-50 text-gray-900 hover:text-emerald-700 border border-emerald-200"
                  }`}
                >
                  Start Green Journey
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
