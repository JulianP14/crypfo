import React from 'react'

const MarketUpdate = () => {
    return (
        <div className='flex justify-around border-2 bg-blue-bg mx-80 pt-3 pb-3 mt-5 rounded-xl bg-gradient-to-r from-blue-bg to-violet-bg' id='market'>
            <p>Coin</p>
            <p className='pl-12'>Price</p>
            <p className='pl-5'>24hs Change</p>
            <p>Total $ in Binance</p>
        </div>
    )
}

export default MarketUpdate