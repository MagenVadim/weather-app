import s from "./Popup.module.scss"
import {Item} from '../../pages/Home/components/ThisDayInfo/ThisDayInfo';
import {ThisDayItem} from '../../pages/Home/components/ThisDayInfo/ThisDayItem';
import { GlobalSwgSelector } from '../../assets/icons/global/GlobalSwgSelector'

interface Props {};

export const Popup = ({}: Props) => {
    const items = [
      {
        icon_id:'temp',
        name:'temperature',
        value:'20°- feels like 17°',
      },
      {
        icon_id:'pressure',
        name:'pressure',
        value:'765 mm Hg - normal',
      },
      {
        icon_id:'precipitation',
        name:'precipitation',
        value:'no precipitation',
      },
      {
        icon_id:'wind',
        name:'wind',
        value:'3 m/s southwest - light wind',
      },
      ];
  return (
  <>
    <div className={s.blur}></div>
    
    <div className={s.popup}>
      <div className={s.day}>
        <div className={s.day_temp}>12°</div>
        <div className={s.day_name}>Wednesday</div>
        <div className={s.img}>
          <GlobalSwgSelector id="sun"/>
        </div>
        <div className={s.day_time}>Time: <span>21:54</span></div>
        <div className={s.day_city}>City: <span>Tel-Aviv</span></div>
      </div>

        <div className={s.this__day__info__items}>
            {items.map((item: Item)=>(
                <ThisDayItem key={item.icon_id} item={item} />
            ))}
        </div>

        <div className={s.close}>
            <GlobalSwgSelector id="close"/>
        </div>
    </div>
  </>
    
  )
}

