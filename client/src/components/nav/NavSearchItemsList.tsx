import { useNav } from '@/context/NavContext'
import { useSearch } from '@/context/SearchContext';
import React from 'react'

type NavSearchItemsListProps = {
    closeNavSearchItem?: () => void;
}

function NavSearchItemsList({ closeNavSearchItem }: NavSearchItemsListProps) {
    const { closeNavMobile } = useNav()
    const { openSearchUsers, openSearchPosts } = useSearch()

    function showSearchUsers() {
        closeNavMobile()
        openSearchUsers()

        if (closeNavSearchItem) {
            closeNavSearchItem()
        }
    }

    function showSearchPosts() {
        closeNavMobile()
        openSearchPosts()

        if (closeNavSearchItem) {
            closeNavSearchItem()
        }
    }

  return (
    <div className='flex flex-col gap-5'>
        <button onClick={showSearchUsers} className='nav-link'>Search users</button>
        <button onClick={showSearchPosts} className='nav-link'>Search posts</button>
    </div>
  )
}

export default NavSearchItemsList