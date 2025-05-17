import { Link } from "react-router-dom";
import ProductCard from "../components/productCard";
import { useEffect, useState } from "react";
import { productServices } from "../services/apiServices";
import CartCard from "../components/CartCard";

function Addtocartpage() {
  const [cartItems, setCartItems] = useState([])

  const fetchCart = async () => {
    const res = await productServices.getCart()
    setCartItems(res)
  }
  useEffect(() => {
    fetchCart()
  }, [])




  return (
    <>

      <div className="flex gap-2 p-6 pt-[100px]">
        <h1>Home</h1>
        <h1>Add to Cart</h1>
      </div>

      <div className="gridbody">


        <aside className="flex flex-col gap-10">



          {cartItems.map((item) => {

            return (

              <CartCard key={item.cart_id} carts={item} />
            )
          }
          )}



        </aside>
        <main>
          <h1 className="text-2xl font-bold mb-2">Order Summary</h1>
          <div className="w-100 h-15 shadow-md">
            <div className="flex justify-between p-5 ">
              <h2 className="font-semibold">items Subtotal</h2>
              <h3>$807.00</h3>
            </div>
          </div>
          <div className="w-100 h-15 shadow-md">
            <div className="flex justify-between p-5 ">
              <h2 className="font-semibold">Tax</h2>
              <h3>$20.82</h3>
            </div>
          </div>
          <div className="w-100 h-15 shadow-md">
            <div className="flex justify-between p-5 ">
              <h2 className="font-semibold">total</h2>
              <h3>$827.50</h3>
            </div>
          </div>
          <button className="w-[100%] bg-black text-white p-2 mt-2  hover:bg-blue-500">continue</button>
        </main>
      </div>

      <footer className="flex-wrap bg-gray-100 min-h[100vh] mt-20">
        <div className="flex justify-between flex-wrap items-center p-5">
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

export default Addtocartpage;