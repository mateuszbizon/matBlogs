"use client"

import React from 'react'
import InputErrorMessage from './InputErrorMessage'
import Button from '../ui/Button'
import { useForm } from 'react-hook-form'
import { signInSchema, TSignInSchema } from '@/validations/signInSchema'
import { zodResolver } from '@hookform/resolvers/zod'

function SignInForm() {
    const { handleSubmit, register, formState: { errors } } = useForm<TSignInSchema>({
        resolver: zodResolver(signInSchema)
    })

    function onSubmit(data: TSignInSchema) {
        console.log(data)
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-box'>
            <label htmlFor="username" className='label'>Username</label>
            <input id='username' type="text" {...register("username")} className={`input ${errors.username && "input-error"}`} placeholder='Username' />
            <InputErrorMessage errors={errors.username} />
        </div>

        <div className='form-box'>
            <label htmlFor="password" className='label'>Password</label>
            <input id='password' type="password" {...register("password")} className={`input ${errors.password && "input-error"}`} placeholder='Password' />
            <InputErrorMessage errors={errors.password} />
        </div>

        <Button type='submit' className='w-full'>
            Sign In
        </Button>
    </form>
  )
}

export default SignInForm