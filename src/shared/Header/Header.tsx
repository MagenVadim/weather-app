import React from 'react'
import Select from 'react-select'
import s from "./Header.module.scss"
import { GlobalSwgSelector } from '../../assets/icons/global/GlobalSwgSelector'

interface Props {}

export const Header = (props: Props) => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  return (
    <header className={s.header}>
        <div className={s.wrapper}>
          <div className={s.logo}>
            <GlobalSwgSelector id={"header-logo"}/>
          </div>
          <div className={s.title}>React weather</div>
        </div>
          <GlobalSwgSelector id={"change-theme"}/>
          <Select options={options} />
        <div className={s.wrapper}></div>
    </header>
  )
}