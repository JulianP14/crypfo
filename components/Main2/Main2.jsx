import React from 'react'
import Image from 'next/image'

const Main2 = () => {
    return (
        <div className='px-10'>
            <div className='text-center font-bold text-3xl pt-10 flex justify-center pt-20'>
                <h1 className='w-1/3 rounded-full text-white p-1 mb-10'>
                    POR QUÉ ELEGIRNOS
                </h1>
            </div>
            <div className='flex justify-evenly '>
                <section className='bg-gradient-to-b from-blue-bg to-red-700 '>
                    <div className='border-2 border-zinc-200 flex pt-5 pb-5 '>
                        <div>
                            <h3>Watch The Market</h3>
                            <p>Watch the price from the 10 most important crypto coins directly from the biggest broker.</p>
                        </div>

                    </div>
                    <div className='border-2 border-zinc-200'>
                        <h3>Save Info In Your Account</h3>
                    </div>
                    <div className='border-2 border-zinc-200'>
                        <h3>Share Your Thoughts</h3>
                    </div>
                </section>

                <div>
                    <Image
                        src={'/images/handcrypto.png'}
                        alt='logo'
                        width={200}
                        height={250}
                        className='m-10'
                    />
                </div>

                <section className='bg-gradient-to-b from-blue-bg to-red-700'>
                    <div className='border-2 border-zinc-200'>
                        <div>
                            <Image
                                src={'/images/ADAUSDT.svg'}
                                alt='logo'
                                width={20}
                                height={20}
                            />
                            <h3>Watch The Market</h3>
                            <p>Watch the price from the 10 most important crypto coins directly from the biggest broker.</p>
                        </div>
                    </div>
                    <div className='border-2 border-zinc-200'>
                        <h3>Save Info In Your Account</h3>
                    </div>
                    <div className='border-2 border-zinc-200'>
                        <h3>Share Your Thoughts</h3>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Main2    