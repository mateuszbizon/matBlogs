import React, { PropsWithChildren } from 'react'

type SearchContainerProps = PropsWithChildren & {
    searchOpen: boolean;
}

function SearchContainer({ children, searchOpen }: SearchContainerProps) {
  return (
    <div className={`fixed top-3 left-1/2 -translate-x-1/2 w-full max-w-[600px] bg-light p-3 rounded-lg z-30 ${searchOpen ? "opacity-100" : "opacity-0 pointer-events-none"} transition-all duration-300`}>
        {children}
    </div>
  )
}

export default SearchContainer