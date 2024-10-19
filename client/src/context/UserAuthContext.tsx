"use client"

import { TSignInResponse } from "@/types/responses/user.response";
import { createContext, useContext, useEffect, useState } from "react";

type TUserAuthContext = {
    saveUser: (user: TSignInResponse) => void;
    userData: TSignInResponse | null
}

const UserAuthContext = createContext<TUserAuthContext>({
    saveUser: () => {},
    userData: null
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
        userData
    }

  return (
    <UserAuthContext.Provider value={value}>
        {children}
    </UserAuthContext.Provider>
  )
}