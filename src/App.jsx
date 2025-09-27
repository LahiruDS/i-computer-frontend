import { useState } from 'react'
import './App.css'
import ProductCard from './components/productCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ProductCard name="Laptop" price="LKR: 10,000" image="https://www.bhphotovideo.com/images/images2500x2500/hp_28k88ut_aba_pb440g8_i7_1165g7_16_512_32_ix_w10p_14_1601641.jpg"/>

    <ProductCard name="Keyboard" price="LKR: 1,000" image="https://m.media-amazon.com/images/I/71DYlRN51tL._AC_SL1500_.jpg"/>

    <ProductCard name="Mouse" price="LKR: 500" image="https://images-na.ssl-images-amazon.com/images/I/61QXVSF6bLL._AC_SL1500_.jpg"/>

    <ProductCard name="Machine Case" price="LKR: 11,500" image="https://tse2.mm.bing.net/th/id/OIP.HzwkI94SR9Q_ohFhunOx9AHaHa?pid=Api&P=0&h=220"/>

    <ProductCard name="Monitor(Used)" price="LKR: 9,500" image="https://m.media-amazon.com/images/I/71SMLQItkzL.jpg"/>
    </>
  )
}

export default App
