import Link from 'next/link'
import React from 'react'

const NAV_SEARCH_ITEMS = [
    { name: "Search users", href: "/search-users" },
    { name: "Search posts", href: "/search-posts" },
]

function NavSearchItemsList() {
  return (
    <ul className='flex flex-col gap-5'>
        {NAV_SEARCH_ITEMS.map(item => {
            return (
                <li key={item.name}>
                    <Link href={item.href} className='nav-link'>{item.name}</Link>
                </li>
            )
        })}
    </ul>
  )
}

export default NavSearchItemsList