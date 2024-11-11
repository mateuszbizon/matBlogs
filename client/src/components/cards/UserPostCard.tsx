import { TUserPost } from '@/types/responses/post.response'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import UserPostVerticalMenu from '../posts/UserPostVerticalMenu'
import { useUserAuth } from '@/context/UserAuthContext'

type UserPostCardProps = {
    post: TUserPost
}

function UserPostCard({ post }: UserPostCardProps) {
    const { isAuthor } = useUserAuth()

  return ( 
    <div>
        <Link href={`/blog-post/${post.slug}`}>
            <figure className='aspect-video'>
                <Image src={post.titlePhoto} width={200} height={200} alt='' className='w-full h-full object-cover rounded-lg' />
            </figure>
        </Link>

        <div className='flex justify-between py-4'>
            <Link href={`/blog-post/${post.slug}`}>
                <p className='text-dark text-lg line-clamp-2' title={post.title}>{post.title}</p>
            </Link>
            {isAuthor(post.authorId) && (
                <UserPostVerticalMenu postId={post.id} postSlug={post.slug} />
            )}
        </div>
    </div>
  )
}

export default UserPostCard