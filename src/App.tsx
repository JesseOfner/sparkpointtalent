import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X } from '@phosphor-icons/react'

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-foreground">
              Keloh
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Capabilities
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Solutions
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Insights
            </a>
            <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold px-6">
              Get Started
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-foreground hover:text-primary transition-colors font-medium">
                Home
              </a>
              <a href="#" className="block px-3 py-2 text-foreground hover:text-primary transition-colors font-medium">
                Capabilities
              </a>
              <a href="#" className="block px-3 py-2 text-foreground hover:text-primary transition-colors font-medium">
                Solutions
              </a>
              <a href="#" className="block px-3 py-2 text-foreground hover:text-primary transition-colors font-medium">
                Insights
              </a>
              <div className="px-3 py-2">
                <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

function HomePage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 tracking-tight">
              Strategic Recruitment
              <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Marketing Excellence
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
              We transform how organizations attract, engage, and hire top talent through 
              sophisticated marketing strategies and compelling employer brand experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold px-8 py-4 text-lg">
                Transform Your Hiring
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-4 text-lg">
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Leading Organizations Choose Keloh
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              In today's competitive talent landscape, traditional recruiting isn't enough. 
              We help you build magnetic employer brands that attract the best candidates before they even apply.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-lg border border-border hover:border-primary/30 transition-colors">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Strategic Brand Building</h3>
              <p className="text-muted-foreground leading-relaxed">
                We craft compelling employer value propositions that differentiate your organization 
                and create authentic connections with top-tier talent.
              </p>
            </div>

            <div className="text-center p-8 rounded-lg border border-border hover:border-primary/30 transition-colors">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Multi-Channel Campaigns</h3>
              <p className="text-muted-foreground leading-relaxed">
                From LinkedIn to industry publications, we orchestrate sophisticated campaigns 
                that reach candidates where they are, when they're ready to move.
              </p>
            </div>

            <div className="text-center p-8 rounded-lg border border-border hover:border-primary/30 transition-colors">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Data-Driven Results</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every campaign is measured, optimized, and refined using advanced analytics 
                to ensure maximum ROI and continuous improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Talent Strategy?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
            Join forward-thinking organizations who've partnered with Keloh to build 
            world-class recruitment marketing programs that deliver exceptional results.
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 text-lg">
            Schedule a Strategic Consultation
          </Button>
        </div>
      </section>
    </div>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HomePage />
    </div>
  )
}

export default App