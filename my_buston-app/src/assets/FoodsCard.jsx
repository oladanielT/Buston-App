import React, {useState, useContext} from 'react';
import { AiFillDelete, AiFillMinusSquare, AiFillPlusSquare } from 'react-icons/ai';
import { CartContext } from '../data/CartContext';
import { getProductData } from '../data/FoodData';
// import { useCart } from '../data/CartContext';




const FoodsCard = (props)=>{
    const {item} = props;
    const [message, setMessage] = useState(false);
    const [size, setSize] = useState(false);
    const foodCart = useContext(CartContext);
    const quantity = foodCart.getProductQuantity(item.id);
    const productPrice = getProductData(item.id);
    const totalCost = quantity * productPrice.price;

    

    return(
        <>
            <div onMouseEnter={()=>setMessage(true)} onMouseLeave={()=>setMessage(false)} className='w-full h-full flex flex-col border shadow-lg hover:scale-105 duration-300 rounded-lg '>
                <img className='w-full h-[200px] object-cover rounded-t-lg' src={item.image} alt="" />
                <div className='flex justify-between items-center p-2'>
                    <p className='font-bold '>{item.name}</p>
                    <span className='rounded-full text-white bg-orange-500 p-1'><p>${item.price}</p></span>
                </div>
                <div className={` ${message?"absolute":"hidden"} font-bold text-md duration-100`}>
                    <span onClick={()=>setSize(!size)}  className='bg-orange-400 border-orange-500 text-white px-2 py-1 shadow-md cursor-pointer'>Add to Cart</span>
                </div>

                {/*  */}
                <div className={`${size?"relative":"hidden"} w-full bg-gray-100 px-3 text-sm  duration-300`}>
                    <span onClick={()=>setSize(!size)} className='absolute left-[65%] sm:left-[75%] border border-orange-500 text-sm rounded-md px-1 m-2 cursor-pointer duration-300'>Done</span>
                    {/* <AiFillDelete onClick={()=>setSize(!size)} className='absolute left-[85%] text-red-700 m-2 cursor-pointer duration-300' size={20}/> */}
                    
                    <div className='mt-8 text-center '>
                        <p>Item name: <span className='font-bold'>{item.name}</span></p>
                        <p className='my-1 text-sm'>Quantity to Add: <span className='text-lg font-bold rounded-full px-2 border bg-blue-500 text-white'>{quantity}</span></p>
                        <p>Total price: ${totalCost}</p>
                    
                    </div>
                    
                    <div className='flex items-center justify-evenly p-4 '>
                      <AiFillMinusSquare onClick={()=>foodCart.removeFromCart(item.id)}  className='cursor-pointer text-orange-500' size={20}/>
                      <AiFillPlusSquare onClick={()=>foodCart.addToCart(item.id)}   className='cursor-pointer text-orange-500' size={20}/>
                    </div>
                </div>
    
            </div>
          
        
        </>
     
    )
}

export default FoodsCard;