import { TCommentModel } from '@/types/models'
import React from 'react'

type PostCommentsListProps = {
    comments: TCommentModel[];
    renderItem: (comment: TCommentModel) => React.ReactNode;
}

function PostCommentsList({ comments, renderItem }: PostCommentsListProps) {
  return (
    <div className='space-y-3'>
        {comments.map((item) => renderItem(item))}
    </div>
  )
}

export default PostCommentsList