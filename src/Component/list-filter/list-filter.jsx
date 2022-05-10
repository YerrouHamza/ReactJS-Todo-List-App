import React, { useEffect, useState } from "react";



/* creat todo list filter */
const Filter = ({todos, itemFilter, setItemsFilter}) => {
    useEffect(() => {
        setItemsFilter(todos);
    }, [todos]);
    
    const [itemCondition, setItemsCondition] = useState('all'); // secound state



    /* get all finction */
    const GetAllItems = () => {
        const newTodo = [...todos];

        setItemsCondition('all');
        setItemsFilter(newTodo);
    }


    /* get no comleted irems function */
    const GetActiveItems = () => {
        const newTodo = [...todos];
        const filtered = newTodo.filter((item) => item.isCompleted === false);

        setItemsCondition('active');
        setItemsFilter(filtered);
    }

    /* get completed items function */
    const GetCompletedItems = () => {
        const newTodo = [...todos];
        const filtered = newTodo.filter((item) => item.isCompleted);

        setItemsCondition('completed');
        setItemsFilter(filtered);
    }


    return <>
        <button className={ itemCondition === 'all' ? 'active-filter' : 'null' } onClick={GetAllItems}>All</button>
        <button className={ itemCondition === 'active' ? 'active-filter' : 'null' } onClick={GetActiveItems}>Active</button>
        <button className={ itemCondition === 'completed' ? 'active-filter' : 'null' } onClick={GetCompletedItems}>Completed</button>
    </>
}




export default Filter;