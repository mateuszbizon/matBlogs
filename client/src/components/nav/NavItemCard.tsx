import { TNavItem } from '@/types'
import Link from 'next/link'
import React from 'react'

type NavItemCardProps = {
    navItem: TNavItem
}

function NavItemCard({ navItem }: NavItemCardProps) {
  return (
    <li>
        {navItem.isLink ? (
          <Link href={navItem.href} className='nav-link'>
            {navItem.name}
          </Link>
        ) : (
          <>
            {navItem.content}
          </>
        )}
    </li>
  )
}

export default NavItemCard