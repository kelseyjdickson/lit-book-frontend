import React from 'react'

class NavBar extends React.Component{

render() {
    return(
  
  <div className="App">
  <div class="ui inverted menu"id="menu">
<a class="item active">
  Home
</a>
<a class="item">
  Reviews
</a>
<a class="item">
<i class="book icon"></i>
</a>
</div>
</div>
)
}
}

export default NavBar