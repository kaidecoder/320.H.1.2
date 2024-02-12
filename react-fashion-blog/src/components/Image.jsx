import React from 'react'
import brooklyn from "../assets/blog-image-1.jpg"
import vogue from "../assets/blog-image-2.jpg"

export const Image = () => {
  return (
    <div className="brooklyn">
      <img src={brooklyn} alt="brooklyn street" />
    </div>
  )
}

export const Image2 = () => {
  return (
    <div className="vogue">
      <img src={vogue} alt="vogue" />
    </div>
  )
}