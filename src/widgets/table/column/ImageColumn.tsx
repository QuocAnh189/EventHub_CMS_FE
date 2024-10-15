import React from 'react'

//next
import Image from 'next/image'

//assets
import image_default from '@shared/assets/images/image_default.jpg'

interface IProps {
  url: string
}

const ImageColumn = (props: IProps) => {
  const { url } = props
  return (
    <div className=''>
      <Image width={50} height={50} src={url ? url : image_default} alt={url} />
    </div>
  )
}

export default ImageColumn
