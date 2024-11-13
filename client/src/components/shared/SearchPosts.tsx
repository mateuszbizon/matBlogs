"use client"

import { useSearch } from '@/context/SearchContext'
import useSearchPosts from '@/hooks/api/posts/useSearchPosts'
import { useDebounce } from '@/hooks/useDebounce'
import React, { useEffect, useState } from 'react'
import Input from '../ui/Input'
import CircleLoading from '../loadings/CircleLoading'
import Shadow from '../Shadow'

function SearchPosts() {
    const { handleSearchPosts, searchedPostsData, isPending } = useSearchPosts()
    const { searchPostsOpen, closeSearchPosts } = useSearch()
    const [searchValue, setSearchValue] = useState("")
    const debouncedSearch = useDebounce(searchValue)

    useEffect(() => {
        if (searchValue !== "") {
            handleSearchPosts(debouncedSearch)
        }
    }, [debouncedSearch])

  return (
    <div>
        <div className={`fixed top-3 left-1/2 -translate-x-1/2 w-full max-w-[600px] z-30 ${searchPostsOpen ? "opacity-100" : "opacity-0 pointer-events-none"} transition-all duration-300`}>
            <div className='bg-light p-3 rounded-lg'>
                <div>
                    <Input type='text' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className='w-full' placeholder='Search posts...' />
                </div>
                <div className='min-h-[100px] max-h-[300px] mt-5 overflow-auto'>
                    {isPending && <CircleLoading />}
                </div>
            </div>
        </div>

        <Shadow shadowOpen={searchPostsOpen} closeShadow={closeSearchPosts} />
    </div>
  )
}

export default SearchPosts