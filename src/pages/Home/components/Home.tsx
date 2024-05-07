import s from './Home.module.scss'
import {ThisDay} from './ThisDay/ThisDay'
import {ThisDayInfo} from './ThisDayInfo//ThisDayInfo'
import {Days} from './Days/Days'
import { useCustomDispatch, useCustomSelector } from '../../../hooks/store'
import { useEffect } from 'react'
import { fetchCurrentWeater } from '../../../store/thunks/fetchCurrentWeater'
import {selectCurrentWeaterData} from '../../../store/selectors'

interface Props {}

export const Home = (props: Props) => {
  const dispatch = useCustomDispatch();

  const {weather} = useCustomSelector(selectCurrentWeaterData)

  useEffect(()=>{
    dispatch(fetchCurrentWeater('paris'))
  },[])

  return (
    <div className={s.home}>
      <div className={s.wrapper}>
        <ThisDay weather={weather}/>
        <ThisDayInfo/>
      </div>
      <Days/>
    </div>
  )
}