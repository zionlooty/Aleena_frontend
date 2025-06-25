import React from 'react'
import { Button } from 'antd'

const AnimatedButton = ({ 
  children, 
  variant = 'primary', 
  size = 'default',
  icon,
  loading = false,
  disabled = false,
  onClick,
  className = '',
  ...props 
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border-0 shadow-lg hover:shadow-xl transform hover:scale-105'
      case 'secondary':
        return 'bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-800 border-0 shadow-md hover:shadow-lg transform hover:scale-105'
      case 'success':
        return 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white border-0 shadow-lg hover:shadow-xl transform hover:scale-105'
      case 'warning':
        return 'bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white border-0 shadow-lg hover:shadow-xl transform hover:scale-105'
      case 'danger':
        return 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-0 shadow-lg hover:shadow-xl transform hover:scale-105'
      case 'outline':
        return 'border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white bg-transparent shadow-md hover:shadow-lg transform hover:scale-105'
      default:
        return 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border-0 shadow-lg hover:shadow-xl transform hover:scale-105'
    }
  }

  return (
    <Button
      size={size}
      loading={loading}
      disabled={disabled}
      onClick={onClick}
      icon={icon}
      className={`
        ${getVariantClasses()}
        transition-all duration-300 ease-in-out
        rounded-lg font-medium
        active:scale-95
        disabled:transform-none disabled:opacity-50
        ${className}
      `}
      {...props}
    >
      {children}
    </Button>
  )
}

export default AnimatedButton
