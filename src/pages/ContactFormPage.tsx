import { useEffect, useRef } from 'react'

export function ContactFormPage() {
  const formRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (formRef.current) {
      // First try the HTML embed method
      formRef.current.innerHTML = `
        <div class="hs-form-frame" data-region="na1" data-form-id="b3c28533-e0cb-4b8b-a5d2-c0297d6066fa" data-portal-id="21212478"></div>
      `

      // Then try the JavaScript API if available
      const tryJSAPI = () => {
        if (window.hbspt && window.hbspt.forms && formRef.current) {
          try {
            // Clear the HTML embed and use JS API
            formRef.current.innerHTML = ''
            window.hbspt.forms.create({
              region: "na1",
              portalId: "21212478",
              formId: "b3c28533-e0cb-4b8b-a5d2-c0297d6066fa",
              target: formRef.current
            })
          } catch (error) {
            console.error('HubSpot form JS API error:', error)
            // Fall back to HTML embed
            if (formRef.current) {
              formRef.current.innerHTML = `
                <div class="hs-form-frame" data-region="na1" data-form-id="b3c28533-e0cb-4b8b-a5d2-c0297d6066fa" data-portal-id="21212478"></div>
              `
            }
          }
        }
      }

      // Try immediately if script is loaded
      if (window.hbspt) {
        tryJSAPI()
      } else {
        // Wait for script to load
        const checkInterval = setInterval(() => {
          if (window.hbspt) {
            tryJSAPI()
            clearInterval(checkInterval)
          }
        }, 100)

        // Stop checking after 10 seconds
        setTimeout(() => {
          clearInterval(checkInterval)
        }, 10000)
      }
    }
  }, [])

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-primary/5 to-accent/5 relative overflow-hidden">
      {/* Background fire effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl ember-glow"></div>
        <div className="absolute bottom-1/3 left-1/3 w-48 h-48 bg-accent/8 rounded-full blur-2xl ember-glow" style={{animationDelay: '1s'}}></div>
        
        {/* Floating spark particles */}
        <div className="absolute top-1/5 left-1/6 w-1.5 h-1.5 bg-accent/60 rounded-full spark-particle"></div>
        <div className="absolute bottom-1/4 right-1/5 w-2 h-2 bg-primary/70 rounded-full spark-particle" style={{animationDelay: '0.8s'}}></div>
        <div className="absolute top-2/3 left-1/2 w-1 h-1 bg-accent/80 rounded-full spark-particle" style={{animationDelay: '1.5s'}}></div>
      </div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get Started with SparkPoint Talent
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your talent acquisition with AI? Fill out the form below and our team will reach out to discuss how we can help you leverage AI to find and hire top talent faster.
          </p>
        </div>
        
        {/* Form Container */}
        <div className="ember-card bg-card rounded-xl shadow-lg border border-border p-8 relative overflow-hidden">
          {/* Card spark particles */}
          <div className="absolute top-4 right-4 w-1 h-1 bg-accent rounded-full spark-particle"></div>
          <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-primary/70 rounded-full spark-particle" style={{animationDelay: '0.7s'}}></div>
          
          <div 
            ref={formRef}
            className="min-h-[600px] w-full"
          />
        </div>
        
        {/* Contact Alternative */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Prefer to talk directly? We'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="mailto:hello@sparkpointtalent.com" 
              className="flame-link text-primary hover:text-secondary font-medium relative"
            >
              hello@sparkpointtalent.com
            </a>
            <span className="hidden sm:block text-muted-foreground">•</span>
            <a 
              href="tel:+1-555-0123" 
              className="flame-link text-primary hover:text-secondary font-medium relative"
            >
              +1 (555) 012-3456
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

// Extend the window object to include HubSpot
declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (options: {
          region: string
          portalId: string
          formId: string
          target: HTMLElement | null
        }) => void
      }
    }
  }
}