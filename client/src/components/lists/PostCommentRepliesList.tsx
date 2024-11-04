import { TCommentReplyModel } from '@/types/models'
import React from 'react'

type PostCommentRepliesListProps = {
    commentReplies: TCommentReplyModel[];
    renderItem: (reply: TCommentReplyModel) => React.ReactNode;
}

function PostCommentRepliesList({ commentReplies, renderItem }: PostCommentRepliesListProps) {
  return (
    <div className='space-y-3'>
        {commentReplies.map((item) => renderItem(item))}
    </div>
  )
}

export default PostCommentRepliesList