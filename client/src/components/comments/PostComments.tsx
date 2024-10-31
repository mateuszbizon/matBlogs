"use client"

import useGetPostComments from '@/hooks/useGetPostComments'
import React from 'react'

type PostCommentsProps = {
    postId: string
}

function PostComments({ postId }: PostCommentsProps) {
    const { postCommentsData } = useGetPostComments({ postId })
    console.log(postCommentsData?.data?.comments)

  return (
    <div>PostComments</div>
  )
}

export default PostComments