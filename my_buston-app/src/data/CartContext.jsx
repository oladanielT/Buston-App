import React, { createContext, useState} from 'react';



// });

export const CartContext = createContext(
    {
        items:[],
        addToCart:()=>{},
        removeFromCart:()=>{},
        deleteFromCart:()=>{},
        getProductQuantity:()=>{},
        getTotalCost:()=>{}
    }
);



export function CartProvider({children}){ 

    const [cartProduct, setCartProduct] = useState([]);
    function getProductQuantity(id){
        const quantity = cartProduct.find(product=>product.id === id)?.quantity;
        if(quantity===undefined){
            return 0;
        };
        return quantity;
    }

    function addToCart(id){
        const quantity = getProductQuantity(id);
        if(quantity===0){
            setCartProduct([
                ...cartProduct,
                {id:id, quantity:1}
            ])
        }else{
            setCartProduct(
                cartProduct.map(product=>product.id === id?{...product, quantity:product.quantity+1}:(product))
            )
        }

    }
    function deleteFromCart(id){
        setCartProduct(
            cartProduct=>cartProduct.filter(product=>product.id !== id)
        )
    }

    function removeFromCart(id){
        const quantity = getProductQuantity(id);
        if(quantity===1){
            deleteFromCart(id);
        }else{
            setCartProduct(
                cartProduct.map(product=>(product.id===id)?{...product, quantity:product.quantity-1}:(product))
            )
        }

    }

    const contextValue = {
        items:cartProduct,
        addToCart,
        removeFromCart,
        deleteFromCart,
        getProductQuantity,
        // getTotalCost
    };
    return (
    <CartContext.Provider value={contextValue}>
        {children}
    </CartContext.Provider>
    )

  
}


