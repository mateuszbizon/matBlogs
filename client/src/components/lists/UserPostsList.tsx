import { TUserPost } from '@/types/responses/post.response'
import React from 'react'

type UserPostsListProps = {
    posts: TUserPost[];
    renderItem: (post: TUserPost) => React.ReactNode;
}

function UserPostsList({ posts, renderItem }: UserPostsListProps) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-14'>
        {posts.map((item) => renderItem(item))}
    </div>
  )
}

export default UserPostsList