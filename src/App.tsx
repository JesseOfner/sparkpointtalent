import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navigation } from '@/components/Navigation'
import { HomePage } from '@/pages/HomePage'
import { CapabilitiesPage } from '@/pages/CapabilitiesPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/capabilities" element={<CapabilitiesPage />} />
          <Route path="/solutions" element={<div className="pt-16 py-24 text-center"><p className="text-muted-foreground">Solutions page coming soon...</p></div>} />
          <Route path="/insights" element={<div className="pt-16 py-24 text-center"><p className="text-muted-foreground">Insights page coming soon...</p></div>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App