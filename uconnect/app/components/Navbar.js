"use client"
import Image from 'next/image'
import React from 'react'
import { CgProfile } from "react-icons/cg";



const Navbar = () => {
    return (
        <nav className='flex justify-between pr-3 md:pr-6 my-4 items-center w-full'>
        <div className="logo"><Image src="/logo_Uconnect-removebg-preview (1).png" width={90} height={90} alt=""/></div>
        <ul className='flex gap-9 font-bold font-sans text-3xl'>
            <li>Home</li>
            <li>DWNLD</li>
            <li>Support</li>
        </ul>

         <CgProfile className='text-7xl'/>

    </nav>
  )
}

export default Navbar