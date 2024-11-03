"use client"

import { TCommentModel } from '@/types/models'
import profileDefault from "@/assets/user_profile_default.png"
import Image from 'next/image';
import React, { useState } from 'react'
import Button from '../ui/Button';
import { useUserAuth } from '@/context/UserAuthContext';
import ButtonLink from '../ui/ButtonLink';
import DeleteModal from '../DeleteModal';

type PostCommentCardProps = {
    comment: TCommentModel;
}

function PostCommentCard({ comment }: PostCommentCardProps) {
    const { isAuthor, isSignedIn } = useUserAuth()
    const [modalOpen, setModalOpen] = useState(false)

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

        <DeleteModal open={modalOpen} onClose={() => setModalOpen(false)}>
            <p>Are you sure you want to delete this comment?</p>
        </DeleteModal>

        <div className='flex space-x-3'>
            {isSignedIn ? (
                <Button variant='primary-no-bg' padding='small'>Reply</Button>
            ) : (
                <ButtonLink href="/sign-in" variant='primary-no-bg' padding='small'>Reply</ButtonLink>
            )}
            {isAuthor(comment.authorId) && <Button variant='delete-no-bg' padding='small' onClick={() => setModalOpen(true)}>Delete</Button>}
        </div>
    </div>
  )
}

export default PostCommentCard