import React from 'react';
import AuthContext from '../context/authContext';

// Хук возвращает информацию о пользователе
export default function useAuth() {
    return React.useContext(AuthContext);
}