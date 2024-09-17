import React from 'react'

//next
import Link from 'next/link'

//icon
import { IconFacebook } from '@shared/assets/svgs/ui/social/IconFacebook'
import { IconTwitter } from '@shared/assets/svgs/ui/social/IconTwitter'
import { IconInstagram } from '@shared/assets/svgs/ui/social/IconInstagram'
import { IconGitHub } from '@shared/assets/svgs/ui/social/IconGitHub'

const SocialLink = () => {
  return (
    <div className='mt-6.5'>
      <h4 className='mb-3.5 font-medium text-black dark:text-white'>
        Follow me on
      </h4>
      <div className='flex items-center justify-center gap-3.5'>
        <Link
          href='https://www.facebook.com/tranphuocanhquoc2003'
          className='hover:text-primary'
          aria-label='social-icon'
        >
          <IconFacebook className='fill-current' />
        </Link>
        <Link href='' className='hover:text-primary' aria-label='social-icon'>
          <IconTwitter className='fill-current' />
        </Link>
        <Link
          href='https://www.instagram.com/aq18.09_t/'
          className='hover:text-primary'
          aria-label='social-icon'
        >
          <IconInstagram className='fill-current' />
        </Link>
        <Link
          href='https://github.com/QuocAnh189'
          className='hover:text-primary'
          aria-label='social-icon'
        >
          <IconGitHub className='fill-current' />
        </Link>
      </div>
    </div>
  )
}

export default SocialLink
