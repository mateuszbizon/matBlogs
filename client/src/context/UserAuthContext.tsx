"use client"

import { TSignInResponse } from "@/types/responses/user.response";
import { createContext, useContext, useEffect, useState } from "react";

type TUserAuthContext = {
    saveUser: (user: TSignInResponse) => void;
    userData: TSignInResponse | null
    isSignedIn: boolean
}

const UserAuthContext = createContext<TUserAuthContext>({
    saveUser: () => {},
    userData: null,
    isSignedIn: false
})

export function useUserAuth() {
    return useContext(UserAuthContext)
}

export function UserAuthProvider({ children }: { children: React.ReactNode }) {
    const [userData, setUserData] = useState<TSignInResponse | null>(null)

    function saveUser(user: TSignInResponse) {
        localStorage.setItem("user", JSON.stringify(user))
        setUserData(user)
    }

    useEffect(() => {
        const user = localStorage.getItem("user")

        if (user) {
            setUserData(JSON.parse(user))
        }
    }, [])    

    const value: TUserAuthContext = {
        saveUser,
        userData,
        isSignedIn: userData ? true : false
    }

  return (
    <UserAuthContext.Provider value={value}>
        {children}
    </UserAuthContext.Provider>
  )
}