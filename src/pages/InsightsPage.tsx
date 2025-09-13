import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrendUp, ChartBar, Download, ArrowRight, Clock, FileText, Target, Heart } from "@phosphor-icons/react"

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

      {/* Featured Insights Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Latest Strategic Insights
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our newest research and analysis on recruitment marketing trends
            </p>
          </div>

          {/* Asymmetric Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Large Featured Card (Left Side) */}
            <div className="lg:row-span-2">
              <div className="bg-card border rounded-xl p-8 h-full hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start justify-between mb-6">
                  <Badge variant="secondary" className="text-xs font-medium">
                    Research Report
                  </Badge>
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  2025 Recruitment Marketing Benchmark Report
                </h3>
                
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Comprehensive analysis of recruitment marketing performance across 15 industries, featuring 
                  time-to-fill benchmarks, cost-per-hire data, and campaign ROI insights.
                </p>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>12 min read</span>
                  </div>
                  <span>•</span>
                  <span>Published March 2025</span>
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group-hover:shadow-md transition-all">
                  <Download className="w-4 h-4 mr-2" />
                  Download Full Report
                </Button>
              </div>
            </div>

            {/* Medium Card 1 (Top Right) */}
            <div>
              <div className="bg-card border rounded-xl p-6 h-full hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start justify-between mb-4">
                  <Badge variant="outline" className="text-xs font-medium">
                    Strategy Guide
                  </Badge>
                  <div className="p-2 bg-secondary/10 rounded-lg">
                    <Target className="w-4 h-4 text-secondary" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  The ROI of Employer Brand Investment
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  How leading companies are measuring and maximizing the return on their employer 
                  branding initiatives.
                </p>
                
                <div className="flex items-center gap-3 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>8 min read</span>
                  </div>
                  <span>•</span>
                  <span>March 2025</span>
                </div>
                
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                  Read Article
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>

            {/* Medium Card 2 (Bottom Right) */}
            <div>
              <div className="bg-card border rounded-xl p-6 h-full hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start justify-between mb-4">
                  <Badge variant="outline" className="text-xs font-medium">
                    Industry Deep Dive
                  </Badge>
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Heart className="w-4 h-4 text-accent" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  Healthcare Recruitment: Solving the Talent Crisis
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Proven strategies for attracting healthcare professionals in today's competitive market.
                </p>
                
                <div className="flex items-center gap-3 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>6 min read</span>
                  </div>
                  <span>•</span>
                  <span>February 2025</span>
                </div>
                
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                  Read Case Study
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}