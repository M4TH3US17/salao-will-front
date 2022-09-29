import React from 'react';
import {Menu as PageMenu, MenuList} from './styled';

export default function Menu({isDarkTheme}) {
    return (
    <>
    <PageMenu isDarkTheme={isDarkTheme}>
        <div className="menu-item"><i className="bi bi-house-heart-fill menu-icon"></i></div>
        <div className="menu-item"><i className="bi bi-person-circle menu-icon"></i>   </div>
        <div className="menu-item"><i className="bi bi-list menu-icon"></i>            </div>
    </PageMenu>

    <MenuList isDarkTheme={isDarkTheme} className="menuList">
        <header>Menu</header>
        <section>
            <div className='menuList-item'> Posts</div>
            <div className='menuList-item'> Tema</div>
            <div className='menuList-item'> Conta</div>
        </section>
    </MenuList>
    </>);
}