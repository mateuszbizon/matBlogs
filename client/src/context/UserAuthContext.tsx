"use client"

import { getSignedInUserData } from "@/api/auth";
import { TMainResponse } from "@/types/responses";
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
        setUserData(user)
    }  

    useEffect(() => {
      getSignedInUserData().then((data: TMainResponse<TSignInResponse>) => {
        if (data.data) {
            setUserData(data.data)
        }
      }).catch(() => {
        setUserData(null)
      })
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