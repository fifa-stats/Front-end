//import the necessary dependencies 
import React from 'react';
import {connect} from 'react-redux';
import {login, signup} from '../actions/loginactions';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import styled from 'styled-components';

const LogPage = styled.div`
width: 100%;
height: 550px;
background: 
  url('https://i.imgur.com/aJiApGC.jpg')
    no-repeat fixed center;
background-size: auto 100%;
display: flex;
flex-flow: column wrap;
justify-content: center;
align-items: center;
color: black;
text-align: center;
`
const Box = styled.div`

`
const Fifaheader = styled.h1`
margin-bottom: 30px;
font-size: 4rem;
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
        this.props.login(this.state.credentials)
        .then(() => {
            console.log( this.props.history)
            this.props.history.push("/user")
        })
    }

    jump = e => {
        e.preventDefault();
        this.props.history.push("/")
    }
    // userSignup = e => {
    //     e.preventDefault();
    //     this.props.signup(this.state.credentials)
    //     this.props.history.push("/login")
    // }

    render() {
        return (
            <LogPage>
                {/* <Fifaheader>FIFA STATS </Fifaheader> */}

                <div className="login-img">
                     {/* for a picture */}
                 </div>

                <Box>
                    
                        <Form>
                         {/* {this.props.token? null :
                         <FormGroup>
                            <Input 
                            type="text" 
                            name="fname" 
                            value={this.state.credentials.fname} 
                            placeholder="First Name" 
                            onChange={this.handleChanges}
                            />
                            </FormGroup>
                         }
                          {this.props.token? null :  <FormGroup>
                            <Input 
                            type="text" 
                            name="lname"
                            value={this.state.credentials.lname} 
                            placeholder="LastName" 
                            onChange={this.handleChanges}
                            />
                            </FormGroup>
                         } */}
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

                            {/* {this.props.token? <Button onClick={this.userLogin}>Log In</Button> 
                            : <Button onClick={this.userSignup}>Sign Up</Button> 
                            } */}

                             <Button onClick={this.userLogin}>Log In</Button>
                             <Button onClick={this.jump}>Sign Up</Button>
                             {/* <Button onClick={this.userSignup}>Sign Up</Button>  */}
                            
                            
                        </Form>
                </Box>
            </LogPage>
        )
    }
}

const mapStateToProps = (state) => ({
    token: state.token
})

export default connect(
    mapStateToProps,
    {login}  
)(Login);