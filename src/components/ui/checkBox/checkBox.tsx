import React, { Dispatch, SetStateAction } from 'react'
import './checkBox.css'

const CheckBox = ({
  isCheckBoxChecked,
  setisCheckBoxChecked,
}: {
  isCheckBoxChecked: boolean
  setisCheckBoxChecked: Dispatch<SetStateAction<boolean>>
}) => {
  return (
    <input
      type='checkbox'
      checked={isCheckBoxChecked}
      onChange={(event) => setisCheckBoxChecked(event.target.checked)}
    />
  )
}

export default CheckBox
