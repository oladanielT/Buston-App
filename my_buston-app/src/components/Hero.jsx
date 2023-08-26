import React from 'react';


function Hero(){



    return(
        <div className='max-w-[1640px] mx-auto px-4 py-2'>
            <div className='max-h-{500px] relative'>

                        {/* overlay */}

                <div className='absolute w-full h-full bg-black/40 text-gray-200 max-h-[500px] flex flex-col justify-center '>
                    <h1 className='font-bold text-4xl sm:text-5xl md:text-7xl px-4'>The <span className='text-orange-500'>Best</span></h1>
                    <h1 className='font-bold text-4xl sm:text-5xl md:text-7xl px-4'><span className='text-orange-500'>Foods</span> Delivered</h1>
                </div>
                {/* Hero image */}
                <img className='w-full max-h-[500px] ' src='https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60' alt="" srcset="" />
            </div>


            
        </div>
    )
}

export default Hero;