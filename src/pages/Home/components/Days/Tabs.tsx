import s from "./Days.module.scss"

interface Props {};

export interface Tab {
  value: string,
}

export const Tabs = (props: Props) => {

  const tabs: Tab[] = [
    {
      value: "for week"
    },
    {
      value: "for 10 days"
    },
    {
      value: "for month"
    },
  ]

  return (
    <div className={s.tabs}>
      <div className={s.tabs_wrapper}>{
        tabs.map((tab)=>(
          <div className={s.tab} key={tab.value}>
            {tab.value}
          </div>
        ))          
      }
      </div>
      <div className={s.cancel}>"Cancel"</div>
    </div>
  )
}

