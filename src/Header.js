import React from 'react'
import logo from './images/litbooks1.png'







class Header extends React.Component {
    render() {
        return (
            <>
                <div class="logo">
                    <img src={logo} alt="logo" />
                </div>
            </>


        )
    }
}


export default Header