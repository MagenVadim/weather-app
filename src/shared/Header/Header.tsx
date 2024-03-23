import React from 'react'
import Select from 'react-select'
import s from "./Header.module.scss"
import { GlobalSwgSelector } from '../../assets/icons/global/GlobalSwgSelector'

interface Props {}

export const Header = (props: Props) => {
  const options = [
    { value: 'city-1', label: 'Tel-Aviv' },
    { value: 'city-2', label: 'London' },
    { value: 'city-3', label: 'Rome' }
  ]

  const colourStyles = {
    control: (styles: any)=>({
      ...styles,
      backgroundColor: 'rgba(71, 147, 255, 0.2)',
      width: '194px',
      height: '37px',
      border: 'none',
      borderRadius: '10px',
      zIndex:100,
      'margin-left': '20px',
    })
  }


  return (
    <header className={s.header}>
        <div className={s.wrapper}>
          <div className={s.logo}>
            <GlobalSwgSelector id={"header-logo"}/>
          </div>
          <div className={s.title}>React weather</div>
        </div>

        <div className={s.wrapper}>
          <GlobalSwgSelector id={"change-theme"}/>
          <Select defaultValue={options[0]} styles={colourStyles} options={options} />
        </div>
    </header>
  )
}