import { useMemo, useRef } from "react";

export const sortedTodos = (todos, sort) => {
    let sorted = todos;

    switch(sort) {
        case 'max': {
            sorted = [...sorted].sort();
            break;
        }
        case 'min': {
            sorted = [...sorted].sort((a, b) => b.id - a.id);
            break;
        }
    }

    return sorted;
}

export const useTodos = (todos, query, sort) => {
    const sorted = sortedTodos(todos, sort);

    const searchingTodos = useMemo(() => {
        return query
        ? [...sorted].filter(todo => todo.title.toLowerCase().includes(query))
        : sorted;
    }, [sorted, sort, query]);

    return searchingTodos;
}