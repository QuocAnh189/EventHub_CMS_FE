import React from 'react'

//next
import Image from 'next/image'

const ImageColumn = (rowData: any) => {
  return (
    <div className=''>
      <Image width={50} height={50} src={rowData.icon} alt={rowData.name} />
    </div>
  )
}

export default ImageColumn
