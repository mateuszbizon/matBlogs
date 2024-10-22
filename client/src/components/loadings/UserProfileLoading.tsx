import React from 'react'

function UserProfileLoading() {
  return (
    <div className='flex space-x-5 sm:space-x-10 animate-pulse'>
        <div className='bg-primary size-[70px] sm:size-[100px] md:size-[150px] rounded-full'></div>
        <div className='space-y-6 pt-5'>
            <div className='bg-primary h-2 sm:h-4 md:h-7 w-[100px] sm:w-[120px] md:w-[150px] rounded-lg'></div>
            <div className='bg-primary h-2 sm:h-4 md:h-7 w-[100px] sm:w-[120px] md:w-[150px] rounded-lg'></div>
        </div>
    </div>
  )
}

export default UserProfileLoading