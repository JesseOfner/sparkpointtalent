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
    <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-background/98 via-background/95 to-background/98 backdrop-blur-md border-b border-border/50 z-50 shadow-lg">
      {/* Subtle fire texture overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 opacity-40"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button 
              onClick={() => handleNavigate('home')} 
              className="hover:scale-105 transition-all duration-300 hover:drop-shadow-lg group"
            >
              <SparkPointLogo height={32} />
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <NavButton
              onClick={() => handleNavigate('home')}
              isActive={isActive('home')}
              label="Home"
            />
            <NavButton
              onClick={() => handleNavigate('capabilities')}
              isActive={isActive('capabilities')}
              label="Capabilities"
            />
            <NavButton
              onClick={() => handleNavigate('solutions')}
              isActive={isActive('solutions')}
              label="Solutions"
            />
            <NavButton
              onClick={() => handleNavigate('insights')}
              isActive={isActive('insights')}
              label="Insights"
            />
            <NavButton
              onClick={() => handleNavigate('case-studies')}
              isActive={isActive('case-studies')}
              label="Case Studies"
            />
            
            <div className="ml-4">
              <Button 
                onClick={() => handleNavigate('contact')}
                className="fire-gradient hover:ember-glow text-white font-semibold px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group"
              >
                <span className="relative z-10">Ignite Your Success</span>
                {/* Spark animation on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute top-1 right-2 w-1 h-1 bg-accent rounded-full spark-particle"></div>
                  <div className="absolute bottom-1 left-3 w-0.5 h-0.5 bg-accent rounded-full spark-particle" style={{animationDelay: '0.3s'}}></div>
                </div>
              </Button>
            </div>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hover:bg-primary/10 hover:text-primary transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <List size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile menu with fire-inspired slide animation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/50 bg-gradient-to-b from-background/98 to-background/95 backdrop-blur-md animate-in slide-in-from-top-2 duration-300">
            <div className="px-2 pt-3 pb-4 space-y-2 relative">
              {/* Subtle ember glow effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-50 rounded-lg"></div>
              
              <MobileNavButton
                onClick={() => handleNavigate('home')}
                isActive={isActive('home')}
                label="Home"
              />
              <MobileNavButton
                onClick={() => handleNavigate('capabilities')}
                isActive={isActive('capabilities')}
                label="Capabilities"
              />
              <MobileNavButton
                onClick={() => handleNavigate('solutions')}
                isActive={isActive('solutions')}
                label="Solutions"
              />
              <MobileNavButton
                onClick={() => handleNavigate('insights')}
                isActive={isActive('insights')}
                label="Insights"
              />
              <MobileNavButton
                onClick={() => handleNavigate('case-studies')}
                isActive={isActive('case-studies')}
                label="Case Studies"
              />
              
              <div className="pt-2 relative z-10">
                <Button 
                  onClick={() => handleNavigate('contact')}
                  className="w-full fire-gradient hover:ember-glow text-white font-semibold py-3 shadow-lg transition-all duration-300"
                >
                  Ignite Your Success
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

// Desktop navigation button component with ember-like active states
function NavButton({ onClick, isActive, label }: { onClick: () => void, isActive: boolean, label: string }) {
  return (
    <button 
      onClick={onClick}
      className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 group ${
        isActive 
          ? 'text-primary bg-primary/10 shadow-sm' 
          : 'text-foreground hover:text-primary hover:bg-primary/5'
      }`}
    >
      <span className="relative z-10">{label}</span>
      
      {/* Ember-like active indicator */}
      {isActive && (
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent ember-glow"></div>
      )}
      
      {/* Hover spark effect */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isActive ? 'hidden' : ''}`}>
        <div className="absolute top-1 right-2 w-0.5 h-0.5 bg-accent rounded-full spark-particle"></div>
        <div className="absolute bottom-1 left-2 w-0.5 h-0.5 bg-primary rounded-full spark-particle" style={{animationDelay: '0.4s'}}></div>
      </div>
    </button>
  )
}

// Mobile navigation button component
function MobileNavButton({ onClick, isActive, label }: { onClick: () => void, isActive: boolean, label: string }) {
  return (
    <button 
      onClick={onClick}
      className={`relative block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 group ${
        isActive 
          ? 'text-primary bg-gradient-to-r from-primary/10 to-primary/5 shadow-sm border-l-2 border-primary' 
          : 'text-foreground hover:text-primary hover:bg-primary/5 hover:border-l-2 hover:border-primary/50'
      }`}
    >
      <span className="relative z-10">{label}</span>
      
      {/* Active ember glow */}
      {isActive && (
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-primary/30 rounded-full ember-glow"></div>
      )}
    </button>
  )
}