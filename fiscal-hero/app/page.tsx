import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { TrendingUp, Users } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-6 py-4 bg-white">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">F</span>
          </div>
          <span className="font-semibold text-lg">Fiscal</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Courses
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Mentors
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Resources
          </a>
        </div>

        <Button variant="outline" className="rounded-full bg-transparent">
          Get started →
        </Button>
      </nav>

      {/* Hero Section */}
      <main className="px-6 py-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 flex flex-col justify-center space-y-8 relative bg-[#f4f4f4] rounded-3xl overflow-hidden md:p-8 p-6">

            <div className="space-y-6 relative z-10">
              <Badge
                variant="outline"
                className="w-fit rounded-full px-4 py-2 text-orange-600 border-orange-200 bg-orange-50"
              >
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                Next group starts in 3 days!
              </Badge>

              <h1 className="text-3xl md:text-4xl lg:text-5xl max-w-[600px] font-semibold text-gray-900 leading-[1.2]">
                Take control of your finances online
              </h1>

              <Button className="bg-black hover:bg-gray-800 text-white rounded-full px-8 py-6 text-base w-fit">
                Get started
              </Button>
            </div>

            <div className="flex justify-end mt-8">
              <div className="relative">
                <img
                  src="/financial-calculator-illustration.png"
                  alt="Financial calculator illustration with hands"
                  className="lg:w-[500px] w-full max-w-xl"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Bento Cards */}
          <div className="flex flex-col gap-6">
            {/* Book Offline Seat Card */}
            <Card className="bg-gradient-to-br from-orange-500 to-red-500 text-white md:p-8 p-6 rounded-3xl border-0 relative overflow-hidden flex-1">
              <div className="absolute inset-0 opacity-10 z-0">
                <img
                  src="/financial-calculator-illustration.png"
                  alt=""
                  className="w-full h-full object-cover scale-150"
                />
              </div>

              <div className="space-y-4 h-full flex flex-col justify-between relative z-10">
                <h3 className="text-2xl lg:text-3xl font-semibold max-w-[180px]">Book your offline seat</h3>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-medium">+46%</div>
                    <TrendingUp className="absolute -right-6 bottom-10 w-40 h-40" />
                  </div>

                  {/* Simple chart visualization */}
                  <div className="flex items-end gap-1">
                    <div className="bg-white/30 w-5 h-16 rounded-sm"></div>
                    <div className="bg-white/50 w-5 h-20 rounded-sm"></div>
                    <div className="bg-white/40 w-5 h-12 rounded-sm"></div>
                    <div className="bg-white/60 w-5 h-22 rounded-sm"></div>
                    <div className="bg-white/70 w-5 h-18 rounded-sm"></div>
                    <div className="bg-white w-5 h-14 rounded-sm"></div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Sign Up for Session Card */}
            <Card className="bg-gray-900 text-white md:p-8 p-6 rounded-3xl border-0 flex-1">
              <div className="space-y-4 h-full flex flex-col justify-between">
                <h3 className="text-2xl lg:text-3xl font-semibold max-w-[180px]">Sign up for a session</h3>

                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <Avatar className="w-12 h-12 border-2 border-gray-900">
                      <AvatarImage className="object-cover" src="/professional-headshot-1.png" />
                      <AvatarFallback>M1</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-12 h-12 border-2 border-gray-900">
                      <AvatarImage className="object-cover" src="/professional-headshot-2.png" />
                      <AvatarFallback>M2</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-12 h-12 border-2 border-gray-900">
                      <AvatarImage className="object-cover" src="/professional-headshot-3.png" />
                      <AvatarFallback>M3</AvatarFallback>
                    </Avatar>
                  </div>

                  <div className="bg-gray-700 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    +56 mentors
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
