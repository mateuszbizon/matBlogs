import React from 'react'

type FormBoxProps = {
    children: React.ReactNode;
}

function FormBox({ children }: FormBoxProps) {
  return (
    <div className='mb-3 flex flex-col'>
        {children}
    </div>
  )
}

export default FormBox