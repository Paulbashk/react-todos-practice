import React, { useState } from 'react';
import Input from './UI/Buttons/Input';
import Button from './UI/Button';

export default function FormAuth({callback}) {
    const [data, setData] = useState({
        login: "",
        password: ""
    });
    
    const fnLogin = (event) => {
        event.preventDefault();
        setData({
            login: "",
            password: ""            
        });
        callback(data);
    }

    return (
        <form className="login__form">
            <Input type="text" placeholder="Ваш логин" value={data.login} onChange={(e) => setData({...data, login: e.target.value})} />
            <Input type="password" placeholder="Ваш пароль" value={data.password} onChange={(e) => setData({...data, password: e.target.value})} />
            <Button onClick={(e) => fnLogin(e)}>Авторизоваться</Button>
        </form>        
    );
}