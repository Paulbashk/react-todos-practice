import React, { useEffect, useState } from 'react';
import PostService from '../API/PostService';
import TodoFilter from '../Components/TodoFilter';
import Loader from '../Components/Loader';
import useFetching from '../hooks/useFetching';
import { useTodos } from '../hooks/useTodos';
import TodoList from '../Components/TodoList';
import { useNavigate } from 'react-router-dom';


export default function Todos() {
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState({sort: '', search: ''});

    const [page, setPage] = useState(0);
    const [limit, setLimit] = useState(10);
    const totalPages = 10;
    const navigate = useNavigate();

    const [fetchTodo, isLoading, isError] = useFetching(async (page = 1, limit = 10) => {
        const response = await PostService.getAll(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${limit}`);
        setTodos([...todos, ...response]);  
    });

    const sortedAndSearchedTodos = useTodos(todos, filter.search, filter.sort);      

    useEffect(() => {
        fetchTodo(page, limit);   
    }, [page, limit]);

    return (
        <div className='page__todos row'>
            <h1>Список задач</h1>          
            <TodoFilter filter={filter} setFilter={setFilter} />            
            {isLoading &&
                <Loader/>
            }
            <TodoList list={sortedAndSearchedTodos} loading={isLoading} page={page} setPage={setPage} maxPages={totalPages} />
        </div>
    );
}