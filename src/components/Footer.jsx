import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Input, Button } from 'antd'
import { 
  MdEmail, 
  MdPhone, 
  MdLocationOn,
  MdFacebook,
  MdTwitter,
  MdInstagram,
  MdLinkedIn
} from 'react-icons/md'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <Row gutter={[32, 32]}>
          {/* Company Info */}
          <Col xs={24} sm={12} lg={6}>
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gradient-gold mb-4">
                ALEENA JEWELRY
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Crafting timeless elegance with exquisite jewelry pieces that celebrate life's precious moments.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <MdFacebook className="text-lg" />
                </a>
                <a href="#" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                  <MdTwitter className="text-lg" />
                </a>
                <a href="#" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                  <MdInstagram className="text-lg" />
                </a>
                <a href="#" className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors">
                  <MdLinkedIn className="text-lg" />
                </a>
              </div>
            </div>
          </Col>

          {/* Quick Links */}
          <Col xs={24} sm={12} lg={6}>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-white transition-colors">Products</Link></li>
              <li><Link to="/aboutus" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contactus" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/cart" className="text-gray-300 hover:text-white transition-colors">Shopping Cart</Link></li>
            </ul>
          </Col>

          {/* Customer Service */}
          <Col xs={24} sm={12} lg={6}>
            <h4 className="text-lg font-semibold mb-6">Customer Service</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Care Instructions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </Col>

          {/* Contact & Newsletter */}
          <Col xs={24} sm={12} lg={6}>
            <h4 className="text-lg font-semibold mb-6">Stay Connected</h4>
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3">
                <MdEmail className="text-yellow-500" />
                <span className="text-gray-300">info@aleenajewelry.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MdPhone className="text-yellow-500" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MdLocationOn className="text-yellow-500" />
                <span className="text-gray-300">123 Jewelry St, City, State</span>
              </div>
            </div>
            
            <div>
              <h5 className="font-medium mb-3">Newsletter</h5>
              <p className="text-gray-400 text-sm mb-3">Subscribe for exclusive offers and updates</p>
              <div className="flex">
                <Input 
                  placeholder="Your email" 
                  className="rounded-l-lg border-gray-600 bg-gray-800 text-white"
                />
                <Button 
                  type="primary" 
                  className="rounded-r-lg bg-yellow-600 hover:bg-yellow-700 border-yellow-600"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-6">
          <Row justify="space-between" align="middle">
            <Col xs={24} md={12}>
              <p className="text-gray-400 text-sm">
                © {currentYear} Aleena Jewelry. All rights reserved.
              </p>
            </Col>
            <Col xs={24} md={12} className="text-right">
              <div className="flex justify-end space-x-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookies</a>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </footer>
  )
}

export default Footer
