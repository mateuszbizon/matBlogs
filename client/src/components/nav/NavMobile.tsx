"use client"

import React, { useState } from 'react'
import MenuBarsIcon from '../icons/MenuBarsIcon'

type NavMobileProps = {
    navMobileOpen: boolean;
    setNavMobileOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function NavMobile({ navMobileOpen, setNavMobileOpen }: NavMobileProps) {
  return (
    <div className={`fixed top-0 right-0 ${navMobileOpen ? "translate-x-0" : "translate-x-full"} w-[250px] h-screen bg-white py-2 z-30 transition-all duration-300 lg:hidden`}>
        <div className='main-container'>
            <div className='flex flex-row-reverse'>
                <button className='p-2 text-dark' onClick={() => setNavMobileOpen(false)}>
                    <div className='size-5'>
                        <MenuBarsIcon />
                    </div>
                </button>
            </div>
        </div>
    </div>
  )
}

export default NavMobile