import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./views/Home"
import News from "./views/News"
import Contact from "./views/Contact"
import Services from './views/Services'



function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route path="/home" element={<Home />} />

        <Route path="/services" element={<Services />} />

        <Route path="/news" element={<News />} />

        <Route path="/contact" element={<Contact />} />


      </Routes>

    </BrowserRouter>
  )
}


export default App
