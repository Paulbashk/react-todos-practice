import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export default function Logout() {
    const user = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    user.signout(() => {
        navigate(from, {replace: true});
    });

    return(<></>);
}