import { useEffect, useRef } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { X } from '@phosphor-icons/react'

interface HubSpotFormModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
}

export function HubSpotFormModal({ isOpen, onClose, title = "Get Started with Keloh" }: HubSpotFormModalProps) {
  const formRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen && formRef.current && window.hbspt) {
      // Clear any existing forms
      formRef.current.innerHTML = ''
      
      // Create the HubSpot form
      window.hbspt.forms.create({
        region: "na1",
        portalId: "21212478",
        formId: "b3c28533-e0cb-4b8b-a5d2-c0297d6066fa",
        target: formRef.current
      })
    }
  }, [isOpen])

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle className="text-2xl font-bold text-foreground pr-8">
            {title}
          </DialogTitle>
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
          >
            <X size={20} />
            <span className="sr-only">Close</span>
          </button>
        </DialogHeader>
        
        <div className="py-4">
          <p className="text-muted-foreground mb-6">
            Ready to transform your recruitment strategy? Fill out the form below and our team will reach out to discuss how we can help you attract and hire top talent.
          </p>
          
          {/* HubSpot form will be embedded here */}
          <div 
            ref={formRef}
            className="hs-form-frame"
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}

// Extend the window object to include HubSpot
declare global {
  interface Window {
    hbspt: {
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