import React from 'react'

type NoSearchedItemMessageProps = {
    message: string;
}

function NoSearchedItemMessage({ message }: NoSearchedItemMessageProps) {
  return (
    <p className='text-center text-dark text-lg'>{message}</p>
  )
}

export default NoSearchedItemMessage