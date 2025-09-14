import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight, TrendUp, Clock, Users } from '@phosphor-icons/react'

export function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Proven Results Across Industries
          </h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
            Real transformations from our recruitment marketing solutions
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            See how we've helped companies like yours solve their biggest talent acquisition challenges. From reducing time-to-fill to improving candidate quality, these stories showcase the measurable impact of strategic recruitment marketing.
          </p>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Success Story
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              How a fast-growing technology company reduced time-to-fill by 60% while scaling their engineering team
            </p>
          </div>

          <Card className="p-8 md:p-12 shadow-lg">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
                  Technology • Series B SaaS
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  From 25 to 60 Engineers in 18 Months
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  A rapidly growing SaaS company needed to triple their engineering team while maintaining high hiring standards and cultural fit. Traditional recruiting methods weren't scaling with their growth demands.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-foreground">
                      <strong>Challenge:</strong> 95-day average time-to-fill for senior engineers with 40% offer decline rate
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-foreground">
                      <strong>Solution:</strong> Developer community engagement strategy with technical assessment integration
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-lg">
                <h4 className="text-lg font-semibold text-foreground mb-6">Key Results</h4>
                <div className="grid grid-cols-1 gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">60 Days</div>
                      <div className="text-sm text-muted-foreground">Average time-to-fill</div>
                      <div className="text-xs text-green-600 font-medium">37% improvement</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <TrendUp className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">78%</div>
                      <div className="text-sm text-muted-foreground">Offer acceptance rate</div>
                      <div className="text-xs text-green-600 font-medium">38pt increase</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">40%</div>
                      <div className="text-sm text-muted-foreground">Cost-per-hire reduction</div>
                      <div className="text-xs text-green-600 font-medium">$15K savings per hire</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h5 className="font-semibold text-foreground mb-2">Strategy</h5>
                  <p className="text-sm text-muted-foreground">
                    Built targeted campaigns across developer communities, implemented referral programs, and created technical content showcasing engineering culture.
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-foreground mb-2">Execution</h5>
                  <p className="text-sm text-muted-foreground">
                    Integrated technical assessments into application flow, optimized job descriptions for SEO, and automated candidate nurturing sequences.
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-foreground mb-2">Impact</h5>
                  <p className="text-sm text-muted-foreground">
                    Achieved aggressive hiring goals while improving candidate quality and reducing overall recruitment costs by $450K annually.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve similar results with a customized recruitment marketing strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8"
            >
              Schedule a Strategy Call
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 font-semibold px-8"
            >
              View More Case Studies
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}