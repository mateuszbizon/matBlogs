import { useUserAuth } from '@/context/UserAuthContext'
import Image from 'next/image';
import React, { useState } from 'react'
import Button from '../ui/Button';
import ButtonLink from '../ui/ButtonLink';
import profileDefault from "@/assets/user_profile_default.png"
import { TCommentReplyModel } from '@/types/models';
import PostCommentReplyForm from '../forms/PostCommentReplyForm';
import Link from 'next/link';
import useDeletePostReply from '@/hooks/useDeletePostReply';
import DeleteModal from '../DeleteModal';

type PostCommentReplyCardProps = {
    reply: TCommentReplyModel;
}

function PostCommentReplyCard({ reply }: PostCommentReplyCardProps) {
    const { handleDeletePostCommentReply, isPendingDeletePostCommentReply } = useDeletePostReply()
    const { isAuthor, isSignedIn } = useUserAuth()
    const [modalOpen, setModalOpen] = useState(false)
    const [replyOpen, setReplyOpen] = useState(false)

  return (
    <div>
        <div className='flex space-x-3'>
            <figure className='size-[30px] sm:size-[40px] md:size-[50px] flex-shrink-0'>
                <Image src={reply.author?.profile?.photo || profileDefault} width={200} height={200} alt='User profile photo' className='w-full h-full object-cover rounded-full' />
            </figure>

            <div className='space-y-2 text-dark'>
                <span className='text-lg md:text-xl font-medium'>{reply.author?.username}</span>
                <p className='md:text-lg'>
                    <Link href={`/user/${reply.replyingTo}`} className='text-secondary font-bold'>@{reply.replyingTo}</Link> {reply.content}
                </p>
            </div>
        </div>

        <DeleteModal
            open={modalOpen} 
            onClose={() => setModalOpen(false)} 
            deleteFn={() => handleDeletePostCommentReply(reply.id)} 
            isPending={isPendingDeletePostCommentReply}
        >
            Are you sure you want to delete this reply?
        </DeleteModal>

        <div className='flex space-x-3'>
            {isSignedIn ? (
                <Button variant='primary-no-bg' padding='small' onClick={() => setReplyOpen(prev => !prev)}>Reply</Button>
            ) : (
                <ButtonLink href="/sign-in" variant='primary-no-bg' padding='small'>Reply</ButtonLink>
            )}
            {isAuthor(reply.authorId) && <Button variant='delete-no-bg' padding='small' onClick={() => setModalOpen(true)}>Delete</Button>}
        </div>

        <div className={`${replyOpen ? "max-h-[1000px]" : "max-h-0"} overflow-hidden transition-all duration-500`}>
            {reply.author && (
                <PostCommentReplyForm commentId={reply.commentId} replyingUsername={reply.author.username} onClose={() => setReplyOpen(false)} />
            )}
        </div>
    </div>
  )
}

export default PostCommentReplyCard