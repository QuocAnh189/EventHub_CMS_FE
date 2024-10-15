import { InputText } from 'primereact/inputtext'
import React from 'react'

interface IProps {
  text: string
}

const TextColumn = (props: IProps) => {
  const { text } = props
  return <div className=''>{text}</div>
}

export default TextColumn
