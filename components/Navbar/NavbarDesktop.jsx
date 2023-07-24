'use client'

import 'tailwindcss/tailwind.css'
import Image from 'next/image'
import { Link } from 'react-scroll'
import { useState } from 'react'
import { FaTimes, FaBars } from 'react-icons/fa'


const NavbarDesktop = () => {

    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            to: 'home',
            label: 'Home'
        },
        {
            id: 2,
            to: 'market',
            label: 'Market'
        },
        {
            id: 3,
            to: 'search',
            label: 'Search'
        },
        {
            id: 4,
            to: 'chooseus',
            label: 'Why us?'
        },
    ]


    return (
        <>
            <nav className=' z-10 p-5 flex justify-between font-bold text-xl uppercase text-white sticky top-0 bg-blue-bg pr-10'>
                <section className='text-2xl bg-gradient-to-r from-red-700 to-blue-700 text-transparent bg-clip-text flex items-center'>
                    Crypfo
                    <Image
                        src={'/images/crypfologo.svg'}
                        width={40}
                        height={40}
                        alt='crypfo logo'
                        className='ml-2'
                    />
                </section>
                <ul className='hidden md:flex'>
                    {links.map(({ id, to, label }) => (
                        <li className='ml-10 pt-2 text-white  hover:text-red-500 transition duration-300 cursor-pointer hover:scale-105' key={id}>
                            <Link to={to} smooth duration={500}>
                                {label}
                            </Link>
                        </li>

                    ))}
                </ul>
                <div
                    onClick={() => setNav(!nav)}
                    className='cursor-pointer md:hidden bg-violet-bg hover:bg-cyan-500 duration-300 rounded-xl p-2 z-20'
                >
                    {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
                </div>
                {nav && (
                    <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-blue-bg to-violet-bg text-white">
                        {links.map(({ id, to, label }) => (
                            <li
                                className=" my-8 cursor-pointer capitalize text-4xl hover:scale-105 hover:text-red-500 duration-300"
                                key={id}
                            >
                                <Link
                                    to={to}
                                    smooth duration={500}
                                    onClick={() => setNav(!nav)}>
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}

            </nav>
        </>
    )
}

export default NavbarDesktop