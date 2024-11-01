"use client"

import useGetPostComments from '@/hooks/useGetPostComments'
import React from 'react'
import PostCommentCard from '../cards/PostCommentCard'
import PostCommentsList from '../lists/PostCommentsList'

type PostCommentsProps = {
    postId: string
}

function PostComments({ postId }: PostCommentsProps) {
    const { postCommentsData } = useGetPostComments({ postId })

  return (
    <div>
      {postCommentsData?.data && (
        <PostCommentsList 
          comments={postCommentsData.data.comments}
          renderItem={(comment) => (
            <PostCommentCard key={comment.id} comment={comment} />
          )}
        />
      )}
    </div>
  )
}

export default PostComments