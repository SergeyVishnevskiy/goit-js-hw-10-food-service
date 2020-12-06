import './styles.css';
import './js/theme';
import menu from './menu.json';
import template from './tamplates/menu-items.hbs';

const menuRef = document.querySelector('.js-menu');
const menuList = template(menu);
menuRef.insertAdjacentHTML('afterbegin', menuList);
