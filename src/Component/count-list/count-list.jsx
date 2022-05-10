import React from "react";


function ListCount({todos}){
    
    return <div className="todolist__content-option__count">
        <p>{todos.length} items left</p>
    </div>
}

export default ListCount;