import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj ={
    username: "krishana",
    age:21
  }

  let newArr = [1,2,3,4]

  return (
    <>
     {/* <h1 className='bg-green-600 text-black rounded-xl '>Tailwind Test</h1> */}
     <Card username="krishna Jadhav"/>
     <Card username="hitesh codes"/>
     <Card/>

    </>
  )
}

export default App
