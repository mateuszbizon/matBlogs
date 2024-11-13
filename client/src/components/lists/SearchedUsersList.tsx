import { TSearchedUser } from '@/types/responses/user.response'
import React from 'react'

type SearchedUsersListProps = {
    users: TSearchedUser[];
    renderItem: (user: TSearchedUser) => React.ReactNode;
}

function SearchedUsersList({ users, renderItem }: SearchedUsersListProps) {
  return (
    <div className='flex flex-col space-y-5'>
        {users.map((item) => renderItem(item))}
        {users.length == 0 && (
            <p className='text-center text-dark text-lg'>No users found</p>
        )}
    </div>
  )
}

export default SearchedUsersList