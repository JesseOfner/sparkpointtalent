import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { List, X } from '@phosphor-icons/react'

interface NavigationProps {
  currentPage: string
  onNavigate: (page: string) => void
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isActive = (page: string) => {
    if (page === 'home') {
      return currentPage === 'home'
    }
    return currentPage === page
  }

  const handleNavigate = (page: string) => {
    onNavigate(page)
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button 
              onClick={() => handleNavigate('home')} 
              className="text-2xl font-bold text-foreground hover:text-primary transition-colors"
            >
              Keloh
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavigate('home')}
              className={`transition-colors font-medium ${
                isActive('home') 
                  ? 'text-primary' 
                  : 'text-foreground hover:text-primary'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => handleNavigate('capabilities')}
              className={`transition-colors font-medium ${
                isActive('capabilities') 
                  ? 'text-primary' 
                  : 'text-foreground hover:text-primary'
              }`}
            >
              Capabilities
            </button>
            <button 
              onClick={() => handleNavigate('solutions')}
              className={`transition-colors font-medium ${
                isActive('solutions') 
                  ? 'text-primary' 
                  : 'text-foreground hover:text-primary'
              }`}
            >
              Solutions
            </button>
            <button 
              onClick={() => handleNavigate('insights')}
              className={`transition-colors font-medium ${
                isActive('insights') 
                  ? 'text-primary' 
                  : 'text-foreground hover:text-primary'
              }`}
            >
              Insights
            </button>
            <button 
              onClick={() => handleNavigate('case-studies')}
              className={`transition-colors font-medium ${
                isActive('case-studies') 
                  ? 'text-primary' 
                  : 'text-foreground hover:text-primary'
              }`}
            >
              Case Studies
            </button>
            <Button 
              onClick={() => handleNavigate('contact')}
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
              <button 
                onClick={() => handleNavigate('home')}
                className={`block w-full text-left px-3 py-2 transition-colors font-medium ${
                  isActive('home') 
                    ? 'text-primary' 
                    : 'text-foreground hover:text-primary'
                }`}
              >
                Home
              </button>
              <button 
                onClick={() => handleNavigate('capabilities')}
                className={`block w-full text-left px-3 py-2 transition-colors font-medium ${
                  isActive('capabilities') 
                    ? 'text-primary' 
                    : 'text-foreground hover:text-primary'
                }`}
              >
                Capabilities
              </button>
              <button 
                onClick={() => handleNavigate('solutions')}
                className={`block w-full text-left px-3 py-2 transition-colors font-medium ${
                  isActive('solutions') 
                    ? 'text-primary' 
                    : 'text-foreground hover:text-primary'
                }`}
              >
                Solutions
              </button>
              <button 
                onClick={() => handleNavigate('insights')}
                className={`block w-full text-left px-3 py-2 transition-colors font-medium ${
                  isActive('insights') 
                    ? 'text-primary' 
                    : 'text-foreground hover:text-primary'
                }`}
              >
                Insights
              </button>
              <button 
                onClick={() => handleNavigate('case-studies')}
                className={`block w-full text-left px-3 py-2 transition-colors font-medium ${
                  isActive('case-studies') 
                    ? 'text-primary' 
                    : 'text-foreground hover:text-primary'
                }`}
              >
                Case Studies
              </button>
              <Button 
                onClick={() => handleNavigate('contact')}
                className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold mt-2"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}