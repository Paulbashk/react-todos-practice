import React, { useState } from 'react';
import { fakeAuthProvider } from '../API/fakeAuthProvider';
import AuthContext from '../context/authContext';

// Система пользователя
export default function AuthProvider({children}) {
    let data = null;
    
    if(localStorage.getItem("login")) {
        data = {
            login: localStorage.getItem("login"),
            password: localStorage.getItem("password")
        };

        fakeAuthProvider.isAuthenticated = true;
    }
    let [user, setUser] = useState(data);

    // Функция авторизации. Принимает данные нового пользователя и колбек
    let signin = (newUser, cb) => {
        return fakeAuthProvider.signin(() => {
            localStorage.setItem("login", newUser.login);
            localStorage.setItem("password", newUser.password);
            setUser(newUser);
            cb();
        });
    }

    // Функция для выхода. Принимает коллбек
    let signout = (cb) => {
        return fakeAuthProvider.signout(() => {
            localStorage.removeItem('login');
            localStorage.removeItem('password');
            setUser(null);
            cb();
        });
    }

    let value = { user, signin, signout };

    // Сохранение контекста со всеми функциями и данными пользователя
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
