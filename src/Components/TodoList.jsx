import React from 'react';
import Todo from '../Components/Todo';
import InfinityLoader from './InfinityLoader';

export default function TodoList({list, loading, page, setPage, maxPages}) { 

    const handlerScroll = () => {
        setPage(page + 1);
    }

    const isMaxPages = (max, current) => max == current ? false : true;

    return (
        <div className='todos'>
            {list.map((todo, key) => <Todo todo={todo} key={key} /> )}
            <InfinityLoader loading={loading} handlerScroll={handlerScroll} canLoad={isMaxPages(maxPages, page)} />
        </div>        
    );
};