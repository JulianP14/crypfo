import React from 'react'

const MarketUpdate = () => {
    return (
        <section className='flex flex-col items-center pt-3 mx-10 text-xs sm:text-sm xl:px-64 lg:px-52 md:px-30 sm:px-20'>
            <div 
                className='w-full flex flex-wrap justify-around items-center py-4 border-2 xl:max-w-3xl bg-blue-bg mt-5 mx-8 rounded-xl bg-gradient-to-r from-blue-bg to-violet-bg' 
                id='market'
            >
                <p>Coin</p>
                <p className='lg:pl-12'>Price</p>
                <p className='lg:pl-5'>24hs Change</p>
                <p>Total $ in Binance</p>
            </div>
        </section>
    )
}

export default MarketUpdate