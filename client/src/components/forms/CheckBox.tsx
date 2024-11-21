import React, { PropsWithChildren } from 'react'

type CheckBoxProps = PropsWithChildren

function CheckBox({ children }: CheckBoxProps) {
  return (
    <div className='flex items-center space-x-2'>
        {children}
    </div>
  )
}

export default CheckBox