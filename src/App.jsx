import React from "react"
import {Hero,Navbar,SearchBar,Properties,Featured,Testimonial,Rating,Trending,ContactForm,Accordion,Footer} from './components'
import "./App.css"


function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <SearchBar />
      <Properties/>
      <Featured/>
      <Testimonial/>
      <Rating/>
      <Trending/>
      <ContactForm/>
      <Accordion/>
      <Footer/>
    </div>
  )
}

export default App

