import React , {useContext} from 'react'
import "./BtnToggle.css"
import { ThemeContext } from '../../Context/ThemeContext';

export default function BtnToggle() {

    const {toggleTheme, theme} = useContext(ThemeContext);

    return (
        <button onClick={toggleTheme}
        className={theme ? "btn-toggle" : "btn-toggle darkBtn"}>
            {theme ? "Light Mode" : "Dark Mode"}
            </button>
    )
}
