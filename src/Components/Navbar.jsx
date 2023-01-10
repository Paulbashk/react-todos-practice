import React from 'react';
import { Outlet } from 'react-router-dom';
import ListNavigate from './ListNavigate';

export default function Navbar() {
    const links = [
        {to: '/', name: 'Главная'},
        {to: '/login', name: 'Авторизация', auth: false},
        {to: '/todos', name: 'Список задач', auth: true},
        {
            to: '/logout', 
            name: 'Выход', 
            auth: true
        }
    ];

    return (
        <div className='navbar container'>
            <nav className='navbar__nav row'>
                <ListNavigate links={links} />
            </nav>
            <Outlet />
        </div>
    );
}