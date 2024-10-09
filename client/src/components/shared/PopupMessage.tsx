"use client"

import { usePopupMessage } from '@/context/PopupMessageContext'
import React from 'react'

function PopupMessage() {
    const { message, messageOpen, isError, hideMessage } = usePopupMessage()

  return (
    <div className={`fixed top-0 left-1/2 -translate-x-1/2 rounded-lg p-5 w-[300px] min-h-[50px] z-30 ${isError ? "bg-error" : "bg-success"} ${messageOpen ? "translate-y-0" : "-translate-y-full"} transition-transform duration-300`} onClick={hideMessage}>
        <p className='text-center text-white text-lg font-medium'>{message}</p>
    </div>
  )
}

export default PopupMessage