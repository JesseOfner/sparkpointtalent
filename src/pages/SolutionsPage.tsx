import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Code, 
  Stethoscope, 
  Building, 
  GraduationCap, 
  ShoppingCart, 
  Factory,
  CheckCircle,
  ArrowRight,
  Users,
  Target,
  TrendUp
} from '@phosphor-icons/react'

export function SolutionsPage() {
  const industries = [
    {
      title: 'Technology & Software',
      icon: Code,
      description: 'Attract top engineering and technical talent in competitive markets with specialized campaigns and technical assessment integration.',
      challenges: ['High competition for developers', 'Technical skill validation', 'Remote work expectations'],
      solutions: ['Developer-focused content marketing', 'Technical skills assessment workflows', 'GitHub and Stack Overflow recruiting'],
      metrics: { timeToFill: '65%', qualityHire: '3.2x', satisfaction: '92%' }
    },
    {
      title: 'Healthcare & Life Sciences',
      icon: Stethoscope,
      description: 'Specialized recruitment for healthcare professionals with compliance-focused processes and credential verification.',
      challenges: ['Credential verification complexity', 'Regulatory compliance', 'Shift scheduling requirements'],
      solutions: ['Compliance-ready application workflows', 'Credential verification automation', 'Healthcare job board integrations'],
      metrics: { timeToFill: '58%', qualityHire: '2.9x', satisfaction: '89%' }
    },
    {
      title: 'Financial Services',
      icon: Building,
      description: 'Navigate complex compliance requirements while attracting top financial talent with security-focused recruitment processes.',
      challenges: ['Strict background checks', 'Regulatory compliance', 'Confidential hiring processes'],
      solutions: ['Secure application processes', 'Background check automation', 'Compliance documentation'],
      metrics: { timeToFill: '52%', qualityHire: '2.7x', satisfaction: '87%' }
    },
    {
      title: 'Education & Non-Profit',
      icon: GraduationCap,
      description: 'Mission-driven recruitment that attracts passionate educators and non-profit professionals aligned with your values.',
      challenges: ['Budget constraints', 'Mission alignment', 'Seasonal hiring cycles'],
      solutions: ['Mission-focused messaging', 'Community engagement campaigns', 'Budget-optimized strategies'],
      metrics: { timeToFill: '48%', qualityHire: '2.5x', satisfaction: '94%' }
    },
    {
      title: 'Retail & E-commerce',
      icon: ShoppingCart,
      description: 'Scale your workforce efficiently with solutions designed for high-volume hiring and seasonal fluctuations.',
      challenges: ['High-volume hiring', 'Seasonal fluctuations', 'Customer service skills'],
      solutions: ['Automated bulk hiring', 'Seasonal campaign optimization', 'Customer service assessments'],
      metrics: { timeToFill: '71%', qualityHire: '2.4x', satisfaction: '85%' }
    },
    {
      title: 'Manufacturing & Industrial',
      icon: Factory,
      description: 'Attract skilled trades and manufacturing professionals with safety-focused messaging and skills-based assessments.',
      challenges: ['Skills shortages', 'Safety requirements', 'Shift work coordination'],
      solutions: ['Trade skills assessments', 'Safety-focused content', 'Shift scheduling integration'],
      metrics: { timeToFill: '63%', qualityHire: '2.8x', satisfaction: '88%' }
    }
  ]

  const solutionComponents = [
    {
      title: 'Industry-Specific Brand Positioning',
      description: 'Tailored employer branding that speaks the language of your industry and resonates with sector-specific talent pools.'
    },
    {
      title: 'Specialized Job Board Networks',
      description: 'Targeted posting strategies across industry-specific platforms where your ideal candidates are actively searching.'
    },
    {
      title: 'Compliance & Regulatory Integration',
      description: 'Built-in compliance workflows that meet industry standards for background checks, certifications, and regulatory requirements.'
    },
    {
      title: 'Skills Assessment Frameworks',
      description: 'Industry-validated assessment tools that evaluate technical competencies and cultural fit for sector-specific roles.'
    },
    {
      title: 'Competitive Intelligence',
      description: 'Market insights and salary benchmarking specific to your industry to ensure competitive positioning.'
    },
    {
      title: 'Performance Analytics Dashboard',
      description: 'Industry-benchmarked KPIs and reporting that track performance against sector-specific recruitment metrics.'
    }
  ]

  const caseStudies = [
    {
      industry: 'Technology',
      company: 'Series B SaaS Company',
      challenge: 'Needed to hire 50+ engineers in 6 months while competing with FAANG companies',
      solution: 'Developer-focused content strategy + GitHub recruiting + technical interview automation',
      results: '78% faster time-to-fill, 40% reduction in cost-per-hire, 95% offer acceptance rate'
    },
    {
      industry: 'Healthcare',
      company: 'Regional Hospital Network',
      challenge: 'Critical nursing shortage with complex credentialing requirements',
      solution: 'Healthcare job board network + automated credential verification + referral campaigns',
      results: '65% improvement in qualified applicants, 50% faster credentialing process'
    },
    {
      industry: 'Financial Services',
      company: 'Investment Management Firm',
      challenge: 'Confidential executive search with strict compliance requirements',
      solution: 'Executive search automation + compliance-ready workflows + discrete sourcing',
      results: '3 C-level hires in 4 months, 100% compliance audit success'
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
                    Industry-Tailored Recruitment Marketing Solutions
                  </h1>
                  <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                    Deep expertise in the unique talent challenges facing your industry
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                    Every industry has distinct talent acquisition challenges. Our solutions are specifically designed around the compliance requirements, candidate behaviors, and market dynamics that define success in your sector.
                  </p>
                </div>
                
                <div className="pt-4">
                  <Button size="lg" className="text-lg px-8 py-6">
                    Explore Your Industry Solution
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
              Specialized Solutions by Industry
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Deep expertise in the unique challenges and opportunities facing different sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <industry.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{industry.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {industry.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Challenges:</h4>
                    <ul className="space-y-1">
                      {industry.challenges.map((challenge, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Our Solutions:</h4>
                    <ul className="space-y-1">
                      {industry.solutions.map((solution, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary">{industry.metrics.timeToFill}</div>
                      <div className="text-xs text-muted-foreground">Faster Fill</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary">{industry.metrics.qualityHire}</div>
                      <div className="text-xs text-muted-foreground">Quality Hire</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary">{industry.metrics.satisfaction}</div>
                      <div className="text-xs text-muted-foreground">Satisfaction</div>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
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

      {/* Case Study Highlights */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Success Stories by Industry
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real results from companies who transformed their talent acquisition with our industry-specific solutions
            </p>
          </div>

          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-1/3">
                      <Badge variant="secondary" className="mb-4">{study.industry}</Badge>
                      <h3 className="text-xl font-bold text-foreground mb-2">{study.company}</h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                            <Target className="w-4 h-4 text-red-500" />
                            Challenge
                          </h4>
                          <p className="text-muted-foreground text-sm">{study.challenge}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                            <Users className="w-4 h-4 text-blue-500" />
                            Solution
                          </h4>
                          <p className="text-muted-foreground text-sm">{study.solution}</p>
                        </div>
                      </div>
                    </div>
                    <div className="lg:w-2/3 lg:pl-8 lg:border-l">
                      <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                        <TrendUp className="w-4 h-4 text-green-500" />
                        Results Achieved
                      </h4>
                      <p className="text-lg text-foreground font-medium">{study.results}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
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