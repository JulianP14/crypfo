import 'tailwindcss/tailwind.css'
import Image from 'next/image'
import Link from 'next/link'

const NavbarDesktop = ({ }) => {

    return (
        <nav className='flex justify-evenly pt-3 font-bold  text-xl uppercase text-white'>
            {/* Desktop Nav */}
            <section className='text-2xl bg-gradient-to-r from-red-700 to-blue-700 text-transparent bg-clip-text '>
                Crypfo
                {/* <Image 
                    src={'/images/bitcoin-btc-logo.svg'} 
                    width={20}
                    height={20}
                    alt='bitcoinlogo'
                /> */}
            </section>
            <ul className='flex'>
                <li className='pl-10 pt-1'>
                    <a href='#home' className='text-red-500 hover:text-white transition duration-300'>
                        Home
                    </a>
                </li>
                <Link href={'#market'}>
                    <li className='pl-10 pt-1 text-red-500 hover:text-white transition duration-300'>
                        The Market
                    </li>
                </Link>
                <li className='pl-10 pt-1 text-red-500 hover:text-white transition duration-300'>
                    Choose us
                </li>
            </ul>
        </nav>
    )
}

export default NavbarDesktop