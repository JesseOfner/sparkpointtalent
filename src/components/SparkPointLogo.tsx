interface SparkPointLogoProps {
  width?: number
  height?: number
  className?: string
  showTagline?: boolean
}

export function SparkPointLogo({ width = 120, height = 40, className = "", showTagline = false }: SparkPointLogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="mr-3 relative">
        <svg
          width={height}
          height={height}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flame-flicker"
        >
          {/* Main flame shape */}
          <path
            d="M20 4C15 7 12 14 12 19C12 26 16 31 20 31C24 31 28 26 28 19C28 14 25 7 20 4Z"
            fill="url(#flameGradient1)"
          />
          {/* Inner flame core */}
          <path
            d="M20 7C17 9 15 14 15 17C15 22 17 25 20 25C23 25 25 22 25 17C25 14 23 9 20 7Z"
            fill="url(#flameGradient2)"
          />
          {/* Hot center */}
          <path
            d="M20 12C19 13 18 15 18 17C18 19 19 21 20 21C21 21 22 19 22 17C22 15 21 13 20 12Z"
            fill="url(#flameGradient3)"
          />
          
          {/* Dynamic spark particles */}
          <circle cx="14" cy="11" r="1.8" fill="url(#sparkGradient)" className="spark-particle" />
          <circle cx="27" cy="13" r="1.2" fill="url(#sparkGradient)" className="spark-particle" style={{animationDelay: '0.3s'}} />
          <circle cx="23" cy="7" r="0.9" fill="url(#sparkGradient)" className="spark-particle" style={{animationDelay: '0.8s'}} />
          <circle cx="16" cy="8" r="0.6" fill="url(#sparkGradient)" className="spark-particle" style={{animationDelay: '1.2s'}} />
          <circle cx="29" cy="17" r="0.8" fill="url(#sparkGradient)" className="spark-particle" style={{animationDelay: '1.5s'}} />
          
          <defs>
            {/* Enhanced flame gradients */}
            <linearGradient id="flameGradient1" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="oklch(0.25 0.05 15)" />
              <stop offset="25%" stopColor="oklch(0.45 0.18 25)" />
              <stop offset="50%" stopColor="oklch(0.55 0.22 15)" />
              <stop offset="75%" stopColor="oklch(0.62 0.25 35)" />
              <stop offset="100%" stopColor="oklch(0.78 0.18 85)" />
            </linearGradient>
            <linearGradient id="flameGradient2" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="oklch(0.55 0.22 15)" />
              <stop offset="40%" stopColor="oklch(0.62 0.25 35)" />
              <stop offset="100%" stopColor="oklch(0.85 0.15 85)" />
            </linearGradient>
            <linearGradient id="flameGradient3" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="oklch(0.78 0.18 85)" />
              <stop offset="100%" stopColor="oklch(0.92 0.1 90)" />
            </linearGradient>
            <radialGradient id="sparkGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="oklch(0.85 0.15 85)" />
              <stop offset="70%" stopColor="oklch(0.78 0.18 85)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="oklch(0.78 0.18 85)" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
        
        {/* Additional spark particles around the flame */}
        <div className="absolute -top-1 -left-1 w-2 h-2 bg-accent rounded-full spark-particle opacity-70" style={{animationDelay: '0.2s'}}></div>
        <div className="absolute top-2 -right-2 w-1.5 h-1.5 bg-primary rounded-full spark-particle opacity-60" style={{animationDelay: '0.7s'}}></div>
        <div className="absolute -bottom-1 left-2 w-1 h-1 bg-accent rounded-full spark-particle opacity-80" style={{animationDelay: '1.1s'}}></div>
      </div>
      
      <div className="flex flex-col">
        <div className="text-2xl font-bold leading-tight">
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent tracking-tight">
            SPARK
          </span>
          <span className="bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent tracking-tight relative">
            POINT
            {/* Flame emerging from the P */}
            <div className="absolute -top-1 left-0 w-2 h-3 opacity-80">
              <svg viewBox="0 0 8 12" fill="none" className="w-full h-full flame-flicker">
                <path d="M4 1C3 2 2 4 2 5C2 7 3 8 4 8C5 8 6 7 6 5C6 4 5 2 4 1Z" fill="url(#miniFlame)" />
                <defs>
                  <linearGradient id="miniFlame" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="oklch(0.55 0.22 15)" />
                    <stop offset="100%" stopColor="oklch(0.78 0.18 85)" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </span>
        </div>
        {showTagline && (
          <div className="text-xs text-muted-foreground font-medium tracking-wider uppercase">
            AI-Powered Talent Ignition
          </div>
        )}
      </div>
    </div>
  )
}