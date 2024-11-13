import { useSearch } from '@/context/SearchContext';
import { TSearchedPost } from '@/types/responses/post.response'
import Link from 'next/link'
import React from 'react'

type SearchedPostCardProps = {
    post: TSearchedPost;
}

function SearchedPostCard({ post }: SearchedPostCardProps) {
    const { closeSearchPosts } = useSearch()

  return (
    <Link href={`/blog-post/${post.slug}`} className='flex rounded-lg p-2 hover:bg-grey transition duration-300 cursor-pointer' onClick={closeSearchPosts}>
        <p className='text-dark text-lg line-clamp-2' title={post.title}>{post.title}</p>
    </Link>
  )
}

export default SearchedPostCard