import Select from 'react-select'
import s from "./Header.module.scss"
import { GlobalSwgSelector } from '../../assets/icons/global/GlobalSwgSelector'
import { useTheme } from '../../hooks/useTheme'
import {Theme} from "../../context/ThemeContext"

interface Props {}

export const Header = (props: Props) => {

  const theme = useTheme();

  const options = [
    { value: 'city-1', label: 'Tel-Aviv' },
    { value: 'city-2', label: 'London' },
    { value: 'city-3', label: 'Rome' }
  ]

  const colourStyles = {
    control: (styles: any)=>({
      ...styles,
      backgroundColor: theme.theme===Theme.DARK ? '#4f4f4f' : 'rgba(71, 147, 255, 0.2)',
      width: '194px',
      height: '37px',
      border: 'none',
      borderRadius: '10px',
      zIndex:100,
      'margin-left': '20px',
    }),
    singleValue: (styles: any)=>({
      ...styles,
      color: theme.theme===Theme.DARK ? '#fff' : '#000',
    })
  }

  function changeTheme(){
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
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
          <div className={s.change_theme} onClick={changeTheme}>
            <GlobalSwgSelector id={"change-theme"}/>
          </div>
          
          <Select defaultValue={options[0]} styles={colourStyles} options={options} />
        </div>
    </header>
  )
}