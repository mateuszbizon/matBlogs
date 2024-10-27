import { TImage } from '@/types'
import Image from 'next/image'
import React from 'react'

type ImageHolderProps = {
    photo: TImage | null;
}

function ImageFormHolder({ photo }: ImageHolderProps) {
  return (
    <div className={`w-full aspect-video ${!photo && "border border-primary"}`}>
        {photo ? (
            <Image src={photo.url} width={200} height={200} alt='Chosen photo' className='w-full h-full object-cover' />
        ) : (
            <div className='flex justify-center items-center text-dark h-full font-semibold text-lg'>
                Choose file to see it here.
            </div>
        )}
    </div>
  )
}

export default ImageFormHolder