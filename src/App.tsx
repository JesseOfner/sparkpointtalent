import { useState } from 'react'
import { Navigation } from '@/components/Navigation'
import { HomePage } from '@/pages/HomePage'
import { CapabilitiesPage } from '@/pages/CapabilitiesPage'
import { SolutionsPage } from '@/pages/SolutionsPage'
import { InsightsPage } from '@/pages/InsightsPage'
import { CaseStudiesPage } from '@/pages/CaseStudiesPage'
import { ContactFormPage } from '@/pages/ContactFormPage'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'capabilities':
        return <CapabilitiesPage />
      case 'solutions':
        return <SolutionsPage />
      case 'insights':
        return <InsightsPage />
      case 'case-studies':
        return <CaseStudiesPage />
      case 'contact':
        return <ContactFormPage />
      default:
        return <HomePage onNavigate={setCurrentPage} />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      {renderPage()}
    </div>
  )
}

export default App