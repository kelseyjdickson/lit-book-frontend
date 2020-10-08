import React from 'react'
import { NavLink } from 'react-router-dom'

class NavBar extends React.Component {

  render() {
    return (

      <div>
        <div className="ui inverted menu" id="menu">

          <NavLink className="item" to="/" exact>Home</NavLink>
          <NavLink className="item" to="/review">Reviews</NavLink>
          <NavLink className="item" to="/form">Add Book</NavLink>
          <NavLink className="item" to="/login">
            <i className="book icon"></i>
          </NavLink>

        </div>
      </div>
    )
  }
}

export default NavBar