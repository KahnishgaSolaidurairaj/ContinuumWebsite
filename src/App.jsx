import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Problem from './components/Problem'
import Mission from './components/Mission'
import WhoWeHelp from './components/WhoWeHelp'
import Activities from './components/Activities'
import LaunchCTA from './components/LaunchCTA'
import Team from './components/Team'
import './App.css'
import Footer from './components/Footer'

function App() {
  return (
    <div className="site">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Activities />
        <Problem />
        <Mission />
        <WhoWeHelp />
        <LaunchCTA />
        <Team />
      </main>
      <Footer />
    </div>
  )
}

export default App
