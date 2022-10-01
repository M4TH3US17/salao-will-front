import React, {useState} from 'react';
import {Menu as PageMenu, MenuList} from './styled';

export default function Menu({isDarkTheme}) {

    document.addEventListener('click', e => {
        const click = e.target;

        if(click.classList.contains('bi-list')) isOpenMenu(true);
        else                                    isOpenMenu(false);
    });

    return (
    <>
    <PageMenu isDarkTheme={isDarkTheme}>
        <div className="menu-item"><i className="bi bi-house-heart-fill menu-icon"></i></div>
        <div className="menu-item"><i className="bi bi-person-circle menu-icon"></i>   </div>
        <div className="menu-item">
            <i className="bi bi-x-lg"></i>
            <i className="bi bi-list menu-icon"></i>            
        </div>
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

function isOpenMenu(isOpen) {
    let menu      = document.querySelector('.menuList');
    let iconList  = document.querySelector('.bi-list');
    let iconClose = document.querySelector('.bi-x-lg');
    
    if(isOpen)  {
        menu.style.display      = 'block';
        iconClose.style.display = 'block';
        iconList.style.display  = 'none';
    }
    else if(isOpen === false) {
        menu.style.display      = 'none';
        iconClose.style.display = 'none';
        iconList.style.display  = 'block';
    }
};