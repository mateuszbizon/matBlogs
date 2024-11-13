import { TSearchedUser } from '@/types/responses/user.response'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import profileDefault from "@/assets/user_profile_default.png"
import { useSearch } from '@/context/SearchContext';

type SearchedUserCardProps = {
    user: TSearchedUser;
}

function SearchedUserCard({ user }: SearchedUserCardProps) {
    const { closeSearchUsers } = useSearch()

  return (
    <Link href={`/user/${user.username}`} className='flex items-center space-x-3 rounded-lg p-2 hover:bg-grey transition duration-300 cursor-pointer' onClick={closeSearchUsers}>
        <figure className='size-[60px] flex-shrink-0'>
            <Image src={user.profile?.photo || profileDefault} width={200} height={200} alt='' className='w-full h-full object-cover rounded-full' />
        </figure>
        <div className='flex flex-col md:flex-row md:space-x-2 text-dark text-lg'>
            <span>{user.username}</span>
            <span>{user.name}</span>
        </div>
    </Link>
  )
}

export default SearchedUserCard