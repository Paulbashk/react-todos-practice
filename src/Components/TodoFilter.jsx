import React from 'react';
import Input from './UI/Buttons/Input';
import Select from './UI/Select';

export default function TodoFilter({filter, setFilter}) {
    return (
        <div className='todos__sorted'>
            <Select
                value={filter.sort}
                onChange={e => setFilter({...filter, sort: e.target.value})}
                defaultValue="Сортировка"             
                options={[
                    {name: 'По возрастанию', value: "max"},
                    {name: "По убыванию", value: "min"}
                ]}
                style={{marginBottom: '12px'}}
            />
            <Input type="text" placeholder="Поиск" value={filter.search} onChange={(e) => setFilter({...filter, search: e.target.value})} />            
        </div>
    );
}