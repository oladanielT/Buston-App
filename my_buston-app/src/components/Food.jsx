import React, { useState } from 'react';
import FoodsCard from '../assets/FoodsCard';
import { data } from '../data/FoodData';

// import axios from 'axios';



function Food(){
    const [food, setFood] = useState(data);

    const filterType = (categories) =>{
        setFood(data.filter((item)=>{
            return item.category === categories;
        }))
    }

    const filterPrice=(a,b)=>{
        setFood(data.filter((item)=>{
            if(item.price>=a && item.price<=b){
                return item.price;
            }
            
        }))
    }


    return(
        <div className='max-w-[1640px] mx-auto px-4 py-12'>
            <h1 className='font-bold text-4xl text-orange-600 text-center mb-2'>Top Rated Menu Items</h1>
            <div className='flex flex-col lg:flex-row justify-between'>
                <div>
                    <p className='font-bold text-gray-700 '>Filter Type</p>
                    <div className='flex items-center max-w-[600px] justify-between flex-wrap'>
                        <button onClick={()=>setFood(data)} className='m-1 text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-white'>All</button>
                        <button onClick={()=>filterType('burger')} className='m-1 text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-white'>Burgers</button>
                        <button onClick={()=>filterType('pizza')} className='m-1 text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-white'>Pizza</button>
                        <button onClick={()=>filterType('salad')} className='m-1 text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-white'>Salad</button>
                        <button onClick={()=>filterType('chicken')} className='m-1 text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-white'>Chicken</button> 
                    </div>
                </div>

                <div className='mt-2'>
                    <p className='font-bold text-gray-700 '>FIlter Price</p>
                    <div className='flex justify-between max-w-[450px] w-full'>
                        <button onClick={()=>filterPrice(1,49)} className='m-1 text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-white'>0-$49</button>
                        <button onClick={()=>filterPrice(50,99)} className='m-1 text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-white'>50-$99</button>
                        <button onClick={()=>filterPrice(100,199)} className='m-1 text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-white'>100-$199</button>
                        <button onClick={()=>filterPrice(200,299)} className='m-1 text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-white'>200-$299</button>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 pt-4'>
                {food.map((item)=>(
                    <FoodsCard item={item} key={item.id} />
                ))}
                
            </div>
            
        </div>
)}

export default Food;

































    // const [foodData, setFoodData] = useState([]);


    // useEffect(()=>{
    //     const ap_key = "b41ad11ebbe54f30ac713cbd36a4eae1";
    //     const Base_Api = ("https://api.spoonacular.com");

    //     const numberOfApi = 20;
    //     const FoodApi = `${Base_Api}/food/products/random?apiKey=${ap_key}&number=${numberOfApi}`;

    //     axios.get(FoodApi)
    //     .then(response=>{
    //         setFoodData(response.data.products);
    //         console.log(response.data.products);
    //     })
    //     .catch(error=>{
    //         console.error('Error fetching data', error.response.data);
    //     })
    // }, []);

