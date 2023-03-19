import React from 'react'

const ALLOWED_VARIANT = ['happy', 'sad']

function Banner({ variant, children }) {
  if (!variant || ALLOWED_VARIANT.indexOf(variant) === -1) {
    throw new Error(
      `Please provide a correct variant. The allowed variants are ${ALLOWED_VARIANT}.`
    )
  }

  return <div className={`banner ${variant}`}>{children}</div>
}

export default Banner
