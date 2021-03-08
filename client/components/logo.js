import React, { useEffect } from 'react'
import '../styles/logo.scss'

const debounce = (func, delay) => {
  let time;
  
  return function (...args) {
    if (time) {
      clearTimeout(time)
    }

    time = setTimeout(() => {
      func(...args)
      time = null
    }, delay)
  }
}

const Logo = () => {
  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      const container = document.querySelector('.bundt')
      const mouseX = container.getBoundingClientRect().left
      const mouseY = container.getBoundingClientRect().top
      const x = e.pageX * 2 /mouseX
      const y = e.pageY * 2/mouseY

      const lEar = document.querySelector('.l-ear')
      const rEar = document.querySelector('.r-ear')
      lEar.style.left = (20 - x) + '%'
      lEar.style.top = rEar.style.top = -y + '%'
      rEar.style.right = (20 + x) + '%'

      const glasses = document.querySelector('.glasses')
      const lEye = document.querySelector('.l-eye')
      const rEye = document.querySelector('.r-eye')

      glasses.style.left = x + '%'
      glasses.style.top = y + '%'  
      lEye.style.left = (30 + x) + '%'
      rEye.style.right = (30 - x) + '%'
      lEye.style.top = rEye.style.top = (65 + y) + '%'    
    })
  })

  return (
    <div className = 'hello bundt'>
      <div className = 'l-ear' />
      <div className = 'r-ear' />
      <div className = 'head' /> 
      <div className = 'glasses'>
        <div className = 'l-frame' />
        <div className = 'r-frame' />
        <div className = 'bridge' />
      </div>      
      <div className = 'l-eye' />
      <div className = 'r-eye' />
    </div>
  )
}

export default Logo