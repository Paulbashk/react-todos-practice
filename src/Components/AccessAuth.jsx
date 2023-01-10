import React from 'react';
import useAuth from '../hooks/useAuth';

export default function AccessAuth({children}) {
    const auth = useAuth();

    if(auth.user) {
        return(
            <div className='row'>
                <p>Вы уже авторизованы!</p>
            </div>
        );
    }

    return children;
}