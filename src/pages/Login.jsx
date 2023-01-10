import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FormAuth from '../Components/FormAuth';
import useAuth from '../hooks/useAuth';

export default function Login() {
    const auth = useAuth();
    // React Router использует свои методы навигации
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const onSubmit = (data) => {
        console.log(data);
        auth.signin(data.login, () => {
            navigate(from, {replace: true});
        });
    }

    return (
        <div className='page__login row'>
            <h1>Авторизоваться</h1>
            <FormAuth callback={(data) => onSubmit(data)} />
        </div>
    );
}