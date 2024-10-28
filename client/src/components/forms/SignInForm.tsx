"use client"

import React from 'react'
import InputErrorMessage from './InputErrorMessage'
import Button from '../ui/Button'
import { useForm } from 'react-hook-form'
import { signInSchema, TSignInSchema } from '@/validations/signInSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import useSignIn from '@/hooks/useSignIn'
import Input from '../ui/Input'
import Label from '../ui/Label'
import FormBox from './FormBox'

function SignInForm() {
    const { handleSignIn, isPendingSignIn } = useSignIn()
    const { handleSubmit, register, formState: { errors } } = useForm<TSignInSchema>({
        resolver: zodResolver(signInSchema)
    })

    function onSubmit(data: TSignInSchema) {
        console.log(data)
        handleSignIn(data)
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <FormBox>
            <Label htmlFor="username">Username</Label>
            <Input id='username' type="text" {...register("username")} variant={errors.username && "primary-error"} placeholder='Username' />
            <InputErrorMessage errors={errors.username} />
        </FormBox>

        <FormBox>
            <Label htmlFor="password">Password</Label>
            <Input id='password' type="password" {...register("password")} variant={errors.password && "primary-error"} placeholder='Password' />
            <InputErrorMessage errors={errors.password} />
        </FormBox>

        <Button type='submit' className='w-full' disabled={isPendingSignIn}>
            {isPendingSignIn ? "Signing In..." : "Sign In"}
        </Button>
    </form>
  )
}

export default SignInForm