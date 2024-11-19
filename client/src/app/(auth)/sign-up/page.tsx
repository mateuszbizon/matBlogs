import SignUpForm from '@/components/forms/SignUpForm'
import Link from 'next/link'
import React from 'react'

function SignUpPage() {
  return (
    <div>
        <h1 className='heading2 text-center mb-5'>Sign Up</h1>
        <SignUpForm />
        <div className='mt-5 text-dark text-lg text-center'>
            You have already account? <br /> <Link href={"/sign-in"} className='link'>Sign in</Link>
        </div>
    </div>
  )
}

export default SignUpPage