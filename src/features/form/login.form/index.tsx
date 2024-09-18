'use client'
import React from 'react'

//next
import Link from 'next/link'

//icon
import { IconEmail } from '@shared/assets/svgs/ui/common/IconEmail'
import { IconGoogle } from '@shared/assets/svgs/ui/common/IconGoogle'
import { IconLock } from '@shared/assets/svgs/ui/common/IconLock'

// redux
import { useSignInMutation } from '@app/redux/apis/auth.api'

const LoginForm = () => {
  const [Login] = useSignInMutation()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await Login({ identity: '', password: '' })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='mb-4'>
        <label className='mb-2.5 block font-medium text-black dark:text-white'>
          Email
        </label>
        <div className='relative'>
          <input
            type='email'
            placeholder='Enter your email'
            className='w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary'
          />

          <span className='absolute right-4 top-4'>
            <IconEmail className='fill-current' />
          </span>
        </div>
      </div>

      <div className='mb-6'>
        <label className='mb-2.5 block font-medium text-black dark:text-white'>
          Password
        </label>
        <div className='relative'>
          <input
            type='password'
            placeholder='6+ Characters, 1 Capital letter'
            className='w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary'
          />

          <span className='absolute right-4 top-4'>
            <IconLock className='fill-current' />
          </span>
        </div>
      </div>

      <div className='mb-5'>
        <input
          type='submit'
          value='Sign In'
          className='w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90'
        />
      </div>

      <button className='flex w-full items-center justify-center gap-3.5 rounded-lg border border-stroke bg-gray p-4 hover:bg-opacity-50 dark:border-strokedark dark:bg-meta-4 dark:hover:bg-opacity-50 text-black dark:text-white'>
        <span>
          <IconGoogle />
        </span>
        Sign in with Google
      </button>

      <div className='mt-6 text-center'>
        <p className='text-black dark:text-white'>
          Don’t have any account?{' '}
          <Link href='/auth/signup' className='text-primary'>
            Sign Up
          </Link>
        </p>
      </div>
    </form>
  )
}

export default LoginForm
