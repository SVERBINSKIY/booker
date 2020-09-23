import React from 'react'

export const CatalogHeader = ({ countFindHotels, catalogLayout, catalogToGrid, catalogToList }) => {

  const handleClickToGrid = () => {
    catalogToGrid('grid')
  }
  const handleClickToList = () => {
    catalogToList('list')
  }

  return (
    <div className='catalog__header'>
      <span className='header-title'>{countFindHotels} Hotels Find</span>
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
        <div className={`layout ${catalogLayout === 'list' ? 'active' : ''}`} onClick={handleClickToList}>
          <i className="fa fa-bars" aria-hidden="true"></i>
        </div>
        <div className={`layout ${catalogLayout === 'grid' ? 'active' : ''}`} onClick={handleClickToGrid}>
          <i className="fa fa-th" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  )
}