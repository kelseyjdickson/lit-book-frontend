import React from 'react'








class Login extends React.Component {


    state = {
        username: "",
        password: "",
        user_id:""
    }


    handledSubmit = (evt) => {
        console.log("clicked")
        evt.preventDefault()
         this.props.handleSubmit(this.state)
    }

    handleChange = (evt) => {
        let {name, value} = evt.target
        this.setState({
          [name]: value
        })
    }
    render() {
        let {username, password} = this.state
       
        
        return (
            <>
            <form class="form"onSubmit={this.handledSubmit}>
            <label>Username<input type="text" name="username"value={username} onChange={this.handleChange}/></label>
             <label>Password<input type="text" name="password" value={password} onChange={this.handleChange}/></label>
             <input class="button"type="submit" value="Login"/>
            </form>
            </>
    

    )}
}


export default Login