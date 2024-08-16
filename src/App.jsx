import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import UserDetails from './Components/Navbar/UserDetails/UserDetails'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Navbar/>
  <UserDetails/>
    </>
  )
}

export default App
