// import { useState } from 'react'
import CvForm from './components/cvForm.jsx'
import CvGenerate from './components/CvGenerate.jsx'

import './App.css'

function App() {
  

  
  return (
    <>
      <div>CV builder</div>
      <div className='container'>
        <CvForm className="cvFormCSS" />
        <CvGenerate className="cvGenerateHide" />
      </div>
      
      
    </>
  )
}

export default App
