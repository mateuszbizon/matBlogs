import React from 'react'
import ButtonLink from '../ui/ButtonLink'
import Link from 'next/link'
import NavItemsList from './NavItemsList'
import MenuBarsIcon from '../icons/MenuBarsIcon'

function Nav() {
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
                <ButtonLink href='/' className='hidden lg:block'>
                    My profile
                </ButtonLink>
                <button className='lg:hidden p-2 text-dark hover:bg-black/20 rounded-full'>
                    <div className='size-5'>
                        <MenuBarsIcon />
                    </div>
                </button>
            </div>
        </div>
    </nav>
  )
}

export default Nav