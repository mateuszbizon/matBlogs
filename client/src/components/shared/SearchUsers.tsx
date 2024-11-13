"use client"

import React, { useEffect, useState } from 'react'
import Shadow from '../Shadow'
import { useSearch } from '@/context/SearchContext'
import Input from '../ui/Input'
import useSearchUsers from '@/hooks/api/users/useSearchUsers'
import { useDebounce } from '@/hooks/useDebounce'
import SearchedUsersList from '../lists/SearchedUsersList'
import SearchedUserCard from '../cards/SearchedUserCard'
import SearchContainer from '../search/SearchContainer'
import SearchInputBox from '../search/SearchInputBox'
import SearchContent from '../search/SearchContent'

function SearchUsers() {
    const { handleSearchUsers, searchedUsersData, isPending } = useSearchUsers()
    const { searchUsersOpen, closeSearchUsers } = useSearch()
    const [searchValue, setSearchValue] = useState("")
    const debouncedSearch = useDebounce(searchValue)

    useEffect(() => {
        if (searchValue !== "") {
            handleSearchUsers(debouncedSearch)
        }
    }, [debouncedSearch])

  return (
    <div>
        <SearchContainer searchOpen={searchUsersOpen}>
            <SearchInputBox>
                <Input type='text' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className='w-full' placeholder='Search users...' />
            </SearchInputBox>

            <SearchContent isPending={isPending}>
                {searchedUsersData?.data && (
                    <SearchedUsersList
                        users={searchedUsersData.data.users}
                        renderItem={(user) => (
                            <SearchedUserCard key={user.id} user={user} />
                        )}
                    />
                )}
            </SearchContent>
        </SearchContainer>

        <Shadow shadowOpen={searchUsersOpen} closeShadow={closeSearchUsers} />
    </div>
  )
}

export default SearchUsers