"use client"

import React from 'react'
import useGetSingleUser from '@/hooks/useGetSingleUser'
import { useParams } from 'next/navigation'
import ErrorMessage from '@/components/ErrorMessage'
import UserProfileLoading from '@/components/loadings/UserProfileLoading'
import UserProfile from '@/components/users/UserProfile'

function UserPage() {
    const params = useParams<{ username: string }>()
    const { userProfile, isLoadingUserProfile, isErrorUserProfile, errorMessage } = useGetSingleUser({ username: params.username })

  return (
    <div className='main-container main-padding-y'>
        {userProfile?.data && <UserProfile profile={userProfile.data} />}
        {isLoadingUserProfile && <UserProfileLoading />}
        {isErrorUserProfile && <ErrorMessage message={errorMessage} />}
    </div>
  )
}

export default UserPage