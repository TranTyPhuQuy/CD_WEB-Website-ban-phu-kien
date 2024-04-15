import React from 'react';
// CSS
import '../components/css/header.css';
// Images
import MenuIcon from './images/menu.png';
import UserIcon from './images/user.png';
import CartIcon from './images/cart.svg';
import SearchIcon from './images/search.svg';

function Header() {
  return (
    <header id='header'>
        <div className='header__content'>
            <div className='header__logo'>
                <p className='logo__text'>Shop Phụ Kiện</p>
            </div>
            <div className='header__search'>
                <input type='text' className='header__input--search' placeholder='Tìm kiếm sản phẩm'/>
                <img src={SearchIcon} alt='search icon' className='search__image'/>
            </div>
            <div className='header__icon'>
                <img src={CartIcon} alt='cart icon' className='cart__image'/>
                <img src={UserIcon} alt='user icon' className='user__image'/>
                <img src={MenuIcon} alt='menu icon' className='menu__image'/>
            </div>
        </div>
    </header>
  )
}

export default Header;
