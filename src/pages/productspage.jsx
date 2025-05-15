
import { Link } from "react-router-dom"
import { FaStar } from "react-icons/fa";
import { IoIosStarHalf } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { useEffect, useState } from "react";
import ProductCard from "../components/productCard";
import { toast } from "sonner";
import axios from "axios";
import {productServices} from "../services/apiServices"

export const IMAGE_URL = import.meta.env.VITE_FILE_URL


function Productspage() {
    const[product, setProduct]=useState([])

        const fetchAllProduct = async () => {
            const res = await productServices.getAll()
            productServices.getCart()
           setProduct(res.message)
        }

        useEffect(() => {
            fetchAllProduct()
        }, [])
    return (
        <>

            <section className=" gridsection flex pt-[100px] justify-center items-center p-10">
                <aside className="flex flex-col  flex-wrap">
                    <div className="flex gap-6 flex-wrap">
                    {product.map((item)=>{
                        return (
                            <ProductCard key={item.product_id} id={item.product_id} product={item} IMAGE_URL={import.meta.env.VITE_FILE_URL}/>
                        )
                    }
                    )}
                    </div>
                </aside>

                <main className="flex flex-col flex-wrap">
                    <h1 className="font-semibold text-2xl">Search</h1>
                    <div>
                        <div className="flex justify-between items-center w-[250px] text-sm border-b border-gray-300 bg-white">
                            <form action=""> <input type="search" placeholder="Search" className="border-none outline-none p-2 w-[200px]" /></form>
                            <Link to={'/'}><CiSearch /></Link>
                        </div>
                        <h1 className="font-semibold text-2xl mt-2">Category</h1>
                        <form action="">
                        <ul>
                            <li className="flex gap-2 items-center"><input type="checkbox" />Bracelet</li>
                            <li className="flex gap-2 items-center"><input type="checkbox" />Diamond</li>
                            <li className="flex gap-2 items-center"><input type="checkbox" />Rings</li>
                            <li className="flex gap-2 items-center"><input type="checkbox" />Necklace</li>
                            <li className="flex gap-2 items-center"><input type="checkbox" />Necklace</li>
                            <li className="flex gap-2 items-center"><input type="checkbox" />Necklace</li>
                            <li className="flex gap-2 items-center"><input type="checkbox" />Necklace</li>

                        </ul>
                        <div>
                            <h1 className="text-2xl font-semibold mt-2">price</h1>
                            <input type="range" min="10" max="500" className="w-[250px] mb-4" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-semibold mt-2">Material</h1>
                            <ul>
                                <div className="flex gap-2 items-center">
                                    <li className="flex gap-2 items-center"><input type="checkbox" />Diamond</li>
                                    <li className="flex gap-2 items-center"><input type="checkbox" />Bracelet</li>
                                </div>
                                <div className="flex gap-2 items-center">
                                   
                                    <li className="flex gap-2 items-center"><input type="checkbox" />Diamond</li>
                                    <li className="flex gap-2 items-center"><input type="checkbox" />Bracelet</li>
                                </div>
                            </ul>
                        </div>
                        </form>
                        <div>
                            <h1 className="text-2xl font-semibold mt-2">Tags</h1>
                            <div className="flex gap-1">
                                <div className="w-22 mt-2 border justify-center items-center text-center p-2 rounded-[20px]">
                                    <h1>savings</h1>
                                </div>
                                <div className="w-22 mt-2 border justify-center items-center text-center p-2 rounded-[20px]">
                                    <h1>savings</h1>
                                </div>
                                <div className="w-22 mt-2 border justify-center items-center text-center p-2 rounded-[20px]">
                                    <h1>savings</h1>
                                </div>



                            </div>
                            <div className="flex gap-1">


                                <div className="w-22 mt-2 border justify-center items-center text-center p-2 rounded-[20px]">
                                    <h1>savings</h1>
                                </div>
                                <div className="w-22 mt-2 border justify-center items-center text-center p-2 rounded-[20px]">
                                    <h1>savings</h1>
                                </div>
                                <div className="w-22 mt-2 border justify-center items-center text-center p-2 rounded-[20px]">
                                    <h1>savings</h1>
                                </div>
                            </div>
                            <div className="w-22 mt-2 border justify-center items-center text-center p-2 rounded-[20px]">
                                <h1>savings</h1>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className="mt-2 text-2xl font-semibold">Newsletter</h1>
                        <div className=" w-[250px] text-sm border-b border-gray-300 bg-white">
                            <form action=""> <input type="email" placeholder="Email Address" className="border-none outline-none w-[200px]" /></form>
                            
                        </div> 
                    </div>
                </main>
            </section>



            <footer className="flex-wrap min-h[100vh] bg-gray-100  ">
        <div className="flex justify-between flex-wrap  items-center p-5">
          <div className="flex  flex-wrap flex-col">

            <h1 className="text-lg font-semibold">ABOUT US</h1>
            <Link>About us</Link>
            <Link>Shopping Guide</Link>
            <Link>Delivery Information</Link>
            <Link>Privacy Policy</Link>
            <Link>Sitmap</Link>

          </div>

          <div className="flex flex-wrap flex-col">

            <h1 className="text-lg font-semibold">MY ACCOUNT</h1>

            <Link>My Account</Link>
            <Link>Login</Link>
            <Link>My Cart</Link>
            <Link>WishList</Link>
            <Link>Checkout</Link>
          </div>
          <div className="flex flex-wrap flex-col">

            <h1 className="text-lg font-semibold">CUSTOMER SERVICES</h1>

            <Link>Newsroom</Link>
            <Link>Sell your</Link>
            <Link>Affilate Program</Link>
            <Link>Careers</Link>
            <Link>Invetor Relations</Link>
          </div>
          <div className="flex flex-col flex-wrap max-w-sm p-6 border-[2px] border-black border-solid text-center">

            <h1 className="text-lg font-semibold ">NEWSLETTER</h1>

            <h2 className="text-gray-600 text-sm mb-4">Enter your email to get Newsletter <br /> from lorem</h2>
            <form action="email">
              <input type="text" placeholder="Enter your mail" className="border-none outline-none p-2 w-65 bg-gray-200" />
            </form>
            <Link><button className="border bg-black text-white px-3 py-1 mt-3">SUBSCRIBE</button></Link>

          </div>
        </div>
      </footer>
        </>
    )

}



export default Productspage;