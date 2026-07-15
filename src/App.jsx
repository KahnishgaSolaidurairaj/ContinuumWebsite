import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Mission from './components/Mission'
import WhoWeHelp from './components/WhoWeHelp'
import Features from './components/Features'
import Activities from './components/Activities'
import AppDemo from './components/AppDemo'
import Testimonial from './components/Testimonial'
import LaunchCTA from './components/LaunchCTA'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="site">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Mission />
        <WhoWeHelp />
        <Features />
        <Activities />
        <AppDemo />
        <Testimonial />
        <LaunchCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
