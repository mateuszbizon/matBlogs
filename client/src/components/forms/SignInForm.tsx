"use client"

import React from 'react'
import InputErrorMessage from './InputErrorMessage'
import Button from '../ui/Button'
import { useForm } from 'react-hook-form'
import { signInSchema, TSignInSchema } from '@/validations/signInSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import useSignIn from '@/hooks/api/users/useSignIn'
import Input from '../ui/Input'
import Label from '../ui/Label'
import FormBox from './FormBox'
import useShowPassword from '@/hooks/useShowPassword'
import CheckBox from './CheckBox'

function SignInForm() {
    const { togglePasswordShow, passwordShow } = useShowPassword()
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
            <Input id='password' type={passwordShow ? "text" : "password"} {...register("password")} variant={errors.password && "primary-error"} placeholder='Password' />
            <InputErrorMessage errors={errors.password} />
        </FormBox>

        <FormBox>
            <CheckBox>
                <input id='show-password' type='checkbox' checked={passwordShow} onChange={togglePasswordShow} />
                <Label htmlFor='show-password'>
                    Show password
                </Label>
            </CheckBox>
        </FormBox>

        <Button type='submit' className='w-full' disabled={isPendingSignIn}>
            {isPendingSignIn ? "Signing In..." : "Sign In"}
        </Button>
    </form>
  )
}

export default SignInForm