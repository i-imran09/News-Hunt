import { useState } from 'react'
import Nav from './Components/Nav'
import NewsBoard from './Components/NewsBoard'

function App() {

  const[categary ,setCategary]=useState("general");
  return (
    <>
       <Nav setCategary={setCategary}/>
       <NewsBoard categary={categary}/>
    </>
  )
}

export default App
