export function CapabilitiesPage() {
  return (
    <div className="pt-16 min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-muted/30 to-background relative overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-1/3 left-1/3 w-48 h-48 bg-secondary/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Comprehensive Recruitment Marketing Capabilities
              </h1>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                End-to-end solutions that transform how you attract, engage, and convert top talent into hires
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                From employer brand strategy to performance analytics, we provide the complete toolkit modern talent acquisition teams need to compete and win in today's market.
              </p>
              <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors inline-flex items-center gap-2">
                Schedule a Capability Assessment
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-card to-muted/50 rounded-2xl p-8 lg:p-12 shadow-lg">
                {/* Interconnected services illustration */}
                <div className="relative">
                  {/* Central hub */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-primary rounded-full flex items-center justify-center z-10">
                    <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>

                  {/* Service nodes */}
                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-8">
                      <div className="p-4 bg-white rounded-lg shadow-sm relative">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                          <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                          </svg>
                        </div>
                        <div className="text-sm font-semibold text-foreground">Brand Strategy</div>
                        <div className="text-xs text-muted-foreground">Positioning & Messaging</div>
                      </div>
                      <div className="p-4 bg-white rounded-lg shadow-sm relative">
                        <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center mb-2">
                          <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                        <div className="text-sm font-semibold text-foreground">AI Automation</div>
                        <div className="text-xs text-muted-foreground">Smart Matching</div>
                      </div>
                    </div>
                    <div className="space-y-8 pt-12">
                      <div className="p-4 bg-white rounded-lg shadow-sm relative">
                        <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center mb-2">
                          <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                          </svg>
                        </div>
                        <div className="text-sm font-semibold text-foreground">Digital Campaigns</div>
                        <div className="text-xs text-muted-foreground">Multi-Channel Reach</div>
                      </div>
                      <div className="p-4 bg-white rounded-lg shadow-sm relative">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                          <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <div className="text-sm font-semibold text-foreground">Analytics</div>
                        <div className="text-xs text-muted-foreground">Real-time Insights</div>
                      </div>
                    </div>
                  </div>

                  {/* Connection lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{zIndex: 1}}>
                    <defs>
                      <pattern id="dots" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="0.5" fill="currentColor" className="text-primary/20"/>
                      </pattern>
                    </defs>
                    <line x1="25%" y1="25%" x2="50%" y2="50%" stroke="url(#dots)" strokeWidth="2"/>
                    <line x1="75%" y1="40%" x2="50%" y2="50%" stroke="url(#dots)" strokeWidth="2"/>
                    <line x1="25%" y1="75%" x2="50%" y2="50%" stroke="url(#dots)" strokeWidth="2"/>
                    <line x1="75%" y1="85%" x2="50%" y2="50%" stroke="url(#dots)" strokeWidth="2"/>
                  </svg>
                </div>
              </div>
            </div>
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