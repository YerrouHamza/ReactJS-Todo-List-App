import React from "react";


function ClearAllList({todos, setTodos}){

    const ClearAll = () => {
        const newTodo = [...todos];
        
        alert('Are you sur You want to clear all Todo List!!');
        
        newTodo.splice(0, todos.length);
        setTodos(newTodo);

        console.log(newTodo);
        console.log(todos);
    }

    return <>
        <button className="todolist__content-option__button-clear" onClick={ClearAll}>Clear</button>
    </>
}


export default ClearAllList;