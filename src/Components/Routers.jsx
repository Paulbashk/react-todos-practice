import React from 'react';
import {Route, Routes } from 'react-router-dom';
import NoMatch from '../pages/NoMatch';
import AuthProvider from './AuthProvider';
import Navbar from './Navbar';
import RequireAuth from './RequireAuth';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Logout from './Logout';
import AccessAuth from './AccessAuth';
import Todos from '../pages/Todos';
import IdTodo from '../pages/IdTodo';

// Маршрутизация 
export default function Routers() {
    return (
        <AuthProvider>
            <Navbar/>
            <Routes>
                <Route path="/">
                    <Route index element={<Home />} />
                    <Route path="todos" element={<RequireAuth><Todos/></RequireAuth>} />
                    <Route path="todos/:id" element={<RequireAuth><IdTodo/></RequireAuth>} />
                    <Route path="login" element={<AccessAuth><Login/></AccessAuth>} />
                    <Route path="logout" element={<RequireAuth><Logout/></RequireAuth>} />
                    <Route path="*" element={<NoMatch/>} />
                </Route>
            </Routes>
        </AuthProvider>
    );
}