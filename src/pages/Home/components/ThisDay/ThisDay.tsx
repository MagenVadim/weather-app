import React from 'react'
import s from "./ThisDay.module.scss"
import { GlobalSwgSelector } from '../../../../assets/icons/global/GlobalSwgSelector'
import { Weather } from '../../../../store/types/types'

interface Props {
  weather: Weather;
}

export const ThisDay = ({weather}: Props) => {
  return (
    <div className={s.this__day}>
          <div className={s.top__block}>
            <div className={s.top__block__wrapper}>
              <div className={s.this__temp}>{Math.floor(weather.main.temp)}°</div>
              <div className={s.this__day_name}>Today</div>
            </div>
            <GlobalSwgSelector id={"sun"}/>

          </div>


          <div className={s.bottom__block}>
            <div className={s.this__time}>Time: <span>21:54</span></div>
            <div className={s.this__city}>City: <span>{weather.name}</span></div>
          </div>
    </div>
  )
}