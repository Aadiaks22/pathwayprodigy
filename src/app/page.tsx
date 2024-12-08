import Header from './components/Header'
import Home from './components/Home'
import Services from './components/Services'
import Courses from './components/Courses'
//import Team from './components/Team'
import About from './components/About'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import JobOpportunities from './components/JobOpportunities'
import Footer from './components/Footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-green-50">
      <Header />
      <Home />
      <main className="container mx-auto px-4">
        <Services />
        <Courses />
        <JobOpportunities/>
        {/* <Team /> */}
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer/>
    </div>
  )
}

