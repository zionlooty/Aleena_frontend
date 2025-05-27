import React from 'react'
import { Link } from 'react-router-dom';
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";



function Contactuspage() {
  return (
    <>

      <nav className='pt-[100px] flex justify-between flex-wrap text-white items-center px-10 py-4 bg-black w-full '>

        <div>
          <img src="/assetss/jewerly/me.png" alt="" width={100} />
        </div>
        <div className='flex flex-wrap items-center gap-10'>
          <Link to="/" className='text-white'>Home</Link>
          <Link to="/aboutus" className='text-white'>About Us</Link>
          <button className='text-white px-6 py-2 rounded-3xl border hover:bg-white hover:text-black transition duration-300 border-white'>Contact Us</button>
        </div>

      </nav>

      <section className='flex justify-center items-center p-5 flex-col bg-black flex-wrap min-h[100vh]'>
        <h1 className='text-4xl font-bold text-white mb-2'>Contact Us</h1>
        <h2 className='text-white'>Home / Contact</h2>
        
      </section>

      <section className='gridsec'>
        <aside className=''>
          <form action="">
            <div className='w-100 h-125 border rounded-2xl p-5 bg-gray-700 '>
              <h2 className='text-gray-500 font-semibold'>Contact Us</h2>
              <h1 className='text-3xl mb-2 text-white font-bold'>Get In Touch</h1>
              <div className='flex flex-col gap-2'>
                <label htmlFor="" className='text-gray-500'>Name</label>
                <input type="text" placeholder='Your Name' className='w-90 p-3 border rounded-md bg-gray-500 text-white outline-none' />
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor="" className='text-gray-500'>Email</label>
                <input type="Email" placeholder='Email' className='w-90 p-3 border rounded-md bg-gray-500 text-white outline-none' />
              </div>
              <div className='flex flex-col gap-2 mb-4'>
                <label htmlFor="" className='text-gray-500'>Message</label>
                <textarea id="message" placeholder='Type Your Message'  className='w-full h-32 p-2 border rounded-md bg-gray-500 text-white outline-none'></textarea>
                
              </div>

              <button className='w-[100%] border px-4 py-2 rounded-3xl border-white  hover:bg-white hover:text-black transition duration-300'>Send now</button>
            </div>



          </form>
        </aside>

        <main className=''>
          <div className='max-w-4xl flex flex-wrap mx-auto text-center'>
            <p className='text-gray-400 text-sm mb-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum quae sed quo explicabo alias qui non amet inventore, hic voluptas!</p>

          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols gap-8 text-center  '>
            <div className='flex flex-col flex-wrap items-center'>
              <FaPhone className='text-3xl text-white' />
              <h4 className='text-lg font-semibold text-white mt-2'> Phone Number</h4>
              <Link className='text-gray-400 text-sm'>09067823827</Link>
            </div>
            <div className='flex flex-col items-center'>
              <MdOutlineMailOutline className='text-3xl text-white' />
              <h4 className='text-lg font-semibold text-white mt-2'>Email Address</h4>
              <Link className='text-gray-400 text-sm'>Blocboyzzzz@gmail.com</Link>
            </div>
            <div className='flex flex-col items-center'>
              <FaWhatsapp className='text-4xl text-white' />
              <h4 className='text-lg font-semibold text-white mt-2'>Whatsapp</h4>
              <Link className='text-gray-400 text-sm'>09067823827</Link>
            </div>
            <div className='flex flex-col items-center'>
              <CiLocationOn className='text-4xl text-white' />
              <h4 className='text-lg font-semibold text-white mt-2'>Our Office</h4>
              <p className='text-gray-400 text-sm'>N016 Anuoluwapo Street Fate/tanke</p>
            </div>
          </div>
          <div className='mt-10 mx-auto max-w-3xl rounded'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.0703131176906!2d4.601463673606019!3d8.492544697158381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10364cfd7eb29197%3A0xe6a4affa170d699a!2sECWA%20Church%20Fate-Tanke!5e0!3m2!1sen!2sng!4v1747833742750!5m2!1sen!2sng" width="800" height="350" className='rounded-md' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </main>
      </section>

      <section className='bg-black'>
        <div className='flex flex-col justify-center items-center p-10 w-full border'>
          <h1 className='text-white font-bold mb-7'>We Are Always Ready To Take Your Order</h1>
          <button className='text-white px-6 py-2 rounded-3xl border hover:bg-white hover:text-black transition duration-300 border-white'>Order Now</button>
        </div>

      </section>

      <footer className='bg-gray-800 '>
        <div className='p-10 flex justify-between flex-wrap items-center'>

          <div className='flex flex-col'>
            <div><img src="/assetss/jewerly/me.png" alt="" width={100} /></div>
            <p className='text-gray-500 mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Ipsa fuga illum corporis dolorem quasi doloremque </p>

            <div className='flex gap-2'>
              <div className='w-8 h-8  rounded-full flex items-center shadow-lg bg-white justify-center'>
                <div>
                  <FaFacebook />
                </div>
              </div>
              <div className='w-8 h-8  rounded-full flex items-center  bg-white  shadow-lg justify-center'>
                <div>
                  <TiSocialTwitter />
                </div>
              </div>
              <div className='w-8 h-8 rounded-full flex items-center  bg-white  shadow-lg justify-center'>
                <div>
                  <FaInstagramSquare />
                </div>
              </div>


            </div>
          </div>

          <div className='flex text-gray-400 flex-wrap flex-col gap-2'>
            <h1 className='text-white font-bold'>Our Store</h1>
            <Link>Home</Link>
            <Link>About</Link>
            <Link>Service</Link>
            <Link>Contact</Link>
            
          </div>

          <div className='flex flex-col gap-2'>
            <h1 className='text-white font-bold'>Get In Touch</h1>
            <div className='flex gap-2 items-center'>
              <CiLocationOn className='text-white'/>
              <p className='text-gray-400 text-sm'>N016 Anuoluwapo Street Fate/tanke</p>
            </div>
            <div className='flex gap-2 items-center'>
              <FaPhone className='text-white'/>
              <Link className='text-gray-400 text-sm'>09067823827</Link>
            </div>
            <div className='flex gap-2 items-center'>
              <FaWhatsapp className='text-white'/>
              <Link className='text-gray-400 text-sm'>09067823827</Link>
            </div>
            <div className='flex gap-2 items-center'>
              <MdOutlineMailOutline className='text-white'/>
              <Link className='text-gray-400 text-sm'>Blocboyzzzz@gmail.com</Link>
            </div>
           
          </div>
        </div>
      </footer>

    </>
  )
}

export default Contactuspage;