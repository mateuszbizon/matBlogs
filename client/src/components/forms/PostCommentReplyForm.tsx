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
import useCreatePostReply from '@/hooks/useCreatePostReply'

type PostCommentReplyFormProps = {
    replyingUsername: string;
    commentId: string;
    onClose: () => void;
}

function PostCommentReplyForm({ replyingUsername, commentId, onClose }: PostCommentReplyFormProps) {
    const { handleCreatePostCommentReply, isPendingCreatePostCommentReply, isError } = useCreatePostReply()
    const { register, handleSubmit, formState: { errors }, reset } = useForm<TCommentSchema>({
        resolver: zodResolver(commentSchema),
        defaultValues: {
            content: "",
        }
    })

    function onSubmit(data: TCommentSchema) {
        console.log(data)
        handleCreatePostCommentReply({
            commentId,
            replyingUsername,
            content: data
        })
        if (!isError) {
            reset()
            onClose()
        }
    }

  return (
    <form className='w-full max-w-[700px]' onSubmit={handleSubmit(onSubmit)}>
        <FormBox>
            <Label htmlFor='content'>Replying to <span className='text-secondary font-bold'>{replyingUsername}</span></Label>
            <Textarea id='content' {...register("content")} variant={errors.content && "primary-error"} placeholder='Reply content'></Textarea>
            <InputErrorMessage errors={errors.content} />
        </FormBox>
        <Button type='submit' disabled={isPendingCreatePostCommentReply}>
            {isPendingCreatePostCommentReply ? "Replying..." : "Reply"}
        </Button>
    </form>
  )
}

export default PostCommentReplyForm