import React from 'react'
import Image from 'next/image'

const Main2 = () => {
    return (
        <section className='px-5 sm:px-10' id='chooseus'>
            <div className='text-center font-bold text-3xl flex justify-center pt-20'>
                <h1 className='w-full rounded-full text-white p-1 mb-10'>
                    WHY CHOOSE US:
                </h1>
            </div>
            <section className='sm:grid-cols-1 grid lg:grid-cols-3 gap-8 justify-center justify-items-center items-center '>
                <div className='max-w-md mb-5'>

                    <div className='border-2 border-slate-400 flex rounded-xl py-10 bg-cards-bg my-8'>
                        <div className='mx-5 max-w-[100px] min-w-[40px]'>
                            <Image
                                src={'/images/trading.svg'}
                                alt='wallet img'
                                width={100}
                                height={100}
                                className='bg-gradient-to-r from-blue-bg to-fuchsia-500 rounded-full p-2'
                            />
                        </div>
                        <div className='pr-1 col-span-2'>
                            <h3 className='text-2xl sm:text-3xl uppercase text-white'>
                                Watch The Market
                            </h3>
                            <p className='text-white'>
                                Watch the price from the 10 most important crypto coins directly from the biggest broker.
                            </p>
                        </div>
                    </div>

                    <div className='border-2 border-slate-400 flex rounded-xl py-10 bg-cards-bg my-8'>
                        <div className='mx-5 max-w-[100px] min-w-[50px]'>
                            <Image
                                src={'/images/search.svg'}
                                alt='wallet img'
                                width={100}
                                height={100}
                                className='bg-gradient-to-r from-blue-bg to-fuchsia-500 rounded-full p-2'
                            />
                        </div>
                        <div className='pr-1'>
                            <h3 className='text-2xl sm:text-3xl uppercase text-white'>
                                Search Cryptos
                            </h3>
                            <p className='text-white'>
                                If you want to look for another Crypto that is not in the main list, you can search it above.
                            </p>
                        </div>
                    </div>

                    <div className='border-2 border-slate-400 flex rounded-xl py-10 bg-cards-bg my-8'>
                        <div className='mx-5 max-w-[80px] min-w-[50px]'>
                            <Image
                                src={'/images/token.svg'}
                                alt='wallet img'
                                width={80}
                                height={80}
                                className='bg-gradient-to-r from-blue-bg to-fuchsia-500 rounded-full p-2'
                            />
                        </div>
                        <div className='pr-1'>
                            <h3 className='text-2xl sm:text-3xl uppercase'>
                                Reliable Data
                            </h3>
                            <p>
                                The data displayed here is provided by the biggest broker in the world.
                            </p>
                        </div>
                    </div>



                </div>

                <div className='flex items-center justify-center sm:justify-center mb-5'>
                    <Image
                        src={'/images/handcrypto.png'}
                        alt='logo'
                        width={200}
                        height={250}
                        className='m-10'
                    />
                </div>

                <div className='max-w-md mb-5'>
                    <div className='border-2 border-slate-400 flex rounded-xl py-10 bg-cards-bg'>
                        <div className='mx-5 max-w-[100px] min-w-[50px]'>
                            <Image
                                src={'/images/account.svg'}
                                alt='wallet img'
                                width={100}
                                height={100}
                                className='bg-gradient-to-r from-blue-bg to-fuchsia-500 rounded-full p-2'
                            />
                        </div>
                        <div className='pr-1'>
                            <h3 className='text-2xl sm:text-3xl uppercase'>
                                Log-in
                            </h3>
                            <p>
                                Log-in into your account and save your favorites Cryptos and keep track of them.
                            </p>
                        </div>
                    </div>

                    <div className='border-2 border-slate-400 flex rounded-xl py-10 bg-cards-bg my-8'>
                        <div className='mx-5 max-w-[100px] min-w-[50px]' >
                            <Image
                                src={'/images/wallet.svg'}
                                alt='wallet img'
                                width={100}
                                height={100}
                                className='bg-gradient-to-r from-blue-bg to-fuchsia-500 rounded-full p-2'
                            />
                        </div>
                        <div className='pr-1'>
                            <h3 className='text-2xl sm:text-3xl uppercase'>
                                Buy and Sell
                            </h3>
                            <p>
                                Crypfo APP is aimed to buy and sell Cryptos, exclusively for registered members.
                            </p>
                        </div>
                    </div>
                    <div className='border-2 border-slate-400 flex rounded-xl py-10 bg-cards-bg'>
                        <div className='mx-5 max-w-[100px] min-w-[50px]'>
                            <Image
                                src={'/images/message.svg'}
                                alt='wallet img'
                                width={100}
                                height={100}
                                className='bg-gradient-to-r from-blue-bg to-fuchsia-500 rounded-full p-2'
                            />
                        </div>
                        <div className='pr-1'>
                            <h3 className='text-2xl sm:text-3xl uppercase'>
                                Join the Discussion
                            </h3>
                            <p>
                                Join the Crypfo community and discuss, talk and have a good time while you are around.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Main2    