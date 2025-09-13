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

      {/* Core Capabilities */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Core Capabilities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive suite of services designed to transform every aspect of your recruitment marketing strategy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Employer Brand Strategy */}
            <div className="group p-8 bg-card rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Employer Brand Strategy</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Build compelling employer brands that resonate with top talent. We develop your EVP, messaging framework, and brand positioning to differentiate you in competitive markets.
              </p>
              <div className="space-y-2 mb-6">
                <div className="text-sm text-muted-foreground">Key services:</div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Brand positioning</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">EVP development</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Competitive analysis</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Brand guidelines</span>
                </div>
              </div>
            </div>

            {/* Digital Recruitment Campaigns */}
            <div className="group p-8 bg-card rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Digital Recruitment Campaigns</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Multi-channel campaigns that reach candidates where they're most engaged. Programmatic advertising, social recruiting, and search marketing that drives qualified applicants.
              </p>
              <div className="space-y-2 mb-6">
                <div className="text-sm text-muted-foreground">Key services:</div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs rounded-full">Social media advertising</span>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs rounded-full">Programmatic job ads</span>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs rounded-full">SEM/SEO</span>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs rounded-full">Campaign optimization</span>
                </div>
              </div>
            </div>

            {/* Content Marketing & Storytelling */}
            <div className="group p-8 bg-card rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Content Marketing & Storytelling</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Authentic content that showcases your culture and opportunities. Employee stories, company videos, and optimized job content that converts passive candidates.
              </p>
              <div className="space-y-2 mb-6">
                <div className="text-sm text-muted-foreground">Key services:</div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full">Employee testimonials</span>
                  <span className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full">Culture videos</span>
                  <span className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full">Job description optimization</span>
                  <span className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full">Multimedia content</span>
                </div>
              </div>
            </div>

            {/* Candidate Experience Optimization */}
            <div className="group p-8 bg-card rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Candidate Experience Optimization</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Streamlined application processes that convert interest into applications. Mobile-optimized experiences and journey mapping that reduces drop-off rates.
              </p>
              <div className="space-y-2 mb-6">
                <div className="text-sm text-muted-foreground">Key services:</div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Application optimization</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Mobile career sites</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Journey mapping</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Conversion optimization</span>
                </div>
              </div>
            </div>

            {/* Marketing Automation & CRM */}
            <div className="group p-8 bg-card rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Marketing Automation & CRM</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Intelligent systems that nurture talent pipelines and engage candidates automatically. Seamless integration with your existing ATS and recruitment tools.
              </p>
              <div className="space-y-2 mb-6">
                <div className="text-sm text-muted-foreground">Key services:</div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs rounded-full">Pipeline nurturing</span>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs rounded-full">Automated engagement</span>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs rounded-full">Lead scoring</span>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs rounded-full">ATS integration</span>
                </div>
              </div>
            </div>

            {/* Analytics & Performance Optimization */}
            <div className="group p-8 bg-card rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Analytics & Performance Optimization</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Data-driven insights that continuously improve your recruitment marketing ROI. Real-time reporting, A/B testing, and predictive analytics for better decisions.
              </p>
              <div className="space-y-2 mb-6">
                <div className="text-sm text-muted-foreground">Key services:</div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full">Performance tracking</span>
                  <span className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full">ROI measurement</span>
                  <span className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full">A/B testing</span>
                  <span className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full">Predictive analytics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Proven Process */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              How We Deliver Results
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our systematic approach ensures measurable improvements in your talent acquisition outcomes
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Progress line - visible on larger screens */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-border transform -translate-y-1/2">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-full"></div>
            </div>

            {/* Steps */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
              {/* Step 1 */}
              <div className="relative group">
                <div className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-border">
                  {/* Step number and icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                      </svg>
                    </div>
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                      1
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3">Discovery & Strategy</h3>
                  <div className="text-sm text-primary font-semibold mb-4">Week 1-2</div>
                  <p className="text-muted-foreground mb-6">
                    Audit current state, define goals, develop comprehensive strategy
                  </p>

                  {/* Progress indicator for mobile */}
                  <div className="lg:hidden w-full h-1 bg-border rounded-full">
                    <div className="w-1/4 h-1 bg-primary rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative group">
                <div className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-border">
                  {/* Step number and icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                      <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </div>
                    <div className="w-8 h-8 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                      2
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3">Implementation & Launch</h3>
                  <div className="text-sm text-secondary font-semibold mb-4">Week 3-4</div>
                  <p className="text-muted-foreground mb-6">
                    Execute campaigns, deploy automation, optimize candidate experience
                  </p>

                  {/* Progress indicator for mobile */}
                  <div className="lg:hidden w-full h-1 bg-border rounded-full">
                    <div className="w-2/4 h-1 bg-secondary rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative group">
                <div className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-border">
                  {/* Step number and icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-sm">
                      3
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3">Monitor & Optimize</h3>
                  <div className="text-sm text-accent font-semibold mb-4">Ongoing</div>
                  <p className="text-muted-foreground mb-6">
                    Track performance, test improvements, refine targeting and messaging
                  </p>

                  {/* Progress indicator for mobile */}
                  <div className="lg:hidden w-full h-1 bg-border rounded-full">
                    <div className="w-3/4 h-1 bg-accent rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative group">
                <div className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-border">
                  {/* Step number and icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                      4
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3">Scale & Expand</h3>
                  <div className="text-sm text-primary font-semibold mb-4">Month 3+</div>
                  <p className="text-muted-foreground mb-6">
                    Expand successful campaigns, add new channels, increase investment in top performers
                  </p>

                  {/* Progress indicator for mobile */}
                  <div className="lg:hidden w-full h-1 bg-border rounded-full">
                    <div className="w-full h-1 bg-primary rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Connection dots for large screens */}
            <div className="hidden lg:flex absolute top-1/2 left-0 right-0 justify-between transform -translate-y-1/2 px-8">
              <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>
              <div className="w-4 h-4 bg-secondary rounded-full border-4 border-background shadow-lg"></div>
              <div className="w-4 h-4 bg-accent rounded-full border-4 border-background shadow-lg"></div>
              <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors inline-flex items-center gap-2">
              See Our Process in Action
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h6m2 5H7a2 2 0 01-2-2V7a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2z" />
              </svg>
            </button>
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

      {/* Technology & Integrations */}
      <section className="py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Powered by Best-in-Class Technology
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We integrate with your existing systems and leverage cutting-edge tools for maximum impact
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Advertising Platforms */}
            <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-6">Advertising Platforms</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-background rounded-lg border border-border/50">
                  <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-blue-500 rounded"></div>
                  </div>
                  <span className="text-sm font-medium text-foreground">Google Ads & Display Network</span>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-background rounded-lg border border-border/50">
                  <div className="w-8 h-8 bg-blue-600/10 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-blue-600 rounded"></div>
                  </div>
                  <span className="text-sm font-medium text-foreground">Facebook, LinkedIn, Instagram</span>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-background rounded-lg border border-border/50">
                  <div className="w-8 h-8 bg-orange-500/10 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-orange-500 rounded"></div>
                  </div>
                  <span className="text-sm font-medium text-foreground">Indeed, ZipRecruiter, Glassdoor</span>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-background rounded-lg border border-border/50">
                  <div className="w-8 h-8 bg-purple-500/10 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-purple-500 rounded"></div>
                  </div>
                  <span className="text-sm font-medium text-foreground">Programmatic job boards</span>
                </div>
              </div>
            </div>

            {/* Automation & CRM */}
            <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-6">Automation & CRM</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-background rounded-lg border border-border/50">
                  <div className="w-8 h-8 bg-green-500/10 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-green-500 rounded"></div>
                  </div>
                  <span className="text-sm font-medium text-foreground">GEM, Phenom, Paradox</span>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-background rounded-lg border border-border/50">
                  <div className="w-8 h-8 bg-teal-500/10 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-teal-500 rounded"></div>
                  </div>
                  <span className="text-sm font-medium text-foreground">Greenhouse, Workday, BambooHR</span>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-background rounded-lg border border-border/50">
                  <div className="w-8 h-8 bg-amber-500/10 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-amber-500 rounded"></div>
                  </div>
                  <span className="text-sm font-medium text-foreground">Zapier integrations</span>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-background rounded-lg border border-border/50">
                  <div className="w-8 h-8 bg-indigo-500/10 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-indigo-500 rounded"></div>
                  </div>
                  <span className="text-sm font-medium text-foreground">Custom API connections</span>
                </div>
              </div>
            </div>

            {/* Analytics & Optimization */}
            <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-6">Analytics & Optimization</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-background rounded-lg border border-border/50">
                  <div className="w-8 h-8 bg-red-500/10 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-red-500 rounded"></div>
                  </div>
                  <span className="text-sm font-medium text-foreground">Google Analytics & Tag Manager</span>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-background rounded-lg border border-border/50">
                  <div className="w-8 h-8 bg-pink-500/10 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-pink-500 rounded"></div>
                  </div>
                  <span className="text-sm font-medium text-foreground">Hotjar</span>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-background rounded-lg border border-border/50">
                  <div className="w-8 h-8 bg-blue-700/10 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-blue-700 rounded"></div>
                  </div>
                  <span className="text-sm font-medium text-foreground">Tableau, Visier</span>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-background rounded-lg border border-border/50">
                  <div className="w-8 h-8 bg-gray-600/10 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-gray-600 rounded"></div>
                  </div>
                  <span className="text-sm font-medium text-foreground">Custom reporting dashboards</span>
                </div>
              </div>
            </div>
          </div>

          {/* Integration CTA */}
          <div className="text-center mt-16">
            <div className="bg-card rounded-2xl p-8 shadow-sm border border-border max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">Seamless Integration</h3>
              <p className="text-muted-foreground mb-6">
                Our technology stack integrates seamlessly with your existing HR and recruitment tools, ensuring data flows smoothly and insights are actionable.
              </p>
              <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                View Integration Guide
              </button>
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