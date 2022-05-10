import React from "react";



function CompletedAllTodos({todos, setTodos}) {

    const CompletedAll = () => {
        const newTodo = [...todos];
        newTodo.map(item => {
            item.isCompleted = true;
        });
        setTodos(newTodo);

    }

    return (
        <button className="todolist__content-option__button-completed" onClick={CompletedAll}>Completed all</button>
    )
}



export default CompletedAllTodos;