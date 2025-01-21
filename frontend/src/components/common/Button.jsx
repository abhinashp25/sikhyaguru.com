import React from 'react'

const Button = ({title}) => {
  return (
    <div  className="px-8 py-3 m-2 text-lg font-semibold rounded bg-gradient-to-br from-blue-700  via-blue-900 to-blue-700 text-gray-100">
      {title}
    </div>
  )
}

export default Button
