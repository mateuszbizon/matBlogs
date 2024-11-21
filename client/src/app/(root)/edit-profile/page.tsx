"use client"

import ProfileNameForm from '@/components/forms/ProfileNameForm'
import ProfilePhotoForm from '@/components/forms/ProfilePhotoForm'
import { useUserAuth } from '@/context/UserAuthContext'
import React from 'react'

function EditProfilePage() {
  const { userData } = useUserAuth()

  return (
    <div>
        <h1 className='heading2 text-center mb-5'>Edit profile</h1>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-10'>
            {userData && (
              <>
                <ProfilePhotoForm userPhoto={userData.userPhoto} />
                <ProfileNameForm name={userData.name} username={userData.username} />
              </>
            )}
        </div>
    </div>
  )
}

export default EditProfilePage