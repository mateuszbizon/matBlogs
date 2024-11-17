import { TSearchedPost } from '@/types/responses/post.response'
import React from 'react'
import NoSearchedItemMessage from '../messages/NoSearchedItemMessage';

type SearchedPostsListProps = {
    posts: TSearchedPost[];
    renderItem: (post: TSearchedPost) => React.ReactNode;
}

function SearchedPostsList({ posts, renderItem }: SearchedPostsListProps) {
  return (
    <div>
        {posts.map((item) => renderItem(item))}
        {posts.length == 0 && (
            <NoSearchedItemMessage message='No posts found' />
        )}
    </div>
  )
}

export default SearchedPostsList