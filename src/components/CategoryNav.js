import React from 'react';
import './styles/CategoryNav.scss';

const CategoryNav = ({ category, getList }) => {

  return (
    <nav className="nav">
        <button className={ category === 'husky' ? 'nav-item nav-active': 'nav-item' } onClick={() => getList('husky')}>Husky</button>
        <span className="nav-separator">/</span>
        <button className={ category === 'hound' ? 'nav-item nav-active': 'nav-item' } onClick={() => getList('hound')}>Hound</button>
        <span className="nav-separator">/</span>
        <button className={ category === 'pug' ? 'nav-item nav-active': 'nav-item' } onClick={() => getList('pug')}>Pug</button>
        <span className="nav-separator">/</span>
        <button className={ category === 'labrador' ? 'nav-item nav-active': 'nav-item' } onClick={() => getList('labrador')}>Labrador</button>
    </nav>    
  )
}

export default CategoryNav;