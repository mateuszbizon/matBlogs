import { TUserPost } from '@/types/responses/post.response'
import React from 'react'

type UserPostCardProps = {
    post: TUserPost
}

function UserPostCard({ post }: UserPostCardProps) {
  return (
    <div>
        {post.title}
    </div>
  )
}

export default UserPostCard