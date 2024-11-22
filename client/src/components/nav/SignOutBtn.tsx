"use client"

import React from 'react'
import Button from '../ui/Button'
import { useUserAuth } from '@/context/UserAuthContext'

function SignOutBtn() {
    const { isSignedIn } = useUserAuth()

  return (
    <>
        {isSignedIn && (
            <Button variant='secondary'>
                Sign Out
            </Button>
        )}
    </>
  )
}

export default SignOutBtn