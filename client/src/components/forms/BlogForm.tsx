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
import { TPostModel } from '@/types/models'
import { getFileFromUrl } from '@/utils/getFileFromUrl'
import useEditPost from '@/hooks/useEditPost'

type BlogFormProps = {
    post?: {
        id: TPostModel["id"];
        content: TPostModel["content"];
        title: TPostModel["title"];
        titlePhoto: TPostModel["titlePhoto"];
    }
}

function BlogForm({ post }: BlogFormProps) {
    const { handleCreatePost, isPendingCreatePost } = useCreatePost()
    const { handleEditPost, isPendingEditPost } = useEditPost()
    const { changeImage } = useChangeImage()
    const [titlePhoto, setTitlePhoto] = useState<TImage | null>(null)
    const [content, setContent] = useState(post ? post.content : "")
    const { register, handleSubmit, setValue, formState: { errors } } = useForm<TBlogSchema>({
        resolver: zodResolver(blogSchema),
        defaultValues: {
            title: post ? post.title : "",
            titlePhoto: null,
            content: content
        }
    })

    useEffect(() => {
        if (post) {
            getFileFromUrl(post.titlePhoto, "edited-file").then((file) => {
                setTitlePhoto({ file, url: post.titlePhoto })
                setValue("titlePhoto", file)
            })
        }
    }, [])

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

        if (post) {
            handleEditPost({
                postData: formData,
                postId: post.id
            })
            return
        }

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
                <Button className='w-full max-w-[300px] mx-auto' disabled={isPendingCreatePost || isPendingEditPost}>
                    {post ? isPendingEditPost ? "Editing post..." : "Edit post" : isPendingCreatePost ? "Creating post" : "Create post"}
                </Button>
            </div>
        </div>
    </form>
  )
}

export default BlogForm