import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind css test </h1>
      <Card username = "Mohammad Hasrat" img ="https://images.pexels.com/photos/19276913/pexels-photo-19276913/free-photo-of-young-brunette-on-balcony-against-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
      <Card username = "Hasrat Ali" img = "https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/> 
    </>
  )
}

export default App
