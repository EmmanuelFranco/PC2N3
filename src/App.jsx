import { useState } from 'react'
import './App.css'
import facebook from './assets/icon-facebook.svg'
import instagram from './assets/icon-instagram.svg'
import up from './assets/icon-up.svg'
import down from './assets/icon-down.svg'
import { Dashboard } from './Components/Dasboard'
import { Card } from './Components/Card'
import arquitecto from './assets/arquitecto.png'
function App() {

  return (
    <>
      <section className='dashboard'>
        <header>
          <h1>Reliable, efficient delivery</h1>
          <h1 className='title2'>Powered by technology</h1>
          <h4>Our Artificial intelligence powered tools usea millons of project data <br /> paints to ensure that your project is auccesfull</h4>
        </header>
        
          <Card/>

        
      </section>
    </>
  )
}

export default App
