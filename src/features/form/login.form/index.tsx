'use client'
import React, { useRef, useState } from 'react'

//next
import { useRouter } from 'next/navigation'

//icon
import { IconEmail } from '@shared/assets/svgs/ui/common/IconEmail'
import { IconGoogle } from '@shared/assets/svgs/ui/common/IconGoogle'
import { IconLock } from '@shared/assets/svgs/ui/common/IconLock'

// redux
import { useSignInMutation } from '@app/redux/apis/auth.api'
import { IAuth } from '@shared/interfaces/auth/model'
import { useAppDispatch } from '@app/hooks/useRedux'

const LoginForm = () => {
  const route = useRouter()
  const dispatch = useAppDispatch()
  const [Login, { isLoading }] = useSignInMutation()

  const identity = useRef<HTMLInputElement>(null)
  const password = useRef<HTMLInputElement>(null)

  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = { identity: identity.current?.value!, password: password.current?.value! }
    try {
      const result: IAuth = await Login(data).unwrap()
      if (result) {
        localStorage.setItem('token', JSON.stringify(result))

        // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/profile`, {
        //   headers: { Authorization: `Bearer ${result.accessToken}` }
        // })

        // const user = await response.json()

        // if (user) {
        //   dispatch(setUser(user.data))
        //   route.push('/organization')
        // }

        route.push('/')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='mb-4'>
        <label className='mb-2.5 block font-medium text-black dark:text-white'>Email</label>
        <div className='relative'>
          <input
            ref={identity}
            type='text'
            placeholder='Enter your email or username'
            className='w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary'
          />

          <span className='absolute right-4 top-4'>
            <IconEmail className='fill-current' />
          </span>
        </div>
      </div>

      <div className='mb-6'>
        <label className='mb-2.5 flex gap-2 items-center font-medium text-black dark:text-white'>
          Password
          <i
            onClick={() => setShowPassword(!showPassword)}
            className={`pi ${showPassword ? 'pi-eye' : 'pi-eye-slash'} hover:cursor-pointer`}
            style={{ fontSize: '1.2rem' }}
          ></i>
        </label>
        <div className='relative'>
          <input
            ref={password}
            type={showPassword ? 'text' : 'password'}
            placeholder='6+ Characters, 1 Capital letter'
            className='w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary'
          />

          <span className='absolute right-4 top-4'>
            <IconLock className='fill-current' />
          </span>
        </div>
      </div>

      <div className='mb-5'>
        <button
          type='submit'
          className='w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90'
        >
          {isLoading ? <span className='loading loading-spinner loading-xs'></span> : 'Sign In'}
        </button>
      </div>

      <button className='flex w-full items-center justify-center gap-3.5 rounded-lg border border-stroke bg-gray p-4 hover:bg-opacity-50 dark:border-strokedark dark:bg-meta-4 dark:hover:bg-opacity-50 text-black dark:text-white'>
        <span>
          <IconGoogle />
        </span>
        Sign in with Google
      </button>
    </form>
  )
}

export default LoginForm
