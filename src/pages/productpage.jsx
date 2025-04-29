import { Link } from "react-router-dom"
import { CiStar } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { MdOutlineDoorbell } from "react-icons/md";
import { IoIosHeart } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { FaShareFromSquare } from "react-icons/fa6";
import { IoMdHeart } from "react-icons/io";
import { FaEquals } from "react-icons/fa";

function Productpage() {
    return (
        <>
            <nav className="flex justify-center items-center gap-5">
                <Link to={'/'} className="font-semibold text-black">HOME</Link>
                <Link className="font-semibold text-black">PRODUCTS</Link>
                <Link className="font-semibold text-black">DIAMOND RINGS</Link>
            </nav>

            <section className="bodysection">
                <aside className="flex min-h-[100vh] flex-wrap">

                    <div className="w-74 h-70 border-none justify-center flex items-center bg-gray-200">
                        <div className="flex justify-center items-center">
                        <img src="/assetss/jewerly/dia.png" alt="" width={150} />

                        </div>


                    </div>
                    <div className=" flex gap-3 mt-1">
                        <div className="w-23 h-23 border-none flex justify-center item-center  bg-gray-200">
                            <img src="/assetss/jewerly/dia.png" alt="" />


                        </div>
                        <div className="w-23 h-23 border-none flex justify-center item-center bg-gray-200">
                            <img src="/assetss/jewerly/dia.png" alt="" />


                        </div>
                        <div className="w-23 h-23 border-none flex justify-center item-center bg-gray-200">
                            <img src="/assetss/jewerly/dia.png" alt="" />


                        </div>

                    </div>



                </aside>
                <main className="flex flex-col min-h-[100vh]flex-wrap">
                    <h1 className="text-2xl font-semibold mt-4">Diamond Rings</h1>
                    <div className="flex items-center text-orange-400 mt-1">
                        <Link to={'/'}><CiStar /></Link>
                        <Link to={'/'}><CiStar /></Link>
                        <Link to={'/'}><CiStar /></Link>
                        <Link to={'/'}><CiStar /></Link>
                        <Link to={'/'}><CiStar /></Link>
                        <h2 className="text-black">NO REVIEWS</h2>
                    </div>
                    <div className="flex gap-2 mt-1">
                        <h1 className="text-2xl text-orange-300">RS. 25000</h1>
                        <h1 className="text-2xl text-gray-300 line-through">RS. 26000</h1>
                    </div>
                    <p className="text-justify mt-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni placeat excepturi nesciunt quasi. Ex ea vitae voluptatum quisquam magni fugit iste. Ducimus atque iste vero impedit maxime pariatur repudiandae architecto ut laudantium esse, corporis!</p>

                     
                    <div className="mt-8 flex gap-2">
                        <div className="flex items-center bg-black text-white justify-center gap-2 w-50 py-3 px-6 border">
                            <Link to={'/'}><MdOutlineDoorbell /></Link>
                            <button>BUY NOW</button>
                        </div>
                        <div className="w-15  border-[1.5px] border-black border-solid text-center items-center flex justify-center  p-3">
                            <Link to={'/'}><IoIosHeart /></Link>
                        </div>
                    </div>

                    <div className="mt-2 flex gap-2">
                        <div className="w-20 border-gray-300 border flex items-center p-1">
                            <Link to={'/'}><IoLogoFacebook className="text-blue-500" /></Link>
                            <button>Share</button>
                        </div>
                        <div className="w-20 border-gray-300 border flex items-center p-1">
                            <Link to={'/'}><FaTwitter className="text-blue-500" /></Link>
                            <button>Tweet</button>
                        </div>
                        <div className="w-20 border-gray-300 border flex items-center p-1">
                            <Link to={'/'}><FaPinterestP className="text-red-600" /></Link>
                            <button>pin it</button>
                        </div>
                        <div className="w-20 border-gray-300 border flex items-center p-1">
                            <Link to={'/'}><FaShareFromSquare className="text-blue-500" /></Link>
                            <button>Fancy</button>
                        </div>
                        <div className="w-20 border-gray-300 border flex items-center p-1">
                            <Link to={'/'}><AiOutlineGooglePlus className="text-red-500" /></Link>
                            <button className="cursor-pointer">+1</button>
                        </div>
                    </div>


                </main>
            </section>

            <section className="p-9  bg-amber-50 flex flex-col min-h[100vh] flex-wrap">
                <div className="flex">
                    <div className="w-40 border h-10 flex justify-center items-center border-gray-300 text-center ">
                        <h1 className="text-gray-500">DESCRIPTION</h1>
                    </div>
                    <div className="w-40 border h-10 border-gray-300 flex justify-center items-center bg-yellow-400">
                        <h1 className="text-black">PRODUCT TAGS</h1>
                    </div>
                    <div className="w-40 h-10 border border-gray-300 flex justify-center items-center">
                        <h1 className="text-gray-500 ">REVIEW</h1>
                    </div>
                    <div className="w-[80%] border h-10 border-gray-300">

                    </div>

                </div>
                <div className="w-[100%] h-13 border flex flex-wrap border-gray-300 mt-2 p-3">
                    <p className=" text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, id optio. Delectus est eos nostrum minus assumenda eum debitis laudantium.</p>
                </div>
            </section>


            <section className="flex flex-col min-h-[100vh] flex-wrap">
                <h1 className="font-semibold text-lg p-6">YOU MAY ALSO LIKE</h1>

                <div className="flex justify-center flex-wrap items-center">
                    <div className="flex gap-10">
                        <div className="w-60 h-55 border-none bg-gray-300 p-2">
                            <h1>Gold jewerly</h1>
                            <div className="flex flex-col items-end p-2">
                                <div className="w-9 h-7 flex justify-center border-gray-200 items-center border">
                                    <Link to={'/'}><IoMdHeart /></Link>
                                </div>
                                <div className="w-9 h-7 flex justify-center border-gray-200 items-center border">
                                    <Link to={'/'}><FaEquals /></Link>
                                </div>
                                <div className="w-9 h-7 flex justify-center border-gray-200 items-center border">
                                    <Link to={'/'}><IoMdHeart /></Link>
                                </div>

                            </div>

                            <div className="flex justify-center items-center -mt-20">
                                <img src="/assetss/jewerly/gold.png" alt="" width={130} />
                            </div>

                            <div className="flex justify-between">
                                <div className="flex gap-1 items-center">
                                    <h1 className=" text-black">Rs. 25000</h1>
                                    <h6 className="text-sm line-through text-gray-500">Rs. 40000</h6>
                                </div>
                                <div className="w-17 border-none ">
                                    <h2 className="bg-yellow-500 text-center text-gray-300">33.33</h2>
                                </div>
                            </div>
                        </div>
                        <div className="w-60 h-55 border-none bg-gray-300 p-2">
                            <h1>Uncut Diamond</h1>
                            <div className="flex flex-col items-end p-2">
                                <div className="w-9 h-7 flex justify-center border-gray-200 items-center border">
                                    <Link to={'/'}><IoMdHeart /></Link>
                                </div>
                                <div className="w-9 h-7 flex justify-center border-gray-200 items-center border">
                                    <Link to={'/'}><FaEquals /></Link>
                                </div>
                                <div className="w-9 h-7 flex justify-center border-gray-200 items-center border">
                                    <Link to={'/'}><IoMdHeart /></Link>
                                </div>

                            </div>
                            <div className="flex justify-center items-center -mt-20">
                                <img src="/assetss/jewerly/image__.png" alt="" width={130} />
                            </div>
                            <div className="flex justify-between">
                                <div className="flex gap-1 items-center -mt-2">
                                    <h1 className=" text-black">Rs. 25000</h1>
                                    <h6 className="text-sm line-through text-gray-500">Rs. 40000</h6>
                                </div>

                            </div>
                        </div>
                        <div className="w-60 h-55 border-none bg-gray-300 p-2">
                            <h1>Diamond Rings</h1>
                            <div className="flex flex-col items-end p-2">
                                <div className="w-9 h-7 flex justify-center border-gray-200 items-center border">
                                    <Link to={'/'}><IoMdHeart /></Link>
                                </div>
                                <div className="w-9 h-7 flex justify-center border-gray-200 items-center border">
                                    <Link to={'/'}><FaEquals /></Link>
                                </div>
                                <div className="w-9 h-7 flex justify-center border-gray-200 items-center border">
                                    <Link to={'/'}><IoMdHeart /></Link>
                                </div>

                            </div>
                            <div className="flex justify-center items-center -mt-20">

                                <img src="/assetss/jewerly/dia.png" alt="" width={130} />
                            </div>
                            <div className="flex justify-between">
                                <div className="flex gap-1 items-center">
                                    <h1 className=" text-black">Rs. 25000</h1>
                                    <h6 className="text-sm line-through text-gray-500">Rs. 40000</h6>
                                </div>

                            </div>
                        </div>
                        <div className="w-60 h-55 border-none bg-gray-300 p-2">
                            <h1>pearl jewerlery</h1>
                            <div className="flex flex-col items-end p-2">
                                <div className="w-9 h-7 flex justify-center border-gray-200 items-center border">
                                    <Link to={'/'}><IoMdHeart /></Link>
                                </div>
                                <div className="w-9 h-7 flex justify-center border-gray-200 items-center border">
                                    <Link to={'/'}><FaEquals /></Link>
                                </div>
                                <div className="w-9 h-7 flex justify-center border-gray-200 items-center border">
                                    <Link to={'/'}><IoMdHeart /></Link>
                                </div>

                            </div>
                            <div className="flex justify-center items-center -mt-20">

                                <img src="/assetss/jewerly/gold.png" alt="" width={130} />
                            </div>
                            <div className="flex justify-between">
                                <div className="flex gap-1 items-center">
                                    <h1 className=" text-black">Rs. 25000</h1>
                                    <h6 className="text-sm line-through text-gray-500">Rs. 40000</h6>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <footer>
                <div className="flex justify-between flex-wrap items-center bg-gray-100 p-5">
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


export default Productpage;