'use client'

import { createContext, ReactNode, useContext, useState } from "react"

interface ICartItem{
    Pid: number
    quantity: number
}

interface ICartContext {
    items: ICartItem[]
    addToCart: (Pid: number) => void
}

const CartContext = createContext({} as ICartContext)

export function CartProvider({children} : {children : ReactNode}){
    const [items, setItems] = useState<ICartItem[]>([])

    function addToCart (Pid:number) {
        setItems(value => {
            const ProductInCart = value.some(product=>product.Pid === Pid)
            
            if (ProductInCart){
                return value.map(product=>{
                    if(product.Pid === Pid) return {...product, quantity: product.quantity + 1}
                    return product
                })
            }else{
                return [...value, {Pid, quantity:1}]
            }

        })
    }

    return (
        <CartContext.Provider value={{items, addToCart}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)