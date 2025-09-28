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
            When Sparks Become Blazes
          </h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
            Real transformations where we provided the catalyst for talent acquisition success
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            See how we've helped companies ignite their talent acquisition potential. From cold recruitment processes to blazing pipelines, these stories showcase what happens when the right catalyst meets opportunity.
          </p>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Ignition Story
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              How a fast-growing technology company sparked their hiring success, reducing time-to-fill by 70% through AI-powered candidate discovery
            </p>
          </div>

          <Card className="ember-card p-8 md:p-12 shadow-lg relative overflow-hidden">
            {/* Card spark particles */}
            <div className="absolute top-4 right-4 w-1 h-1 bg-accent rounded-full spark-particle"></div>
            <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-primary/70 rounded-full spark-particle" style={{animationDelay: '0.5s'}}></div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
                  Technology • Series B SaaS
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  AI-Powered Engineering Team Scaling: From 25 to 60 Engineers in 18 Months
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  A rapidly growing SaaS company needed to triple their engineering team while maintaining high hiring standards and cultural fit. Traditional recruiting methods weren't scaling with their growth demands, so they implemented our AI-powered candidate discovery platform.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-foreground">
                      <strong>The Spark Was Missing:</strong> 95-day average time-to-fill for senior engineers with 40% offer decline rate
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-foreground">
                      <strong>We Provided the Catalyst:</strong> AI-Powered Candidate Discovery Platform with machine learning algorithms
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-foreground">
                      <strong>The Fire Was Lit:</strong> Achieved aggressive hiring goals with 300% more qualified candidates discovered
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
                      <div className="text-2xl font-bold text-foreground">28 Days</div>
                      <div className="text-sm text-muted-foreground">Average time-to-fill</div>
                      <div className="text-xs text-green-600 font-medium">70% improvement</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <TrendUp className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">300%</div>
                      <div className="text-sm text-muted-foreground">More qualified candidates found</div>
                      <div className="text-xs text-green-600 font-medium">AI identified hidden talent pools</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">50%</div>
                      <div className="text-sm text-muted-foreground">Cost-per-hire reduction</div>
                      <div className="text-xs text-green-600 font-medium">$18K savings per hire</div>
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
                    Deployed AI algorithms to analyze GitHub profiles, technical contributions, and coding patterns to identify high-potential engineers not actively job searching.
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-foreground mb-2">Execution</h5>
                  <p className="text-sm text-muted-foreground">
                    Implemented machine learning models for skill assessment, automated personalized outreach, and predictive analytics for candidate ranking.
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-foreground mb-2">Impact</h5>
                  <p className="text-sm text-muted-foreground">
                    Achieved aggressive hiring goals while discovering 300% more qualified candidates and reducing overall recruitment costs by $540K annually.
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
                  The Spark Was Missing
                </h3>
                <h4 className="text-xl text-primary font-semibold mb-6">
                  Talent acquisition was cold with no ignition
                </h4>
                <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                  This 500-employee logistics company with 12 distribution centers was struggling with manual candidate screening and matching processes, spending significant time with inconsistent results. They needed drivers, warehouse staff, and logistics coordinators but were getting poor candidate-job fit and high turnover.
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
                      <p className="text-foreground">Manual candidate screening taking 8 hours/week per recruiter</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-foreground">Poor candidate-job matching leading to 45% early turnover</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-foreground">No predictive analytics for candidate success indicators</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-foreground">Inconsistent qualification standards across locations</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-foreground">Limited engagement automation for candidate nurturing</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-destructive/5 to-destructive/10 p-6 rounded-lg">
                  <h5 className="text-lg font-semibold text-foreground mb-4">Impact on Operations</h5>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-destructive" />
                      <div>
                        <div className="font-semibold text-foreground">8 Hours/Week</div>
                        <div className="text-sm text-muted-foreground">Manual screening time</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-destructive" />
                      <div>
                        <div className="font-semibold text-foreground">45% Turnover</div>
                        <div className="text-sm text-muted-foreground">Poor job-candidate fit</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <TrendUp className="w-5 h-5 text-destructive" />
                      <div>
                        <div className="font-semibold text-foreground">No Predictive Data</div>
                        <div className="text-sm text-muted-foreground">Success indicators missing</div>
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
                  We Provided the Catalyst
                </h3>
                <h4 className="text-xl text-primary font-semibold mb-6">
                  AI-powered recruitment that sparked immediate results
                </h4>
                <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                  Implemented SparkPoint's AI-powered matching system to automate candidate screening, provide predictive analytics for job fit, and deliver automated engagement sequences tailored to each candidate's profile and location.
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
                      <p className="text-foreground">AI-powered candidate scoring based on skills, experience, and location fit</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-foreground">Automated engagement sequences personalized by role and location</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-foreground">Predictive analytics for candidate success and retention likelihood</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-foreground">Machine learning optimization of screening criteria across all locations</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-foreground">Automated qualification assessments with intelligent routing</p>
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
                        <div className="font-semibold text-foreground">AI Integration</div>
                        <div className="text-sm text-muted-foreground">Connect machine learning models with existing ATS</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold text-sm">2</span>
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">Predictive Matching</div>
                        <div className="text-sm text-muted-foreground">Score candidates on success probability and fit</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold text-sm">3</span>
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">Automated Engagement</div>
                        <div className="text-sm text-muted-foreground">Personalized outreach and qualification flows</div>
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
                  The Fire Was Lit
                </h3>
                <h4 className="text-xl text-primary font-semibold mb-6">
                  360% increase in qualified candidate pipeline blazing bright
                </h4>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg text-center">
                  <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendUp className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="text-3xl font-bold text-green-600 mb-2">+360%</div>
                  <div className="text-sm font-semibold text-foreground mb-1">Pipeline Blazing Bright</div>
                  <div className="text-xs text-muted-foreground">AI matching ignited qualified candidate discovery</div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg text-center">
                  <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">90%</div>
                  <div className="text-sm font-semibold text-foreground mb-1">Screening Time Spark</div>
                  <div className="text-xs text-muted-foreground">From 8 hours/week to 48 minutes/week</div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg text-center">
                  <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-purple-600" />
                  </div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">65%</div>
                  <div className="text-sm font-semibold text-foreground mb-1">Turnover Extinguished</div>
                  <div className="text-xs text-muted-foreground">Better job-candidate fit through AI catalyst</div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-border">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Target className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-foreground">62% Engagement Increase</div>
                      <div className="text-sm text-muted-foreground">Automated personalized outreach improved response rates</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Truck className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-foreground">78% → 92%</div>
                      <div className="text-sm text-muted-foreground">Driver position fill rate with predictive matching</div>
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
                  The Spark Was Missing
                </h3>
                <h4 className="text-xl text-secondary font-semibold mb-6">
                  Critical staffing shortages were extinguishing growth
                </h4>
                <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                  A healthcare organization with multiple facilities faced challenges attracting qualified nursing and clinical support staff due to poor employer brand visibility and ineffective recruitment marketing. Traditional marketing approaches weren't reaching the right candidates at the right time.
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
                      <p className="text-foreground">Poor employer brand visibility among target healthcare professionals</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-foreground">Generic recruitment marketing not resonating with different nursing specialties</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-foreground">No targeted messaging based on career stage or specialty interests</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-foreground">Limited digital presence where healthcare professionals engage</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-foreground">Weak value proposition messaging competing against travel agencies</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-destructive/5 to-destructive/10 p-6 rounded-lg">
                  <h5 className="text-lg font-semibold text-foreground mb-4">Impact on Recruitment Marketing</h5>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-destructive" />
                      <div>
                        <div className="font-semibold text-foreground">Low Brand Awareness</div>
                        <div className="text-sm text-muted-foreground">Poor recognition among target nurses</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-destructive" />
                      <div>
                        <div className="font-semibold text-foreground">12% Application Rate</div>
                        <div className="text-sm text-muted-foreground">Low conversion from job ad views</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <TrendUp className="w-5 h-5 text-destructive" />
                      <div>
                        <div className="font-semibold text-foreground">Generic Messaging</div>
                        <div className="text-sm text-muted-foreground">No specialty-based targeting</div>
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
                  We Provided the Catalyst
                </h3>
                <h4 className="text-xl text-secondary font-semibold mb-6">
                  Programmatic campaigns that ignited healthcare professional interest
                </h4>
                <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                  Implemented AI-powered content optimization and intelligent targeting to transform the healthcare organization's employer brand presence and dramatically improve recruitment marketing effectiveness across digital channels.
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
                      <p className="text-foreground">AI-powered content creation optimized for different nursing specialties</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-foreground">Intelligent audience targeting based on career stage and interests</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-foreground">Automated A/B testing and optimization of messaging and creative</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-foreground">Predictive analytics for optimal posting times and channel selection</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-foreground">Dynamic value proposition messaging based on competitive analysis</p>
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
                        <div className="font-semibold text-foreground">AI Content Optimization</div>
                        <div className="text-sm text-muted-foreground">Generate specialty-specific messaging and creative</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-secondary font-bold text-sm">2</span>
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">Intelligent Targeting</div>
                        <div className="text-sm text-muted-foreground">Reach nurses based on career preferences and stage</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-secondary font-bold text-sm">3</span>
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">Automated Optimization</div>
                        <div className="text-sm text-muted-foreground">Continuous testing and improvement of campaigns</div>
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
                  The Fire Was Lit
                </h3>
                <h4 className="text-xl text-secondary font-semibold mb-6">
                  166% growth in applications, burning through staffing gaps
                </h4>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-lg text-center">
                  <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-emerald-600" />
                  </div>
                  <div className="text-3xl font-bold text-emerald-600 mb-2">+166%</div>
                  <div className="text-sm font-semibold text-foreground mb-1">Application Growth Ignited</div>
                  <div className="text-xs text-muted-foreground">Programmatic campaigns burned through gaps</div>
                </div>
                
                <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-6 rounded-lg text-center">
                  <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <UserCheck className="w-8 h-8 text-cyan-600" />
                  </div>
                  <div className="text-3xl font-bold text-cyan-600 mb-2">+95%</div>
                  <div className="text-sm font-semibold text-foreground mb-1">Brand Engagement</div>
                  <div className="text-xs text-muted-foreground">Social media and content interaction increase</div>
                </div>
                
                <div className="bg-gradient-to-br from-rose-50 to-rose-100 p-6 rounded-lg text-center">
                  <div className="w-16 h-16 bg-rose-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-rose-600" />
                  </div>
                  <div className="text-3xl font-bold text-rose-600 mb-2">78%</div>
                  <div className="text-sm font-semibold text-foreground mb-1">Faster Campaign ROI</div>
                  <div className="text-xs text-muted-foreground">AI optimization accelerated results</div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-border">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <ShieldCheck className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-foreground">67% Quality Improvement</div>
                      <div className="text-sm text-muted-foreground">AI targeting reached more qualified candidates</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <TrendUp className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-foreground">4x Content Performance</div>
                      <div className="text-sm text-muted-foreground">AI-optimized posts outperformed manual content</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Case Study - Professional Services */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Case Study Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <UserCheck className="w-4 h-4" />
              Professional Services
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Management Consulting Firm
            </h2>
            <p className="text-lg text-muted-foreground">
              4-month senior talent acquisition transformation
            </p>
          </div>

          {/* The Challenge */}
          <div className="mb-16">
            <Card className="p-8 md:p-10 bg-card shadow-lg">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  The Spark Was Missing
                </h3>
                <h4 className="text-xl text-accent font-semibold mb-6">
                  Senior talent acquisition was barely smoldering
                </h4>
                <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                  A growing management consulting firm struggled to attract and hire senior consultants and partners, facing intense competition from larger firms with stronger employer brands and more aggressive recruitment strategies.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h5 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5 text-accent" />
                    Key Pain Points
                  </h5>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-foreground">Senior consultant searches taking 6+ months with poor conversion</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-foreground">Weak employer brand competing against Big 4 consulting firms</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-foreground">High cost-per-hire draining recruitment budget efficiency</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-foreground">Limited visibility into passive consultant talent pools</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-foreground">Inefficient interview processes leading to candidate drop-offs</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-destructive/5 to-destructive/10 p-6 rounded-lg">
                  <h5 className="text-lg font-semibold text-foreground mb-4">Impact on Growth</h5>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-destructive" />
                      <div>
                        <div className="font-semibold text-foreground">6+ Months</div>
                        <div className="text-sm text-muted-foreground">Senior consultant time-to-fill</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-destructive" />
                      <div>
                        <div className="font-semibold text-foreground">$75K Cost/Hire</div>
                        <div className="text-sm text-muted-foreground">Expensive senior recruitment</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <TrendUp className="w-5 h-5 text-destructive" />
                      <div>
                        <div className="font-semibold text-foreground">Weak Brand Presence</div>
                        <div className="text-sm text-muted-foreground">Poor visibility among targets</div>
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
                  We Provided the Catalyst
                </h3>
                <h4 className="text-xl text-accent font-semibold mb-6">
                  Employer brand optimization that created the perfect conditions
                </h4>
                <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                  Implemented comprehensive employer brand transformation and AI-powered talent identification to position the firm as a premier destination for senior consulting talent and streamline the entire recruitment process.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h5 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    Implementation Details
                  </h5>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-foreground">Employer brand repositioning with thought leadership content strategy</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-foreground">AI-powered passive candidate identification and engagement sequences</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-foreground">Streamlined interview processes with predictive assessment tools</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-foreground">Targeted digital presence optimization across professional networks</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-foreground">Automated candidate nurturing and relationship management</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-accent/5 to-primary/5 p-6 rounded-lg">
                  <h5 className="text-lg font-semibold text-foreground mb-4">Strategic Approach</h5>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-accent font-bold text-sm">1</span>
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">Brand Transformation</div>
                        <div className="text-sm text-muted-foreground">Reposition as thought leader and top employer</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-accent font-bold text-sm">2</span>
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">AI-Powered Sourcing</div>
                        <div className="text-sm text-muted-foreground">Identify and engage passive senior talent</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-accent font-bold text-sm">3</span>
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">Process Optimization</div>
                        <div className="text-sm text-muted-foreground">Streamline assessment and decision-making</div>
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
                  The Fire Was Lit
                </h3>
                <h4 className="text-xl text-accent font-semibold mb-6">
                  Consultant hiring blazed with 50% cost reduction and 28% faster fills
                </h4>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg text-center">
                  <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-orange-600" />
                  </div>
                  <div className="text-3xl font-bold text-orange-600 mb-2">28%</div>
                  <div className="text-sm font-semibold text-foreground mb-1">Faster Fill Times</div>
                  <div className="text-xs text-muted-foreground">Senior consultant hiring accelerated</div>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg text-center">
                  <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="text-3xl font-bold text-green-600 mb-2">50%</div>
                  <div className="text-sm font-semibold text-foreground mb-1">Cost Reduction</div>
                  <div className="text-xs text-muted-foreground">From $75K to $37.5K cost-per-hire</div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg text-center">
                  <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendUp className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">+240%</div>
                  <div className="text-sm font-semibold text-foreground mb-1">Brand Engagement</div>
                  <div className="text-xs text-muted-foreground">Senior talent interaction increase</div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-border">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <ShieldCheck className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-foreground">85% Quality Match</div>
                      <div className="text-sm text-muted-foreground">AI-powered candidate assessment accuracy</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <UserCheck className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-foreground">92% Offer Acceptance</div>
                      <div className="text-sm text-muted-foreground">Stronger employer brand drove acceptance rates</div>
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
            Ready to Ignite Your Success Story?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            Every company's recruitment challenges are unique. Let's discuss how we can provide the catalyst that transforms your talent acquisition from smoldering to blazing.
          </p>
          <Button 
            size="lg"
            className="fire-button bg-primary text-primary-foreground hover:bg-secondary font-semibold px-12 py-6 text-lg relative group overflow-hidden"
            onClick={() => {
              const hubspotFormElement = document.querySelector('.hs-form-frame') as HTMLElement;
              if (hubspotFormElement) {
                hubspotFormElement.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <span className="relative z-10">Schedule a Consultation</span>
            <ArrowRight className="ml-2 w-5 h-5 relative z-10" />
            <div className="absolute top-2 right-2 w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 spark-particle transition-opacity"></div>
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