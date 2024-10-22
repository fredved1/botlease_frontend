'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Cpu, Mail, ChevronRight } from "lucide-react"

export default function LandingPage() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Inschrijving met email:', email)
    alert('Bedankt voor uw inschrijving! We houden u op de hoogte.')
    setEmail('')
  }

  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <header className="fixed w-full z-10 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold flex items-center">
            <Cpu className="w-8 h-8 mr-2" />
            Bot Lease
          </a>
          <nav className="hidden md:flex space-x-8">
            <a href="#signup" className="hover:text-gray-600 transition-colors">Inschrijven</a>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="py-20 bg-gradient-to-r from-gray-100 to-gray-200">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-black">
              Ruimte voor de Mens
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Ontdek hoe humanoid robots uw team kunnen versterken en ruimte creëren voor wat echt belangrijk is.
            </p>
            <div className="max-w-[560px] mx-auto mb-12">
              <div className="relative" style={{ paddingBottom: '56.25%' }}>
                <iframe 
                  src="https://www.youtube.com/embed/HEz61nWQTjA?start=431" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                ></iframe>
              </div>
            </div>
            <Button size="lg" className="animate-pulse" onClick={() => document.getElementById('signup')?.scrollIntoView({behavior: 'smooth'})}>
              Blijf op de Hoogte <ChevronRight className="ml-2" />
            </Button>
          </div>
        </section>

        <section id="signup" className="py-20 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Wees de Eerste die het Ervaart</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Schrijf u in voor onze wachtlijst en ontvang exclusieve updates over onze lancering.
            </p>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex gap-4">
                <Input
                  type="email"
                  placeholder="Uw e-mailadres"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-grow bg-white text-black"
                />
                <Button type="submit" variant="secondary">
                  <Mail className="mr-2 h-4 w-4" /> Inschrijven
                </Button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2024 Bot Lease. Alle rechten voorbehouden.</p>
          <nav className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Voorwaarden</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}
