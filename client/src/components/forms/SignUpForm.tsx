"use client"

import { signUpSchema, TSignUpSchema } from '@/validations/signUpSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import Button from '../ui/Button'
import useSignUp from '@/hooks/useSignUp'
import InputErrorMessage from './InputErrorMessage'
import Input from '../ui/Input'
import Label from '../ui/Label'

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
            <Label htmlFor="name">Name</Label>
            <Input id='name' type="text" {...register("name")} variant={errors.name && "primary-error"} placeholder='Name' />
            <InputErrorMessage errors={errors.name} />
        </div>

        <div className='form-box'>
            <Label htmlFor="username">Username</Label>
            <Input id='username' type="text" {...register("username")} variant={errors.username && "primary-error"} placeholder='Username' />
            <InputErrorMessage errors={errors.username} />
        </div>

        <div className='form-box'>
            <Label htmlFor="password">Password</Label>
            <Input id='password' type="password" {...register("password")} variant={errors.password && "primary-error"} placeholder='Password' />
            <InputErrorMessage errors={errors.password} />
        </div>

        <Button type='submit' className='w-full' disabled={isPendingSignUp}>
            {isPendingSignUp ? "Signing up..." : "Sign up"}
        </Button>
    </form>
  )
}

export default SignUpForm