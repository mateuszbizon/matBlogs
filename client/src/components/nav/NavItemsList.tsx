import { TNavItem } from '@/types'
import React from 'react'
import NavItemCard from './NavItemCard'

const NAV_ITEMS: TNavItem[] = [
    { name: "Create blog", isLink: true, href: "/create-blog" },
]

function NavItemsList() {
  return (
    <ul className='flex flex-col lg:flex-row gap-5 items-center'>
        {NAV_ITEMS.map(item => {
            return (
                <NavItemCard key={item.name} navItem={item} />
            )
        })}
    </ul>
  )
}

export default NavItemsList