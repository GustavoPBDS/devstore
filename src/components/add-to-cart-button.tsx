'use client'

import { useCart } from "@/contexts/cartContext"

export interface IAddToCartButton{
    Pid: number
} 

export default function AddToCartButton({Pid}: IAddToCartButton) {
    const {addToCart} = useCart(),
        handleClick = ()=>{
            addToCart(Pid)
        }

    return (
        <button 
            type='button' 
            onClick={handleClick}
            className='mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white cursor-pointer'
        >Adicionar ao Carrinho</button>
    )
}
