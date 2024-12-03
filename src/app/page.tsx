import Header from './components/Header'
import Home from './components/Home'
import Services from './components/Services'
import Courses from './components/Courses'
//import Team from './components/Team'
import About from './components/About'
import Contact from './components/Contact'

export default function Page() {
  return (
    <div className="min-h-screen bg-green-50">
      <Header />
      <main className="container mx-auto px-4">
        <Home />
        <Services />
        <Courses />
        {/* <Team /> */}
        <About />
        <Contact />
      </main>
    </div>
  )
}

