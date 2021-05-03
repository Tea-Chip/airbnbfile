import React from 'react'
import './Header.css'
import SearchIcon from "import SearchIcon from '@material-ui/icons/Search";

function Header() {
    return (
        <div className='header_icon'>
            <img className="header_icon"
            src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f287ade90956.png"
            alt=""
            />

            <div className='header_center'>
                <input type="text" />
                <SearchIcon />
            </div>

            <div className='header_right'>
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>
        </div>
    )
}

export default Header
