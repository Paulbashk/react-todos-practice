import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ButtonLink({to, name, classItem, classLink, fnClick}) {
    const [clazz, setClazz] = useState(classLink);

    function updateClick() {
        fnClick(to, {clazz, setClazz});      
    }

    return (
        <li className={classItem}>
            <Link className={clazz} to={to} onClick={updateClick}>{name}</Link>
        </li>         
    );
}