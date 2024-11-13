import React, { PropsWithChildren } from 'react'

type SearchInputBoxProps = PropsWithChildren

function SearchInputBox({ children }: SearchInputBoxProps) {
  return (
    <div>
        {children}
    </div>
  )
}

export default SearchInputBox