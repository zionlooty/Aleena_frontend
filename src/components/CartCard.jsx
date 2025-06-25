import React, { useState } from 'react'
import { IMAGE_URL } from '../pages/productspage'
import { productServices } from '../services/apiServices'
import { MdDeleteOutline } from "react-icons/md";
import { toast } from 'sonner';

const CartCard = ({ carts }) => {

    const [quantity, setQuantity] = useState(carts.product_quantity)
    const availableStock = carts.available_stock || 999 // Default to high number if not available
    const isAtMaxStock = quantity >= availableStock


    const increaseQuantity = async () => {
        // Check stock limit before making API call
        if (isAtMaxStock) {
            toast.warning(`Maximum stock reached. Only ${availableStock} items available.`);
            return;
        }

        const newQuantity = quantity + 1;
        try {
            console.log("Increasing quantity for cart:", carts.cart_id, "to:", newQuantity);
            const response = await productServices.updateCartQuantity(carts.cart_id, newQuantity);
            console.log("Update response:", response);
            setQuantity(newQuantity);
            toast.success(`Quantity updated to ${newQuantity}`);
        } catch (error) {
            console.error("Failed to increase quantity:", error);
            const errorMessage = error.response?.data?.message || "Failed to increase quantity";

            // Check if it's a stock limitation error
            if (error.response?.status === 400 && error.response?.data?.available_stock) {
                const availableStock = error.response.data.available_stock;
                toast.error(`Only ${availableStock} items available in stock`);
            } else {
                toast.error(errorMessage);
            }
        }
    };
    
    const decreaseQuantity = async () => {
        if (quantity <= 1) {
            toast.warning("Quantity cannot be less than 1");
            return;
        }
        const newQuantity = quantity - 1;
        try {
            console.log("Decreasing quantity for cart:", carts.cart_id, "to:", newQuantity);
            const response = await productServices.updateCartQuantity(carts.cart_id, newQuantity);
            console.log("Update response:", response);
            setQuantity(newQuantity);
            toast.success("Quantity updated successfully");
        } catch (error) {
            console.error("Failed to decrease quantity:", error);
            toast.error(error.response?.data?.message || "Failed to decrease quantity");
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
                <h1 className=' text-xl mb-2'>&#8358;{Intl.NumberFormat().format(carts.product_price)}</h1>
                <p className="text-sm text-gray-600 mb-3">
                    {availableStock > 0 ? (
                        availableStock < 10 ? (
                            <span className="text-orange-600">Only {availableStock} left in stock</span>
                        ) : (
                            <span className="text-green-600">{availableStock} available</span>
                        )
                    ) : (
                        <span className="text-red-600">Out of stock</span>
                    )}
                </p>
                <div className='mb-3'>
                    <button
                        className='px-2 text-2xl text-white bg-gray-400 rounded hover:bg-gray-500 disabled:opacity-50'
                        onClick={decreaseQuantity}
                        disabled={quantity <= 1}
                    >
                        -
                    </button>
                    <input type="number" value={quantity} readOnly className='w-12 text-center rounded border-none mx-1'/>
                    <button
                        className={`px-2 text-2xl text-white rounded ${
                            isAtMaxStock
                                ? 'bg-gray-400 cursor-not-allowed opacity-50'
                                : 'bg-orange-400 hover:bg-orange-500'
                        }`}
                        onClick={increaseQuantity}
                        disabled={isAtMaxStock || availableStock <= 0}
                        title={isAtMaxStock ? `Maximum stock (${availableStock}) reached` : 'Increase quantity'}
                    >
                        +
                    </button>
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