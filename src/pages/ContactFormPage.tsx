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
    <div className="pt-16 min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get Started with Keloh
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your recruitment strategy? Fill out the form below and our team will reach out to discuss how we can help you attract and hire top talent.
          </p>
        </div>
        
        {/* Form Container */}
        <div className="bg-white rounded-xl shadow-lg border border-border p-8">
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
              href="mailto:hello@keloh.com" 
              className="text-primary hover:text-primary/80 font-medium"
            >
              hello@keloh.com
            </a>
            <span className="hidden sm:block text-muted-foreground">•</span>
            <a 
              href="tel:+1-555-0123" 
              className="text-primary hover:text-primary/80 font-medium"
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