import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Footer } from '@/components/Footer'
import { SparkDivider } from '@/components/SparkDivider'
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
      <div className={`bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 transition-all duration-500 relative overflow-hidden ${
        isActive ? 'bg-white/20 border-accent/40 shadow-lg shadow-accent/10 ember-glow' : ''
      }`}>
        {/* Spark particles inside active cards */}
        {isActive && (
          <>
            <div className="absolute top-2 right-2 w-1 h-1 bg-accent rounded-full spark-particle"></div>
            <div className="absolute bottom-3 left-3 w-1.5 h-1.5 bg-accent/70 rounded-full spark-particle" style={{animationDelay: '0.5s'}}></div>
          </>
        )}
        
        <div className={`w-12 h-12 bg-gradient-to-r from-white/20 to-white/30 rounded-lg flex items-center justify-center mb-4 transition-all duration-500 relative ${
          isActive ? 'bg-gradient-to-r from-accent/30 to-accent/20 ember-glow scale-110' : ''
        }`}>
          <Icon size={24} className={`text-white ${isActive ? 'flame-flicker' : ''}`} />
          {isActive && <div className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full spark-particle"></div>}
        </div>
        <h3 className={`font-semibold text-white mb-2 ${isActive ? 'text-accent' : ''}`}>{title}</h3>
        <p className="text-white/80 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

function FlowVisualization() {
  const [activeStage, setActiveStage] = useState(0)
  const stages = [
    {
      icon: Lightning,
      title: "Ignition",
      description: "AI sparks initial candidate discovery"
    },
    {
      icon: Target,
      title: "Combustion", 
      description: "Intelligent matching creates the perfect reaction"
    },
    {
      icon: DeviceMobile,
      title: "Acceleration",
      description: "Automated engagement fans the flames"
    },
    {
      icon: ChartLine,
      title: "Amplification",
      description: "Predictive analytics turns sparks into blazes"
    },
    {
      icon: Handshake,
      title: "Success",
      description: "Your talent acquisition burns bright with results"
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
          
          {/* Connecting line with animated spark dots */}
          {index < stages.length - 1 && (
            <div className="absolute left-6 -bottom-4 w-0.5 h-8 bg-gradient-to-b from-accent/60 to-accent/20">
              <div 
                className={`absolute w-2 h-2 bg-accent rounded-full -left-0.75 transition-all duration-1000 spark-particle ${
                  activeStage === index ? 'top-0' : 'top-4 opacity-50'
                }`}
              />
              {/* Additional flowing spark */}
              <div 
                className={`absolute w-1 h-1 bg-accent/70 rounded-full -left-0.5 transition-all duration-1500 spark-particle ${
                  activeStage === index ? 'top-2' : 'top-6 opacity-30'
                }`}
                style={{animationDelay: '0.3s'}}
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
      className="bg-card rounded-xl p-8 shadow-sm border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
    >
      {/* Subtle spark particles on hover */}
      <div className="absolute top-4 right-4 w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 spark-particle transition-opacity"></div>
      <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-accent/60 rounded-full opacity-0 group-hover:opacity-100 spark-particle transition-opacity" style={{animationDelay: '0.4s'}}></div>
      
      <div className="text-4xl md:text-5xl font-bold fire-gradient bg-clip-text text-transparent mb-4 group-hover:ember-glow transition-all duration-300">
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
    <div className="bg-card rounded-xl p-8 shadow-sm border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
      {/* Spark particles on hover */}
      <div className="absolute top-3 right-3 w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 spark-particle transition-opacity"></div>
      <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-accent/70 rounded-full opacity-0 group-hover:opacity-100 spark-particle transition-opacity" style={{animationDelay: '0.3s'}}></div>
      
      <div className="w-16 h-16 fire-gradient rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:ember-glow transition-all duration-300 relative">
        <Icon size={32} className="text-white group-hover:flame-flicker" />
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full opacity-0 group-hover:opacity-100 spark-particle transition-opacity"></div>
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
          <div className="w-64 h-64 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl flex items-center justify-center relative overflow-hidden">
            {/* Background spark effects */}
            <div className="absolute top-4 right-4 w-2 h-2 bg-accent/40 rounded-full spark-particle"></div>
            <div className="absolute bottom-8 left-8 w-1.5 h-1.5 bg-accent/60 rounded-full spark-particle" style={{animationDelay: '0.8s'}}></div>
            
            <div className="w-32 h-32 fire-gradient rounded-2xl flex items-center justify-center shadow-lg hover:ember-glow transition-all duration-300 relative">
              <Icon size={64} className="text-white flame-flicker" />
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-accent rounded-full spark-particle"></div>
            </div>
          </div>
          {/* Enhanced decorative spark elements */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent/30 rounded-full spark-particle"></div>
          <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary/30 rounded-full spark-particle" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/4 -left-2 w-3 h-3 bg-accent/20 rounded-full spark-particle" style={{animationDelay: '1.5s'}}></div>
        </div>
      </div>
    </div>
  )
}

function ContactSection({ onGetStartedClick }: { onGetStartedClick: () => void }) {
  return (
    <section id="contact" className="py-24 ember-gradient relative overflow-hidden">
      {/* Enhanced spark and ember background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl ember-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl ember-glow" style={{animationDelay: '1s'}}></div>
        
        {/* Floating spark particles */}
        <div className="absolute top-1/6 left-1/5 w-2 h-2 bg-accent rounded-full spark-particle"></div>
        <div className="absolute top-2/3 left-1/3 w-3 h-3 bg-accent/80 rounded-full spark-particle" style={{animationDelay: '0.6s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-accent/60 rounded-full spark-particle" style={{animationDelay: '1.2s'}}></div>
        <div className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 bg-accent/70 rounded-full spark-particle" style={{animationDelay: '0.3s'}}></div>
        <div className="absolute top-1/3 right-1/5 w-2.5 h-2.5 bg-accent/90 rounded-full spark-particle" style={{animationDelay: '1.8s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div className="text-white relative">
            {/* Content spark effects */}
            <div className="absolute -top-4 -left-4 w-2 h-2 bg-accent rounded-full spark-particle"></div>
            <div className="absolute top-1/3 -right-6 w-1.5 h-1.5 bg-accent/70 rounded-full spark-particle" style={{animationDelay: '0.9s'}}></div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Ready to Transform Your Talent Acquisition with 
              <span className="bg-gradient-to-r from-accent to-white bg-clip-text text-transparent flame-flicker">
                {" "}AI?
              </span>
            </h2>
            <p className="text-xl text-white/80 mb-12 leading-relaxed">
              Discover how AI-powered solutions can revolutionize your recruitment process and deliver qualified candidates faster than ever before
            </p>
            
            {/* Contact Options */}
            <div className="space-y-8">
              <div className="flex items-start group">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mr-6 flex-shrink-0 group-hover:ember-glow transition-all duration-300 relative">
                  <Phone size={24} className="text-white group-hover:flame-flicker" />
                  <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-accent rounded-full opacity-0 group-hover:opacity-100 spark-particle transition-opacity"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-accent transition-colors">Schedule an AI Strategy Call</h3>
                  <p className="text-white/80 leading-relaxed">
                    Get personalized AI recommendations for your talent acquisition challenges
                  </p>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mr-6 flex-shrink-0 group-hover:ember-glow transition-all duration-300 relative">
                  <FileText size={24} className="text-white group-hover:flame-flicker" />
                  <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-accent rounded-full opacity-0 group-hover:opacity-100 spark-particle transition-opacity"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-accent transition-colors">Request AI-Powered Solution Demo</h3>
                  <p className="text-white/80 leading-relaxed">
                    See how our AI platform transforms your specific industry and hiring goals
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Get Started Illustration */}
          <div className="flex flex-col items-center relative">
            {/* Additional spark effects around the card */}
            <div className="absolute -top-6 left-1/4 w-2 h-2 bg-accent rounded-full spark-particle"></div>
            <div className="absolute top-1/3 -right-4 w-1.5 h-1.5 bg-accent/80 rounded-full spark-particle" style={{animationDelay: '0.7s'}}></div>
            <div className="absolute bottom-1/4 left-1/2 w-2.5 h-2.5 bg-accent/60 rounded-full spark-particle" style={{animationDelay: '1.3s'}}></div>
            
            <Card className="bg-white/10 backdrop-blur-md border-white/20 p-8 text-center hover:ember-glow transition-all duration-300 relative overflow-hidden">
              {/* Card spark particles */}
              <div className="absolute top-4 right-4 w-1 h-1 bg-accent rounded-full spark-particle"></div>
              <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-accent/70 rounded-full spark-particle" style={{animationDelay: '0.5s'}}></div>
              
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
                className="w-full bg-white text-primary hover:bg-accent hover:text-primary-foreground font-semibold py-4 text-lg hover:ember-glow transition-all duration-300 shadow-lg hover:shadow-xl"
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
      <section id="hero" className="relative min-h-screen ember-gradient overflow-hidden">
        {/* Enhanced spark particle background */}
        <div className="absolute inset-0">
          {/* Large ember glows */}
          <div className="absolute top-1/6 left-1/6 w-96 h-96 bg-accent/8 rounded-full blur-3xl ember-glow"></div>
          <div className="absolute bottom-1/5 right-1/5 w-80 h-80 bg-primary/12 rounded-full blur-3xl ember-glow" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/6 rounded-full blur-3xl ember-glow" style={{animationDelay: '2.5s'}}></div>
          
          {/* Floating spark particles */}
          <div className="absolute top-1/4 left-1/5 w-3 h-3 bg-accent rounded-full spark-particle"></div>
          <div className="absolute top-3/4 left-1/4 w-2 h-2 bg-accent/80 rounded-full spark-particle" style={{animationDelay: '0.8s'}}></div>
          <div className="absolute top-1/3 right-1/4 w-2.5 h-2.5 bg-accent/70 rounded-full spark-particle" style={{animationDelay: '1.2s'}}></div>
          <div className="absolute bottom-1/4 right-1/3 w-4 h-4 bg-accent/60 rounded-full spark-particle" style={{animationDelay: '0.4s'}}></div>
          <div className="absolute top-1/6 right-1/6 w-2 h-2 bg-accent/90 rounded-full spark-particle" style={{animationDelay: '1.8s'}}></div>
          <div className="absolute top-2/3 left-1/6 w-1.5 h-1.5 bg-accent/85 rounded-full spark-particle" style={{animationDelay: '2.2s'}}></div>
          <div className="absolute bottom-1/6 left-1/2 w-3 h-3 bg-accent/75 rounded-full spark-particle" style={{animationDelay: '0.6s'}}></div>
          <div className="absolute top-1/8 left-2/3 w-2 h-2 bg-accent/95 rounded-full spark-particle" style={{animationDelay: '1.4s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left Side - Content */}
            <div className="text-left relative">
              {/* Content spark effects */}
              <div className="absolute -top-6 -left-6 w-3 h-3 bg-accent rounded-full spark-particle"></div>
              <div className="absolute top-1/4 -right-8 w-2 h-2 bg-accent/70 rounded-full spark-particle" style={{animationDelay: '0.6s'}}></div>
              <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-accent/80 rounded-full spark-particle" style={{animationDelay: '1.1s'}}></div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                Ignite Your Talent Acquisition 
                <span className="bg-gradient-to-r from-accent to-white bg-clip-text text-transparent flame-flicker">
                  {" "}Success
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl text-white/90 mb-6 leading-relaxed font-medium">
                SparkPoint provides the catalyst to light the fire of AI-powered recruiting that transforms your business growth
              </h2>
              <p className="text-lg text-white/80 mb-12 leading-relaxed max-w-2xl">
                From the first spark of candidate discovery to the blazing success of your hires, we fuel your talent acquisition with cutting-edge AI technology that ignites results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={handleGetStartedClick}
                  className="bg-white text-primary hover:bg-accent hover:text-primary-foreground font-semibold px-10 py-4 text-lg shadow-lg hover:shadow-xl hover:ember-glow transition-all duration-300 relative group overflow-hidden"
                >
                  <span className="relative z-10">Ignite Your Success</span>
                  <div className="absolute top-2 right-2 w-1 h-1 bg-accent/60 rounded-full opacity-0 group-hover:opacity-100 spark-particle transition-opacity"></div>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={() => onNavigate?.('case-studies')}
                  className="border-2 border-white/40 hover:bg-white/10 hover:border-accent/60 font-semibold px-10 py-4 text-lg text-white hover:text-accent transition-all duration-300 relative group overflow-hidden"
                >
                  <span className="relative z-10">See the Spark</span>
                  <div className="absolute bottom-2 left-2 w-1 h-1 bg-accent/60 rounded-full opacity-0 group-hover:opacity-100 spark-particle transition-opacity"></div>
                </Button>
              </div>
            </div>

            {/* Right Side - Flow Visualization */}
            <div className="hidden lg:block relative">
              {/* Additional spark particles around visualization */}
              <div className="absolute -top-8 left-1/4 w-2 h-2 bg-accent rounded-full spark-particle"></div>
              <div className="absolute top-1/3 -right-4 w-3 h-3 bg-accent/70 rounded-full spark-particle" style={{animationDelay: '1s'}}></div>
              <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-accent/80 rounded-full spark-particle" style={{animationDelay: '1.4s'}}></div>
              
              <FlowVisualization />
            </div>
          </div>
        </div>
      </section>
      {/* Metrics Section */}
      {/* Metrics Section */}
      <SparkDivider />
      {/* Capabilities Section */}
      <SparkDivider />
      {/* Industry Solutions Section */}
      <IndustrySolutionsSection />
      {/* Contact Section */}
      <SparkDivider />
      {/* Value Proposition Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Why Leading Organizations Choose SparkPoint
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              In today's competitive talent landscape, traditional recruiting isn't enough. 
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-lg border border-border hover:border-primary/30 transition-all duration-300 bg-card group relative overflow-hidden hover:-translate-y-1 hover:shadow-lg">
              {/* Spark particles on hover */}
              <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-accent/70 rounded-full opacity-0 group-hover:opacity-100 spark-particle transition-opacity" style={{animationDelay: '0.3s'}}></div>
              <div className="w-16 h-16 fire-gradient rounded-full mx-auto mb-6 flex items-center justify-center group-hover:ember-glow transition-all duration-300 relative">
                <div className="w-8 h-8 bg-white rounded-full group-hover:flame-flicker"></div>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full opacity-0 group-hover:opacity-100 spark-particle transition-opacity"></div>
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">AI-Powered Brand Strategy</h3>
              <p className="text-muted-foreground leading-relaxed">
                We use artificial intelligence to craft compelling employer value propositions that differentiate your organization 
                and create authentic connections with top-tier talent.
              </p>
            </div>

            <div className="text-center p-8 rounded-lg border border-border hover:border-primary/30 transition-all duration-300 bg-card group relative overflow-hidden hover:-translate-y-1 hover:shadow-lg">
              {/* Spark particles on hover */}
              <div className="absolute top-4 right-4 w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 spark-particle transition-opacity"></div>
              <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-accent/70 rounded-full opacity-0 group-hover:opacity-100 spark-particle transition-opacity" style={{animationDelay: '0.3s'}}></div>
              
              <div className="w-16 h-16 fire-gradient rounded-full mx-auto mb-6 flex items-center justify-center group-hover:ember-glow transition-all duration-300 relative">
                <div className="w-8 h-8 bg-white rounded-full group-hover:flame-flicker"></div>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full opacity-0 group-hover:opacity-100 spark-particle transition-opacity"></div>
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">Intelligent Multi-Channel Campaigns</h3>
              <p className="text-muted-foreground leading-relaxed">
                From LinkedIn to industry publications, we orchestrate AI-driven campaigns 
                that reach candidates where they are, when they're ready to move.
              </p>
            </div>

            <div className="text-center p-8 rounded-lg border border-border hover:border-primary/30 transition-all duration-300 bg-card group relative overflow-hidden hover:-translate-y-1 hover:shadow-lg">
              {/* Spark particles on hover */}
              <div className="absolute top-4 right-4 w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 spark-particle transition-opacity"></div>
              <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-accent/70 rounded-full opacity-0 group-hover:opacity-100 spark-particle transition-opacity" style={{animationDelay: '0.3s'}}></div>
              
              <div className="w-16 h-16 fire-gradient rounded-full mx-auto mb-6 flex items-center justify-center group-hover:ember-glow transition-all duration-300 relative">
                <div className="w-8 h-8 bg-white rounded-full group-hover:flame-flicker"></div>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full opacity-0 group-hover:opacity-100 spark-particle transition-opacity"></div>
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">Predictive Analytics & Results</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every campaign is measured, optimized, and refined using advanced AI analytics 
                to ensure maximum ROI and continuous improvement.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        {/* Subtle spark particles */}
        <div className="absolute top-1/4 left-1/5 w-1.5 h-1.5 bg-accent/40 rounded-full spark-particle"></div>
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-accent/30 rounded-full spark-particle" style={{animationDelay: '0.7s'}}></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to 
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {" "}Ignite{" "}
            </span>
            Your Success Story?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Every company's recruitment challenges are unique. Let's discuss how our AI-powered solutions can create measurable results for your organization.
          </p>
          <Button 
            size="lg" 
            onClick={handleGetStartedClick}
            className="fire-gradient text-white hover:ember-glow font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Schedule a Consultation
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  );
}