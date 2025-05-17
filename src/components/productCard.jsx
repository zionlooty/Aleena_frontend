import React from 'react'
import { Link } from 'react-router-dom'
import { productServices } from '../services/apiServices'

const ProductCard = ({ product, IMAGE_URL }) => {

  const addProductToCart = async(product_id, product_price, product_quantity)=>{
      productServices.addToCart(product_id, product_price, product_quantity)
  }

  return (

<> 

    <div className='w-[250px] relative bg-gray-100 flex flex-col gap-2 overflow-hidden rounded-md shadow-xl'>
      <div className='w-[100%] h-[200px] flex justify-center items-center mb-3 overflow-hidden'>
        <img src={`${IMAGE_URL}/${product?.product_image}`} alt="" className='md:w-[200px] w-[150px]' />
      </div>
      <div>
        <div className='flex flex-col gap-2 p-2'>
        <h1 className='font-bold text-lg line-clamp-1'>{product?.product_name}</h1>
        <h1 className=' text-xl'>&#8358;{Intl.NumberFormat().format(product?.product_price)}</h1>
        {/* <h1 className=' text-xl'>{Intl.NumberFormat().format(product.product_quantity)}</h1> */}
        <h1 className=' text-xl line-clamp-1'>{product?.product_description}</h1>
        <div className='absolute top-[10px] left-0 bg-amber-500 text-white py-1 px-4 rounded-tr-md rounded-br-md'>
          <h1 className=' text-xl'>{product?.product_tag}</h1>
        </div>
        </div>
      </div>
      <div className='flex'>
      <Link to={`/view/${product?.product_id}`} className='bg-amber-500 flex-1 py-2 text-white text-center'>View</Link>
        <button className='bg-amber-600 flex-1 py-2 text-white text-center cursor-pointer'onClick={()=>{
          addProductToCart(product?.product_id, product?.product_price, product?.product_quantity)
        }}>Add to cart</button>
      </div>
    </div>
</>



  )
}

export default ProductCard