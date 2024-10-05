import React from 'react'

function Nav() {
  return (
    <nav className='bg-light fixed left-0 top-0 w-full py-2'>
        <div className='main-container flex'>
            <div className='flex items-center gap-10 text-dark'>
                <span>matBlogs</span>
                <ul className='flex gap-5'>
                    <li>Create blog</li>
                    <li>Search</li>
                </ul>
            </div>

            <div className='ml-auto'>
                <button className='bg-primary px-4 py-2'>My profile</button>
            </div>
        </div>
    </nav>
  )
}

export default Nav