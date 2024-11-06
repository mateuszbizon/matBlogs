"use client"

import React, { useState } from 'react'
import Rating from '@mui/material/Rating'
import { useUserAuth } from '@/context/UserAuthContext';
import Link from 'next/link';
import useRatePost from '@/hooks/useRatePost';

type PostRatingProps = {
    postId: string;
}

function PostRating({ postId }: PostRatingProps) {
    const { handleRatePost, isPending, isError } = useRatePost()
    const { isSignedIn } = useUserAuth()
    const [value, setValue] = useState<number | null>(2)

    function handleChangeValue(newValue: number | null) {
        handleRatePost({
            postId,
            value: newValue
        })

        if (!isError) {
            setValue(newValue)
        }
    }

  return (
    <div className='relative'>
        {!isSignedIn && (
            <Link href={'/sign-in'} className='absolute inset-0 z-[5]'></Link>
        )}
        <span className='text-dark text-lg sm:text-xl md:text-2xl font-medium block mb-2'>Rate this post</span>
        <Rating value={value} precision={0.5} onChange={(event, newValue) => handleChangeValue(newValue)} size='large' readOnly={isPending} />
        {isPending && <span className='text-dark block'>Rating post...</span>}
    </div>
  )
}

export default PostRating