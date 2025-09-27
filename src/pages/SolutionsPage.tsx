import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Code, 
  Heart, 
  CurrencyDollar, 
  Gear, 
  Briefcase, 
  Storefront,
  CheckCircle,
  ArrowRight,
  Users,
  Target,
  TrendUp,
  Stethoscope,
  Building,
  GraduationCap,
  ShoppingCart,
  Factory,
  MagnifyingGlass,
  Shield,
  ChartLine,
  Truck,
  Buildings,
  TrendDown,
  Clock,
  CurrencyCircleDollar
} from '@phosphor-icons/react'

export function SolutionsPage() {
  const industries = [
    {
      title: "Technology & Software",
      icon: Code,
      challenge: "Finding top engineering talent with specific technical skills in highly competitive markets",
      highlights: [
        "AI algorithms that understand technical skill requirements and identify engineers through code analysis and project contributions",
        "Automated GitHub portfolio analysis and technical competency scoring", 
        "Machine learning candidate similarity matching based on project history",
        "Predictive modeling for developer career trajectories and role fit"
      ],
      stat: "75% faster technical talent identification",
      cta: "View Tech AI Solutions"
    },
    {
      title: "Healthcare & Life Sciences",
      icon: Heart,
      challenge: "Identifying qualified healthcare professionals with valid certifications and specializations",
      highlights: [
        "Intelligent credentialing verification, automated compliance checking, and AI-powered matching for specialized medical roles",
        "Clinical experience pattern recognition across diverse healthcare settings",
        "Predictive modeling for healthcare career progression and specialty matching", 
        "Automated medical license verification and compliance monitoring"
      ],
      stat: "50% reduction in credentialing time",
      cta: "View Healthcare AI Solutions"
    },
    {
      title: "Financial Services",
      icon: CurrencyDollar,
      challenge: "Finding qualified financial professionals while maintaining strict regulatory compliance",
      highlights: [
        "Risk-aware AI screening, regulatory compliance automation, and intelligent candidate assessment for finance professionals",
        "Automated FINRA and regulatory background verification workflows",
        "AI-powered risk assessment scoring for financial roles",
        "Predictive analytics for financial career success and compliance history"
      ],
      stat: "60% reduction in compliance-related delays",
      cta: "View Financial AI Solutions"
    },
    {
      title: "Manufacturing & Industrial",
      icon: Gear,
      challenge: "Identifying skilled trades workers and technical specialists in competitive labor markets",
      highlights: [
        "Skills-based AI matching for trades, predictive analytics for workforce planning, and automated safety protocol evaluation",
        "Automated safety certification verification and compliance tracking",
        "Geographic optimization algorithms for multi-site workforce planning",
        "Predictive modeling for retention and career progression in manufacturing roles"
      ],
      stat: "55% increase in qualified trades candidate identification",
      cta: "View Manufacturing AI Solutions"
    },
    {
      title: "Professional Services",
      icon: Briefcase,
      challenge: "Finding consultants and advisors with specific expertise and client-facing capabilities",
      highlights: [
        "AI-powered cultural fit analysis, consultant performance prediction, and intelligent project-to-talent matching",
        "Client experience pattern recognition and success prediction",
        "Automated soft skills assessment for client-facing consulting roles",
        "Predictive modeling for consultant-client compatibility and project success"
      ],
      stat: "70% improvement in consultant-client fit scores",
      cta: "View Professional Services AI Solutions"
    },
    {
      title: "Retail & Hospitality",
      icon: Storefront,
      challenge: "High-volume hiring with consistent quality and cultural fit assessment",
      highlights: [
        "Seasonal demand forecasting, AI-driven volume hiring optimization, and customer service aptitude assessment",
        "Automated cultural fit scoring for high-volume hiring processes",
        "Multi-location performance pattern analysis and optimization",
        "Predictive modeling for customer service excellence and retention"
      ],
      stat: "80% faster high-volume hiring with improved quality scores",
      cta: "View Retail AI Solutions"
    }
  ]

  const comprehensiveComponents = [
    {
      title: "AI-Powered Industry Analysis",
      icon: MagnifyingGlass,
      description: "Machine learning algorithms analyze industry-specific talent patterns, market dynamics, and competitive landscapes",
      includes: [
        "AI market intelligence",
        "Automated competitor analysis", 
        "Predictive talent mapping",
        "Industry trend forecasting"
      ]
    },
    {
      title: "Intelligent Campaign Automation", 
      icon: Target,
      description: "AI-driven campaigns that automatically optimize targeting, messaging, and timing based on industry-specific data",
      includes: [
        "Smart channel selection",
        "AI-generated personalization",
        "Automated A/B testing", 
        "Dynamic audience optimization"
      ]
    },
    {
      title: "Automated Compliance & Risk Management",
      icon: Shield, 
      description: "AI-powered compliance monitoring and risk assessment specific to your industry regulations",
      includes: [
        "Automated regulatory checking",
        "Real-time compliance monitoring",
        "AI-driven risk assessment",
        "Predictive compliance modeling"
      ]
    },
    {
      title: "Smart Technology Integration",
      icon: Gear,
      description: "Seamless AI integration with industry-standard tools and intelligent workflow automation", 
      includes: [
        "Intelligent ATS integration",
        "AI assessment tools",
        "Smart platform connections",
        "Predictive analytics dashboards"
      ]
    },
    {
      title: "Continuous AI Optimization",
      icon: ChartLine,
      description: "Machine learning continuously improves performance based on industry benchmarks and real-time data",
      includes: [
        "Automated performance tracking",
        "AI benchmarking analysis", 
        "Self-optimizing algorithms",
        "Predictive ROI modeling"
      ]
    }
  ]

  const solutionComponents = [
    {
      title: 'AI-Powered Industry Brand Positioning',
      description: 'Machine learning algorithms analyze industry sentiment and candidate preferences to craft employer branding that resonates with sector-specific talent pools.'
    },
    {
      title: 'Intelligent Job Board Networks',
      description: 'AI-driven targeting strategies that automatically optimize job posting distribution across industry-specific platforms where your ideal candidates are most active.'
    },
    {
      title: 'Automated Compliance & Regulatory Integration',
      description: 'Built-in AI compliance workflows that automatically verify industry standards, background checks, certifications, and regulatory requirements.'
    },
    {
      title: 'ML-Enhanced Skills Assessment Frameworks',
      description: 'Industry-validated assessment tools powered by machine learning that evaluate technical competencies, predict performance, and assess cultural fit for sector-specific roles.'
    },
    {
      title: 'AI Competitive Intelligence',
      description: 'Automated market insights and salary benchmarking specific to your industry using AI to ensure competitive positioning and strategic advantage.'
    },
    {
      title: 'Predictive Analytics Dashboard',
      description: 'Industry-benchmarked KPIs and reporting with predictive modeling that tracks performance against sector-specific recruitment metrics and forecasts outcomes.'
    }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-muted/30 to-background overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rounded-full"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border border-secondary/20 rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 border border-primary/20 rounded-full"></div>
          <div className="absolute bottom-32 right-1/3 w-28 h-28 border border-secondary/20 rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Left-aligned content */}
              <div className="lg:w-2/3 space-y-8">
                <div className="space-y-6">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                    AI-Powered Solutions Tailored to Your Industry
                  </h1>
                  <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                    Industry-specific AI algorithms trained on unique talent patterns and requirements
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                    Every industry has distinct talent acquisition challenges. Our AI solutions are specifically trained on industry data, compliance requirements, candidate behaviors, and market dynamics that define success in your sector.
                  </p>
                </div>
                
                <div className="pt-4">
                  <Button size="lg" className="text-lg px-8 py-6">
                    Explore Your AI Industry Solution
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>
              
              {/* Right side - Abstract industry illustration */}
              <div className="lg:w-1/3 flex justify-center">
                <div className="relative w-80 h-80">
                  {/* Central hub */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Industry icons arranged in circle */}
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-card rounded-full shadow-lg flex items-center justify-center">
                    <Code className="w-6 h-6 text-primary" />
                  </div>
                  <div className="absolute top-1/2 right-8 transform -translate-y-1/2 w-12 h-12 bg-card rounded-full shadow-lg flex items-center justify-center">
                    <Stethoscope className="w-6 h-6 text-primary" />
                  </div>
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-card rounded-full shadow-lg flex items-center justify-center">
                    <Building className="w-6 h-6 text-primary" />
                  </div>
                  <div className="absolute top-1/2 left-8 transform -translate-y-1/2 w-12 h-12 bg-card rounded-full shadow-lg flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div className="absolute top-20 right-20 w-12 h-12 bg-card rounded-full shadow-lg flex items-center justify-center">
                    <ShoppingCart className="w-6 h-6 text-primary" />
                  </div>
                  <div className="absolute bottom-20 left-20 w-12 h-12 bg-card rounded-full shadow-lg flex items-center justify-center">
                    <Factory className="w-6 h-6 text-primary" />
                  </div>
                  
                  {/* Connecting lines */}
                  <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 320 320">
                    <line x1="160" y1="160" x2="160" y2="40" stroke="url(#gradient1)" strokeWidth="2" strokeDasharray="4,4">
                      <animate attributeName="stroke-dashoffset" values="0;8" dur="2s" repeatCount="indefinite" />
                    </line>
                    <line x1="160" y1="160" x2="280" y2="160" stroke="url(#gradient1)" strokeWidth="2" strokeDasharray="4,4">
                      <animate attributeName="stroke-dashoffset" values="0;8" dur="2s" repeatCount="indefinite" />
                    </line>
                    <line x1="160" y1="160" x2="160" y2="280" stroke="url(#gradient1)" strokeWidth="2" strokeDasharray="4,4">
                      <animate attributeName="stroke-dashoffset" values="0;8" dur="2s" repeatCount="indefinite" />
                    </line>
                    <line x1="160" y1="160" x2="40" y2="160" stroke="url(#gradient1)" strokeWidth="2" strokeDasharray="4,4">
                      <animate attributeName="stroke-dashoffset" values="0;8" dur="2s" repeatCount="indefinite" />
                    </line>
                    <line x1="160" y1="160" x2="240" y2="80" stroke="url(#gradient1)" strokeWidth="2" strokeDasharray="4,4">
                      <animate attributeName="stroke-dashoffset" values="0;8" dur="2s" repeatCount="indefinite" />
                    </line>
                    <line x1="160" y1="160" x2="80" y2="240" stroke="url(#gradient1)" strokeWidth="2" strokeDasharray="4,4">
                      <animate attributeName="stroke-dashoffset" values="0;8" dur="2s" repeatCount="indefinite" />
                    </line>
                    <defs>
                      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="oklch(0.573 0.142 258.4)" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="oklch(0.465 0.135 297.2)" stopOpacity="0.6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              AI Industry Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized AI algorithms and machine learning models tailored to the unique talent patterns and challenges in your sector
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50">
                  <CardContent className="p-8">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent size={32} className="text-white" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {industry.title}
                    </h3>

                    {/* Challenge */}
                    <div className="mb-6">
                      <p className="text-sm font-medium text-muted-foreground mb-2">Challenge:</p>
                      <p className="text-foreground/80 text-sm leading-relaxed">
                        {industry.challenge}
                      </p>
                    </div>

                    {/* Solution Highlights */}
                    <div className="mb-6">
                      <p className="text-sm font-medium text-muted-foreground mb-3">Solution Highlights:</p>
                      <ul className="space-y-2">
                        {industry.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex} className="text-sm text-foreground/80 flex items-start">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Key Stat */}
                    <div className="mb-6 p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg">
                      <p className="text-lg font-semibold text-primary text-center">
                        {industry.stat}
                      </p>
                    </div>

                    {/* CTA */}
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      {industry.cta}
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Comprehensive Solution Components */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Complete AI Solutions Tailored to Your Industry
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Every AI industry solution includes these intelligent components, customized and trained for your specific market dynamics
            </p>
          </div>

          {/* Horizontal layout with connected elements */}
          <div className="relative">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-32 left-0 right-0 h-px bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20"></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              {comprehensiveComponents.map((component, index) => {
                const IconComponent = component.icon
                return (
                  <div key={index} className="relative">
                    {/* Connection dot on line */}
                    <div className="hidden lg:block absolute top-32 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full"></div>
                    
                    <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <CardContent className="p-6 text-center">
                        {/* Icon */}
                        <div className="mb-6 flex justify-center">
                          <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                            <IconComponent size={28} className="text-white" />
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-semibold text-foreground mb-4">
                          {component.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                          {component.description}
                        </p>

                        {/* Includes */}
                        <div className="space-y-2">
                          <p className="text-xs font-medium text-foreground/80 mb-3">Includes:</p>
                          <ul className="space-y-1">
                            {component.includes.map((item, itemIndex) => (
                              <li key={itemIndex} className="text-xs text-muted-foreground flex items-center justify-center">
                                <span className="w-1 h-1 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Solution Components */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              What's Included in Every Solution
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive recruitment marketing capabilities tailored to your industry's specific requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutionComponents.map((component, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg">{component.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {component.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Proven Results Across Industries
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real outcomes from our industry-specific recruitment marketing solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Technology Company Case Study */}
            <Card className="shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <Code className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-card-foreground">AI-Powered Tech Recruiting</h3>
                    <p className="text-sm text-muted-foreground">Series B SaaS company (200+ employees)</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-medium text-card-foreground mb-2">Challenge</h4>
                    <p className="text-sm text-muted-foreground">
                      Scaling engineering team from 25 to 60 developers while maintaining high technical standards
                    </p>
                  </div>
                  
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-medium text-card-foreground mb-2">AI Solution</h4>
                    <p className="text-sm text-muted-foreground">
                      Code analysis AI engine that evaluates GitHub contributions, technical assessments automated with ML scoring, and predictive matching for team fit
                    </p>
                  </div>
                  
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <h4 className="font-medium text-card-foreground mb-2">Results</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• AI-driven candidate screening: 90% time reduction</li>
                      <li>• Technical skill matching accuracy: 95%</li>
                      <li>• Quality hire rate: 88% (vs 65% manual)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Healthcare System Case Study */}
            <Card className="shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mr-4">
                    <Heart className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-card-foreground">Intelligent Healthcare Staffing</h3>
                    <p className="text-sm text-muted-foreground">Regional healthcare network (5 hospitals)</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-medium text-card-foreground mb-2">Challenge</h4>
                    <p className="text-sm text-muted-foreground">
                      Critical shortage of specialized nurses with complex credentialing requirements across multiple locations
                    </p>
                  </div>
                  
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-medium text-card-foreground mb-2">AI Solution</h4>
                    <p className="text-sm text-muted-foreground">
                      Automated credentialing verification AI, compliance checking algorithms, and specialized role matching based on clinical experience patterns
                    </p>
                  </div>
                  
                  <div className="p-4 bg-secondary/5 rounded-lg">
                    <h4 className="font-medium text-card-foreground mb-2">Results</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Credentialing time: 85% reduction</li>
                      <li>• Specialized role matching: 92% accuracy</li>
                      <li>• Compliance error rate: Near zero</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Manufacturing Company Case Study */}
            <Card className="shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                    <Gear className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground">Smart Manufacturing Hiring</h3>
                    <p className="text-sm text-muted-foreground">Automotive parts manufacturer (500+ employees)</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-medium text-card-foreground mb-2">Challenge</h4>
                    <p className="text-sm text-muted-foreground">
                      Finding skilled trades workers with specific safety certifications and predictable workforce planning
                    </p>
                  </div>
                  
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-medium text-card-foreground mb-2">AI Solution</h4>
                    <p className="text-sm text-muted-foreground">
                      Skills-based AI matching algorithms, automated safety protocol evaluation, and predictive analytics for workforce demand forecasting
                    </p>
                  </div>
                  
                  <div className="p-4 bg-accent/5 rounded-lg">
                    <h4 className="font-medium text-card-foreground mb-2">Results</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Skills matching accuracy: 94%</li>
                      <li>• Safety compliance: 100% automated verification</li>
                      <li>• Workforce planning precision: 89%</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Platform Performance Metrics */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">Platform Performance Benchmarks</h3>
            <p className="text-muted-foreground">Consistent results across all client implementations</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendDown className="w-8 h-8 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground">75%</div>
              <div className="text-sm text-muted-foreground">Reduction in screening time</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Target className="w-8 h-8 text-secondary" />
              </div>
              <div className="text-2xl font-bold text-foreground">4:1</div>
              <div className="text-sm text-muted-foreground">Minimum ROI guarantee</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="w-8 h-8 text-accent" />
              </div>
              <div className="text-2xl font-bold text-foreground">25%</div>
              <div className="text-sm text-muted-foreground">Faster time-to-fill</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <CurrencyCircleDollar className="w-8 h-8 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground">60%</div>
              <div className="text-sm text-muted-foreground">Average cost reduction</div>
            </div>
          </div>

          {/* Detailed Impact Metrics */}
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-primary" />
                  Healthcare Impact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Physician time-to-fill</span>
                    <span className="font-semibold">125 days → 60 days</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Nurse practitioners</span>
                    <span className="font-semibold">60-90 days</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Medical assistants</span>
                    <span className="font-semibold">45-60 days</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Daily revenue impact</span>
                    <span className="font-semibold text-red-600">-$10,122</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CurrencyCircleDollar className="w-5 h-5 text-secondary" />
                  Cost Optimizations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Cost-per-application</span>
                    <span className="font-semibold">$25 → $10</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Programmatic savings</span>
                    <span className="font-semibold text-green-600">$500 → $200</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">ROI achievement</span>
                    <span className="font-semibold">$30K → $150K</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Strong employer brand</span>
                    <span className="font-semibold">50% reduction</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendUp className="w-5 h-5 text-accent" />
                  Efficiency Gains
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Interview completion</span>
                    <span className="font-semibold">91%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Time-to-fill reduction</span>
                    <span className="font-semibold">15-25%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Qualified candidate flow</span>
                    <span className="font-semibold">+20-30%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Application rate increase</span>
                    <span className="font-semibold">+25%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Don't See Your Industry?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Every industry has unique talent challenges. Our team specializes in developing custom solutions 
              that address the specific needs of emerging sectors and niche markets.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Industry Research</h3>
                <p className="text-muted-foreground text-sm">Deep dive into your sector's talent landscape and recruitment challenges</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Custom Strategy</h3>
                <p className="text-muted-foreground text-sm">Tailored recruitment marketing approach designed for your specific needs</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Measurable Results</h3>
                <p className="text-muted-foreground text-sm">Industry-specific KPIs and benchmarks to track your success</p>
              </div>
            </div>

            <Button size="lg" className="text-lg px-8">
              Discuss Custom Solution
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Industry-Specific Recruitment?
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Schedule an industry-specific consultation to discover how our specialized solutions 
              can address your unique talent acquisition challenges.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Schedule Industry Consultation
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent border-white text-white hover:bg-white hover:text-primary">
                Download Solutions Overview
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}