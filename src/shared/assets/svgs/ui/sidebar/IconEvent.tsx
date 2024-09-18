import React, { FC } from 'react'

export const IconEvent: FC<{ className: string }> = ({ className }) => (
  <svg
    className={className}
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    width='18'
    height='18'
    viewBox='0 0 32 32'
    version='1.1'
  >
    <path d='M21.125 26.938c-0.5 0-0.875-0.406-0.875-0.906v-4.438c0-0.5 0.375-0.875 0.875-0.875h4.438c0.5 0 0.906 0.375 0.906 0.875v4.438c0 0.5-0.406 0.906-0.906 0.906h-4.438zM25.563 21.594h-4.438v4.438h4.438v-4.438zM30 3c1.094 0 2 0.906 2 2v25c0 1.094-0.906 2-2 2h-28c-1.094 0-2-0.906-2-2v-25c0-1.094 0.906-2 2-2h8v-2c0-0.563 0.438-1 1-1s1 0.438 1 1v2h8v-2c0-0.563 0.438-1 1-1s1 0.438 1 1v2h8zM2 30h28v-25h-8v1c0 0.563-0.438 1-1 1s-1-0.438-1-1v-1h-8v1c0 0.563-0.438 1-1 1s-1-0.438-1-1v-1h-8v25z' />
  </svg>
)
