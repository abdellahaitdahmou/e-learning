import React from 'react'
import Section1 from './Section1'
import Nav from './Nav'
import Services from './Services'
import Method from './methodes'
import Footer from './footer'

function Home() {
  return (
    <div className='overflow-x-hidden'>
       <Nav/> 
       <Section1/>
      <Services/> 
      <Method/>
      <Footer/>

    </div>
  )
}

export default Home
