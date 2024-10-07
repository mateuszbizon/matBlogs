"use client"

import React, { useState } from 'react'
import NavSearchItemsList from './NavSearchItemsList'

function NavSearchItem() {
    const [searchOpen, setSearchOpen] = useState(false)

  return (
    <div className='relative'>
        <button className='nav-link' onClick={() => setSearchOpen(prev => !prev)}>Search</button>

        <div className={`absolute -left-1/2 top-[120%] bg-white p-3 rounded-lg z-30 whitespace-nowrap hidden lg:block ${searchOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} transition-all duration-300`}>
            <NavSearchItemsList />
        </div>

        <div className={`pl-2 mt-2 lg:hidden overflow-hidden ${searchOpen ? "max-h-[500px]" : "max-h-0"} transition-all duration-500`}>
            <NavSearchItemsList />
        </div>
    </div>
  )
}

export default NavSearchItem