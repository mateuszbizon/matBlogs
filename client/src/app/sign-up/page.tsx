import Button from '@/components/ui/Button'
import React from 'react'

function SignUpPage() {
  return (
    <div className='main-padding-y'>
        <div className='auth-container'>
            <h1 className='heading2 text-center mb-5'>Sign Up</h1>
            <form>
                <div className='form-box'>
                    <label htmlFor="name" className='label'>Imię</label>
                    <input id='name' type="text" className='input' placeholder='Imię' />
                    <span className='input-error-message'>Name can't be empty.</span>
                </div>
                <Button type='submit' className='w-full'>
                    Sign up
                </Button>
            </form>
        </div>
    </div>
  )
}

export default SignUpPage