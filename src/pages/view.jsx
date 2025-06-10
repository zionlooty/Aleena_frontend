import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import ProductCard from "../components/productCard"
import { IMAGE_URL } from "./productspage"
import axios from "axios"
import { IoIosHeart, IoLogoFacebook, IoMdHeart } from "react-icons/io"
import { FaEquals, FaPinterestP, FaTwitter } from "react-icons/fa"
import { AiOutlineGooglePlus } from "react-icons/ai"
import { FaShareFromSquare } from "react-icons/fa6"
import { MdOutlineDoorbell } from "react-icons/md"
import { CiStar } from "react-icons/ci"
import { productServices } from "../services/apiServices"
export const API_URL = import.meta.env.VITE_API


const ViewPage = () => {
  const { id } = useParams()
  const [product, setProduct] = useState([])
  const [similar, setSimilar] = useState([])
  const navigate = useNavigate()

  const getSingleProduct = async () => {
    try {
      const res = await productServices.getProduct(id)
      setProduct(res.message)
    } catch (error) {
      console.log(error)
      navigate("/products")
    }
  }

  useEffect(() => {
    getSingleProduct()
  }, [])

  useEffect(() => {
    product.product_category && (async function () {
      const { data } = await axios.get(`${API_URL}/product_category/${product.product_category}`)
      setSimilar(data.message)
    })()
  }, [product])

  const addProductToCart = async(product_id, product_price, product_quantity)=>{
        productServices.addToCart(product_id, product_price, product_quantity)
    }
  return (
    <div className="pt-[100px]">



      <section className="bodysection">
        <aside className="">
          <img src={`${IMAGE_URL}/${product.product_image}`} alt="" />
        </aside>
        <main className="flex flex-col min-h-[100vh]flex-wrap">
          <h1 className="text-2xl font-semibold mt-4">{product.product_name}</h1>
          <div className="flex items-center text-orange-400 mt-1">
            <Link to={'/'}><CiStar /></Link>
            <Link to={'/'}><CiStar /></Link>
            <Link to={'/'}><CiStar /></Link>
            <Link to={'/'}><CiStar /></Link>
            <Link to={'/'}><CiStar /></Link>
            <h2 className="text-black">NO REVIEWS</h2>
          </div>
          <div className="flex gap-2 mt-1">
            <h1 className="text-2xl text-orange-300">&#8358;{Intl.NumberFormat().format(product.product_price)}</h1>
            <h1 className="text-2xl text-gray-300 line-through">RS. 26000</h1>
          </div>
          <p className="text-justify mt-1">{product.product_description}</p>


          <div className="mt-8 flex gap-2">
            <div>
              <button className='bg-amber-600 py-4 px-4 text-white text-center cursor-pointer' onClick={()=>{
          addProductToCart(product.product_id, product.product_price, product.product_quantity)
        }}>BUY NOW</button>
            </div>
            <div className="w-[70px]  h-[55px] border border-black border-solid text-center items-center flex justify-center  p-3">
              <Link to={'/'}><IoIosHeart className="text-red-500"/></Link>
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
          <div className="w-40 border h-10 border-gray-300 flex justify-center items-center">
            <h1 className="text-gray-500 uppercase text-2xl">{product.product_tag}</h1>
          </div>
          <div className="w-40 h-10 border border-gray-300 flex justify-center items-center">
            <h1 className="text-gray-500 ">REVIEW</h1>
          </div>
        </div>
        <div className="w-[100%] h-13 border flex flex-wrap border-gray-300 mt-2 p-3">
          <p className=" text-gray-600">{product.product_description}</p>
        </div>
      </section>


      <section className="flex flex-col min-h-[100vh]  flex-wrap">
        <h1 className="font-semibold text-lg p-6">YOU MAY ALSO LIKE</h1>

        <div className="flex justify-center flex-wrap p-5 items-center">
          <div className="flex  flex-wrap gap-10">
            {
              similar.length > 0 && similar.map(item => {
                return <div className="w-[250px] h-[320px] rounded-md  bg-gray-200 p-2">
                  <h1 className="font-bold">{item.product_name}</h1>
                  <div className="flex justify-center items-center ">
                    <img src={IMAGE_URL + "/" + item.product_image} alt="" width={160} />
                  </div>
                  <h1 className="font-bold">&#8358;{Intl.NumberFormat().format(item.product_price)}</h1>
                  <h1 className="text-gray-500">{item.product_description}</h1>
                  {/* <h1 className="font-bold">{item.product_category}</h1> */}
                  {/* <h1 className="font-bold">{item.product_tag}</h1> */}
                  {/* <h1 className="font-bold">{item.product_quantity}</h1> */}
                </div>
              })
            }

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



    </div>
  )
}

export default ViewPage