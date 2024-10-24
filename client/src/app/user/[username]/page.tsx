"use client"

import React from 'react'
import useGetSingleUser from '@/hooks/useGetSingleUser'
import { useParams } from 'next/navigation'
import ErrorMessage from '@/components/ErrorMessage'
import UserProfileLoading from '@/components/loadings/UserProfileLoading'
import UserProfile from '@/components/users/UserProfile'
import UserPosts from '@/components/users/UserPosts'

function UserPage() {
    const params = useParams<{ username: string }>()
    const { userProfile, isLoadingUserProfile, isErrorUserProfile, errorMessage } = useGetSingleUser({ username: params.username })

  return (
    <div className='main-container main-padding-y'>
        {userProfile?.data && <UserProfile profile={userProfile.data} />}
        {userProfile?.data && <UserPosts userId={userProfile.data.user.id} />}
        {isLoadingUserProfile && <UserProfileLoading />}
        {isErrorUserProfile && <ErrorMessage message={errorMessage} />}
    </div>
  )
}

export default UserPage