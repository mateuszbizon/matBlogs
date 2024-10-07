import { TNavItem } from '@/types'
import React from 'react'
import NavItemCard from './NavItemCard'
import NavSearchItem from './NavSearchItem'

const NAV_ITEMS: TNavItem[] = [
    { name: "Home", isLink: true, href: "/" },
    { name: "Create blog", isLink: true, href: "/create-blog" },
    { name: "Search", isLink: false, content: <NavSearchItem /> },
]

function NavItemsList() {
  return (
    <ul className='flex flex-col lg:flex-row gap-5 lg:items-center'>
        {NAV_ITEMS.map(item => {
            return (
                <NavItemCard key={item.name} navItem={item} />
            )
        })}
    </ul>
  )
}

export default NavItemsList