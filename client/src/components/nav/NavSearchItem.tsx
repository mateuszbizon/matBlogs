"use client"

import React, { useState } from 'react'
import NavSearchItemsList from './NavSearchItemsList'
import { Popover } from 'react-tiny-popover'

function NavSearchItem() {
    const [searchOpen, setSearchOpen] = useState(false)
    const [searchOpenMobile, setSearchOpenMobile] = useState(false)

  return (
    <div>
        <Popover
          isOpen={searchOpen}
          positions={['bottom', 'left']}
          onClickOutside={() => setSearchOpen(false)}
          padding={10}
          containerClassName='hidden lg:block z-30'
          content={() => (
            <div className={`bg-white p-3 rounded-lg`}>
                <NavSearchItemsList closeNavSearchItem={() => setSearchOpen(false)} />
            </div>
          )}
        >
          <button className='nav-link hidden lg:block' onClick={() => setSearchOpen(prev => !prev)}>Search</button>
        </Popover>
        
        <div className='lg:hidden'>
          <button className='nav-link' onClick={() => setSearchOpenMobile(prev => !prev)}>Search</button>
          <div className={`pl-2 mt-2 overflow-hidden ${searchOpenMobile ? "max-h-[500px]" : "max-h-0"} transition-all duration-500`}>
              <NavSearchItemsList closeNavSearchItem={() => setSearchOpenMobile(false)} />
          </div>
        </div>
    </div>
  )
}

export default NavSearchItem