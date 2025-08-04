import { useState } from 'react'
import Nav from './Components/Nav'
import NewsBoard from './Components/NewsBoard'

function App() {

  const[categary ,setCategary]=useState("general");
  const[lang ,setLang]=useState("en")
  return (
    <>
       <Nav setCategary={setCategary} setLang={setLang} lang={lang}/>
       <NewsBoard categary={categary} en={lang}/>
    </>
  )
}

export default App
