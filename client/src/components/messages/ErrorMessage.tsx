import React from 'react'

type ErrorMessageProps = {
    statusCode?: number;
}

function ErrorMessage({ statusCode }: ErrorMessageProps) {
  const errorMessages: { [key: string]: string } = {
    404: "Page you are looking for doesn't exist.",
    403: "You don't have access to this page."
  }

  return (
    <div className='flex flex-col items-center gap-5 text-dark'>
        <span className='font-bold text-2xl'>{statusCode && errorMessages[statusCode] || "Something bad happened."}</span>
    </div>
  )
}

export default ErrorMessage