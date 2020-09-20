import React from 'react'

export const CatalogHeader = () => {
  return (
    <div className='catalog__header'>
      <span>8 Hotels Find</span>
      <div className='catalog__header__right-menu'>
        <div className='sort'>
          Sort By
          <div className='sort__hide'>
            <ul>
              <li className='sort__hide__item'>Price: To Lower</li>
              <li className='sort__hide__item'>Price: To Hight</li>
            </ul>
          </div>
        </div>
        <div className='layout'>
          <i className="fa fa-bars" aria-hidden="true"></i>
        </div>
        <div className='layout active'>
          <i className="fa fa-th" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  )
}