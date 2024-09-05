import React from 'react'
import './checkBox.css'

const CheckBox = ({
  isCheckBoxChecked,
  setIsCheckBoxChecked,
}: {
  isCheckBoxChecked: boolean
  setIsCheckBoxChecked: (value: boolean) => void
}) => {
  return (
    <input
      type='checkbox'
      checked={isCheckBoxChecked}
      onChange={(event) => setIsCheckBoxChecked(event.target.checked)}
    />
  )
}

export default CheckBox
