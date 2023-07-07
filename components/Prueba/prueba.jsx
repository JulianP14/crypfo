'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import MarketUpdate from './MarketUpdate';


const Prueba = () => {
    const [criptos, setCriptos] = useState([]);





    /* BINANCE PRUEBA */
    const dataBinances = async () => {
        const tickersDeseados = ['BTCUSDT', 'ETHUSDT', 'BNBUSDT', 'XRPUSDT', 'ADAUSDT', 'DOGEUSDT', 'SOLUSDT', 'LTCUSDT', 'TRXUSDT', 'MATICUSDT'];

        const binance = await fetch('https://api.binance.com/api/v3/ticker/24hr');
        const resp = await binance.json();
        const filter = resp.filter((ele) => tickersDeseados.includes(ele.symbol))
        setCriptos(filter);
    };

    useEffect(() => {
        dataBinances();
        // Ejecuta la función inmediatamente al cargar la página
        const interval = setInterval(dataBinances, 30000);
        // Ejecuta la función cada 60 segundos
        return () => {
            clearInterval(interval);
            // Limpia el intervalo al desmontar el componente
        };
    }, []);

    /* VALIDACION PORCENTAJE COLORES */
    // Uso de una clase dinamica para chequear si es un valor u otro
    const getPriceChangeClass = (priceChangePercent) => {
        return priceChangePercent < 0 ? 'text-red-500' : 'text-green-500' 
    };

    return (
        <>
            <MarketUpdate />
            <div className='flex-column align-center text-center pt-3 bg-black-400 border-4 border-zinc-300 mr-10 ml-10' id='market'>
                {criptos.map((cripto, index) => (
                    <section key={index} className='w-full flex justify-around'>
                        <Image
                            src={`/images/${cripto.symbol}.svg`}
                            alt={`${cripto.symbol}`}
                            width={65}
                            height={50}
                            className='border-2 '
                        />
                        <p
                            key={index}
                            className='p-5'
                        >
                            {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(cripto.askPrice)}
                        </p>

                        <p
                        // Llamado a la clase dinamica para chequear el valor
                        className={getPriceChangeClass(cripto.priceChangePercent)}
                        >
                            {`${Number(cripto.priceChangePercent).toFixed(2)}%`}
                        </p>


                        <p>
                            {`${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(Number(cripto.volume * cripto.askPrice))}`}
                        </p>
                    </section>
                ))}

            </div>
        </>


    );
}

export default Prueba;