import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { productServices } from '../services/apiServices'
import { Card, Button, Tag, Rate, message } from 'antd'
import { CiHeart, CiShoppingCart } from 'react-icons/ci'
import { MdFavorite, MdRemoveRedEye } from 'react-icons/md'

const ProductCard = ({ product, IMAGE_URL }) => {
  const [quantity, setQuantity] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)

  const addProductToCart = async(product_id, product_price, product_quantity = quantity) => {
    setIsLoading(true)
    try {
      await productServices.addToCart(product_id, product_price, product_quantity)
      message.success('Product added to cart!')
    } catch (error) {
      message.error('Failed to add product to cart')
    } finally {
      setIsLoading(false)
    }
  }

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite)
    message.success(isFavorite ? 'Removed from favorites' : 'Added to favorites')
  }

  return (
    <Card
      className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border-0"
      bodyStyle={{ padding: 0 }}
      cover={
        <div className="relative overflow-hidden bg-gray-50">
          {/* Product Tag */}
          {product?.product_tag && (
            <Tag
              color="gold"
              className="absolute top-3 left-0 z-10 rounded-r-lg border-0 font-medium"
            >
              {product.product_tag}
            </Tag>
          )}

          {/* Favorite Button */}
          <button
            onClick={toggleFavorite}
            className="absolute top-3 right-3 z-10 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100"
          >
            {isFavorite ? (
              <MdFavorite className="text-red-500 text-lg" />
            ) : (
              <CiHeart className="text-gray-600 text-lg" />
            )}
          </button>

          {/* Product Image */}
          <div className="h-64 flex items-center justify-center p-4 group-hover:scale-105 transition-transform duration-300">
            <img
              src={`${IMAGE_URL}/${product?.product_image}`}
              alt={product?.product_name}
              className="max-w-full max-h-full object-contain"
              onError={(e) => {
                e.target.src = '/placeholder-jewelry.jpg'
              }}
            />
          </div>

          {/* Quick Actions Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <div className="flex gap-2">
              <Link
                to={`/view/${product?.product_id}`}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
              >
                <MdRemoveRedEye className="text-gray-700 text-lg" />
              </Link>
              <button
                onClick={() => addProductToCart(product?.product_id, product?.product_price)}
                disabled={isLoading}
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 disabled:opacity-50"
              >
                <CiShoppingCart className="text-white text-lg" />
              </button>
            </div>
          </div>
        </div>
      }
    >
      <div className="p-4">
        {/* Product Info */}
        <div className="mb-3">
          <h3 className="font-semibold text-gray-900 text-lg mb-1 line-clamp-1 group-hover:text-blue-600 transition-colors">
            {product?.product_name}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-2 mb-2">
            {product?.product_description}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-2">
            <Rate disabled defaultValue={4.5} size="small" />
            <span className="text-gray-500 text-xs">(24 reviews)</span>
          </div>
        </div>

        {/* Price and Actions */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-gray-900">
              &#8358;{Intl.NumberFormat().format(product?.product_price)}
            </span>
          </div>

          <div className="flex gap-2">
            <Link to={`/view/${product?.product_id}`}>
              <Button
                type="default"
                size="small"
                className="rounded-lg border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                View
              </Button>
            </Link>
            <Button
              type="primary"
              size="small"
              loading={isLoading}
              onClick={() => addProductToCart(product?.product_id, product?.product_price)}
              className="rounded-lg bg-blue-600 hover:bg-blue-700"
              icon={<CiShoppingCart />}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default ProductCard