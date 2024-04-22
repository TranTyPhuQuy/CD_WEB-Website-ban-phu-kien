import React from 'react';
// CSS
import './styles.css';
// Images
import SearchIcon from '../../../utils/images/search.svg';
import MenuIcon from '../../../utils/images/menu.png';
import UserIcon from '../../../utils/images/user.png';
import CartIcon from '../../../utils/images/cart.svg';

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
