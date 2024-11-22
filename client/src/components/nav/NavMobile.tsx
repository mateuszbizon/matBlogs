"use client"

import React from 'react'
import MenuBarsIcon from '../icons/MenuBarsIcon'
import NavItemsList from './NavItemsList';
import Shadow from '../Shadow';
import ProfileBtn from './ProfileBtn';
import { useNav } from '@/context/NavContext';
import SignOutBtn from './SignOutBtn';

function NavMobile() {
    const { closeNavMobile, navMobileOpen } = useNav()

  return (
    <>
        <div className={`fixed top-0 right-0 ${navMobileOpen ? "translate-x-0" : "translate-x-full"} w-[200px] h-screen bg-white py-2 z-30 transition-all duration-300 lg:hidden`}>
            <div className='main-container'>
                <div className='flex flex-row-reverse mb-5'>
                    <button className='p-2 text-dark' onClick={closeNavMobile}>
                        <div className='size-5'>
                            <MenuBarsIcon />
                        </div>
                    </button>
                </div>

                <NavItemsList />
                
                <div className='mt-5 flex flex-col items-center space-y-3'>
                    <ProfileBtn />
                    <SignOutBtn />
                </div>
            </div>
        </div>

        <div className='lg:hidden'>
            <Shadow shadowOpen={navMobileOpen} closeShadow={closeNavMobile} />
        </div>
    </>
  )
}

export default NavMobile