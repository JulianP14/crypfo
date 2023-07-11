import React from 'react'
import Image from 'next/image'

const Main2 = () => {
    return (
        <section className='px-10'>
            <div className='text-center font-bold text-3xl pt-10 flex justify-center pt-20'>
                <h1 className='w-1/3 rounded-full text-white p-1 mb-10'>
                    WHY CHOOSE US:
                </h1>
            </div>
            <section className='flex justify-evenly px-20'>
                <div className='max-w-md'>
                    <div className='border-2 border-slate-400 flex rounded-xl mb-5 py-10 bg-cards-bg'>
                        <div className='mx-5'>
                            <Image
                                src={'/images/trading.svg'}
                                alt='wallet img'
                                width={100}
                                height={100}
                                className='bg-gradient-to-r from-blue-bg to-fuchsia-500 rounded-full p-2'
                            />
                        </div>
                        <div className='pr-1'>
                            <h3 className='text-3xl uppercase'>
                                Watch The Market
                            </h3>
                            <p>
                                Watch the price from the 10 most important crypto coins directly from the biggest broker.
                            </p>
                        </div>
                    </div>

                    <div className='border-2 border-slate-400 flex rounded-xl mb-5 py-10 bg-cards-bg'>
                        <div className='mx-5'>
                            <Image
                                src={'/images/search.svg'}
                                alt='wallet img'
                                width={100}
                                height={100}
                                className='bg-gradient-to-r from-blue-bg to-fuchsia-500 rounded-full p-2'
                            />
                        </div>
                        <div className='pr-1'>
                            <h3 className='text-3xl uppercase'>
                                Search Cryptos
                            </h3>
                            <p>
                                If you want to look for another Crypto that is not in the main list, you can search it above.
                            </p>
                        </div>
                    </div>

                    <div className='border-2 border-slate-400 flex rounded-xl mb-5 py-10 bg-cards-bg'>
                        <div className='mx-5'>
                            <Image
                                src={'/images/token.svg'}
                                alt='wallet img'
                                width={100}
                                height={100}
                                className='bg-gradient-to-r from-blue-bg to-fuchsia-500 rounded-full p-2'
                            />
                        </div>
                        <div className='pr-1'>
                            <h3 className='text-3xl uppercase'>
                                Reliable Information
                            </h3>
                            <p>
                                The data used is provided by the biggest cryptocurrencies broker. Any information display is %100 valid
                            </p>
                        </div>
                    </div>
                </div>

                <div className='flex items-center' >
                    <Image
                        src={'/images/handcrypto.png'}
                        alt='logo'
                        width={200}
                        height={250}
                        className='m-10'
                    />
                </div>

                <div className='max-w-md'>

                    <div className='border-2 border-slate-400 flex rounded-xl mb-5 py-10 bg-cards-bg'>
                        <div className='mx-5'>
                            <Image
                                src={'/images/account.svg'}
                                alt='wallet img'
                                width={100}
                                height={100}
                                className='bg-gradient-to-r from-blue-bg to-fuchsia-500 rounded-full p-2'
                            />
                        </div>
                        <div className='pr-1'>
                            <h3 className='text-3xl uppercase'>
                                Log-in
                            </h3>
                            <p>
                                Log-in into your account and save your favorites Cryptos and keep track of them.
                            </p>
                        </div>
                    </div>

                    <div className='border-2 border-slate-400 flex rounded-xl mb-5 py-10 bg-cards-bg'>
                        <div className='mx-5'>
                            <Image
                                src={'/images/wallet.svg'}
                                alt='wallet img'
                                width={100}
                                height={100}
                                className='bg-gradient-to-r from-blue-bg to-fuchsia-500 rounded-full p-2'
                            />
                        </div>
                        <div className='pr-1'>
                            <h3 className='text-3xl uppercase'>
                                Buy and Sell
                            </h3>
                            <p>
                                Soon we will launch our own broker APP exclusively for registered accounts.
                            </p>
                        </div>
                    </div>

                    <div className='border-2 border-slate-400 flex rounded-xl mb-5 py-10 bg-cards-bg'>
                        <div className='mx-5'>
                            <Image
                                src={'/images/message.svg'}
                                alt='wallet img'
                                width={100}
                                height={100}
                                className='bg-gradient-to-r from-blue-bg to-fuchsia-500 rounded-full p-2'
                            />
                        </div>
                        <div className='pr-1'>
                            <h3 className='text-3xl uppercase'>
                                Comment & Discuss
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