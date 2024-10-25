"use client"

import { TPostFilters } from '@/types'
import React, { useEffect, useState } from 'react'
import Button from '../ui/Button'

type UserPostsFiltersProps = {
    onChange: (filters: TPostFilters) => void
}

function UserPostsFilters({ onChange }: UserPostsFiltersProps) {
    const [sort, setSort] = useState<TPostFilters["sort"]>("desc")

    useEffect(() => {
        onChange({ sort })
    }, [sort])
    

  return (
    <div className='flex space-x-4'>
        <Button variant={sort === "desc" ? "secondary" : "white"} padding='small' onClick={() => setSort("desc")}>Latest</Button>
        <Button variant={sort === "asc" ? "secondary" : "white"} padding='small' onClick={() => setSort("asc")}>Oldest</Button>
    </div>
  )
}

export default UserPostsFilters