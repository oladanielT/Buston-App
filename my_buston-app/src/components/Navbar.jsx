import React, {useState, useContext} from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { BsFillCartFill } from 'react-icons/bs';
import { Navdata } from '../data/navdata';
import { CartContext} from '../data/CartContext';
// import { getProductData } from '../data/FoodData';


function Navbar(){
    const [listShow, setListShow] = useState(false);
    const [orderClick, setOrderClick] = useState(false);
    const [carts, setCart] = useState(false)

    // const foodsCart = useContext(CartContext);
    


    return (
        <div className={` bg-black text-orange-500 max-w-[1640px] mx-auto flex justify-between items-center p-4 ${carts?"overlay overflow-hidden":""}`}>
            <div className='flex items-center gap-6 py-1'>
                <div className='cursor-pointer'>
                    <AiOutlineMenu onClick={()=>setListShow(!listShow)} size={30}/>
                </div>
                <h1 className='text-2xl sm:text-3xl lg:text-4xl text-white'>Buston <span className='font-bold text-orange-500'>Bites</span></h1>
                <div className='font-bold hidden md:flex items-center bg-gray-200 text-gray-900 p-1 rounded-lg gap-2 cursor-pointer '>
                    <p onClick={()=>setOrderClick(true)} className={`${orderClick?" bg-black text-white py-1 px-2 rounded-lg":''}`}>Delivery</p>
                    <p onClick={()=>setOrderClick(false)}  className={`${!orderClick?" bg-black text-white py-1 px-2 rounded-lg":''}`}>Pickup</p>
                </div>
            </div>
            <div className='flex items-center bg-gray-200 rounded-full w-[200px] sm:w-[400px] px-2'>
                <input className='text-black bg-transparent p-1 w-full focus:outline-none' type="text" name="" id="" placeholder='Search food' />
                <AiOutlineSearch className='cursor-pointer' size={25}/>
            </div>

            <button  onClick={()=>setCart(!carts)} className='font-bold gap-2 bg-black text-white hidden md:flex items-center border-orange-500 active:translate-y-1 duration-300'>
                <BsFillCartFill size={25}/> Cart
            </button>

            {/* Navbar menu */}


            {/* overlay */}

            <div className={`w-full h-screen top-0 left-0 bg-black/80 ${listShow?"fixed":"hidden"} z-10`}></div>

            {/* menu item */}

            <div className={`text-black w-[300px] h-screen bg-white fixed top-0 duration-500 ${listShow?"left-0":'left-[-100%]'} z-10 border-r-orange-500 border-4`}>
                <div className=' p-4 flex items-center justify-between bg-black text-white'>
                    <h1 className='text-3xl'>Buston <span className='font-bold text-orange-600'>Bites</span></h1>
                    <AiOutlineClose onClick={()=>setListShow(!listShow)} className='cursor-pointer' size={30}/>
                </div>
                <div>
                    <ul className='py-2 px-2'>
                        {Navdata.map((data, index)=>(
                            <li className={`flex items-center gap-3 py-4 px-3 text-xl font-bold cursor-pointer hover:bg-orange-500 hover:ml-2 rounded-xl duration-300 hover:text-white`} key={data.id}>{data.icon}{data.title}</li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* here for the Cart Items */}

            {/* Overlay */}

            <div className={`${carts?"fixed top-0 left-0":"hidden"}  w-full h-screen bg-black/80 z-10 scroll-m-0`}></div>


            {/* Cart container */}
           <div className={`${carts?"absolute overlay":"hidden "} z-20 w-[300px] bg-gray-100 top-[20%] left-[40%] text-black`}>
            <div className='flex justify-between items-center p-4 border-gray-400 border-b-2'>
                <h2  className='text-xl font-bold'>Cart</h2>
                <AiOutlineClose onClick={()=>setCart(!carts)} className='cursor-pointer' size={25}/>
            </div>
           </div>


           

        
     
            
          
            
        </div>
    )
}

export default Navbar;