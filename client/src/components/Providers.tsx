"use client"

import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PopupMessageProvider } from '@/context/PopupMessageContext';

type Props = {
    children: React.ReactNode;
}

function Providers({ children }: Props) {
    const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
        <PopupMessageProvider>
            {children}
        </PopupMessageProvider>
    </QueryClientProvider>
  )
}

export default Providers