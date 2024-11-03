"use client"

import React, { useEffect, useRef } from 'react'
import Button from './ui/Button';

type DeleteModalProps = {
    children: React.ReactNode;
    open: boolean;
    onClose: () => void;
}

function DeleteModal({ children, open, onClose }: DeleteModalProps) {
    const modalRef = useRef<HTMLDialogElement>(null)

    function openModal() {
        modalRef.current?.showModal()
    }

    function closeModal() {
        modalRef.current?.close()
        onClose()

    }

    useEffect(() => {
        if (open && !modalRef.current?.open) {
            openModal()
            return
        }

        closeModal()
    }, [open])

  return (
    <dialog ref={modalRef} className='modal'>
        <div className='mb-5 text-dark text-lg text-center'>
            {children}
        </div>

        <div className='flex space-x-3 justify-center'>
            <Button onClick={closeModal} variant='secondary' padding='small'>Cancel</Button>
            <Button variant='delete' padding='small'>Delete</Button>
        </div>
    </dialog>
  )
}

export default DeleteModal