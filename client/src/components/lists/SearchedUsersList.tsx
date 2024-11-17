import { TSearchedUser } from '@/types/responses/user.response'
import React from 'react'
import NoSearchedItemMessage from '../messages/NoSearchedItemMessage';

type SearchedUsersListProps = {
    users: TSearchedUser[];
    renderItem: (user: TSearchedUser) => React.ReactNode;
}

function SearchedUsersList({ users, renderItem }: SearchedUsersListProps) {
  return (
    <div className='flex flex-col space-y-5'>
        {users.map((item) => renderItem(item))}
        {users.length == 0 && (
          <NoSearchedItemMessage message='No users found' />
        )}
    </div>
  )
}

export default SearchedUsersList