import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LightModeSparkles from './components/LightModeSparkles'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import CustomerService from './pages/CustomerService'
import LeadGeneration from './pages/LeadGeneration'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/"                 element={<Home />}            />
        <Route path="/customer-service" element={<CustomerService />} />
        <Route path="/lead-generation"  element={<LeadGeneration />}  />
        <Route path="/about"            element={<About />}           />
        <Route path="/contact"          element={<Contact />}         />
        <Route path="*"                 element={<NotFound />}        />
      </Routes>
    </AnimatePresence>
  )
}

function AppInner() {
  return (
    <div className="min-h-screen bg-bg text-off-white font-body relative">
      <LightModeSparkles />
      <div className="relative z-10">
        <ScrollToTop />
        <Navbar />
        <main className="pb-16 lg:pb-0">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppInner />
      </Router>
    </ThemeProvider>
  )
}

export default App
