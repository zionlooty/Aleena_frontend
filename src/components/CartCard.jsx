import React, { useState } from 'react'
import { IMAGE_URL } from '../pages/productspage'
import { productServices } from '../services/apiServices'
import { MdDeleteOutline } from "react-icons/md";
import { toast } from 'sonner';

const CartCard = ({ carts }) => {

    const [quantity, setQuantity]= useState(carts.product_quantity)

    const updateQuantity=async (newQuantity)=>{
        try {
            setQuantity(newQuantity + 1)
            console.log(carts.product_quantity)
            if(carts.product_quantity > newQuantity){
                await productServices.updateCartQuantity(carts.cart_id, newQuantity)
            }
        } catch (error) {
            toast.error("failed to update quantity")
            console.error(error)
        }
    }
    // const increaseQuantity=()=>{
    //         updateQuantity(quantity)
    // }
    // const decreaseQuantity=()=>{
    //      updateQuantity(quantity - 1)

    // }
    const increaseQuantity = async () => {
        const newQuantity = quantity + 1;
        try {
            await productServices.updateCartQuantity(carts.cart_id, newQuantity);
            setQuantity(newQuantity);
        } catch (error) {
            toast.error("Failed to increase quantity");
            console.error(error);
        }
    };
    
    const decreaseQuantity = async () => {
        if (quantity <= 1) return;
        const newQuantity = quantity - 1;
        try {
            await productServices.updateCartQuantity(carts.cart_id, newQuantity);
            setQuantity(newQuantity);
        } catch (error) {
            toast.error("Failed to decrease quantity");
            console.error(error);
        }
    };
    
    const handleRemove = async (cart_id) =>{
        await productServices.deleteCart(cart_id)
        productServices.getCart()
      }
   
      
      
    return (
        <>
        <div className='flex items-center gap-5 shadow rounded-md p-5'>
            <img src={`${IMAGE_URL}/${carts?.product_image}`} alt="" className="w-40 h-50 rounded-md" />
            <div className="">
                <h1 className="text-lg font-semibold">{carts?.product_name}</h1>
                {/* <p className="text-gray-600">Color:Brown</p> */}
                {/* <p className="text-gray-600">{carts.carts_price}</p> */}
                <p className="">{carts.product_description}</p>
                <h1 className=' text-xl mb-3'>&#8358;{Intl.NumberFormat().format(carts.product_price)}</h1>
                <div className='mb-3'>
                    <button className='px-2 text-2xl text-white bg-gray-400 rounded' onClick={decreaseQuantity}>-</button>
                    <input type="number" value={quantity} readOnly className='w-12 text-center rounded border-none'/>
                    <button className='px-2 text-2xl text-white bg-orange-400 rounded'onClick={increaseQuantity} >+</button>
                </div>
                <div className="flex gap-2 items-center">
                <MdDeleteOutline  className='text-orange-400' onClick={()=>handleRemove(carts.cart_id)}/>
                    <button onClick={()=>handleRemove(carts.cart_id)}
                    
                    className=" px-2 text-orange-400 cursor-pointer">Remove</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default CartCard