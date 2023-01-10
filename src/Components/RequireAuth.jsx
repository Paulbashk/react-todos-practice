import React from 'react';
import useAuth from '../hooks/useAuth';

// Проверка на авторизацию (для страниц)
export default function RequireAuth({children, type}) {
    let auth = useAuth();

    if(!auth.user) {
        return (
            <div className='row'>
                <p>Данная страница доступна только авторизованным пользователям!</p>
            </div>
        );
    }

    return children;
}