import React from 'react'
import { AiFillInstagram,AiOutlineTwitter } from 'react-icons/ai'
const Footer = () => {
  return (
    <div className='footer-container'>
      <p><small>&copy; Copyright 2022, Techplied Pvt Limited</small></p>

      <p className='icons'>
        <AiFillInstagram/>
        <AiOutlineTwitter/>
      </p>
    </div>
  )
}

export default Footer