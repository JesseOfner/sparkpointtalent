import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Buildings, Target, DeviceMobile, Lightning, Handshake, Palette, Globe, Robot, ChartLine, ArrowRight, Code, CheckCircle, Phone, FileText } from '@phosphor-icons/react'
import getStartedIllustration from '@/assets/images/get-started-illustration.svg'

function FlowStage({ 
  icon: Icon, 
  title, 
  description, 
  isActive,
  delay 
}: { 
  icon: any
  title: string
  description: string
  isActive: boolean
  delay: number
}) {
  return (
    <div className={`relative transition-all duration-700 ${isActive ? 'scale-105' : 'scale-100'}`}>
      <div className={`bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 transition-all duration-500 ${
        isActive ? 'bg-white/20 border-white/40 shadow-lg shadow-white/10' : ''
      }`}>
        <div className={`w-12 h-12 bg-gradient-to-r from-white/20 to-white/30 rounded-lg flex items-center justify-center mb-4 transition-all duration-500 ${
          isActive ? 'animate-pulse scale-110' : ''
        }`}>
          <Icon size={24} className="text-white" />
        </div>
        <h3 className="font-semibold text-white mb-2">{title}</h3>
        <p className="text-white/80 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

function FlowVisualization() {
  const [activeStage, setActiveStage] = useState(0)
  const stages = [
    {
      icon: Robot,
      title: "AI Candidate Discovery",
      description: "Advanced algorithms identify hidden talent pools"
    },
    {
      icon: Target,
      title: "Intelligent Matching", 
      description: "Machine learning matches perfect-fit candidates"
    },
    {
      icon: DeviceMobile,
      title: "Automated Engagement",
      description: "AI personalizes outreach at scale"
    },
    {
      icon: ChartLine,
      title: "Predictive Analytics",
      description: "Data science optimizes your hiring strategy"
    },
    {
      icon: Lightning,
      title: "Smart Interviews",
      description: "AI streamlines candidate evaluation and scheduling"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % stages.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [stages.length])

  return (
    <div className="relative space-y-8">
      {stages.map((stage, index) => (
        <div key={index} className="relative">
          <FlowStage
            icon={stage.icon}
            title={stage.title}
            description={stage.description}
            isActive={activeStage === index}
            delay={index * 0.2}
          />
          
          {/* Connecting line with animated dots */}
          {index < stages.length - 1 && (
            <div className="absolute left-6 -bottom-4 w-0.5 h-8 bg-gradient-to-b from-white/40 to-white/20">
              <div 
                className={`absolute w-2 h-2 bg-white rounded-full -left-0.75 transition-all duration-1000 ${
                  activeStage === index ? 'animate-bounce top-0' : 'top-4 opacity-50'
                }`}
              />
            </div>
          )}
        </div>
      ))}
      
      {/* Flowing background animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-full">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
              style={{
                left: '24px',
                top: `${20 + i * 15}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: '2s'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function useCountUp(end: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    if (!start) return
    
    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      setCount(Math.floor(progress * end))
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    
    requestAnimationFrame(animate)
  }, [end, duration, start])
  
  return count
}

function useInView() {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true)
        }
      },
      { threshold: 0.3 }
    )
    
    if (ref.current) {
      observer.observe(ref.current)
    }
    
    return () => observer.disconnect()
  }, [isInView])
  
  return [ref, isInView] as const
}

function MetricCard({ number, suffix, title, description }: {
  number: number
  suffix: string
  title: string
  description: string
}) {
  const [ref, isInView] = useInView()
  const animatedNumber = useCountUp(number, 2000, isInView)
  
  return (
    <div 
      ref={ref}
      className="bg-white rounded-xl p-8 shadow-sm border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
    >
      <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
        {animatedNumber}{suffix}
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  )
}

function CapabilityCard({ icon: Icon, title, description }: {
  icon: any
  title: string
  description: string
}) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-sm border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
      <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon size={32} className="text-white" />
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed mb-6">
        {description}
      </p>
      <div className="flex items-center text-primary font-medium group-hover:text-primary/80 transition-colors">
        <span>Learn More</span>
        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  )
}

function IndustrySolutionCard({ 
  title, 
  description, 
  bulletPoints, 
  icon: Icon, 
  isReversed = false 
}: {
  title: string
  description: string
  bulletPoints: string[]
  icon: any
  isReversed?: boolean
}) {
  return (
    <div className={`grid lg:grid-cols-2 gap-12 items-center ${isReversed ? 'lg:grid-flow-dense' : ''}`}>
      {/* Content */}
      <div className={isReversed ? 'lg:col-start-2' : ''}>
        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          {title}
        </h3>
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          {description}
        </p>
        <ul className="space-y-4">
          {bulletPoints.map((point, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle size={20} className="text-primary mt-1 mr-3 flex-shrink-0" />
              <span className="text-foreground font-medium">{point}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Visual Element */}
      <div className={`flex justify-center ${isReversed ? 'lg:col-start-1' : ''}`}>
        <div className="relative">
          <div className="w-64 h-64 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl flex items-center justify-center">
            <div className="w-32 h-32 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg">
              <Icon size={64} className="text-white" />
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
      </div>
    </div>
  )
}

function ContactSection({ onGetStartedClick }: { onGetStartedClick: () => void }) {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-primary via-primary to-secondary relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Ready to Transform Your Talent Acquisition with AI?
            </h2>
            <p className="text-xl text-white/80 mb-12 leading-relaxed">
              Discover how AI-powered solutions can revolutionize your recruitment process and deliver qualified candidates faster than ever before
            </p>
            
            {/* Contact Options */}
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                  <Phone size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Schedule an AI Strategy Call</h3>
                  <p className="text-white/80 leading-relaxed">
                    Get personalized AI recommendations for your talent acquisition challenges
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                  <FileText size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Request AI-Powered Solution Demo</h3>
                  <p className="text-white/80 leading-relaxed">
                    See how our AI platform transforms your specific industry and hiring goals
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Get Started Illustration */}
          <div className="flex flex-col items-center">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 p-8 text-center">
              <div className="mb-8">
                <img 
                  src={getStartedIllustration} 
                  alt="Get Started on Your Project" 
                  className="w-full max-w-md mx-auto opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
              
              <h3 className="text-2xl font-semibold text-white mb-4">
                Start Your Project Today
              </h3>
              <p className="text-white/80 mb-8 leading-relaxed">
                Ready to transform how you attract and hire talent? Let's build something amazing together.
              </p>
              
              <Button 
                type="button"
                size="lg"
                onClick={onGetStartedClick}
                className="w-full bg-white text-primary hover:bg-white/90 font-semibold py-4 text-lg"
              >
                Get Started Today
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

function IndustrySolutionsSection() {
  const industries = [
    {
      title: "Technology & Software",
      description: "AI-powered talent discovery that understands technical skills, coding languages, and developer communities to find top engineering talent",
      bulletPoints: [
        "Technical skill assessment through AI code analysis",
        "GitHub and open-source contribution tracking", 
        "Developer community engagement and passive candidate identification"
      ],
      icon: Code
    }
  ]

  return (
    <section id="solutions" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            AI Solutions Tailored to Your Industry
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Industry-specific AI algorithms trained on unique talent patterns and requirements
          </p>
        </div>
        
        <div className="space-y-24">
          {industries.map((industry, index) => (
            <IndustrySolutionCard
              key={index}
              title={industry.title}
              description={industry.description}
              bulletPoints={industry.bulletPoints}
              icon={industry.icon}
              isReversed={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function CapabilitiesSection() {
  const capabilities = [
    {
      icon: Robot,
      title: "AI Candidate Sourcing",
      description: "Machine learning identifies and ranks top candidates from millions of profiles and data sources"
    },
    {
      icon: Globe,
      title: "Intelligent Campaign Automation",
      description: "AI-optimized outreach campaigns that personalize messaging and timing for maximum engagement"
    },
    {
      icon: Lightning,
      title: "Smart Matching & Screening",
      description: "Advanced algorithms match candidates to roles and automate initial screening processes"
    },
    {
      icon: ChartLine,
      title: "Predictive Analytics",
      description: "AI-powered insights predict hiring success and optimize recruitment strategies in real-time"
    }
  ]

  return (
    <section id="capabilities" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            AI-Powered Talent Acquisition Platform
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Complete AI solutions that transform how you discover, engage, and hire talent
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((capability, index) => (
            <CapabilityCard 
              key={index}
              icon={capability.icon}
              title={capability.title}
              description={capability.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function MetricsSection() {
  const metrics = [
    {
      number: 85,
      suffix: "%",
      title: "Faster Candidate Sourcing",
      description: "AI automation accelerates candidate identification and initial screening"
    },
    {
      number: 3.2,
      suffix: "X",
      title: "Better Match Accuracy", 
      description: "Machine learning improves candidate-role fit and reduces turnover"
    },
    {
      number: 60,
      suffix: "%",
      title: "Reduced Manual Work",
      description: "Intelligent automation handles repetitive tasks and workflows"
    },
    {
      number: 92,
      suffix: "%",
      title: "Candidate Engagement Rate",
      description: "AI-personalized outreach achieves higher response and conversion rates"
    }
  ]
  
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            AI-Driven Results That Transform Talent Acquisition
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Measurable improvements through intelligent automation and machine learning
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <MetricCard 
              key={index}
              number={metric.number}
              suffix={metric.suffix}
              title={metric.title}
              description={metric.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

interface HomePageProps {
  onNavigate?: (page: string) => void
}

export function HomePage({ onNavigate }: HomePageProps) {
  
  const handleGetStartedClick = () => {
    onNavigate?.('contact')
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen bg-gradient-to-br from-primary via-primary to-secondary overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left Side - Content */}
            <div className="text-left">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                AI-Powered Talent Acquisition That Delivers Results
              </h1>
              <h2 className="text-xl md:text-2xl text-white/90 mb-6 leading-relaxed font-medium">
                Transform your recruiting with cutting-edge AI technology that finds, engages, and converts top talent faster than ever before
              </h2>
              <p className="text-lg text-white/80 mb-12 leading-relaxed max-w-2xl">
                From AI-driven candidate matching to predictive analytics and automated engagement, we help modern talent acquisition teams leverage artificial intelligence to hire smarter, faster, and more effectively.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={handleGetStartedClick}
                  className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 text-lg"
                >
                  Discover AI Solutions
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={() => onNavigate?.('case-studies')}
                  className="border-2 border-white/40 hover:bg-white/10 hover:border-white/60 font-semibold px-8 py-4 text-lg text-white"
                >
                  See AI in Action
                </Button>
              </div>
            </div>

            {/* Right Side - Flow Visualization */}
            <div className="hidden lg:block">
              <FlowVisualization />
            </div>
          </div>
        </div>
      </section>
      {/* Metrics Section */}
      <MetricsSection />
      {/* Capabilities Section */}
      <CapabilitiesSection />
      {/* Industry Solutions Section */}
      <IndustrySolutionsSection />
      {/* Contact Section */}
      <ContactSection onGetStartedClick={handleGetStartedClick} />
      {/* Value Proposition Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Leading Organizations Choose SparkPoint
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              In today's competitive talent landscape, traditional recruiting isn't enough. 
              We help you build magnetic employer brands that attract the best candidates before they even apply.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-lg border border-border hover:border-primary/30 transition-colors bg-card">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Strategic Brand Building</h3>
              <p className="text-muted-foreground leading-relaxed">
                We craft compelling employer value propositions that differentiate your organization 
                and create authentic connections with top-tier talent.
              </p>
            </div>

            <div className="text-center p-8 rounded-lg border border-border hover:border-primary/30 transition-colors bg-card">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Multi-Channel Campaigns</h3>
              <p className="text-muted-foreground leading-relaxed">
                From LinkedIn to industry publications, we orchestrate sophisticated campaigns 
                that reach candidates where they are, when they're ready to move.
              </p>
            </div>

            <div className="text-center p-8 rounded-lg border border-border hover:border-primary/30 transition-colors bg-card">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Data-Driven Results</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every campaign is measured, optimized, and refined using advanced analytics 
                to ensure maximum ROI and continuous improvement.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Every company's recruitment challenges are unique. Let's discuss how we can create a custom solution that delivers measurable results for your organization.
          </p>
          <Button 
            size="lg" 
            onClick={handleGetStartedClick}
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 py-4 text-lg"
          >
            Schedule a Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}