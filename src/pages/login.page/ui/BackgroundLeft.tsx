import React from 'react'

//next
import Link from 'next/link'
import Image from 'next/image'

//assets
import logo from '@shared/assets/images/logo_text.png'
import background from '@shared/assets/images/bg_auth.png'

const BackgroundLeft = () => {
  return (
    <div className='hidden w-full xl:block xl:w-1/2'>
      <div className='px-26 py-17.5 text-center'>
        <Link className='mb-5.5 inline-block' href='/'>
          <Image
            className=''
            src={logo}
            alt='Logo'
            width={176}
            height={32}
            style={{
              width: 'auto',
              height: 'auto'
            }}
          />
        </Link>

        <p className='2xl:px-20 text-black dark:text-white'>
          Hello administrator, sign in to your account and start managing
        </p>

        <span className='mt-15 inline-block'>
          <Image
            src={background}
            alt='background'
            width={550}
            height={350}
            style={{
              width: 'auto',
              height: 'auto'
            }}
            priority
          />
        </span>
      </div>
    </div>
  )
}

export default BackgroundLeft
