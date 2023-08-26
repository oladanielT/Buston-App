import React from 'react';


const FoodsCard = (props)=>{
    const {item} = props;


    return(
        <div className='w-full h-full flex flex-col border shadow-lg hover:scale-105 duration-300 rounded-lg'>
            <img className='w-full h-[200px] object-cover rounded-t-lg' src={item.image} alt="" />
            <div className='flex justify-between items-center p-2'>
                <p className='font-bold '>{item.name}</p>
                <span className='rounded-full text-white bg-orange-500 p-1'><p>${item.price}</p></span>
            </div>
  
        </div>
    )
}

export default FoodsCard;