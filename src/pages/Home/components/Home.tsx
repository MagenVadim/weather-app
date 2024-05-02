import s from './Home.module.scss'
import {ThisDay} from './ThisDay/ThisDay'
import {ThisDayInfo} from './ThisDayInfo//ThisDayInfo'
import {Days} from './Days/Days'
import { useCustomDispatch } from '../../../hooks/store'
import { useEffect } from 'react'
import { fetchCurrentWeater } from '../../../store/thunks/fetchCurrentWeater'

interface Props {}

export const Home = (props: Props) => {
  const dispatch = useCustomDispatch();

  useEffect(()=>{
    
  },[])

  return (
    <div className={s.home}>
      <div className={s.wrapper}>
        <ThisDay/>
        <ThisDayInfo/>
      </div>
      <Days/>
    </div>
  )
}