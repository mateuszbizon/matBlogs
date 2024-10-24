"use client"

import useGetUserPosts from '@/hooks/useGetUserPosts'
import React from 'react'

type UserPostsProps = {
    userId: string;
}

function UserPosts({ userId }: UserPostsProps) {
    const { userPosts, isLoadingUserPosts } = useGetUserPosts({ userId, page: 1, sort: "" })
    console.log(userPosts?.data?.posts)

  return (
    <div>UserPosts</div>
  )
}

export default UserPosts