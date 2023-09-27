import { useState } from 'react'
import './App.css'
import Intro from './components/Intro'
import Portfolio from './components/Portfolio'
import Timeline from './components/Timeline'
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {

  return (
    <>
      <div className="text-gray-700">
       <Intro></Intro>
       <Contact/>
       <Footer/>
       <Portfolio/>
       <Timeline/>
      </div>
    </>
  )
}

export default App
