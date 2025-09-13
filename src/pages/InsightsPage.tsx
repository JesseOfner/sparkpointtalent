import { Button } from "@/components/ui/button"
import { TrendUp, ChartBar } from "@phosphor-icons/react"

export function InsightsPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-muted/30 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <TrendUp className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm font-medium text-primary uppercase tracking-wide">
                Strategic Insights
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Strategic Insights for Talent Acquisition Leaders
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Data-driven research, proven strategies, and actionable guidance to transform your recruitment marketing
            </p>
            
            <div className="mb-10">
              <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                Stay ahead of recruitment marketing trends with our latest research, case studies, and strategic insights. 
                From industry benchmarks to innovative campaign strategies, get the intelligence you need to outperform your competition.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
                  Subscribe to Updates
                </Button>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <ChartBar className="w-4 h-4" />
                  <span>New insights published weekly</span>
                </div>
              </div>
            </div>
            
            {/* Optional decorative element */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none hidden lg:block">
              <div className="w-96 h-96 relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-8 left-8 w-80 h-80 bg-secondary/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}