import { TCommentModel } from '@/types/models'
import profileDefault from "@/assets/user_profile_default.png"
import Image from 'next/image';
import React from 'react'
import Button from '../ui/Button';

type PostCommentCardProps = {
    comment: TCommentModel;
}

function PostCommentCard({ comment }: PostCommentCardProps) {
  return (
    <div>
        <div className='flex space-x-3'>
            <figure className='size-[50px] sm:size-[60px] md:size-[70px] flex-shrink-0'>
                <Image src={comment.author?.profile?.photo || profileDefault} width={200} height={200} alt='User profile photo' className='w-full h-full object-cover rounded-full' />
            </figure>

            <div className='space-y-2 text-dark'>
                <span className='text-lg md:text-xl font-medium'>{comment.author?.username}</span>
                <p className='md:text-lg'>{comment.content}</p>
            </div>
        </div>

        <div className='flex space-x-3'>
            <Button variant='primary-no-bg' padding='small'>Reply</Button>
            <Button variant='delete-no-bg' padding='small'>Delete</Button>
        </div>
    </div>
  )
}

export default PostCommentCard