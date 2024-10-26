"use client"

import React, { useEffect, useState } from 'react'
import Button from '../ui/Button'
import Image from 'next/image'
import useChangeImage from '@/hooks/useChangeImage'
import { TImage } from '@/types'

function BlogForm() {
    const { changeImage } = useChangeImage()
    const [titlePhoto, setTitlePhoto] = useState<TImage | null>(null)

    function handleChangeImage(event: React.ChangeEvent<HTMLInputElement>) {
        const image = changeImage(event)

        setTitlePhoto(image)
    }

  return (
    <form className='grid grid-cols-1 md:grid-cols-2 md:gap-5'>
        <div>
            <div className='form-box'>
                <label htmlFor="title" className='label'>Title</label>
                <input id='title' type="text" className='input' />
            </div>

            <div className='form-box'>
                <div className='flex'>
                    <label htmlFor="title-photo" className='button-white p-3 button-common cursor-pointer'>
                        Title photo. Choose file
                        <input id='title-photo' type="file" className='hidden' onChange={handleChangeImage} />
                    </label>
                </div>

                <div className={`w-full aspect-video mt-2 ${!titlePhoto && "border border-primary"}`}>
                    {titlePhoto ? (
                        <Image src={titlePhoto.url} width={200} height={200} alt='Chosen photo' className='w-full h-full object-cover' />
                    ) : (
                        <div className='flex justify-center items-center text-dark h-full font-semibold text-lg'>
                            Choose file to see it here.
                        </div>
                    )}
                </div>
            </div>
        </div>

        <div>
            <div className='flex'>
                <Button className='w-full max-w-[300px] mx-auto'>Create Blog</Button>
            </div>
        </div>
    </form>
  )
}

export default BlogForm