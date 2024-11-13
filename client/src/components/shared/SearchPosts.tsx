"use client"

import { useSearch } from '@/context/SearchContext'
import useSearchPosts from '@/hooks/api/posts/useSearchPosts'
import { useDebounce } from '@/hooks/useDebounce'
import React, { useEffect, useState } from 'react'
import Input from '../ui/Input'
import Shadow from '../Shadow'
import SearchedPostsList from '../lists/SearchedPostsList'
import SearchedPostCard from '../cards/SearchedPostCard'
import SearchContainer from '../search/SearchContainer'
import SearchInputBox from '../search/SearchInputBox'
import SearchContent from '../search/SearchContent'

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
        <SearchContainer searchOpen={searchPostsOpen}>
            <SearchInputBox>
                <Input type='text' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className='w-full' placeholder='Search posts...' />
            </SearchInputBox>
            
            <SearchContent isPending={isPending}>
                {searchedPostsData?.data && (
                    <SearchedPostsList
                        posts={searchedPostsData.data.posts}
                        renderItem={(post) => (
                            <SearchedPostCard key={post.id} post={post} />
                        )}
                    />
                )}
            </SearchContent>
        </SearchContainer>

        <Shadow shadowOpen={searchPostsOpen} closeShadow={closeSearchPosts} />
    </div>
  )
}

export default SearchPosts