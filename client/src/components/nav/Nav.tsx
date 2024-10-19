"use client"

import React, { useState } from 'react'
import ButtonLink from '../ui/ButtonLink'
import Link from 'next/link'
import NavItemsList from './NavItemsList'
import MenuBarsIcon from '../icons/MenuBarsIcon'
import NavMobile from './NavMobile'
import { useUserAuth } from '@/context/UserAuthContext'

function Nav() {
    const { isSignedIn, userData } = useUserAuth()
    const [navMobileOpen, setNavMobileOpen] = useState(false)

  return (
    <nav className='bg-light fixed left-0 top-0 w-full py-2 z-10'>
        <div className='main-container flex'>
            <div className='flex items-center gap-10 text-dark'>
                <Link href={"/"} className='text-dark font-bold text-2xl'>matBlogs</Link>
                <div className='hidden lg:block'>
                    <NavItemsList />
                </div>
            </div>

            <div className='ml-auto flex items-center'>
                <ButtonLink href={isSignedIn ? "/my-profile" : "sign-in"} className='hidden lg:block'>
                    {isSignedIn ? "My profile" : "Sign In"}
                </ButtonLink>
                <button className='lg:hidden p-2 text-dark hover:bg-black/20 rounded-full' onClick={() => setNavMobileOpen(true)}>
                    <div className='size-5'>
                        <MenuBarsIcon />
                    </div>
                </button>
            </div>
        </div>

        <NavMobile navMobileOpen={navMobileOpen} setNavMobileOpen={setNavMobileOpen} />
    </nav>
  )
}

export default Nav