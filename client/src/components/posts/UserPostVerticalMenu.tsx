"use client"

import React, { useState } from 'react'
import { Popover } from 'react-tiny-popover'
import ElipsisVerticalIcon from '../icons/ElipsisVerticalIcon'
import ButtonLink from '../ui/ButtonLink'
import PostDelete from './PostDelete'

type UserPostVerticalMenuProps = {
    postId: string;
    postSlug: string;
}

function UserPostVerticalMenu({ postId, postSlug }: UserPostVerticalMenuProps) {
    const [menuOpen, setMenuOpen] = useState(false)   

  return (  
    <div>
        <Popover
            isOpen={menuOpen}
            positions={["top"]}
            onClickOutside={() => setMenuOpen(false)}
            padding={10}
            align='start'
            containerClassName='z-30'
            content={() => (
                <div className="bg-white p-3 rounded-lg">
                    <ButtonLink href={`/edit-blog/${postSlug}`} variant='secondary-no-bg' padding='small'>Edit post</ButtonLink>
                    <PostDelete postId={postId} userProfilePage={true} />
                </div>
            )}
        >
            <button className='button-circle button-common' onClick={() => setMenuOpen(prev => !prev)}>
                <div className='size-5'>
                    <ElipsisVerticalIcon />
                </div>
            </button>
        </Popover>
    </div>
  )
}

export default UserPostVerticalMenu