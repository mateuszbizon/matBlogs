"use client"

import React, { useEffect, useState } from 'react'
import Shadow from '../Shadow'
import { useSearch } from '@/context/SearchContext'
import Input from '../ui/Input'
import useSearchUsers from '@/hooks/api/users/useSearchUsers'
import { useDebounce } from '@/hooks/useDebounce'
import CircleLoading from '../loadings/CircleLoading'
import SearchedUsersList from '../lists/SearchedUsersList'
import SearchedUserCard from '../cards/SearchedUserCard'

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
        <div className={`fixed top-3 left-1/2 -translate-x-1/2 w-full max-w-[600px] z-30 ${searchUsersOpen ? "opacity-100" : "opacity-0 pointer-events-none"} transition-all duration-300`}>
            <div className='bg-light p-3 rounded-lg'>
                <div>
                    <Input type='text' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className='w-full' placeholder='Search users...' />
                </div>
                <div className='min-h-[100px] max-h-[300px] mt-5 overflow-auto'>
                    {isPending && <CircleLoading />}
                    {searchedUsersData?.data && (
                        <SearchedUsersList
                            users={searchedUsersData.data.users}
                            renderItem={(user) => (
                                <SearchedUserCard key={user.id} user={user} />
                            )}
                        />
                    )}
                </div>
            </div>
        </div>

        <Shadow shadowOpen={searchUsersOpen} closeShadow={closeSearchUsers} />
    </div>
  )
}

export default SearchUsers