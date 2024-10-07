import React from 'react'
import ButtonLink from '../ui/ButtonLink'
import HomeHeroGradient from './HomeHeroGradient'

function HomeHero() {
  return (
    <header className='relative h-screen main-padding-y overflow-hidden'>
        <HomeHeroGradient />
        <div className='main-container'>
            <div className='flex flex-col gap-10 max-w-[500px]'>
                <h1 className='heading1'>
                    matBlogs <br /> All blogs in one place
                </h1>
                <p className='font-medium text-xl sm:text-2xl'>
                    Experimental app where you can share your story and thoughts with other people.
                </p>
                <div className='flex mt-5'>
                    <ButtonLink href='/'>
                        Get started
                    </ButtonLink>
                </div>
            </div>
        </div>
    </header>
  )
}

export default HomeHero