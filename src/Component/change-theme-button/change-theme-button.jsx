import React from 'react'


export const ChangeThemeButton = ({theme, setTheme}) => {

const changeTheme = () => {
  setTheme(!theme);
}

console.log(theme);

  return (
    <button className='todolist-changethemebutton' onClick={changeTheme}>
      {theme ? <i class="fa-regular fa-sun"></i> : <i className="fa-regular fa-moon"></i>}
    </button>
  )
}

export default ChangeThemeButton;