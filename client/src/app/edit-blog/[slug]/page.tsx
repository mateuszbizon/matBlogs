"use client"

import ErrorMessage from '@/components/ErrorMessage'
import BlogForm from '@/components/forms/BlogForm'
import useGetSinglePost from '@/hooks/useGetSinglePost'
import { useParams } from 'next/navigation'
import React from 'react'

function EditBlogPage() {
    const { slug } = useParams<{ slug: string }>()
    const { singlePost, isSinglePostError, isSinglePostLoading, errorMessage } = useGetSinglePost({ slug })

  return (
    <div className='main-padding-y main-container'>
        {singlePost?.data && (
            <div>
                <h1 className='heading2 text-center mb-5'>Edit blog</h1>
                <BlogForm post={singlePost.data.post} />
            </div>
        )}
        {isSinglePostLoading && <div>Loading...</div>}
        {isSinglePostError && <ErrorMessage message={errorMessage} />}
    </div>
  )
}

export default EditBlogPage