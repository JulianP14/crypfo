'use client'
import { useState } from 'react'
import Image from 'next/image';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)


const CryptoSearch = () => {
    const [criptos, setCriptos] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [filteredCrypto, setFilteredCrypto] = useState([]);

    const dataBinances = async () => {
        const binance = await fetch('https://api.binance.com/api/v3/ticker/24hr');
        const resp = await binance.json();
        setCriptos(resp);

        const filteredCriptos = resp.filter((element) => element.symbol === `${searchValue.toUpperCase()}USDT`);

        filteredCriptos.length == 0 && MySwal.fire({
            title: <p>Error: <hr /></p>,
            text: "The Cryptocurrency is not valid.",
            icon: 'error',
        })

        setFilteredCrypto(filteredCriptos);
    };

    const getPriceChangeClass = (priceChangePercent) => {
        return priceChangePercent < 0 ? 'text-red-500' : 'text-green-500'
    };

    let cero = 0.01

    return (
        <section className=' mt-10 h-screen flex flex-col justify-center md:h-auto' name='search' id='search' >
            <div className='flex flex-col items-center py-2' >
                <h2 className='text-3xl py-2'>
                    SEARCH CRYPTOS
                </h2>
                <p className='text-center text-lg py-2 px-4'>
                    If the Crypto you are looking for is not in the list, try searching it down below.
                </p>
            </div>
            <div className=' flex flex-col items-center sm:flex-row justify-center mt-5'>
                <input
                    type='text'
                    onChange={(e) => {
                        setSearchValue(e.target.value)
                    }}
                    value={searchValue}
                    className='text-black rounded-full py-2 px-4'
                    placeholder="Enter the crypto's ticker"
                />
                <button
                    onClick={() => {
                        dataBinances();
                    }}
                    className='bg-blue-bg hover:bg-pink-600  text-white font-bold my-2 ml-2 h-full py-2 px-6 rounded-full duration-300 border-gray-500 border-2'
                    
                >
                    SEARCH
                </button>
            </div>
            <div className='flex flex-wrap justify-center mt-10'>
                {filteredCrypto.map((data, index) => (
                    <section
                        key={index}
                        className='flex flex-row items-center justify-center my-5 mx-2 max-w-xs text-xl bg-gradient-to-b from-blue-bg to-violet-bg rounded-xl border-2 p-4'
                    >
                        <p>
                            {data.symbol.replace('USDT', ':')}
                        </p>
                        <p className='px-5'>
                            {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: data.askPrice % 1 !== 0 && data.askPrice < cero ? 6 : 2 }).format(data.askPrice)}
                        </p>
                        <p className={getPriceChangeClass(data.priceChangePercent)}>
                            {`${Number(data.priceChangePercent).toFixed(2)}%`}
                        </p>
                    </section>
                ))}
            </div>
        </section>
    );
};
export default CryptoSearch