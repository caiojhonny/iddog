import React from 'react';
import './styles/CategoryNav.scss';

const CategoryNav = ({ category, getList }) => {

  return (
    <nav className="nav">
        <a className={ category === 'husky' ? 'nav-item nav-active': 'nav-item' } href="feed?category=husky">Husky</a>
        <span className="nav-separator">/</span>
        <a className={ category === 'hound' ? 'nav-item nav-active': 'nav-item' } href="feed?category=hound">Hound</a>
        <span className="nav-separator">/</span>
        <a className={ category === 'pug' ? 'nav-item nav-active': 'nav-item' } href="feed?category=pug">Pug</a>
        <span className="nav-separator">/</span>
        <a className={ category === 'labrador' ? 'nav-item nav-active': 'nav-item' } href="feed?category=labrador">Labrador</a>
    </nav>    
  )
}

export default CategoryNav;