"use client"

import React from 'react'
import FormBox from './FormBox'
import Label from '../ui/Label'
import Input from '../ui/Input'
import Button from '../ui/Button'
import { useForm } from 'react-hook-form'
import InputErrorMessage from './InputErrorMessage'
import { TUpdateUserSchema, updateUserSchema } from '@/validations/updateUserSchema'
import { zodResolver } from '@hookform/resolvers/zod'

type ProfileNameFormProps = {
    name?: string;
    username?: string;
}

function ProfileNameForm({ name, username }: ProfileNameFormProps) {
    const { register, handleSubmit, formState: { errors } } = useForm<TUpdateUserSchema>({
        resolver: zodResolver(updateUserSchema),
        defaultValues: {
            username: username ? username : "",
            name: name ? name : "",
        }
    })

    function onSubmit(data: TUpdateUserSchema) {
        console.log(data)
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <FormBox>
            <Label htmlFor='name'>Name</Label>
            <Input id='name' {...register("name")} placeholder='Name' />
            <InputErrorMessage errors={errors.name} />
        </FormBox>

        <FormBox>
            <Label htmlFor='username'>Username</Label>
            <Input id='username' {...register("username")} placeholder='Username' />
            <InputErrorMessage errors={errors.username} />
        </FormBox>

        <Button type='submit'>
            Update
        </Button>
    </form>
  )
}

export default ProfileNameForm