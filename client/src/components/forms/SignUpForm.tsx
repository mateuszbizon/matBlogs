"use client"

import { signUpSchema, TSignUpSchema } from '@/validations/signUpSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import Button from '../ui/Button'
import useSignUp from '@/hooks/useSignUp'

function SignUpForm() {
    const { handleSignUp, isPendingSignUp } = useSignUp()
    const { handleSubmit, register, formState: { errors } } = useForm<TSignUpSchema>({
        resolver: zodResolver(signUpSchema)
    })

    function onSubmit(data: TSignUpSchema) {
        console.log(data)
        handleSignUp(data)
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-box'>
            <label htmlFor="name" className='label'>Name</label>
            <input id='name' type="text" {...register("name")} className={`input ${errors.name && "input-error"}`} placeholder='Name' />
            <span className={`input-error-message ${errors.name && "input-error-message-show"}`}>
                {errors.name ? errors.name.message : "error"}
            </span>
        </div>

        <div className='form-box'>
            <label htmlFor="username" className='label'>Username</label>
            <input id='username' type="text" {...register("username")} className={`input ${errors.username && "input-error"}`} placeholder='Username' />
            <span className={`input-error-message ${errors.username && "input-error-message-show"}`}>
                {errors.username ? errors.username.message : "error"}
            </span>
        </div>

        <div className='form-box'>
            <label htmlFor="password" className='label'>Password</label>
            <input id='password' type="password" {...register("password")} className={`input ${errors.password && "input-error"}`} placeholder='Password' />
            <span className={`input-error-message ${errors.password && "input-error-message-show"}`}>
                {errors.password ? errors.password.message : "error"}
            </span>
        </div>

        <Button type='submit' className='w-full' disabled={isPendingSignUp}>
            Sign up
        </Button>
    </form>
  )
}

export default SignUpForm