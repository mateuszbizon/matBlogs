import { TUserPost } from '@/types/responses/post.response'
import React from 'react'

type UserPostsListProps = {
    posts: TUserPost[];
    renderItem: (post: TUserPost) => React.ReactNode;
}

function UserPostsList({ posts, renderItem }: UserPostsListProps) {
  return (
    <div>
        {posts.map((item) => renderItem(item))}
    </div>
  )
}

export default UserPostsList