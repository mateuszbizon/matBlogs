"use client"

import ErrorMessage from '@/components/ErrorMessage'
import Post from '@/components/posts/Post'
import useGetSinglePost from '@/hooks/useGetSinglePost'
import { useParams } from 'next/navigation'
import React from 'react'

function PostPage() {
    const { slug } = useParams<{ slug: string }>()
    const { singlePost, isSinglePostLoading, isSinglePostError, errorMessage } = useGetSinglePost({ slug })
    console.log(singlePost)

  return (
    <div className='main-container main-padding-y'>
      {isSinglePostLoading && <div>Loading...</div>}
      {isSinglePostError && <ErrorMessage message={errorMessage} />}
      {singlePost?.data && (
        <Post post={singlePost.data} />
      )}
    </div>
  )
}

export default PostPage