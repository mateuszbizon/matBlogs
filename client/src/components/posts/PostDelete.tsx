"use client"

import React, { useState } from 'react'
import Button from '../ui/Button'
import useDeletePost from '@/hooks/useDeletePost';
import DeleteModal from '../DeleteModal';

type PostDeleteProps = {
    postId: string;
}

function PostDelete({ postId }: PostDeleteProps) {
    const { handleDeletePost, isPending } = useDeletePost()
    const [openModal, setOpenModal] = useState(false)

  return (
    <div>
        <Button variant='delete' padding='small' onClick={() => setOpenModal(true)}>
            Delete post
        </Button>
        
        <DeleteModal open={openModal} onClose={() => setOpenModal(false)} isPending={isPending} deleteFn={() => handleDeletePost(postId)}>
            Are you sure you want to delete this post?
        </DeleteModal>
    </div>
  )
}

export default PostDelete