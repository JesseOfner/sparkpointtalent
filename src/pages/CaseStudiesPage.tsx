import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight, TrendUp, Clock, Users, Truck, MapPin, Target, CheckCircle, Heart, ShieldCheck, UserCheck } from '@phosphor-icons/react'

export function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            AI-Powered Results Across Industries
          </h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
            Real transformations from our AI-powered talent acquisition solutions
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            See how we've helped companies like yours solve their biggest talent acquisition challenges with AI. From intelligent candidate matching to automated screening, these stories showcase the measurable impact of AI-powered recruitment.
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
              How a fast-growing technology company reduced time-to-fill by 70% using AI-powered candidate matching and automated screening
            </p>
          </div>

          <Card className="p-8 md:p-12 shadow-lg">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
                  Technology • Series B SaaS
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  AI-Powered Engineering Team Scaling: From 25 to 60 Engineers in 18 Months
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  A rapidly growing SaaS company needed to triple their engineering team while maintaining high hiring standards and cultural fit. Traditional recruiting methods weren't scaling with their growth demands, so they implemented our AI-powered talent acquisition platform.
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
                      <strong>AI Solution:</strong> Machine learning candidate matching with automated technical assessment and GitHub analysis
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

      {/* Detailed Case Study - Healthcare */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Case Study Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Heart className="w-4 h-4" />
              Healthcare & Life Sciences
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Regional Healthcare System
            </h2>
            <p className="text-lg text-muted-foreground">
              6-month programmatic recruitment transformation
            </p>
          </div>

          {/* The Challenge */}
          <div className="mb-16">
            <Card className="p-8 md:p-10 bg-card shadow-lg">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  The Challenge
                </h3>
                <h4 className="text-xl text-secondary font-semibold mb-6">
                  Critical Nursing Shortage Impacting Patient Care
                </h4>
                <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                  A healthcare organization with multiple facilities faced severe challenges attracting qualified nursing and clinical support staff. Traditional recruitment methods were failing to reach passive candidates, and competition from travel nursing agencies was driving up costs.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h5 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5 text-secondary" />
                    Key Pain Points
                  </h5>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-foreground">Severe shortage of registered nurses and clinical support staff</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-foreground">Limited reach to passive candidates not actively job searching</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-foreground">High dependency on expensive travel nurses and agencies</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-foreground">Lengthy recruitment process losing qualified candidates</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-foreground">Geographic competition from larger health systems</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-destructive/5 to-destructive/10 p-6 rounded-lg">
                  <h5 className="text-lg font-semibold text-foreground mb-4">Impact on Patient Care</h5>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-destructive" />
                      <div>
                        <div className="font-semibold text-foreground">Staff Shortages</div>
                        <div className="text-sm text-muted-foreground">Multiple facilities affected</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-destructive" />
                      <div>
                        <div className="font-semibold text-foreground">85 Days</div>
                        <div className="text-sm text-muted-foreground">Average time-to-fill nursing positions</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <TrendUp className="w-5 h-5 text-destructive" />
                      <div>
                        <div className="font-semibold text-foreground">45% Travel Nurse</div>
                        <div className="text-sm text-muted-foreground">Expensive agency dependency</div>
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
                <h4 className="text-xl text-secondary font-semibold mb-6">
                  Comprehensive Programmatic and Digital Recruitment Strategy
                </h4>
                <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                  Implemented programmatic advertising combined with over-the-top (OTT) streaming campaigns to reach healthcare professionals across multiple touchpoints, including those not actively job searching.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h5 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    Implementation Details
                  </h5>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-foreground">Programmatic job advertising across healthcare-specific job boards</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-foreground">OTT streaming ads targeting healthcare professionals during off-hours</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-foreground">Retargeting campaigns for website visitors who didn't apply</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-foreground">Mobile-optimized application process for busy healthcare workers</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-foreground">Geographic expansion to reach commutable markets</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-secondary/5 to-accent/5 p-6 rounded-lg">
                  <h5 className="text-lg font-semibold text-foreground mb-4">Strategic Approach</h5>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-secondary font-bold text-sm">1</span>
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">Multi-Channel Targeting</div>
                        <div className="text-sm text-muted-foreground">Reach passive candidates through OTT and programmatic ads</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-secondary font-bold text-sm">2</span>
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">Mobile Optimization</div>
                        <div className="text-sm text-muted-foreground">Streamlined application for busy healthcare professionals</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-secondary font-bold text-sm">3</span>
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">Retargeting Strategy</div>
                        <div className="text-sm text-muted-foreground">Re-engage interested but unconverted candidates</div>
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
                <h4 className="text-xl text-secondary font-semibold mb-6">
                  166% Growth in Qualified Candidates with 58% More Conversions
                </h4>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-lg text-center">
                  <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-emerald-600" />
                  </div>
                  <div className="text-3xl font-bold text-emerald-600 mb-2">+166%</div>
                  <div className="text-sm font-semibold text-foreground mb-1">Website Users</div>
                  <div className="text-xs text-muted-foreground">Healthcare professionals at 6-month mark</div>
                </div>
                
                <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-6 rounded-lg text-center">
                  <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <UserCheck className="w-8 h-8 text-cyan-600" />
                  </div>
                  <div className="text-3xl font-bold text-cyan-600 mb-2">+58%</div>
                  <div className="text-sm font-semibold text-foreground mb-1">Overall Conversions</div>
                  <div className="text-xs text-muted-foreground">Applications and inquiries increase</div>
                </div>
                
                <div className="bg-gradient-to-br from-rose-50 to-rose-100 p-6 rounded-lg text-center">
                  <div className="w-16 h-16 bg-rose-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-rose-600" />
                  </div>
                  <div className="text-3xl font-bold text-rose-600 mb-2">39%</div>
                  <div className="text-sm font-semibold text-foreground mb-1">Faster Hiring</div>
                  <div className="text-xs text-muted-foreground">85 days → 52 days time-to-fill</div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-border">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <ShieldCheck className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-foreground">45% → 25%</div>
                      <div className="text-sm text-muted-foreground">Travel nurse dependency reduction</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <TrendUp className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-foreground">3-Month Results</div>
                      <div className="text-sm text-muted-foreground">+89% users, +12% conversions early milestone</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            Every company's recruitment challenges are unique. Let's discuss how we can create a custom solution that delivers measurable results for your organization.
          </p>
          <Button 
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-12 py-6 text-lg"
            onClick={() => {
              const hubspotFormElement = document.querySelector('.hs-form-frame') as HTMLElement;
              if (hubspotFormElement) {
                hubspotFormElement.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Schedule a Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* HubSpot Form */}
      <section className="py-16 bg-background">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hs-form-frame" data-region="na1" data-form-id="b3c28533-e0cb-4b8b-a5d2-c0297d6066fa" data-portal-id="21212478"></div>
        </div>
      </section>
    </div>
  )
}