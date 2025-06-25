import React, { useEffect, useState } from 'react'
import { CiHeart, CiSearch, CiShoppingCart, CiMenuFries } from 'react-icons/ci'
import { IoPersonOutline, IoClose } from 'react-icons/io5'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import { productServices, userServices } from '../services/apiServices'
import { Badge, Drawer, Button } from 'antd'

function Navbar() {
  const {token, getUserAuth} = useAuth()
  const [cartTotal, setCartTotal] = useState([])
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()
  const location = useLocation()

  const logout = ()=>{
    userServices.logout()
    getUserAuth()
    navigate("/")
  }

  const fetchCart = async () => {
    const res = await productServices.getCart()
    if(typeof res !== "string"){
      setCartTotal(res.length)
      console.log(res)
    }else{
      setCartTotal(0)
    }
  }

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`)
    }
  }

  const isActiveRoute = (path) => {
    return location.pathname === path
  }

  useEffect(()=>{
    getUserAuth()
    fetchCart()
    userServices.getUser()
  },[token, getUserAuth, userServices.getUser, fetchCart])

  return (
    <div className='fixed top-0 left-0 w-full z-50 bg-white shadow-lg'>
       {/* Top Header */}
       <div className="flex justify-between items-center py-4 px-6 border-b border-gray-100">
              {/* Search Bar - Desktop */}
              <div className="hidden md:flex flex-1 max-w-md">
                <form onSubmit={handleSearch} className="flex items-center w-full">
                  <div className="relative flex-1">
                    <input
                      type="search"
                      placeholder="Search jewelry..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                    <button
                      type="submit"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <CiSearch size={18} />
                    </button>
                  </div>
                </form>
              </div>

              {/* Logo */}
              <div className="flex-1 text-center">
                <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  ALEENA JEWELRY
                </Link>
              </div>

              {/* Right Icons */}
              <div className="flex items-center gap-4 flex-1 justify-end">
                {/* Mobile Menu Button */}
                <button
                  className="md:hidden p-2 rounded-lg hover:bg-gray-100"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <CiMenuFries size={24} />
                </button>

                {/* Desktop Icons */}
                <div className="hidden md:flex items-center gap-4">
                  {token ? (
                    <Link to={'/profile'} className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                      <IoPersonOutline size={24} className="text-gray-600" />
                    </Link>
                  ) : null}

                  <Link to={'/'} className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                    <CiHeart size={24} className="text-gray-600" />
                  </Link>

                  <Link to={'/cart'} className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                    <Badge count={cartTotal} size="small">
                      <CiShoppingCart size={24} className="text-gray-600" />
                    </Badge>
                  </Link>
                </div>
              </div>
            </div>
    {/* Bottom Navigation */}
    <nav className="hidden md:flex justify-between items-center px-6 py-3 bg-gray-50 border-b border-gray-100">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-blue-600 cursor-pointer">
          <span>BROWSE CATEGORIES</span>
          <RiArrowDropDownLine className="text-lg" />
        </div>
      </div>

      <div className="flex items-center gap-8">
        <Link
          to={'/'}
          className={`text-sm font-medium transition-colors ${
            isActiveRoute('/') ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : 'text-gray-700 hover:text-blue-600'
          }`}
        >
          HOME
        </Link>
        <Link
          to={'/products'}
          className={`text-sm font-medium transition-colors ${
            isActiveRoute('/products') ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : 'text-gray-700 hover:text-blue-600'
          }`}
        >
          PRODUCTS
        </Link>
        <Link
          to={'/aboutus'}
          className={`text-sm font-medium transition-colors ${
            isActiveRoute('/aboutus') ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : 'text-gray-700 hover:text-blue-600'
          }`}
        >
          ABOUT US
        </Link>
        <Link
          to={'/contactus'}
          className={`text-sm font-medium transition-colors ${
            isActiveRoute('/contactus') ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : 'text-gray-700 hover:text-blue-600'
          }`}
        >
          CONTACT US
        </Link>
      </div>

      <div className="flex items-center gap-3">
        {token ? (
          <Button
            type="primary"
            danger
            size="small"
            onClick={logout}
            className="rounded-lg"
          >
            Logout
          </Button>
        ) : (
          <div className="flex items-center gap-3">
            <Link
              to={'/login'}
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              LOG IN
            </Link>
            <Link
              to={'/signup'}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              SIGN UP
            </Link>
          </div>
        )}
      </div>
    </nav>

    {/* Mobile Drawer */}
    <Drawer
      title="Menu"
      placement="right"
      onClose={() => setMobileMenuOpen(false)}
      open={mobileMenuOpen}
      width={280}
    >
      <div className="flex flex-col gap-4">
        {/* Mobile Search */}
        <form onSubmit={handleSearch} className="mb-4">
          <div className="relative">
            <input
              type="search"
              placeholder="Search jewelry..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            >
              <CiSearch size={18} />
            </button>
          </div>
        </form>

        {/* Mobile Navigation Links */}
        <Link to={'/'} className="py-3 text-gray-700 border-b border-gray-100" onClick={() => setMobileMenuOpen(false)}>
          HOME
        </Link>
        <Link to={'/products'} className="py-3 text-gray-700 border-b border-gray-100" onClick={() => setMobileMenuOpen(false)}>
          PRODUCTS
        </Link>
        <Link to={'/aboutus'} className="py-3 text-gray-700 border-b border-gray-100" onClick={() => setMobileMenuOpen(false)}>
          ABOUT US
        </Link>
        <Link to={'/contactus'} className="py-3 text-gray-700 border-b border-gray-100" onClick={() => setMobileMenuOpen(false)}>
          CONTACT US
        </Link>

        {/* Mobile User Actions */}
        <div className="mt-6 pt-6 border-t border-gray-100">
          {token ? (
            <div className="space-y-3">
              <Link to={'/profile'} className="flex items-center gap-3 py-2 text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                <IoPersonOutline size={20} />
                Profile
              </Link>
              <Link to={'/cart'} className="flex items-center gap-3 py-2 text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                <Badge count={cartTotal} size="small">
                  <CiShoppingCart size={20} />
                </Badge>
                <span className="ml-2">Cart</span>
              </Link>
              <button
                onClick={() => {logout(); setMobileMenuOpen(false)}}
                className="w-full bg-red-500 text-white py-2 rounded-lg text-sm font-medium"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              <Link
                to={'/login'}
                className="block w-full text-center py-2 border border-blue-600 text-blue-600 rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                LOG IN
              </Link>
              <Link
                to={'/signup'}
                className="block w-full text-center py-2 bg-blue-600 text-white rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                SIGN UP
              </Link>
            </div>
          )}
        </div>
      </div>
    </Drawer>

      
    </div>
  )
}

export default Navbar