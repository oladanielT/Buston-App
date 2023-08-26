import React, {useState} from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { BsFillCartFill } from 'react-icons/bs';
import { Navdata } from '../data/navdata';


function Navbar(){
    const [listShow, setListShow] = useState(false);
    const [orderClick, setOrderClick] = useState(false);


    return (
        <div className=' bg-black text-orange-500 max-w-[1640px] mx-auto flex justify-between items-center p-4'>
            <div className='flex items-center gap-6 py-1'>
                <div className='cursor-pointer'>
                    <AiOutlineMenu onClick={()=>setListShow(!listShow)} size={30}/>
                </div>
                <h1 className='text-2xl sm:text-3xl lg:text-4xl text-white'>Buston <span className='font-bold text-orange-500'>Bites</span></h1>
                <div className='font-bold flex items-center bg-gray-200 text-gray-900 p-1 rounded-lg gap-2 cursor-pointer'>
                    <p onClick={()=>setOrderClick(true)} className={`${orderClick?" bg-black text-white py-1 px-2 rounded-lg":''}`}>Delivery</p>
                    <p onClick={()=>setOrderClick(false)}  className={`${!orderClick?" bg-black text-white py-1 px-2 rounded-lg":''}`}>Pickup</p>
                </div>
            </div>
            <div className='flex items-center bg-gray-200 rounded-full w-[200px] sm:w-[400px] px-2'>
                <AiOutlineSearch size={20}/>
                <input className='bg-transparent p-1 w-full focus:outline-none' type="text" name="" id="" placeholder='Search food' />
            </div>

            <button className='font-bold gap-2 bg-black text-white hidden md:flex items-center'>
                <BsFillCartFill size={25}/> Cart
            </button>

            {/* Navbar menu */}


            {/* overlay */}

            <div className={`w-full h-screen top-0 left-0 bg-black/80 ${listShow?"fixed":"hidden"}`}></div>

            {/* menu item */}

            <div className={`text-black w-[300px] h-screen bg-white fixed top-0 duration-500 ${listShow?"left-0":'left-[-100%]'}`}>
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

            <div className='hidden fixed top-0 left-0 w-full h-screen bg-black/80'></div>


            {/* Cart container */}
           <div className='hidden z-20 w-[300px] bg-white absolute top-[20%] left-[40%] text-black'>
            hello
           </div>


           

        
     
            
          
            
        </div>
    )
}

export default Navbar;