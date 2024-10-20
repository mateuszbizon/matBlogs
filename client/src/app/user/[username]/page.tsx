import Image from 'next/image'
import React from 'react'
import userProfileDefault from "@/assets/user_profile_default.png"

function UserPage() {
  return (
    <div className='main-container main-padding-y'>
        <div className='flex gap-5 sm:gap-10'>
            <figure className='size-[70px] sm:size-[100px] md:size-[150px]'>
                <Image src={userProfileDefault} width={200} height={200} alt='User profile default' className='w-full h-full object-cover rounded-full' />
            </figure>
            <div className='flex flex-col justify-center gap-3 sm:gap-5 text-lg sm:text-2xl md:text-3xl text-dark'>
                <span>Name</span>
                <span>Username</span>
            </div>
        </div>

        <div className='mt-20 text-dark text-lg sm:text-2xl md:text-3xl'>
            10 posts
        </div>
    </div>
  )
}

export default UserPage