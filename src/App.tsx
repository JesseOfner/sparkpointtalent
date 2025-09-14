import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navigation } from '@/components/Navigation'
import { HomePage } from '@/pages/HomePage'
import { CapabilitiesPage } from '@/pages/CapabilitiesPage'
import { SolutionsPage } from '@/pages/SolutionsPage'
import { InsightsPage } from '@/pages/InsightsPage'
import { CaseStudiesPage } from '@/pages/CaseStudiesPage'
import { ContactFormPage } from '@/pages/ContactFormPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/capabilities" element={<CapabilitiesPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/contact" element={<ContactFormPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App