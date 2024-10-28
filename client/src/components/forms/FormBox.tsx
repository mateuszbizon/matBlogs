import React from 'react'

type FormBoxProps = {
    children: React.ReactNode;
}

function FormBox({ children }: FormBoxProps) {
  return (
    <div className='form-box'>
        {children}
    </div>
  )
}

export default FormBox