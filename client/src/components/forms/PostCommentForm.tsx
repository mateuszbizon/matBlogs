"use client"

import React from 'react'
import FormBox from './FormBox'
import Label from '../ui/Label'
import Button from '../ui/Button'
import Textarea from '../ui/Textarea'
import { useForm } from 'react-hook-form'
import { commentSchema, TCommentSchema } from '@/validations/commentSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import InputErrorMessage from './InputErrorMessage'
import useCreatePostComment from '@/hooks/useCreatePostComment'

type PostCommentFormProps = {
    postId: string;
}

function PostCommentForm({ postId }: PostCommentFormProps) {
    const { handleCreatePostComment, isPendingCreatePostComment } = useCreatePostComment()
    const { register, handleSubmit, formState: { errors }, reset } = useForm<TCommentSchema>({
        resolver: zodResolver(commentSchema),
        defaultValues: {
            content: ""
        }
    })

    function onSubmit(data: TCommentSchema) {
        handleCreatePostComment({
            postId,
            commentData: data
        })
        reset()
    }

  return (
    <form className='w-full max-w-[700px]' onSubmit={handleSubmit(onSubmit)}>
        <FormBox>
            <Label htmlFor='content'>Add comment</Label>
            <Textarea id="content" variant={errors.content && "primary-error"} {...register("content")} placeholder='Comment content'></Textarea>
            <InputErrorMessage errors={errors.content} />
        </FormBox>

        <Button type='submit' disabled={isPendingCreatePostComment}>
            {isPendingCreatePostComment ? "Creating comment..." : "Create comment"}
        </Button>
    </form>
  )
}

export default PostCommentForm