import React from 'react'
import './checkBox.css'

const CheckBox = ({
  isCheckBoxChecked,
  setIsCheckBoxChecked,
  id,
}: {
  isCheckBoxChecked: boolean
  setIsCheckBoxChecked: (value: boolean) => void
  id: string
}) => {
  return (
    <input
      id={id}
      type='checkbox'
      checked={isCheckBoxChecked}
      onChange={(event) => setIsCheckBoxChecked(event.target.checked)}
    />
  )
}

export default CheckBox
