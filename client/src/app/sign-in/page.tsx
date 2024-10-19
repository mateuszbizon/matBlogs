import SignInForm from '@/components/forms/SignInForm'
import Link from 'next/link'
import React from 'react'

function SignInPage() {
  return (
    <div className='main-padding-y'>
        <div className='auth-container'>
            <h1 className='heading2 text-center mb-5'>Sign In</h1>
            <SignInForm />
            <div className='mt-5 text-dark text-lg text-center'>
                Don't have account yet? <br /> <Link href={"/sign-up"} className='link'>Sign up</Link>
            </div>
        </div>
    </div>
  )
}

export default SignInPage