import { Card, CardContent } from "@/components/ui/card"
import { Star, Leaf } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Sustainability Director",
    company: "GreenTech Corp",
    content:
      "EcoFlow helped us reduce our carbon footprint by 60% in just 6 months! The real-time tracking and AI optimization are game-changers.",
    avatar: "/professional-woman-smiling.png",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "CEO",
    company: "CleanEnergy Solutions",
    content:
      "The sustainability reporting features saved us countless hours. We're now carbon neutral and our investors love the transparency.",
    avatar: "/professional-bearded-man.png",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Operations Manager",
    company: "EcoManufacturing",
    content:
      "Outstanding platform! Our energy costs dropped 40% while improving our environmental impact. EcoFlow is essential for any green business.",
    avatar: "/professional-woman-executive.png",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-emerald-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="flex items-center space-x-2 bg-gradient-to-r from-emerald-100 to-green-100 px-4 py-2 rounded-full">
              <Leaf className="h-5 w-5 text-emerald-600" />
              <span className="text-emerald-700 font-semibold">Real Impact Stories</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              Eco-Champions
            </span>{" "}
            Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how businesses are transforming their operations and making a positive environmental impact
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur"
            >
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 border-2 border-emerald-200"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-emerald-600 font-medium">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
