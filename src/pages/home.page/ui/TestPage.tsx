import React from 'react'

const TestPage = () => {
  return (
    <div className='w-full flex justify-center items-center'>
      {process.env.API_URL}
    </div>
  )
}

export default TestPage
