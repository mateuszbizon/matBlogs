"use client"

import ErrorMessage from '@/components/ErrorMessage'
import BlogForm from '@/components/forms/BlogForm'
import CircleLoading from '@/components/loadings/CircleLoading'
import { useUserAuth } from '@/context/UserAuthContext'
import useGetSinglePost from '@/hooks/useGetSinglePost'
import { redirect, useParams } from 'next/navigation'
import React from 'react'

function EditBlogPage() {
    const { slug } = useParams<{ slug: string }>()
    const { isAuthor } = useUserAuth()
    const { singlePost, isSinglePostError, isSinglePostLoading, errorMessage } = useGetSinglePost({ slug })

    if (singlePost?.data && !isAuthor(singlePost.data.post.authorId)) {
      redirect("/")
    }

  return (
    <div className='main-padding-y main-container'>
        {singlePost?.data && (
            <div>
                <h1 className='heading2 text-center mb-5'>Edit blog</h1>
                <BlogForm post={singlePost.data.post} />
            </div>
        )}
        {isSinglePostLoading && <CircleLoading />}
        {isSinglePostError && <ErrorMessage message={errorMessage} />}
    </div>
  )
}

export default EditBlogPage