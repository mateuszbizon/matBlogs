import BlogForm from '@/components/forms/BlogForm'
import React from 'react'

function CreateBlogPage() {
  return (
    <div className='main-padding-y'>
        <div className='main-container'>
            <h1 className='heading2 text-center mb-5'>Create blog</h1>
            <BlogForm />
        </div>
    </div>
  )
}

export default CreateBlogPage