//import the necessary dependencies 
import React from 'react';
import {connect} from 'react-redux';
import {login} from '../actions';


class Login extends React.Component {
    //State to control input form for new and existing users
    state = {
        credentials: {
            email: "",
            password: ""
        }
    }
    //function to type in username and password
    handleChanges = e => {
        this.setState({
            ...this.state.credentials,
            [e.target.name]: e.target.value
        })
    }

    //function to log in to the application
    userLogin = e => {
        e.preventDefault();
        //this.props.getStats();
    }

    render() {
        return (
            <div className="login-page">

                <h1>FIFA STATS </h1>

                <div className="login-img">
                     {/* for a picture */}
                 </div>

                <div className="login-box">
                    <h2>Log In Here</h2>
                    <form onSubmit={this.userLogin}>
                        <input 
                        type="text"
                        name="email"
                        value={this.state.credentials.email}
                        onChange={this.handleChange}
                        placeholder="User Email"
                        />
                         <input 
                          type="text"
                          name="password"
                          value={this.state.credentials.password}
                          onChange={this.handleChange}
                          placeholder="User Password"
                        />
                        <button className="login-btn">Log In</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default connect(
    null,
    {login}  
)(Login);