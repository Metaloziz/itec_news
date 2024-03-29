import { FC } from 'react'

import style from './Section.module.scss'

import { Button } from 'components/Button/Button'
import { SectionType } from 'store/sections_reducer'

type SectionPropsType = {
  section: SectionType
  removeSection: (id: number) => void
}
export const Section: FC<SectionPropsType> = ({ section, removeSection }) => {
  console.log()

  return (
    <div className={style.container}>
      <div>{section.id}</div>
      <div>{section.name}</div>
      <Button name="удалить" onClick={() => removeSection(section.id)} />
    </div>
  )
}
