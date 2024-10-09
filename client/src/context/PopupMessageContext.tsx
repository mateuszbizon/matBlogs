"use client"

import { createContext, ReactNode, useContext, useEffect, useRef, useState } from "react";

type TPopupMessageContext = {
    isError: boolean;
    showErrorMessage: (message: string) => void;
    showSuccessMessage: (message: string) => void;
    hideMessage: () => void;
    messageOpen: boolean;
    message: string;
}

const PopupMessageContext = createContext<TPopupMessageContext>({
    isError: false,
    showErrorMessage: () => {},
    showSuccessMessage: () => {},
    hideMessage: () => {},
    messageOpen: false,
    message: ""
})

export function usePopupMessage() {
    return useContext(PopupMessageContext)
}

export function PopupMessageProvider({ children }: { children: ReactNode }) {
    const [isError, setIsError] = useState(false)
    const [message, setMessage] = useState<string>("")
    const [messageOpen, setMessageOpen] = useState(false)

    const timeoutRef = useRef<NodeJS.Timeout | null>(null)

    function showErrorMessage(message: string) {
        startTimeout()
        setIsError(true)
        setMessage(message)
        setMessageOpen(true)
    }

    function showSuccessMessage(message: string) {
        startTimeout()
        setIsError(false)
        setMessage(message)
        setMessageOpen(true)
    }

    function hideMessage() {
      setMessageOpen(false)
      clearAutoTimeout()
    }

    function clearAutoTimeout() {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = null
      }
    }

    function startTimeout() {
      timeoutRef.current = setTimeout(() => {
        hideMessage()
      }, 5000)
    }

    const value: TPopupMessageContext = {
        isError,
        showErrorMessage,
        showSuccessMessage,
        hideMessage,
        messageOpen,
        message
    }
    

  return (
    <PopupMessageContext.Provider value={value}>
        {children}
    </PopupMessageContext.Provider>
  )
}