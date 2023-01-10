import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Todo({todo}, ...props) {
    const navigate = useNavigate();

    return (
        <div className='todos__todo' key={props.key} onClick={() => navigate(`/todos/${todo.id}`, {replace: true})}>
            <h3 className='todos__title'><span>{todo.id}.</span> {todo.title}</h3>
            <div className='todos__completed' style={{backgroundColor: todo.completed ? "green" : "red"}}></div>
        </div>        
    );
}