import React, { PropsWithChildren } from 'react'
import CircleLoading from '../loadings/CircleLoading';

type SearchContentProps = PropsWithChildren & {
    isPending: boolean;
}

function SearchContent({ children, isPending }: SearchContentProps) {
  return (
    <div className='min-h-[100px] max-h-[300px] mt-5 overflow-auto'>
        {isPending && <CircleLoading />}
        {children}
    </div>
  )
}

export default SearchContent