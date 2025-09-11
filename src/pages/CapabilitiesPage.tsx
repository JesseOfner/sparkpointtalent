export function CapabilitiesPage() {
  return (
    <div className="pt-16 min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-secondary relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Capabilities
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed">
              Comprehensive recruitment marketing solutions designed to transform how you attract, engage, and hire exceptional talent.
            </p>
          </div>
        </div>
      </section>

      {/* Employer Brand Strategy */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                Strategy & Brand
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Employer Brand Strategy
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Transform your organization into a talent magnet with compelling brand narratives that resonate across all touchpoints.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Brand Positioning & Messaging</h3>
                    <p className="text-muted-foreground">Develop authentic employer value propositions that differentiate you from competitors and attract your ideal candidates.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Multi-Channel Brand Experience</h3>
                    <p className="text-muted-foreground">Ensure consistent brand experience across career sites, social media, job descriptions, and candidate touchpoints.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Employee Advocacy Programs</h3>
                    <p className="text-muted-foreground">Activate your workforce as brand ambassadors with structured programs that amplify authentic employee voices.</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                  View Brand Strategy Process
                </button>
                <button className="px-8 py-4 border border-border text-foreground rounded-lg font-semibold hover:bg-muted transition-colors">
                  Download Brand Audit
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 lg:p-12">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <div className="w-6 h-6 bg-primary rounded"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">Brand Discovery</h4>
                      <p className="text-xs text-muted-foreground">Competitive analysis & positioning</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <div className="w-6 h-6 bg-secondary rounded"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">Message Framework</h4>
                      <p className="text-xs text-muted-foreground">EVP development & testing</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <div className="w-6 h-6 bg-accent rounded"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">Brand Activation</h4>
                      <p className="text-xs text-muted-foreground">Multi-channel implementation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Recruitment Campaigns */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-2xl p-8 lg:p-12">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="p-4 bg-white rounded-lg shadow-sm">
                      <div className="text-2xl font-bold text-primary">LinkedIn</div>
                      <div className="text-sm text-muted-foreground">Sponsored Content</div>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow-sm">
                      <div className="text-2xl font-bold text-secondary">Indeed</div>
                      <div className="text-sm text-muted-foreground">Job Promotions</div>
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="p-4 bg-white rounded-lg shadow-sm">
                      <div className="text-2xl font-bold text-accent">Google</div>
                      <div className="text-sm text-muted-foreground">Search Ads</div>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow-sm">
                      <div className="text-2xl font-bold text-primary">Facebook</div>
                      <div className="text-sm text-muted-foreground">Targeted Reach</div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white/50 rounded-lg border-2 border-dashed border-primary/20">
                  <div className="text-center text-primary font-semibold">Cross-Platform Analytics</div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-6">
                Digital Marketing
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Digital Recruitment Campaigns
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Multi-channel campaigns that reach candidates where they are most engaged, with precision targeting and compelling creative.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Programmatic Job Advertising</h3>
                    <p className="text-muted-foreground">Automated job distribution across 100+ job boards with real-time bid optimization and budget allocation.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Social Media Recruitment</h3>
                    <p className="text-muted-foreground">Targeted campaigns on LinkedIn, Facebook, Instagram, and emerging platforms to reach passive candidates.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Content Marketing & SEO</h3>
                    <p className="text-muted-foreground">Strategic content that improves search visibility and positions your company as an employer of choice.</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/90 transition-colors">
                  Campaign Examples
                </button>
                <button className="px-8 py-4 border border-border text-foreground rounded-lg font-semibold hover:bg-muted transition-colors">
                  ROI Calculator
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automation & AI Matching */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
                AI & Automation
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Automation & AI Matching
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Intelligent systems that streamline candidate engagement, automate repetitive tasks, and optimize interview scheduling.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Smart Candidate Matching</h3>
                    <p className="text-muted-foreground">AI-powered algorithms analyze resumes, skills, and experience to identify the best-fit candidates automatically.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Automated Engagement Workflows</h3>
                    <p className="text-muted-foreground">Personalized email sequences, chatbot interactions, and follow-up campaigns that nurture candidates through the funnel.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Interview Scheduling & Coordination</h3>
                    <p className="text-muted-foreground">Seamless calendar integration and automated scheduling that eliminates back-and-forth communication.</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors">
                  See AI in Action
                </button>
                <button className="px-8 py-4 border border-border text-foreground rounded-lg font-semibold hover:bg-muted transition-colors">
                  Integration Guide
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-8 lg:p-12">
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-lg shadow-sm border-l-4 border-accent">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                      <span className="text-sm font-semibold">AI Matching Engine</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Processing 847 candidate profiles...</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow-sm border-l-4 border-primary">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                      <span className="text-sm font-semibold">Automated Screening</span>
                    </div>
                    <p className="text-xs text-muted-foreground">23 qualified candidates identified</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow-sm border-l-4 border-secondary">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                      <span className="text-sm font-semibold">Interview Scheduling</span>
                    </div>
                    <p className="text-xs text-muted-foreground">12 interviews scheduled automatically</p>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg border-2 border-dashed border-accent/30">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent mb-1">73%</div>
                      <div className="text-xs text-muted-foreground">Time Saved vs Manual Process</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Analytics */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 lg:p-12">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-white rounded-lg shadow-sm text-center">
                    <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                    <div className="text-xs text-muted-foreground">Real-time Monitoring</div>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow-sm text-center">
                    <div className="text-2xl font-bold text-secondary mb-1">50+</div>
                    <div className="text-xs text-muted-foreground">Key Metrics Tracked</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                    <span className="text-sm font-medium">Cost per Hire</span>
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-2 bg-primary/20 rounded-full">
                        <div className="w-12 h-2 bg-primary rounded-full"></div>
                      </div>
                      <span className="text-sm text-primary">↓ 45%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                    <span className="text-sm font-medium">Time to Fill</span>
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-2 bg-secondary/20 rounded-full">
                        <div className="w-10 h-2 bg-secondary rounded-full"></div>
                      </div>
                      <span className="text-sm text-secondary">↓ 73%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                    <span className="text-sm font-medium">Quality of Hire</span>
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-2 bg-accent/20 rounded-full">
                        <div className="w-14 h-2 bg-accent rounded-full"></div>
                      </div>
                      <span className="text-sm text-accent">↑ 2.8x</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                Analytics & Insights
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Performance Analytics
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Real-time insights and optimization recommendations for continuous improvement of your recruitment marketing efforts.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Real-Time Performance Dashboards</h3>
                    <p className="text-muted-foreground">Comprehensive dashboards showing campaign performance, candidate pipeline health, and ROI metrics in real-time.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Predictive Analytics & Forecasting</h3>
                    <p className="text-muted-foreground">AI-powered predictions for hiring demand, optimal posting times, and budget allocation recommendations.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Custom Reporting & Insights</h3>
                    <p className="text-muted-foreground">Tailored reports for executives, hiring managers, and HR teams with actionable insights and strategic recommendations.</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                  View Sample Dashboard
                </button>
                <button className="px-8 py-4 border border-border text-foreground rounded-lg font-semibold hover:bg-muted transition-colors">
                  Request Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-secondary relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Recruitment Strategy?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Let's discuss how our comprehensive capabilities can help you build a talent acquisition engine that delivers measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-white/90 transition-colors">
              Schedule Strategy Call
            </button>
            <button className="px-8 py-4 border border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Download Capabilities Overview
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}