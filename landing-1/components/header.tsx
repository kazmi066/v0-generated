"use client"

import { Button } from "@/components/ui/button"
import { Menu, X, Leaf } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center">
            <Leaf className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-green-700 bg-clip-text text-transparent">
            EcoFlow
          </span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-600 hover:text-emerald-600 transition-colors font-medium">
            Solutions
          </a>
          <a href="#testimonials" className="text-gray-600 hover:text-emerald-600 transition-colors font-medium">
            Impact Stories
          </a>
          <a href="#pricing" className="text-gray-600 hover:text-emerald-600 transition-colors font-medium">
            Pricing
          </a>
          <a href="#contact" className="text-gray-600 hover:text-emerald-600 transition-colors font-medium">
            Contact
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="hidden md:inline-flex hover:text-emerald-600">
            Sign In
          </Button>
          <Button className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white shadow-lg">
            Start Green Journey
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t bg-white/95 backdrop-blur">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            <a
              href="#features"
              className="block text-gray-600 hover:text-emerald-600 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Solutions
            </a>
            <a
              href="#testimonials"
              className="block text-gray-600 hover:text-emerald-600 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Impact Stories
            </a>
            <a
              href="#pricing"
              className="block text-gray-600 hover:text-emerald-600 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="block text-gray-600 hover:text-emerald-600 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <div className="pt-4 border-t space-y-2">
              <Button variant="ghost" className="w-full justify-start">
                Sign In
              </Button>
              <Button className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white">
                Start Green Journey
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
