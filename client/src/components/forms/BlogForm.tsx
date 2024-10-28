"use client"

import React, { useEffect, useState } from 'react'
import Button from '../ui/Button'
import useChangeImage from '@/hooks/useChangeImage'
import { TImage } from '@/types'
import InputErrorMessage from './InputErrorMessage'
import { FieldError, useForm } from 'react-hook-form'
import { blogSchema, TBlogSchema } from '@/validations/blogSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import Editor from './Editor'
import ImageFormHolder from './ImageFormHolder'
import useCreatePost from '@/hooks/useCreatePost'
import Input from '../ui/Input'
import Label from '../ui/Label'
import FormBox from './FormBox'

function BlogForm() {
    const { handleCreatePost, isCreatingPostPending } = useCreatePost()
    const { changeImage } = useChangeImage()
    const [titlePhoto, setTitlePhoto] = useState<TImage | null>(null)
    const [content, setContent] = useState("")
    const { register, handleSubmit, setValue, formState: { errors } } = useForm<TBlogSchema>({
        resolver: zodResolver(blogSchema),
        defaultValues: {
            title: "",
            titlePhoto: titlePhoto?.file,
            content: content
        }
    })

    function handleChangeImage(event: React.ChangeEvent<HTMLInputElement>) {
        const image = changeImage(event)

        setTitlePhoto(image)
        setValue("titlePhoto", image?.file)
    }

    function handleChangeContent(newValue: string) {
        setContent(newValue)
        setValue("content", newValue)
    }

    function onSubmit(data: TBlogSchema) {
        console.log(data)

        const formData = new FormData()

        formData.append("title", data.title)
        formData.append("image", data.titlePhoto)
        formData.append("content", data.content)

        handleCreatePost(formData)
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 md:grid-cols-2 md:gap-5'>
        <div>
            <FormBox>
                <Label htmlFor="title">Title</Label>
                <Input {...register("title")} id='title' type="text" variant={errors.title && "primary-error"} placeholder='Title' />
                <InputErrorMessage errors={errors.title} />
            </FormBox>

            <FormBox>
                <div className='flex'>
                    <Label htmlFor="title-photo" variant='file'>
                        Title photo. Choose file
                        <input id='title-photo' type="file" className='hidden' onChange={handleChangeImage} />
                    </Label>
                </div>
                <InputErrorMessage errors={errors.titlePhoto as FieldError} />

                <div className='mt-2'>
                    <ImageFormHolder photo={titlePhoto} />
                </div>
            </FormBox>
        </div>

        <div>
            <FormBox>
                <Label>Content</Label>
                <Editor value={content} onChange={handleChangeContent} />
                <InputErrorMessage errors={errors.content} />
            </FormBox>

            <div className='flex'>
                <Button className='w-full max-w-[300px] mx-auto' disabled={isCreatingPostPending}>
                    {isCreatingPostPending ? "Creating Blog..." : "Create Blog"}
                </Button>
            </div>
        </div>
    </form>
  )
}

export default BlogForm