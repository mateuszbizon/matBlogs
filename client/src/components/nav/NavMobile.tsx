"use client"

import React, { useState } from 'react'
import MenuBarsIcon from '../icons/MenuBarsIcon'
import NavItemsList from './NavItemsList';
import Shadow from '../Shadow';

type NavMobileProps = {
    navMobileOpen: boolean;
    setNavMobileOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function NavMobile({ navMobileOpen, setNavMobileOpen }: NavMobileProps) {
  return (
    <>
        <div className={`fixed top-0 right-0 ${navMobileOpen ? "translate-x-0" : "translate-x-full"} w-[200px] h-screen bg-white py-2 z-30 transition-all duration-300 lg:hidden`}>
            <div className='main-container'>
                <div className='flex flex-row-reverse mb-5'>
                    <button className='p-2 text-dark' onClick={() => setNavMobileOpen(false)}>
                        <div className='size-5'>
                            <MenuBarsIcon />
                        </div>
                    </button>
                </div>

                <NavItemsList />
            </div>
        </div>

        <div className='lg:hidden'>
            <Shadow shadowOpen={navMobileOpen} closeShadow={() => setNavMobileOpen(false)} />
        </div>
    </>
  )
}

export default NavMobile