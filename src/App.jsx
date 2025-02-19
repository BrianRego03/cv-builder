// import { useState } from 'react'
import CvForm from './cvForm.jsx'
import CvGenerate from './components/CvGenerate.jsx'

import './App.css'

function App() {
  

  return (
    <>
      <div>CV builder</div>
      <div className='container'>
        <CvForm className="cvFormCSS" />
        <CvGenerate className="cvGenerateCSS" />
        <div>hey</div>
      </div>
      
      
    </>
  )
}

export default App
