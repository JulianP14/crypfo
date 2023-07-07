import Main1 from '@/components/Main1.jsx/Main1'
import Main2 from '@/components/Main2/Main2'
import Navbar from '@/components/Navbar/Navbar'
import Prueba from '@/components/Prueba/prueba'
import Image from 'next/image'

export default function Home() {
  return (
    <main className=' bg-gradient-to-b from-blue-bg to-red-500 crypfo__main'>
      <Navbar />
      <Main1 />
      <Prueba />
      <Main2 />
    </main>
  )
}
