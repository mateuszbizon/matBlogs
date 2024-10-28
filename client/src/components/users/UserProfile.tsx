import React from 'react'
import { TUserProfile } from '@/types/responses/user.response'
import Image from 'next/image'
import userProfileDefault from "@/assets/user_profile_default.png"

type UserProfileProps = {
    profile: TUserProfile
}

function UserProfile({ profile }: UserProfileProps) {
  return (
    <>
        <div className='flex gap-5 sm:gap-10'>
            <figure className='size-[70px] sm:size-[100px] md:size-[150px]'>
                <Image src={profile.user.profile ? profile.user.profile.photo : userProfileDefault} width={200} height={200} alt='User profile default' className='w-full h-full object-cover rounded-full' />
            </figure>
            <div className='flex flex-col justify-center gap-3 sm:gap-5 text-lg sm:text-2xl md:text-3xl text-dark'>
                <span>{profile.user.name}</span>
                <span>{profile.user.username}</span>
            </div>
        </div>

        <div className='mt-20 text-dark text-lg sm:text-2xl md:text-3xl'>
            {profile.postsAmount} posts
        </div>
    </>
  )
}

export default UserProfile