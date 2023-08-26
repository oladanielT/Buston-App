import React from 'react';
import CardData from '../data/cardData'
import Card from '../assets/card';

function HeadlineCard(){


    return(
        <div className='max-w-[1640] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
            {CardData.map(data=>(
                <Card data={data}/>
            ))}
            
          
        </div>
    )
}

export default HeadlineCard;