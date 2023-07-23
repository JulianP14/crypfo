import CryptoSearch from '@/components/CryptoSearch/CryptoSearch'
import Footer from '@/components/Footer/Footer'
import HomeSite from '@/components/HomeSite/HomeSite'
import Main1 from '@/components/Main1.jsx/Main1'
import Main2 from '@/components/Main2/Main2'
import Navbar from '@/components/Navbar/Navbar'
import Prueba from '@/components/Prueba/prueba'

export default function Home() {
  return (
    <main className=' bg-gradient-to-b from-blue-bg to-violet-bg crypfo__main'>
      <Navbar />
      <HomeSite />
      <Main1 />
      <Prueba />
      <CryptoSearch />
      <Main2 />

    </main>
  )
}
