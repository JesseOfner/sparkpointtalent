import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navigation } from '@/components/Navigation'
import { HomePage } from '@/pages/HomePage'
import { CapabilitiesPage } from '@/pages/CapabilitiesPage'
import { SolutionsPage } from '@/pages/SolutionsPage'
import { InsightsPage } from '@/pages/InsightsPage'

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
        </Routes>
      </div>
    </Router>
  )
}

export default App