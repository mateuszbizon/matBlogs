"use client"

import { signUpSchema, TSignUpSchema } from '@/validations/signUpSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import Button from '../ui/Button'
import useSignUp from '@/hooks/useSignUp'
import InputErrorMessage from './InputErrorMessage'

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
            <InputErrorMessage errors={errors.name} />
        </div>

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

        <Button type='submit' className='w-full' disabled={isPendingSignUp}>
            Sign up
        </Button>
    </form>
  )
}

export default SignUpForm