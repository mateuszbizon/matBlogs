"use client"

import Image from 'next/image'
import React, { useEffect } from 'react'
import userProfileDefault from "@/assets/user_profile_default.png"
import useGetSingleUser from '@/hooks/useGetSingleUser'
import { useParams } from 'next/navigation'
import ErrorMessage from '@/components/ErrorMessage'

function UserPage() {
    const params = useParams<{ username: string }>()
    const { singleUserData, isLoadingSingleUser, isErrorSingleUser, errorMessage } = useGetSingleUser({ username: params.username })

  return (
    <div className='main-container main-padding-y'>
        {singleUserData?.data && (
            <>
                <div className='flex gap-5 sm:gap-10'>
                    <figure className='size-[70px] sm:size-[100px] md:size-[150px]'>
                        <Image src={userProfileDefault} width={200} height={200} alt='User profile default' className='w-full h-full object-cover rounded-full' />
                    </figure>
                    <div className='flex flex-col justify-center gap-3 sm:gap-5 text-lg sm:text-2xl md:text-3xl text-dark'>
                        <span>{singleUserData.data.user.name}</span>
                        <span>{singleUserData.data.user.username}</span>
                    </div>
                </div>

                <div className='mt-20 text-dark text-lg sm:text-2xl md:text-3xl'>
                    {singleUserData.data.postsAmount} posts
                </div>
            </>
        )}
        {isLoadingSingleUser && <div>Loading...</div>}
        {isErrorSingleUser && <ErrorMessage message={errorMessage} />}
    </div>
  )
}

export default UserPage