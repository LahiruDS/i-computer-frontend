import { useState } from 'react'
import './App.css'
import ProductCard from './components/productCard'
import Header from './components/header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="w-[600px] h-[600px] border bg-gray-400 flex justify-center items-center">
      <div className="w-[500px] h-[500px]  bg-yellow-200 flex flex-col justify-center items-center">
        <div className="w-[100px] h-[100px]  bg-red-500 fixed left-[500px] top-[500px]"></div>
        <div className="w-[100px] h-[100px]  bg-green-500 absolute left-[500px]"></div>
        <div className="w-[100px] h-[100px]  bg-blue-600"></div>
        <div className="w-[100px] h-[100px]  bg-pink-500"></div>
      </div>

    </div>
    
    </>
  )
}

export default App
