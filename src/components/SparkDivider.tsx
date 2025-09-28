export function SparkDivider() {
  return (
    <div className="relative py-8 flex justify-center">
      <div className="flex items-center space-x-4">
        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-accent/40"></div>
        <div className="relative">
          <div className="w-3 h-3 bg-accent rounded-full spark-particle"></div>
          <div className="absolute inset-0 w-3 h-3 bg-accent/30 rounded-full blur-sm"></div>
        </div>
        <div className="w-2 h-2 bg-accent/70 rounded-full spark-particle" style={{animationDelay: '0.3s'}}></div>
        <div className="w-1.5 h-1.5 bg-accent/50 rounded-full spark-particle" style={{animationDelay: '0.6s'}}></div>
        <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-accent/40"></div>
      </div>
    </div>
  )
}