import React from 'react';

/* get style */
import "./header.css";

/* get component */
import ChangeThemeButton from '../../Component/change-theme-button/change-theme-button'; // get change theme color button

const Header = ({theme, setTheme}) => {

  return (
    <div className='todolist-header header-bk'>
      <div className='todolist-header__content'>
          <h2 className="todolist-header__content-title" title='todo app title' data-testId="header-title">TODO</h2>
          <ChangeThemeButton theme={theme} setTheme={setTheme} />
      </div>
    </div>
  )
};

export default Header;