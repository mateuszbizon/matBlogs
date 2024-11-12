import React, { createContext, useContext, useState } from "react";

type TNavContext = {
    navMobileOpen: boolean;
    openNavMobile: () => void;
    closeNavMobile: () => void;
}

const NavContext = createContext<TNavContext>({
    navMobileOpen: false,
    openNavMobile: () => {},
    closeNavMobile: () => {}
})

export function useNav() {
    return useContext(NavContext)
}

export default function NavProvider({ children }: { children: React.ReactNode }) {
    const [navMobileOpen, setNavMobileOpen] = useState(false)

    function openNavMobile() {
        setNavMobileOpen(true)
    }

    function closeNavMobile() {
        setNavMobileOpen(false)
    }

    const value: TNavContext = {
        navMobileOpen,
        openNavMobile,
        closeNavMobile
    }

  return (
    <NavContext.Provider value={value}>
        {children}
    </NavContext.Provider>
  )
}