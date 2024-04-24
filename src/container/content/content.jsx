import React, {useState} from 'react';

/* style */
import './content.css';

/* get Component */
import ListCount from '../../Component/count-list/count-list'; // get list count.
import ClearAllList from '../../Component/Clear-all-list/clear-all'; // get clear all list component.
import CompletedAllTodos from '../../Component/completed-list/completed-list'; // get completed all component.
import Filter from '../../Component/list-filter/list-filter'; // get list items Filter.

/* creat Todo Form Component */
function TodoForm({addNewTodo}){
    const [inputValue, setInputValue] = useState('');
    

    const HandelSubmite = e => {
        e.preventDefault();
        if (!inputValue) {
            alert('text pleas');
        } else {
            addNewTodo(inputValue);
        }
        setInputValue("");
    }

    return (
        <form className='todolist__content-mainform'>
            <input
                type="text" 
                value={inputValue} 
                placeholder='Create a new todo...'
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button className='todolist__content-mainform__addbutton' type='submite' onClick={HandelSubmite}>
                <div>
                    <i className="fa-solid fa-plus"></i>
                </div>
            </button>
        </form>
    );
}


/* Creat Todo List Component */
function TodoList({index, todo, completedTodo, RemoveTodo}) {

    /* styling for list if completed */
    const completedCondition = todo.isCompleted ? "completed" + ' todolist__content-list__item' : 'not-completed' + ' todolist__content-list__item';

    const styleRed = {
        color: 'red'
    }

    return <li key={index} className={completedCondition}>
        <p>{todo.text}</p>
        <div className='todolist__content-list__item-buttons'>
            <button style={todo.isCompleted ? styleRed : null} onClick={() => RemoveTodo(index)}><i className="fa-regular fa-trash-can"></i></button>
            <button onClick={() => completedTodo(index)}>{todo.isCompleted === false ? <i className="fa-solid fa-check"></i> : <i className="fa-solid fa-x"></i>}</button>
        </div>
    </li>
}


/* main Todo content */
const TodoContent = ({theme}) => {
    const [todos, setTodos] = useState([]); // main state
    const [itemFilter, setItemsFilter] = useState([]); // secound state


    /* add toto function */
    const addNewTodo = text  => {
        const newTodos = [...todos, {text, isCompleted: false}];
        setTodos(newTodos);
    }

    /* remove todo function */
    const RemoveTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    /* is completed todo function */
    const completedTodo = index => {
        const newTodo = [...todos];
        newTodo[index].isCompleted = !newTodo[index].isCompleted;
        setTodos(newTodo);
    }
 
    return (
        <div className={theme ? 'todolist__content' : 'todolist__content light-mood'}>
            <TodoForm addNewTodo={addNewTodo}/>
            <ul className='todolist__content-list'>
                {itemFilter.map((todo, index) => 
                    (<TodoList 
                        todo={todo}
                        key={index}
                        index={index}
                        RemoveTodo={RemoveTodo}
                        completedTodo={completedTodo}
                    />)
                )}
            </ul>
            <div className="todolist__content-option">
                <ListCount todos={todos} />

                <div className="todolist__content-option__filter">
                    <Filter 
                        todos={todos}
                        itemFilter={itemFilter}
                        setItemsFilter={setItemsFilter}
                    />
                </div>
                <div className="todolist__content-option__button">
                    <ClearAllList todos={todos} setTodos={setTodos} />
                    <CompletedAllTodos todos={todos} setTodos={setTodos} />
                </div>
            </div>
        </div>
    );
}

export default TodoContent;