import { FC, memo, ReactElement } from 'react'

import style from './Pagination.module.scss'

import { Button } from 'components/Button/Button'
import { ButtonsPagination } from 'utils/enums'

export type ButtonsPropsType = {
  currentPage: number
  pagesCount: number
  totalCount: number
  setCurrentPage: (currentPage: number) => void
}

const MAIN_COLOR = '#2F5A53'

export const Buttons: FC<ButtonsPropsType> = memo(
  ({ setCurrentPage, currentPage, pagesCount, totalCount }): ReactElement => {
    const { One, Two, Four, Three } = ButtonsPagination
    const lastPage = Math.ceil(totalCount / pagesCount)
    let buttons = []

    for (let index = 1; index <= lastPage; index += One) {
      buttons.push(
        <Button
          name={index.toString()}
          key={index}
          style={{ background: currentPage === index ? MAIN_COLOR : undefined }}
          onClick={() => setCurrentPage(index)}
        />,
      )
    }

    // 1 ... 10 11 (12) 13 14 ... 100
    if (currentPage + Two < lastPage) {
      buttons[currentPage + Two] = (
        <span className={style.points} key={currentPage + Three}>
          {' ... '}
        </span>
      )
      buttons = buttons.filter((p, i) => i < currentPage + Three || i === lastPage - One)
    }
    if (currentPage > Four) {
      buttons[One] = (
        <span className={style.points} key={Two}>
          {' ... '}
        </span>
      )
      buttons = buttons.filter((button, i) => i < Two || i > currentPage - Four)
    }

    return <div className={style.mainBlock}>{buttons}</div>
  },
)
