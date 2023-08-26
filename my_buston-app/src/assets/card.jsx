import React from 'react'

const Card = (props) => {
    const {data} = props;
  return (
    <div>
          <div className='relative rounded-xl '> 
                 
                 {/* overlay */}
          <div className='absolute w-full h-full rounded-xl bg-black/50 text-gray-200 font-bold'>
              <h1 className='text-2xl px-4 pt-6'>{data.text}</h1>
              <p className='px-4'>{data.quantity}</p>
              <button className='absolute bottom-4 bg-white text-black mx-4'>Order Now</button>
          </div>
           
           
           {/* card */}
          <div>
              <img className='rounded-xl max-h-[160px] md:max-h-[200px] w-full object-cover ' src={data.img} alt="" />
          </div>
  
      </div>
    </div>
  )
}

export default Card;