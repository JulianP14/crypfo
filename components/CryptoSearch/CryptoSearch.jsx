'use client'
import { useState } from 'react'


const CryptoSearch = () => {
    const [criptos, setCriptos] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [filteredCrypto, setFilteredCrypto] = useState([]);

    const dataBinances = async () => {
        const binance = await fetch('https://api.binance.com/api/v3/ticker/24hr');
        const resp = await binance.json();
        setCriptos(resp);

        const filteredCriptos = criptos.filter((element) => element.symbol === `${searchValue.toUpperCase()}USDT`);
        setFilteredCrypto(filteredCriptos);
    };


    const cleanInput = () => {
        setSearchValue('');
    }

    const getPriceChangeClass = (priceChangePercent) => {
        return priceChangePercent < 0 ? 'text-red-500' : 'text-green-500'
    };

    let cero = 0.01

    return (
        <>
            <div className='flex flex-col items-center flex-wrap mt-10'>
                <h2 className='text-3xl '>
                    Buscar Criptomonedas
                </h2>
                <p>
                    Si la cripto que buscas no está en la lista, escribí su ticker acá:
                </p>
            </div>
            <div className='flex justify-center mt-10 '>
                <input
                    type='text'
                    onChange={(e) => {
                        setSearchValue(e.target.value)
                    }}
                    value={searchValue}
                    className='text-black rounded-full mr-2 py-2 border-zin-950 pr-10 pl-2'
                />
                <button
                    onClick={() => {
                        dataBinances();
                        // await searchCrypto();
                        // await cleanInput();
                    }}
                    className=' bg-blue-bg border-white hover:bg-red-700 text-white font-bold py-2 px-6 border-b-4 border-blue-700 hover:border-white rounded transition duration-300 rounded-full'
                >
                    BUSCAR
                </button>
            </div>
            <div>
                {filteredCrypto.map((data, index) => (
                    <section
                        key={index}
                        className='flex align-center justify-center pt-10'
                    >
                        <p>
                            {data.symbol}
                        </p>
                        <p className='px-10'>
                            {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: data.askPrice % 1 !== 0 & data.askPrice < cero ? 6 : 2 }).format(data.askPrice)}
                        </p>
                        <p
                            className={getPriceChangeClass(data.priceChangePercent)}
                        >
                            {`${Number(data.priceChangePercent).toFixed(2)}%`}
                        </p>

                    </section>
                ))}
            </div>
        </>
    );
};
export default CryptoSearch