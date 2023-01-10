import React, { useState } from 'react';
import useAuth from '../hooks/useAuth';
import ButtonLink from './UI/Buttons/ButtonLink';

export default function ListNavigate({links}) {
    let auth = useAuth().user;

    const btn = (to, name, classItem, classLink, fnClick) => <ButtonLink key={to} to={to} name={name} classItem={classItem} classLink={classLink} fnClick={fnClick} />;

    let prevBtn = undefined;

    const fnClick = (to, param) => {
        if(prevBtn !== undefined && prevBtn.to != to) {
            prevBtn.param.setClazz("navbar__link");
        }

        if(param.clazz != "navbar__link active") {
            param.setClazz(`${param.clazz} active`);
            prevBtn = {to, param};             
        }       
    }

    return (
        <ul className='navbar__menu'>
            {links.map((link) =>
                link.auth === undefined
                    ? btn(link.to, link.name, "navbar__item", "navbar__link", fnClick)
                    : auth
                        ? link.auth ? btn(link.to, link.name, "navbar__item", "navbar__link", fnClick) : null
                        : !link.auth ? btn(link.to, link.name, "navbar__item", "navbar__link", fnClick) : null     
            )} 
        </ul>  
    );
}
