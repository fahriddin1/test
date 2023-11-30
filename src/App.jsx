import React, { useState } from 'react'
import Uniti_page from './test/Uniti_page'
import { Routes, Route } from 'react-router-dom'
import Uniti_page_1 from './test/Uniti_page_1'
import Uniti_page_2 from './test/Uniti_page_2'
import Uniti_page_3 from './test/Uniti_page_3'
import Uniti_page_4 from './test/Uniti_page_4'
import Uniti_page_5 from './test/Uniti_page_5'
import Uniti_page_6 from './test/Uniti_page_6'
import Uniti_page_7 from './test/Uniti_page_7'
import Uniti_page_8 from './test/Uniti_page_8'
import Uniti_page_9 from './test/Uniti_page_9'
import Uniti_page_10 from './test/Uniti_page_10'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<Uniti_page/>}/>
        <Route path='Uniti_page_1' element={<Uniti_page_1/>}/>
        <Route path='Uniti_page_2' element={<Uniti_page_2/>}/>
        <Route path='Uniti_page_3' element={<Uniti_page_3/>}/>
        <Route path='Uniti_page_4' element={<Uniti_page_4/>}/>
        <Route path='Uniti_page_5' element={<Uniti_page_5/>}/>
        <Route path='Uniti_page_6' element={<Uniti_page_6/>}/>
        <Route path='Uniti_page_7' element={<Uniti_page_7/>}/>
        <Route path='Uniti_page_8' element={<Uniti_page_8/>}/>
        <Route path='Uniti_page_9' element={<Uniti_page_9/>}/>
        <Route path='Uniti_page_10' element={<Uniti_page_10/>}/>
      </Routes>
    </React.Fragment>
  )
}

export default App
