import React from 'react'

export default function SliderInput(props) {
  const { title, value, setValue } = props
  return (
    <div className='flex flex-col gap-1'>
      <h3> {title} ({value})</h3>
      <input type='range' min='1' max='60' value={value} onChange={(e) => {
        setValue(e.target.value)
      }}/>
    </div>
  )
}
