import React from 'react';
import { useSelector } from 'react-redux';
import { MenuList } from './MenuList';

export const MenuScreenManage = () => {

    const { state } = useSelector(state => state.elements);

    return (
        <article>
            <article className="menu_screen_manage_title">
                <h2>CONTROL DEL MENU</h2>
            </article>
            <article className="menu_screen_manage_content">
                {
                    state.map( element => <MenuList {...element} key={element.idMenu}/>)
                }
            </article>
        </article>
    )
}
