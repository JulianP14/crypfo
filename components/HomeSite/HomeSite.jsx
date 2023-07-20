import Image from 'next/image'
import crypto1 from '../../public/images/crypto4.png'
import btclogo1 from '../../public/images/btclogo1.svg'
import btclogo2 from '../../public/images/btclogo2.svg'


const HomeSite = () => {
    return (
        <section id='home' className='flex flex-col items-center justify-center m-5 h-screen'>
            <div className='w-full flex justify-around pb-10'>
                <Image
                    src={btclogo2}
                    width={200}
                    height={100}
                    alt='logo'
                    className='animate-bounce w-50 h-20'
                />
                <Image
                    src={btclogo2}
                    width={200}
                    height={100}
                    alt='logo'
                    className='animate-bounce w-50 h-20'
                />
            </div>
            <div className='flex justify-center items-center w-full pb-10 '>
                <Image
                    src={crypto1}
                    width='100%'
                    height={500}
                    alt='bckg'
                    className='opacity-20 relative z-20'
                />
                <div className='absolute'>
                    <h1 className='text-5xl my-4 mx-2 text-center uppercase font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text'>
                        Discover the Crypfo Universe:
                    </h1>
                    <h2 className=' text-4xl my-4 mx-2 text-center uppercase font-bold bg-gradient-to-r from-cyan-300 to-pink-600  text-transparent bg-clip-text'>
                        Real-Time Prices and Trends
                    </h2>

                </div>
            </div>
        </section>
    )
}

export default HomeSite