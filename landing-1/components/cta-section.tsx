import { Button } from "@/components/ui/button"
import { ArrowRight, Leaf, Zap } from "lucide-react"

export function CtaSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-emerald-500 via-green-600 to-teal-600 relative overflow-hidden">
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/20 rounded-full animate-bounce"></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-yellow-400/30 rounded-full"></div>

      <div className="container mx-auto px-4 text-center relative">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full">
              <Leaf className="h-5 w-5 text-white" />
              <span className="text-white font-semibold">Join the Green Revolution</span>
              <Zap className="h-5 w-5 text-yellow-300" />
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Make a Real Environmental Impact?</h2>
          <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
            Join thousands of businesses already reducing their carbon footprint with EcoFlow. Start your sustainability
            journey today and make a difference for our planet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold transition-all hover:scale-105 shadow-lg"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-3 text-lg font-semibold bg-transparent"
            >
              Calculate Your Impact
            </Button>
          </div>
          <p className="text-emerald-200 text-sm mt-6">
            No credit card required • 14-day free trial • Carbon offset included • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  )
}
