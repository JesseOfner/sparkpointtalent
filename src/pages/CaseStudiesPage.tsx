import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight, TrendUp, Clock, Users, Truck, MapPin, Target, CheckCircle } from '@phosphor-icons/react'

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

      {/* Detailed Case Study - Logistics */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Case Study Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Truck className="w-4 h-4" />
              Transportation & Logistics
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Multi-Location Logistics Company
            </h2>
            <p className="text-lg text-muted-foreground">
              8-month programmatic recruitment implementation
            </p>
          </div>

          {/* The Challenge */}
          <div className="mb-16">
            <Card className="p-8 md:p-10 bg-card shadow-lg">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  The Challenge
                </h3>
                <h4 className="text-xl text-primary font-semibold mb-6">
                  Manual Job Posting Consuming Resources with Poor Results
                </h4>
                <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                  This 500-employee logistics company with 12 distribution centers was manually posting jobs across multiple job boards, spending significant time and budget with inconsistent results. They needed drivers, warehouse staff, and logistics coordinators but were getting low application volumes and poor candidate quality.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h5 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" />
                    Key Pain Points
                  </h5>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-foreground">Manual job posting across 6+ job boards taking 12 hours/week</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-foreground">Inconsistent application volumes across locations</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-foreground">No visibility into which job boards performed best for different roles</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-foreground">High cost-per-application with limited budget control</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-foreground">Geographic coverage gaps in rural markets</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-destructive/5 to-destructive/10 p-6 rounded-lg">
                  <h5 className="text-lg font-semibold text-foreground mb-4">Impact on Operations</h5>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-destructive" />
                      <div>
                        <div className="font-semibold text-foreground">12 Hours/Week</div>
                        <div className="text-sm text-muted-foreground">Manual posting time</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-destructive" />
                      <div>
                        <div className="font-semibold text-foreground">Inconsistent Coverage</div>
                        <div className="text-sm text-muted-foreground">Across 12 locations</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <TrendUp className="w-5 h-5 text-destructive" />
                      <div>
                        <div className="font-semibold text-foreground">High Cost/App</div>
                        <div className="text-sm text-muted-foreground">No optimization</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* The Solution */}
          <div className="mb-16">
            <Card className="p-8 md:p-10 bg-card shadow-lg">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  The Solution
                </h3>
                <h4 className="text-xl text-primary font-semibold mb-6">
                  Automated Programmatic Job Distribution Platform
                </h4>
                <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                  Implemented Keloh's programmatic recruitment platform to automate job distribution, optimize spending in real-time, and provide complete transparency into performance across all locations and job types.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h5 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Implementation Details
                  </h5>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-foreground">Automated job distribution across 50+ relevant job boards and sites</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-foreground">Geographic targeting around each distribution center</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-foreground">Real-time budget optimization based on application performance</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-foreground">Role-specific targeting for drivers vs. warehouse vs. office positions</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-foreground">Easy Apply integration to reduce application friction</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-6 rounded-lg">
                  <h5 className="text-lg font-semibold text-foreground mb-4">Strategic Approach</h5>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold text-sm">1</span>
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">Platform Integration</div>
                        <div className="text-sm text-muted-foreground">Connect with existing ATS and HR systems</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold text-sm">2</span>
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">Geographic Optimization</div>
                        <div className="text-sm text-muted-foreground">Target candidates within commuting distance</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold text-sm">3</span>
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">Performance Tracking</div>
                        <div className="text-sm text-muted-foreground">Real-time analytics and optimization</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* The Results */}
          <div className="mb-16">
            <Card className="p-8 md:p-10 bg-card shadow-lg">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  The Results
                </h3>
                <h4 className="text-xl text-primary font-semibold mb-6">
                  360% Increase in Applicant Volume with Reduced Manual Work
                </h4>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg text-center">
                  <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendUp className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="text-3xl font-bold text-green-600 mb-2">+360%</div>
                  <div className="text-sm font-semibold text-foreground mb-1">Applicant Volume</div>
                  <div className="text-xs text-muted-foreground">Massive increase in qualified applications</div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg text-center">
                  <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">83%</div>
                  <div className="text-sm font-semibold text-foreground mb-1">Time Reduction</div>
                  <div className="text-xs text-muted-foreground">From 12 hours/week to 2 hours/week</div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg text-center">
                  <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-purple-600" />
                  </div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
                  <div className="text-sm font-semibold text-foreground mb-1">New Markets</div>
                  <div className="text-xs text-muted-foreground">Previously unreachable geographic areas</div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-border">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Target className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-foreground">35% Cost Reduction</div>
                      <div className="text-sm text-muted-foreground">Real-time bidding optimization reduced waste</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Truck className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-foreground">68% → 89%</div>
                      <div className="text-sm text-muted-foreground">Driver position fill rate improvement</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
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