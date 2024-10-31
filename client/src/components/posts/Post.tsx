import { TPost } from '@/types/responses/post.response'
import { getCreateDate } from '@/utils/getCreateDate';
import Image from 'next/image';
import React from 'react'
import PostComments from '../comments/PostComments';

type PostProps = {
    post: TPost;
}

function Post({ post }: PostProps) {
  return (
    <div>
        <div className='mb-10 flex flex-col space-y-5'>
            <h1 className='heading1 text-center'>{post.post.title}</h1>
            <p className='text-dark font-medium text-lg sm:text-xl md:text-2xl text-center'>
                Created at: {getCreateDate(post.post.createdAt)}
            </p>
        </div>

        <figure className='w-full max-w-[800px] mx-auto aspect-video'>
            <Image src={post.post.titlePhoto} width={200} height={200} alt='Post photo' className='w-full h-full object-cover rounded-md' />
        </figure>

        <div className='mt-5' dangerouslySetInnerHTML={{ __html: post.post.content }}></div>

        <div className='flex flex-col gap-5 mt-5'>
            <span className='text-dark text-lg sm:text-xl md:text-2xl font-medium'>{post.commentsAmount} comments</span>
            <PostComments postId={post.post.id} />
        </div>
    </div>
  )
}

export default Post