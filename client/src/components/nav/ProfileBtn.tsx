import { useUserAuth } from '@/context/UserAuthContext'
import React from 'react'
import ButtonLink from '../ui/ButtonLink'

function ProfileBtn() {
    const { isSignedIn, userData } = useUserAuth()

  return (
    <ButtonLink href={isSignedIn ? `/user/${userData?.username}` : "/sign-in"}>
        {isSignedIn ? "My profile" : "Sign In"}
    </ButtonLink>
  )
}

export default ProfileBtn