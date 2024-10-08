import SignUpForm from '@/components/forms/SignUpForm'
import React from 'react'

function SignUpPage() {
  return (
    <div className='main-padding-y'>
        <div className='auth-container'>
            <h1 className='heading2 text-center mb-5'>Sign Up</h1>
            <SignUpForm />
        </div>
    </div>
  )
}

export default SignUpPage