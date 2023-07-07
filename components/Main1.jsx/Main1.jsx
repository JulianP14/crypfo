'use client'

import { useEffect, useState } from "react";


const Main1 = () => {

    const [criptos, setCriptos] = useState([]);

    const criptosAnalizar = ['BTCUSDT', 'ETHUSDT', 'BNBUSDT', 'BUSDUSDT']

    // Fetch API
    // const APIfetch = async () => {
    //     const fetchResult = await fetch('https://api.binance.com/api/v3/ticker/24hr');
    //     const response = await fetchResult.json();
    //     const filter = response.filter((ele) => criptosAnalizar.includes(ele.symbol))
    //     console.log(filter)
    //     setCriptos(filter);


    //     /* console.log(filter[coin].priceChange)
    //     console.log(filter[coin].priceChangePercent) */
    // }

    // const manejoCriptos = criptos.map((cripto) => {
    //     console.log(cripto)
    //     console.log(typeof(cripto))
        
    // })

    // useEffect(() => {
    //     APIfetch();
    //     // Ejecuta la función inmediatamente al cargar la página
    //     const interval = setInterval(APIfetch, 300000);
    //     // Ejecuta la función cada 60 segundos
    //     return () => {
    //         clearInterval(interval);
    //         // Limpia el intervalo al desmontar el componente
    //     };
    // },);

    


    return (
        <div className='w-full text-center font-bold text-5xl pt-10 flex-column'>
            <h1 className='w-full h-150 '>TRACK THE PRICES</h1>
            <div className='flex justify-center'>
                <h2 className='bg-gradient-to-b from-blue-bg to-red-500 w-1/2 rounded-full text-white'>
                    OF THE MAIN CRYPTOS
                </h2>
            </div>
        </div>
    )
}

export default Main1