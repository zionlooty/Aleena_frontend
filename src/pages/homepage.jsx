import React from "react";
import { Link } from "react-router-dom";
import { SlHome } from "react-icons/sl";
import { FaCircle, FaRegCircle, FaArrowRight, FaStar } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
import { Button, Card, Row, Col, Carousel, Rate } from "antd";
import { MdLocalShipping, MdSecurity, MdSupport, MdVerified } from "react-icons/md";


function Homepage() {
  const featuredProducts = [
    { id: 1, name: "Diamond Engagement Ring", price: "$2,499", image: "/assetss/jewerly/c.png", rating: 5 },
    { id: 2, name: "Gold Necklace", price: "$899", image: "/assetss/jewerly/ii.png", rating: 4.8 },
    { id: 3, name: "Silver Bracelet", price: "$299", image: "/assetss/jewerly/ring.png", rating: 4.9 },
    { id: 4, name: "Pearl Earrings", price: "$199", image: "/assetss/jewerly/c.png", rating: 4.7 }
  ];

  const testimonials = [
    { name: "Sarah Johnson", text: "Beautiful jewelry with excellent quality. Highly recommended!", rating: 5 },
    { name: "Michael Chen", text: "Amazing customer service and fast delivery. Love my purchase!", rating: 5 },
    { name: "Emma Davis", text: "The craftsmanship is outstanding. Will definitely shop again.", rating: 5 }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="herosection relative flex items-center min-h-[70vh] pt-[120px] overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <Fade direction="up" duration={1000}>
              <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight mb-6">
                Discover Timeless
                <span className="block bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  Elegance
                </span>
              </h1>
              <p className="text-gray-200 text-lg md:text-xl mb-8 leading-relaxed">
                Exquisite jewelry crafted with precision and passion. From engagement rings to statement pieces, find your perfect match.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/products">
                  <Button
                    type="primary"
                    size="large"
                    className="bg-gradient-to-r from-yellow-500 to-yellow-600 border-0 rounded-lg px-8 py-6 h-auto text-lg font-semibold"
                    icon={<FaArrowRight />}
                  >
                    Shop Collection
                  </Button>
                </Link>
                <Button
                  type="default"
                  size="large"
                  className="border-white text-white hover:bg-white hover:text-gray-900 rounded-lg px-8 py-6 h-auto text-lg font-semibold"
                >
                  Learn More
                </Button>
              </div>
            </Fade>
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <Row gutter={[32, 32]} className="items-center">
            <Col xs={24} lg={8}>
              <Fade direction="left" duration={1000}>
                <Link to="/products?category=ring">
                  <Card
                    className="image h-80 rounded-2xl border-0 shadow-lg overflow-hidden group cursor-pointer"
                    bodyStyle={{ padding: 0 }}
                  >
                    <div className="relative h-full flex items-end">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="relative z-10 p-6 text-white">
                        <span className="text-yellow-400 text-sm font-medium">2024 COLLECTION</span>
                        <h2 className="text-2xl font-bold mt-2 mb-4">Luxury Rings & <br />Engagement Sets</h2>
                        <Button type="link" className="text-white p-0 h-auto font-semibold hover:text-yellow-400">
                          EXPLORE NOW →
                        </Button>
                      </div>
                    </div>
                  </Card>
                </Link>
              </Fade>
            </Col>

            <Col xs={24} lg={8}>
              <Fade direction="up" duration={1000} delay={200}>
                <Link to="/products?category=necklace">
                  <Card
                    className="imagec h-80 rounded-2xl border-0 shadow-lg overflow-hidden group cursor-pointer"
                    bodyStyle={{ padding: 0 }}
                  >
                    <div className="relative h-full flex items-end">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="relative z-10 p-6 text-white">
                        <span className="text-yellow-400 text-sm font-medium">TRENDING NOW</span>
                        <h2 className="text-2xl font-bold mt-2 mb-4">Necklaces & <br />Statement Pieces</h2>
                        <Button type="link" className="text-white p-0 h-auto font-semibold hover:text-yellow-400">
                          SHOP NOW →
                        </Button>
                      </div>
                    </div>
                  </Card>
                </Link>
              </Fade>
            </Col>

            <Col xs={24} lg={8}>
              <Fade direction="right" duration={1000} delay={400}>
                <Link to="/products?category=bracelet">
                  <Card
                    className="imagecon h-80 rounded-2xl border-0 shadow-lg overflow-hidden group cursor-pointer"
                    bodyStyle={{ padding: 0 }}
                  >
                    <div className="relative h-full flex items-end">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="relative z-10 p-6 text-white">
                        <span className="text-yellow-400 text-sm font-medium">NEW ARRIVALS</span>
                        <h2 className="text-2xl font-bold mt-2 mb-4">Bracelets & <br />Charm Collections</h2>
                        <Button type="link" className="text-white p-0 h-auto font-semibold hover:text-yellow-400">
                          DISCOVER →
                        </Button>
                      </div>
                    </div>
                  </Card>
                </Link>
              </Fade>
            </Col>
          </Row>
        </div>
      </section>


      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Popular Categories</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover our curated collection of fine jewelry, each piece crafted with attention to detail and timeless elegance.
            </p>
          </div>

          <Row gutter={[24, 24]} justify="center">
            {[
              {
                name: "NECKLACES",
                image: "/assetss/jewerly/ii.png",
                description: "Elegant necklaces for every occasion",
                category: "necklaces"
              },
              {
                name: "RINGS",
                image: "/assetss/jewerly/ring.png",
                description: "Beautiful rings and engagement sets",
                category: "Rings"
              },
              {
                name: "BRACELETS",
                image: "/assetss/jewerly/wb.png",
                description: "Stylish bracelets and bangles",
                category: "Bracelets"
              },
              {
                name: "EARRINGS",
                image: "/assetss/jewerly/c.png",
                description: "Stunning earrings for any style",
                category: "Earrings"
              },
              {
                name: "CHAINS",
                image: "/assetss/jewerly/76.png",
                description: "Premium chains and pendants",
                category: "Chains"
              },
              {
                name: "WATCHES",
                image: "/assetss/jewerly/gold.png",
                description: "Luxury watches and timepieces",
                category: "Watches"
              }
            ].map((category, index) => (
              <Col xs={12} sm={8} md={6} lg={4} key={index}>
                <Fade direction="up" duration={800} delay={index * 100}>
                  <Link
                    to={`/products?category=${encodeURIComponent(category.category)}`}
                    className="group cursor-pointer block"
                  >
                    <div className="relative">
                      <div className="w-32 h-32 mx-auto bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl overflow-hidden">
                        <img
                          src={category.image}
                          alt={category.name}
                          className="w-20 h-20 object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="text-center mt-4">
                      <h3 className="font-semibold text-gray-800 group-hover:text-yellow-600 transition-colors duration-300 mb-1">
                        {category.name}
                      </h3>
                      <p className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                        {category.description}
                      </p>
                    </div>
                  </Link>
                </Fade>
              </Col>
            ))}
          </Row>
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