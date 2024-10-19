"use client"

import React from 'react'
import MenuBarsIcon from '../icons/MenuBarsIcon'
import NavItemsList from './NavItemsList';
import Shadow from '../Shadow';
import ButtonLink from '../ui/ButtonLink';
import { useUserAuth } from '@/context/UserAuthContext';

type NavMobileProps = {
    navMobileOpen: boolean;
    setNavMobileOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function NavMobile({ navMobileOpen, setNavMobileOpen }: NavMobileProps) {
    const { isSignedIn, userData } = useUserAuth()

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
                
                <div className='mt-5 flex justify-center'>
                    <ButtonLink href={isSignedIn ? "/my-profile" : "sign-in"}>
                        {isSignedIn ? "My profile" : "Sign In"}
                    </ButtonLink>
                </div>
            </div>
        </div>

        <div className='lg:hidden'>
            <Shadow shadowOpen={navMobileOpen} closeShadow={() => setNavMobileOpen(false)} />
        </div>
    </>
  )
}

export default NavMobile