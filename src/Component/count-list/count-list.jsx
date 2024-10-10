import React from "react";


function ListCount({todoCount}){
    console.log(todoCount);
    
    
    return <div className="todolist__content-option__count">
        {todoCount !== 0 ? <p>{todoCount} {todoCount <= 1 ? 'Item' : 'Items'} left</p> : <p>Nothing to do</p>}
    </div>
}

export default ListCount;