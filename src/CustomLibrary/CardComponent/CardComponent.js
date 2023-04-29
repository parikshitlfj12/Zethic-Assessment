import React from 'react'
import "./CardComponent.css"

export default function CardComponent({image, BottomComponent}) {
  return (
    <div className='CardClass'>
        <img src={image} alt=""  height="327.93px"/>
        {BottomComponent}
    </div>
  )
}
