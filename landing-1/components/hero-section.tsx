import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Leaf, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 py-20 lg:py-32">
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full opacity-30 animate-bounce"></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-br from-lime-400 to-green-500 rounded-full opacity-25"></div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 bg-gradient-to-r from-emerald-100 to-green-100 px-4 py-2 rounded-full">
              <Leaf className="h-5 w-5 text-emerald-600" />
              <span className="text-emerald-700 font-semibold">Carbon Neutral Operations</span>
              <Zap className="h-5 w-5 text-yellow-500" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Power Your Business with{" "}
            <span className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent">
              Clean Energy
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Revolutionary energy management platform that reduces your carbon footprint while maximizing efficiency.
            Join the sustainable business revolution today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-8 py-3 text-lg font-semibold transition-all hover:scale-105 shadow-lg"
            >
              Start Saving Energy
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-3 text-lg font-semibold border-emerald-300 hover:bg-emerald-50 bg-transparent text-emerald-700"
            >
              <Play className="mr-2 h-5 w-5" />
              See Impact Demo
            </Button>
          </div>
          <div className="mt-12">
            <p className="text-sm text-gray-500 mb-4">Trusted by 10,000+ eco-conscious businesses worldwide</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="h-8 w-24 bg-gradient-to-r from-emerald-200 to-green-200 rounded"></div>
              <div className="h-8 w-24 bg-gradient-to-r from-teal-200 to-cyan-200 rounded"></div>
              <div className="h-8 w-24 bg-gradient-to-r from-lime-200 to-green-200 rounded"></div>
              <div className="h-8 w-24 bg-gradient-to-r from-green-200 to-emerald-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
