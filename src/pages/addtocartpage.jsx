import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { productServices } from "../services/apiServices";
import CartCard from "../components/CartCard";
import { useNavigate } from "react-router-dom";
import { TbTrash } from "react-icons/tb";

function Addtocartpage() {
  const [cartItems, setCartItems] = useState([])
  const [empty, setEmpty] = useState("")

const navigate = useNavigate()

  const itemsSubtotal = cartItems.length > 0 ?  cartItems.reduce((sum, item) => {
    return sum + item.product_price * item.product_quantity
  }, 0) : null
 
  // const deliveryFee = 5000
  const grandTotal = itemsSubtotal

  const fetchCart = async () => {
    const res = await productServices.getCart()
    if(typeof res !== "string"){
      setCartItems(res)
    }
    setEmpty(res)
  }
  useEffect(() => {
    fetchCart()
  }, [fetchCart, cartItems])




  return (
    <>

      <div className="gridbody pt-[200px]">
        <aside className="flex flex-col gap-10">



          {cartItems.length > 0 ? cartItems.map((item) => {

            return (

              <CartCard key={item.cart_id} carts={item}  />
            )
          }):
          <div className="flex justify-center items-center flex-col gap-3">
            <TbTrash className="text-7xl text-gray-500"/>
            <h1 className="capitalize text-4xl text-gray-500">{empty}</h1>
          </div>
          
        }



        </aside>
        <main>
          <div className="w-[400px] h-[200px] rounded-md bg-white shadow p-5">

            <div>

            <h1 className="text-2xl font-semibold mb-4">Cart Summary</h1>
            </div>
            <div className="w-80 h-15 shadow">
              <div className="flex justify-between mb-3 p-2 ">
                <h2 className=" text-xl">Subtotal</h2>
                <h3 className="text-xl font-semibold">&#8358;{Intl.NumberFormat().format(itemsSubtotal)}</h3>
              </div>
            </div>
            <button onClick={()=>navigate("/order",{
              state:{
                subtotal: itemsSubtotal,
                // deliveryFee: deliveryFee,
                total: grandTotal
              }
            })} className="w-[100%] bg-amber-500 text-white py-3 px-4 rounded-md text-xl mt-2  hover:bg-amber-600">Checkout</button>
          </div>

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