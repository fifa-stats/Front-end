//import the necessary dependencies 
import React from 'react';
import {connect} from 'react-redux';
import {login} from '../actions';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import styled from 'styled-components';

const LogPage = styled.div`
width: 100%;
height: 100%;
background: 
  url('https://i.imgur.com/aJiApGC.jpg')
    no-repeat fixed center;
background-size: auto 100%;
display: flex;
flex-flow: column wrap;
justify-content: center;
align-items: center;
color: black;
`


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
           credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value
           }
        })
    }

    //function to log in to the application
    userLogin = e => {
        e.preventDefault();
        //this.props.getStats();
    }

    render() {
        return (
            <LogPage>

                <h1>FIFA STATS </h1>

                <div className="login-img">
                     {/* for a picture */}
                 </div>

                <div className="login-box">
                    
                        <Form>
                            <FormGroup>
                            <Input 
                            type="text" 
                            name="email" 
                            value={this.state.credentials.email} 
                            placeholder="User Email" 
                            onChange={this.handleChanges}
                            />
                            </FormGroup>
                            <FormGroup>
                            <Input 
                            type="text" 
                            name="password"
                            value={this.state.credentials.password} 
                            placeholder="User Password" 
                            onChange={this.handleChanges}
                            />
                            </FormGroup>
                            <Button>Log In</Button>
                        </Form>
                </div>
            </LogPage>
        )
    }
}

export default connect(
    null,
    {login}  
)(Login);