"use client"

import React from 'react'
import Link from 'next/link'
import NavItemsList from './NavItemsList'
import MenuBarsIcon from '../icons/MenuBarsIcon'
import NavMobile from './NavMobile'
import ProfileBtn from './ProfileBtn'
import { useNav } from '@/context/NavContext'
import SignOutBtn from './SignOutBtn'

function Nav() {
    const { openNavMobile, closeNavMobile } = useNav()

  return (
    <nav className='bg-light fixed left-0 top-0 w-full py-2 z-10'>
        <div className='main-container flex'>
            <div className='flex items-center gap-10 text-dark'>
                <Link href={"/"} className='text-dark font-bold text-2xl'>matBlogs</Link>
                <div className='hidden lg:block'>
                    <NavItemsList />
                </div>
            </div>

            <div className='ml-auto '>
                <div className='hidden lg:flex lg:items-center lg:space-x-3'>
                    <ProfileBtn />
                    <SignOutBtn />
                </div>
                <button className='lg:hidden p-2 text-dark hover:bg-black/20 rounded-full' onClick={openNavMobile}>
                    <div className='size-5'>
                        <MenuBarsIcon />
                    </div>
                </button>
            </div>
        </div>

        <NavMobile />
    </nav>
  )
}

export default Nav