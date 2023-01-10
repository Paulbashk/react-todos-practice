import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import Button from '../Components/UI/Button';
import useFetching from '../hooks/useFetching';
import Loader from '../Components/Loader';

export default function IdTodo() {
    const [todoes, setTodoes] = useState({});
    const params = useParams();
 
    const [fetchTodoes, isLoading, isError] = useFetching(async (id) => {
        const response = await PostService.getById(id);
        setTodoes(response); 
    });    

    useEffect(() => {
        fetchTodoes(params.id);     
    }, []);

    return (
        <div className='todo__page row'>
            <h1>Просмотр задачи: {params.id}</h1>
            {isLoading 
                ? <Loader/>
                : [
                    params.id != todoes.id 
                        ? <p>Такая задача не найдена!</p>
                        :  [
                            <p style={{marginBottom: 16}}>{todoes.title}</p>,
                            <p style={{marginBottom: 16}}>Задача: <span>{todoes.completed ? 'Выполнена' : 'Не выполнена'}</span></p>,
                            <Button style={{backgroundColor: 'red'}}>Удалить задачу</Button>
                        ]
                ]
            }
        </div>
    );
}