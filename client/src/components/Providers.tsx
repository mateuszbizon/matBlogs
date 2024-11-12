"use client"

import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PopupMessageProvider } from '@/context/PopupMessageContext';
import { UserAuthProvider } from '@/context/UserAuthContext';
import NavProvider from '@/context/NavContext';

type Props = {
    children: React.ReactNode;
}

function Providers({ children }: Props) {
    const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
        <UserAuthProvider>
            <PopupMessageProvider>
                <NavProvider>
                    {children}
                </NavProvider>
            </PopupMessageProvider>
        </UserAuthProvider>
    </QueryClientProvider>
  )
}

export default Providers