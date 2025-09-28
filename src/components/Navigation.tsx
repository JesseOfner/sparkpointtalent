import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { List, X } from '@phosphor-icons/react'
import { SparkPointLogo } from '@/components/SparkPointLogo'

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
    <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button 
              onClick={() => handleNavigate('home')} 
              className="hover:opacity-80 transition-opacity"
            >
              <SparkPointLogo height={32} />
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavigate('home')}
              className={`transition-colors font-medium relative ${
                isActive('home') 
                  ? 'text-primary' 
                  : 'text-foreground hover:text-primary'
              }`}
            >
              Home
              {isActive('home') && <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary"></div>}
            </button>
            <button 
              onClick={() => handleNavigate('capabilities')}
              className={`transition-colors font-medium relative ${
                isActive('capabilities') 
                  ? 'text-primary' 
                  : 'text-foreground hover:text-primary'
              }`}
            >
              Capabilities
              {isActive('capabilities') && <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary"></div>}
            </button>
            <button 
              onClick={() => handleNavigate('solutions')}
              className={`transition-colors font-medium relative ${
                isActive('solutions') 
                  ? 'text-primary' 
                  : 'text-foreground hover:text-primary'
              }`}
            >
              Solutions
              {isActive('solutions') && <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary"></div>}
            </button>
            <button 
              onClick={() => handleNavigate('insights')}
              className={`transition-colors font-medium relative ${
                isActive('insights') 
                  ? 'text-primary' 
                  : 'text-foreground hover:text-primary'
              }`}
            >
              Insights
              {isActive('insights') && <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary"></div>}
            </button>
            <button 
              onClick={() => handleNavigate('case-studies')}
              className={`transition-colors font-medium relative ${
                isActive('case-studies') 
                  ? 'text-primary' 
                  : 'text-foreground hover:text-primary'
              }`}
            >
              Case Studies
              {isActive('case-studies') && <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary"></div>}
            </button>
            <Button 
              onClick={() => handleNavigate('contact')}
              className="fire-gradient hover:ember-glow text-white font-semibold px-6 shadow-lg hover:shadow-xl transition-all duration-300"
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
          <div className="md:hidden border-t border-border bg-background">
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
                className="w-full fire-gradient hover:ember-glow text-white font-semibold mt-2 shadow-lg"
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