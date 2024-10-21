import React from 'react'

type ErrorMessageProps = {
    message: string;
}

function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className='flex flex-col items-center gap-5 text-dark'>
        <span className='font-bold text-2xl'>{message}</span>
    </div>
  )
}

export default ErrorMessage