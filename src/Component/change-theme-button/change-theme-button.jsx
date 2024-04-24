import React from 'react'


export const ChangeThemeButton = ({theme, setTheme}) => {

  const changeTheme = () => {
    setTheme(!theme);
  }

  return (
    <button className='todolist-changethemebutton' onClick={changeTheme}>
      {theme ? <i className="fa-regular fa-sun"></i> : <i className="fa-regular fa-moon"></i>}
    </button>
  )
}

export default ChangeThemeButton;