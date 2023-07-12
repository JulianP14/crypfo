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

        const filteredCriptos = criptos.filter((element) => element.symbol === `${searchValue.toUpperCase()}USDT`);

        filteredCriptos.length == 0 && MySwal.fire({
            title: <p>Error: <hr /></p>,
            text: "La Criptomoneda ingresada es incorrecta.",
            icon: 'error',
        })

        setFilteredCrypto(filteredCriptos);
    };

    const getPriceChangeClass = (priceChangePercent) => {
        return priceChangePercent < 0 ? 'text-red-500' : 'text-green-500'
    };

    let cero = 0.01

    return (
        <>
            <div className='flex flex-col items-center mt-10' id='search'>
                <h2 className='text-3xl'>
                    SEARCH CRYPTOS
                </h2>
                <p className='text-center'>
                    If the Crypto you are looking for is not in the list, try searching it down below.
                </p>
            </div>
            <div className='flex justify-center mt-10'>
                <input
                    type='text'
                    onChange={(e) => {
                        setSearchValue(e.target.value)
                    }}
                    value={searchValue}
                    className='text-black rounded-full py-2 px-4'
                />
                <button
                    onClick={() => {
                        dataBinances();
                    }}
                    className='bg-blue-bg border-white hover:bg-red-800 text-white font-bold mt-2 py-2 px-6 rounded-full'
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
        </>
    );
};
export default CryptoSearch