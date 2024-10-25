import { TUserPost } from '@/types/responses/post.response'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type UserPostCardProps = {
    post: TUserPost
}

function UserPostCard({ post }: UserPostCardProps) {
  return (
    <Link href={`/blog-post/${post.slug}`} title={post.title}>
        <div>
            <figure className='aspect-video'>
                <Image src={post.titlePhoto} width={200} height={200} alt='' className='w-full h-full object-cover rounded-lg' />
            </figure>
        </div>

        <div className='py-4'>
            <p className='text-dark text-lg line-clamp-2'>{post.title}</p>
        </div>
    </Link>
  )
}

export default UserPostCard