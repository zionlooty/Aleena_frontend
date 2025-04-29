import React from 'react'
import { Link } from 'react-router-dom'

function Aboutuspage() {
  return (
   <>
    <section className='pt-[100px]  bg-black flex justify-between flex-wrap min-h[100vh]'>
        <div className='flex flex-col p-5 '>
            <small className='text-gray-100'>OUR THEATER</small>
            <h1 className='text-white text-3xl mb-7'><span className='font-extrabold text-white text-4xl'>ABOUT </span>US</h1>
            <div>
            <button className='text-white bg-red-500 px-4 py-2 text-sm cursor-pointer hover:bg-blue-200 transition duration-300 hover:scale-110 hover:shadow-lg'>FIND SHOWTIMES</button>

            </div>
        </div>
        <div></div>
    </section>

    <section className=' py-16  text-center'>
            <h2 className='text-red-500 text-lg mb-6 font-bold'>OUR STORY</h2>
            <div className='max-w-3xl mx-auto space-y-6 text-gray-400 text-sm leading-relaxed'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos alias, magnam repudiandae eius ipsa excepturi corporis culpa laboriosam unde obcaecati porro fuga aliquam, nam est reiciendis dolores neque impedit sapiente cupiditate cum deserunt sit. Repudiandae neque eaque ipsa ex dolore?</p>

                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque quas commodi voluptas! Totam assumenda omnis ipsa magnam modi, ducimus animi, asperiores ullam earum dolor voluptate autem iusto facilis quisquam provident corrupti, maiores exercitationem perspiciatis rerum saepe atque labore? Debitis est cupiditate labore, quas sunt minus veniam maiores cum consequuntur laborum sed dignissimos placeat omnis rerum harum excepturi id nostrum modi quae itaque illum! Animi, cumque aspernatur rerum sit voluptatum nobis repellendus iure dolore fuga eaque optio officia, tempora maiores labore quod! Nam iusto asperiores, illo autem explicabo est cumque vitae corrupti laborum modi consectetur nesciunt rem rerum cupiditate vero fugiat?</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem animi vero reprehenderit blanditiis aliquid ducimus illo. Vero necessitatibus non minus dicta omnis deserunt possimus velit voluptate laudantium delectus dolore eius, molestiae nemo earum eum ut debitis rerum officiis pariatur voluptatibus incidunt. Asperiores amet doloribus ut exercitationem dolorum possimus veniam dolores?</p>
            </div>
    </section>


        <section className='bg-black  py-16  text-center'>
                <h3 className='text-red-500 font-extrabold text-sm mb-2'>HAPPY VIEWERS</h3>
                <h2 className='text-4xl text-white'>why <span className='text-white font-extrabold'>CHOOSE US</span></h2>

                <div className='flex flex-col md:flex-row justify-center gap-8 mt-10'>
                    <div className='border border-gray-500 p-6 w-64 h-50 text-gray-300 rounded-lg transition-transform duration-300 hover:scale-105'>
                       
                        <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem vero ipsa odio? Ullam, saepe magnam!</p>
                    </div>
                    <div className='border border-blue-500 p-6 w-64 h-50 text-gray-300 rounded-lg transition-transform duration-300 hover:scale-105'>
                    
                        <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem vero ipsa odio? Ullam, saepe magnam!</p>
                    </div>
                    <div className='border border-red-500 p-6 w-64 h-50 text-gray-300 rounded-lg transition-transform duration-300 hover:scale-105'>
                       
                        <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem vero ipsa odio? Ullam, saepe magnam!</p>
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

export default Aboutuspage