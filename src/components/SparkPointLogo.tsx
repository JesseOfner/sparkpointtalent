interface SparkPointLogoProps {
  width?: number
  height?: number
  className?: string
}

export function SparkPointLogo({ width = 120, height = 40, className = "" }: SparkPointLogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="mr-3">
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
            d="M20 5C15 8 12 15 12 20C12 27 16 32 20 32C24 32 28 27 28 20C28 15 25 8 20 5Z"
            fill="url(#flameGradient1)"
          />
          {/* Inner flame */}
          <path
            d="M20 8C17 10 15 15 15 18C15 23 17 26 20 26C23 26 25 23 25 18C25 15 23 10 20 8Z"
            fill="url(#flameGradient2)"
          />
          {/* Spark particles */}
          <circle cx="15" cy="12" r="1.5" fill="url(#sparkGradient)" className="spark-particle" />
          <circle cx="26" cy="14" r="1" fill="url(#sparkGradient)" className="spark-particle" style={{animationDelay: '0.5s'}} />
          <circle cx="22" cy="8" r="0.8" fill="url(#sparkGradient)" className="spark-particle" style={{animationDelay: '1s'}} />
          
          <defs>
            {/* Flame gradients */}
            <linearGradient id="flameGradient1" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="oklch(0.25 0.05 15)" />
              <stop offset="30%" stopColor="oklch(0.55 0.22 15)" />
              <stop offset="70%" stopColor="oklch(0.62 0.25 35)" />
              <stop offset="100%" stopColor="oklch(0.78 0.18 85)" />
            </linearGradient>
            <linearGradient id="flameGradient2" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="oklch(0.55 0.22 15)" />
              <stop offset="50%" stopColor="oklch(0.62 0.25 35)" />
              <stop offset="100%" stopColor="oklch(0.78 0.18 85)" />
            </linearGradient>
            <radialGradient id="sparkGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="oklch(0.78 0.18 85)" />
              <stop offset="100%" stopColor="oklch(0.78 0.18 85)" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="text-2xl font-bold">
        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          SPARKPOINT
        </span>
      </div>
    </div>
  )
}