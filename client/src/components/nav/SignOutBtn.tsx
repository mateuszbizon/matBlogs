"use client"

import React from 'react'
import Button from '../ui/Button'
import { useUserAuth } from '@/context/UserAuthContext'
import useSignOut from '@/hooks/api/auth/useSignOut'

function SignOutBtn() {
    const { handleSignOut, isPending } = useSignOut()
    const { isSignedIn } = useUserAuth()

    function onSignOut() {
      handleSignOut()
    }

  return (
    <>
        {isSignedIn && (
            <Button variant='secondary' onClick={onSignOut} disabled={isPending}>
                {isPending ? "Signing out..." : "Sign out"}
            </Button>
        )}
    </>
  )
}

export default SignOutBtn