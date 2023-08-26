import React from 'react';
import {categories} from '../data/FoodData';



function Categories(){



    return(
        <div className='max-w-[1640px] mx-auto px-4 py-12 flex flex-col '>
            <h2 className='font-bold text-orange-500 text-4xl text-center'>Top Rated Menu Items</h2>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 py-6'>
                {categories.map((item,index)=>(
                    <div className='w-full shadow-lg flex justify-between items-center bg-gray-100 rounded-lg px-5 cursor-pointer' key={index}>
                        <h2 className='font-bold sm:text-xl '>{item.name}</h2>
                         <img className='w-20' src={item.image} alt={item.name} />
                    </div>
                   
                ))}
            </div>
        </div>
    )
}

export default Categories;