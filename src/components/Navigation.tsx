import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { List, X } from '@phosphor-icons/react'

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(path)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-foreground hover:text-primary transition-colors">
              Keloh
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`transition-colors font-medium ${
                isActive('/') 
                  ? 'text-primary' 
                  : 'text-foreground hover:text-primary'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/capabilities" 
              className={`transition-colors font-medium ${
                isActive('/capabilities') 
                  ? 'text-primary' 
                  : 'text-foreground hover:text-primary'
              }`}
            >
              Capabilities
            </Link>
            <Link 
              to="/solutions" 
              className={`transition-colors font-medium ${
                isActive('/solutions') 
                  ? 'text-primary' 
                  : 'text-foreground hover:text-primary'
              }`}
            >
              Solutions
            </Link>
            <Link 
              to="/insights" 
              className={`transition-colors font-medium ${
                isActive('/insights') 
                  ? 'text-primary' 
                  : 'text-foreground hover:text-primary'
              }`}
            >
              Insights
            </Link>
            <Link 
              to="/case-studies" 
              className={`transition-colors font-medium ${
                isActive('/case-studies') 
                  ? 'text-primary' 
                  : 'text-foreground hover:text-primary'
              }`}
            >
              Case Studies
            </Link>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold px-6"
            >
              Get Started
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <List size={24} />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                to="/" 
                className={`block px-3 py-2 transition-colors font-medium ${
                  isActive('/') 
                    ? 'text-primary' 
                    : 'text-foreground hover:text-primary'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/capabilities" 
                className={`block px-3 py-2 transition-colors font-medium ${
                  isActive('/capabilities') 
                    ? 'text-primary' 
                    : 'text-foreground hover:text-primary'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Capabilities
              </Link>
              <Link 
                to="/solutions" 
                className={`block px-3 py-2 transition-colors font-medium ${
                  isActive('/solutions') 
                    ? 'text-primary' 
                    : 'text-foreground hover:text-primary'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Solutions
              </Link>
              <Link 
                to="/insights" 
                className={`block px-3 py-2 transition-colors font-medium ${
                  isActive('/insights') 
                    ? 'text-primary' 
                    : 'text-foreground hover:text-primary'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Insights
              </Link>
              <Link 
                to="/case-studies" 
                className={`block px-3 py-2 transition-colors font-medium ${
                  isActive('/case-studies') 
                    ? 'text-primary' 
                    : 'text-foreground hover:text-primary'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Case Studies
              </Link>
              <div className="px-3 py-2">
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold"
                >
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