import React from 'react';
import { Link } from 'react-router-dom';

export default function NoMatch() {
    return(
        <div className='page__nomatch row'>
            <h1 style={{fontSize: 32}}>Ошибка 404. Такой страницы не существует :с</h1>
            <Link to="/">Вернуться назад</Link>
        </div>
    );
}