import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { IoPersonOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import { SlHome } from "react-icons/sl";
import { FaCircle } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";


function Homepage() {
  return (
    <>



      <section className=" herosection flex justify-between min-h[100vh] pt-[100px]">
        <div className="flex  flex-col justify-between p-5 gap-3 ">
          <h1 className="text-black text-2xl md:text-3xl">Introducing The <br />Lost Day Collection</h1>
          <p className="text-gray-700 text-sm md:text-base mt-2" >Ring, occassion pieces pandora & more collection</p>
          <button className="py-2 px-5 border w-[max-content] cursor-pointer">shop now</button>
        </div>
        <div></div>
      </section>


      <section className=" flex p-10 flex-wrap gap-10 justify-center items-center min-h[100vh]">
        <Fade direction="left" duration={5000}>
          <div className="image flex flex-wrap justify-between w-70 h-50">

            < div className="justify-center items-center p-5">
              <small className="text-gray-600">2021 FASHION</small>
              <h1 className="text-2xl font-semi-bold">Just Lunched <br /> Desk The Hals</h1>
              <button className="border-b-2">SEE MORE</button>
            </div>


          </div>
        </Fade>
        <Fade direction="down" duration={5000}>
          <div className="imagec flex justify-between w-70 h-50">
            < div className="justify-center p-5">
              <small className="text-gray-600">2021 FASHION</small>
              <h1 className="text-2xl font-semi-bold">Necklaces & <br /> Body Jewles</h1>
              <button className="border-b-2">SHOP NOW</button>
            </div>
          </div>
        </Fade>
        <Fade direction="right" duration={5000}>
          <div className="imagecon flex justify-between w-70 h-50">
            < div className="justify-center p-5">
              <small className="text-gray-600">NEW COLLECTION</small>
              <h1 className="text-2xl color- text-white font-semi-bold">Jewelry & <br /> Charm Rings</h1>
              <button className="border-b-2 text-white">SEE MORE</button>
            </div>
          </div>
        </Fade>

      </section>


      <section className="justify-center flex flex-col flex-wrap min-h[100vh] text-center items-center p-5  gap-5">
        <h1 className="text-2xl font-semibold text-center items-center">Popular Categories</h1>
        <div className="flex flex-row flex-wrap justify-center gap-10">

          <div className="w-40 h-40 rounded-full flex transition-transform duration-300 hover:scale-105  flex-col items-center justify-center ">
            <div className="flex w-30  h-30 bg-gray-200 rounded-full justify-center item-center">
              <img src="/assetss/jewerly/i.png" alt="" width={100} />
            </div>
            <h1 className="font-semibold text-sm text-center mt-2" >NECKLACE</h1>
          </div>

          <div className=" h-40 w-40 rounded-full flex flex-col items-center transition-transform duration-300 hover:scale-105 justify-center ">
            <div className=" h-30 w-30  flex justify-center bg-gray-200  rounded-full item-center">
              <img src="/assetss/jewerly/png.png" alt="" width={100} />
            </div>
            <h1 className="font-semibold text-sm text-center mt-2" >RINGS</h1>
          </div>


          <div className="w-40  h-40 rounded-full transition-transform duration-300 hover:scale-105  flex flex-col items-center justify-center">
            <div className="flex justify-center   h-30 w-30 item-center  bg-gray-200 rounded-full">
              <img src="/assetss/jewerly/wb.png" alt="" width={130} />

            </div>
            <h1 className="font-semibold text-sm text-center mt-2">BRACELETS</h1>
          </div>


          <div className="w-40 border-none h-40 rounded-full transition-transform duration-300 hover:scale-105 flex flex-col items-center justify-center ">
            <div className="flex w-30 h-30 rounded-full justify-center bg-gray-200 item-center">
              <img src="/assetss/jewerly/i.png" alt="" width={100} />

            </div>
            <h1 className="font-semibold text-sm text-center mt-2">EARRINGS</h1>
          </div>



          <div className="w-40 border-none h-40 rounded-full transition-transform duration-300 hover:scale-105 flex flex-col items-center justify-center ">
            <div className="flex justify-center w-30 h-30 rounded-full bg-gray-200 item-center">
              <img src="/assetss/jewerly/76.png" alt="" width={100} />

            </div>
            <h1 className="font-semibold text-sm text-center mt-2">CHAIN & DANGLES</h1>
          </div>




          <div className="w-40 border-none h-40 flex-col transition-transform duration-300 hover:scale-105  rounded-full flex items-center justify-center ">
            <div className="flex justify-center w-30 h-30 bg-gray-200 rounded-full item-center">
              <img src="/assetss/jewerly/i.png" alt="" width={100} />

            </div>
            <h1 className="font-semibold text-sm text-center mt-2">EARRINGS</h1>
          </div>



        </div>
      </section>

      <section className="justify-center flex flex-col min-h[100vh] items-center flex-wrap text-center  p-5 gap-10 bg-gray-100">
        <div className="justify-center flex flex-col flex-wrap items-center">
          <h1 className="text-4xl font-semibold mt-2">Trendy Collection</h1>
          <p className="text-gray-500">Collect your loves with our newest arrivals</p>
        </div>
        <div className="flex flex-row justify-center items-center flex-wrap gap-5">
          <div className="w-70 border-none transition-transform duration-300 hover:scale-105 justify-center flex-wrap items-center text-center flex flex-col h-80">

            <div className="w-60 border-none h-60 justify-center items-center p-2 bg-gray-200">
              <h1 className=" w-20  text-white bg-yellow-500">15% off</h1>
              <img src="/assetss/jewerly/c.png" alt="" />
            </div>

            <h2>LOREM</h2>
            <small className="font-semibold">Circle of Light Heart Earrings</small>
            <h3 className="font-semibold">$129.00</h3>

          </div>
          <div className="w-70 border-none transition-transform duration-300 hover:scale-105 justify-center items-center flex flex-col text-center h-80 ">

            <div className="w-60 border-none h-60 justify-center items-center p-2 bg-gray-200">
              <h1 className=" w-10  text-white bg-red-500">Ict</h1>
              <img src="/assetss/jewerly/ii.png" alt="" />
            </div>

            <h2>LOREM</h2>
            <small className="font-semibold">Blue Stripes & Stone Earrings</small>
            <h3 className="font-semibold">$249.00</h3>

          </div>
          <div className="w-70 border-none transition-transform duration-300 hover:scale-105 justify-center items-center text-center flex flex-col  h-80">

            <div className="w-60 border-none h-60 justify-center items-center p-2 bg-gray-200">

              <h1 className=" w-20  text-white bg-yellow-500">20% off</h1>
              <img src="/assetss/jewerly/c.png" alt="" />
            </div>
            <div className="justify-center text-center">
              <h2>LOREM</h2>
              <small className="font-semibold">Birds of Francise Fencho</small>
              <h3 className="font-semibold">$159.00</h3>
            </div>
          </div>
          <div className="w-70 border-none transition-transform duration-300 hover:scale-105 h-80 justify-center items-center text-center flex flex-col ">
            <div className="w-60 border-none h-60 justify-center items-center p-2 bg-gray-200">
              <img src="/assetss/jewerly/ring.png" alt="" />
            </div>

            <h2>LOREM</h2>
            <small className="font-semibold">Diamond Twig Ring</small>
            <h3 className="font-semibold">$39.00 - $59.00</h3>

          </div>

        </div>

        <div className="flex flex-wrap  gap-2 mt-5 text-sm">
          <Link to={""}><FaCircle /></Link>
          <Link to={""}><FaRegCircle /></Link>
        </div>


      </section>

      <section className="flex-wrap  w-[100%] bg-pink-200 p-2 " >
        <div className="flex justify-center flex-wrap items-center gap-4">
          <div>
            <Link to={""}><SlHome /></Link>
          </div>
          <h2 className="font-semibold">Find Jewerly Shops Near You</h2>
          <button className="border-[2px] border-solid px-3 py-1 outline-none cursor-pointer">Find Store</button>
        </div>
      </section>

      <section className="justify-center flex flex-col min-h[100vh] flex-wrap text-center items-center  p-5 gap-10 bg-gray-100">
        <div className="justify-center flex flex-col flex-wrap items-center">
          <h1 className="text-4xl font-semibold mt-2">Autumn Collection</h1>
          <p className="text-gray-500">Collect your loves with our newest arrivals</p>
        </div>
        <div className="flex flex-row justify-center items-center flex-wrap gap-5">
          <div className="w-70 border-none transition-transform duration-300 hover:scale-105 justify-center flex-wrap items-center text-center flex flex-col h-80">

            <div className="w-60 border-none  h-60 justify-center items-center p-2 bg-gray-200">
              <h1 className=" w-20  text-white bg-yellow-500">15% off</h1>
              <img src="/assetss/jewerly/c.png" alt="" />
            </div>

            <h2>LOREM</h2>
            <small className="font-semibold">Circle of Light Heart Earrings</small>
            <h3 className="font-semibold">$129.00</h3>

          </div>
          <div className="w-70 border-none transition-transform duration-300 hover:scale-105 justify-center flex-wrap items-center flex flex-col text-center h-80 ">

            <div className="w-60 border-none h-60 justify-center items-center p-2 bg-gray-200">
              <h1 className=" w-10  text-white bg-red-500">Ict</h1>
              <img src="/assetss/jewerly/ii.png" alt="" />
            </div>

            <h2>LOREM</h2>
            <small className="font-semibold">Blue Stripes & Stone Earrings</small>
            <h3 className="font-semibold">$249.00</h3>

          </div>
          <div className="w-70 border-none transition-transform duration-300 hover:scale-105 justify-center flex-wrap items-center text-center flex flex-col  h-80">

            <div className="w-60 border-none h-60 justify-center items-center p-2 bg-gray-200">

              <h1 className=" w-20  text-white bg-yellow-500">20% off</h1>
              <img src="/assetss/jewerly/c.png" alt="" />
            </div>
            <div className="justify-center text-center">
              <h2>LOREM</h2>
              <small className="font-semibold">Birds of Francise Fencho</small>
              <h3 className="font-semibold">$159.00</h3>
            </div>
          </div>
          <div className="w-70 border-none h-80 justify-center transition-transform duration-300 hover:scale-105 flex-wrap items-center text-center flex flex-col ">
            <div className="w-60 border-none h-60 justify-center items-center p-2 bg-gray-200">
              <img src="/assetss/jewerly/ring.png" alt="" />
            </div>

            <h2>LOREM</h2>
            <small className="font-semibold">Diamond Twig Ring</small>
            <h3 className="font-semibold">$39.00 - $59.00</h3>

          </div>


        </div>

        <div className="flex flex-wrap gap-2 mt-5 text-sm">
          <Link to={""}><FaCircle /></Link>
          <Link to={""}><FaRegCircle /></Link>
        </div>

      </section>

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


export default Homepage;