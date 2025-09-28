import { Flame } from '@phosphor-icons/react'

export function Footer() {
  return (
    <footer className="ember-gradient py-16 relative overflow-hidden">
      {/* Background spark effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-accent rounded-full spark-particle"></div>
        <div className="absolute top-3/4 right-1/5 w-1.5 h-1.5 bg-accent/70 rounded-full spark-particle" style={{animationDelay: '0.8s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 bg-accent/60 rounded-full spark-particle" style={{animationDelay: '1.2s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 text-white">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6 group">
              <div className="relative">
                <Flame 
                  size={32} 
                  weight="fill" 
                  className="text-accent flame-flicker group-hover:ember-glow" 
                />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full spark-particle"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">
                SparkPoint Talent
              </span>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed max-w-md">
              Igniting success in talent acquisition through cutting-edge AI technology. 
              We help organizations transform their hiring processes and attract top talent faster than ever before.
            </p>
            <div className="text-sm text-white/60">
              © 2024 SparkPoint Talent. All rights reserved.
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-accent mb-4">AI Solutions</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li className="hover:text-accent transition-colors cursor-pointer">Candidate Discovery</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Intelligent Matching</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Automated Engagement</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Predictive Analytics</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Smart Interviews</li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-semibold text-accent mb-4">Industries</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li className="hover:text-accent transition-colors cursor-pointer">Technology & Software</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Healthcare</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Financial Services</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Manufacturing</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Professional Services</li>
            </ul>
          </div>
        </div>

        {/* Bottom border with spark elements */}
        <div className="mt-12 pt-8 border-t border-white/20 text-center text-white/60 text-sm relative">
          <div className="absolute left-1/4 -top-2 w-1 h-1 bg-accent rounded-full spark-particle"></div>
          <div className="absolute right-1/3 -top-2 w-1.5 h-1.5 bg-accent/70 rounded-full spark-particle" style={{animationDelay: '0.6s'}}></div>
          
          Powered by AI. Driven by Results. Ignited by Innovation.
        </div>
      </div>
    </footer>
  )
}