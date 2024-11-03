"use client"

import React from 'react'
import FormBox from './FormBox'
import Label from '../ui/Label'
import Textarea from '../ui/Textarea'
import Button from '../ui/Button'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { commentSchema, TCommentSchema } from '@/validations/commentSchema'
import InputErrorMessage from './InputErrorMessage'

type PostCommentReplyFormProps = {
    replyingUsername: string;
}

function PostCommentReplyForm({ replyingUsername }: PostCommentReplyFormProps) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<TCommentSchema>({
        resolver: zodResolver(commentSchema),
        defaultValues: {
            content: "",
        }
    })

    function onSubmit(data: TCommentSchema) {
        console.log(data)
    }

  return (
    <form className='w-full max-w-[700px]' onSubmit={handleSubmit(onSubmit)}>
        <FormBox>
            <Label htmlFor='content'>Replying to <span className='text-secondary font-bold'>{replyingUsername}</span></Label>
            <Textarea id='content' {...register("content")} variant={errors.content && "primary-error"} placeholder='Reply content'></Textarea>
            <InputErrorMessage errors={errors.content} />
        </FormBox>
        <Button type='submit'>Reply</Button>
    </form>
  )
}

export default PostCommentReplyForm