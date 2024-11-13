import { TSearchedPost } from '@/types/responses/post.response'
import React from 'react'

type SearchedPostsListProps = {
    posts: TSearchedPost[];
    renderItem: (post: TSearchedPost) => React.ReactNode;
}

function SearchedPostsList({ posts, renderItem }: SearchedPostsListProps) {
  return (
    <div>
        {posts.map((item) => renderItem(item))}
        {posts.length == 0 && (
            <p className='text-center text-dark text-lg'>No posts found</p>
        )}
    </div>
  )
}

export default SearchedPostsList