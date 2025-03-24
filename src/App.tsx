import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'

const App = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <HomeCards />
    <div>
      Page contents
    </div>
    </>
  )
}

export default App

