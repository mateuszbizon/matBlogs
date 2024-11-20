"use client"

import React, { useEffect, useState } from 'react'
import FormBox from './FormBox'
import Label from '../ui/Label'
import { TImage } from '@/types'
import useChangeImage from '@/hooks/useChangeImage'
import ImageFormHolder from './ImageFormHolder'
import Button from '../ui/Button'
import { getFileFromUrl } from '@/utils/getFileFromUrl'
import { FieldError, useForm } from 'react-hook-form'
import { TUserProfileSchema, userProfileSchema } from '@/validations/userProfileSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import InputErrorMessage from './InputErrorMessage'

type ProfilePhotoFormProps = {
    userPhoto?: string;
}

function ProfilePhotoForm({ userPhoto }: ProfilePhotoFormProps) {
    const { changeImage } = useChangeImage()
    const [photo, setPhoto] = useState<TImage | null>(null)
    const { handleSubmit, setValue, formState: { errors } } = useForm<TUserProfileSchema>({
        resolver: zodResolver(userProfileSchema),
    })

    function handleChangeImage(e: React.ChangeEvent<HTMLInputElement>) {
        const image = changeImage(e)

        setPhoto(image)
        setValue("photo", image?.file)
    }

    useEffect(() => {
        if (userPhoto) {
            getFileFromUrl(userPhoto, "edited-file").then(file => {
                setPhoto({ file, url: userPhoto })
                setValue("photo", file)
            })
        }
    }, [])

    function onSubmit(data: TUserProfileSchema) {
        console.log(data)
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <FormBox>
            <div className='flex'>
                <Label htmlFor='photo' variant='file'>
                    Profile photo. Choose file
                    <input id='photo' type='file' className='hidden' onChange={handleChangeImage} />
                </Label>
            </div>

            <InputErrorMessage errors={errors.photo as FieldError} />

            <div className='mt-2'>
                <ImageFormHolder photo={photo} />
            </div>
        </FormBox>

        <Button type='submit'>
            Update profile
        </Button>
    </form>
  )
}

export default ProfilePhotoForm