import React from 'react'

export default function CalculateButton(props) {
  const { evaluate } = props
  return (
    <button onClick={evaluate} className='flex items-center justify-center gap-4 py-4 bg-blue-400 duration-200 hover:bg-blue-900 #002D62 group rounded'>
      <h4>How rich will I be?</h4>
      <i className="fa-solid fa-calculator group-hover:animate-spin"></i>
    </button>
  )
}
