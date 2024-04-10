import s from "./Days.module.scss"
import {Day} from "./Days"
import { GlobalSwgSelector } from "../../../../assets/icons/global/GlobalSwgSelector";

interface Props {
  itemDay: Day
}

export const Card = ({itemDay}: Props) => {

  const {day, day_info,  icon_id, temp_day, temp_night, info} = itemDay;

  return (
    <div className={s.card}>
      <div className={s.day}>{day}</div>
      <div className={s.day__info}>{day_info}</div>
      <div className={s.img}>
        <GlobalSwgSelector id={icon_id}/>
      </div>
      <div className={s.temp_day}>{temp_day}</div>
      <div className={s.temp_night}>{temp_night}</div>
      <div className={s.info}>{info}</div>
    </div>
  )
}

