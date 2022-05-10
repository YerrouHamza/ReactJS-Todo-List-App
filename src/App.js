import React, { useState } from 'react';
import './App.css';

/* get component */
import Header from './container/Header/header';
import TodoContent from './container/content/content'; 


function App() {

  const [theme, setTheme] = useState(true);

  return (
    <div className={theme ? 'todolist' : 'todolist light-mood'}>
      <Header theme={theme} setTheme={setTheme} />
      <TodoContent theme={theme} />
    </div>
  );
}

export default App;
