import React from 'react';
import { Button, Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink  
} from 'reactstrap';
import {getTeams} from '../../actions/statsaction';
import{createTeam} from '../../actions/customactions';
import {connect} from 'react-redux';
import styled from 'styled-components';

const UserBox = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

 class User extends React.Component {
    constructor(props) {
      super(props);
  
      this.toggleNavbar = this.toggleNavbar.bind(this);
      this.state = {
        collapsed: true,
        name: ''
      };
    }
    componentDidMount() {
      this.props.getTeams();
    }

    // componentDidUpdate(prevProps, prevState) {
    //   // only update chart if the data has changed
    //   if (prevProps.teamList !== this.props.teamList) {
    //     return this.props.getTeams();
    //   }
    // }

    handleChanges = e => {
      this.setState({
          ...this.state,
          [e.target.name]: e.target.value
      })
  }

    createTeam = e => {
      e.preventDefault();
      this.props.createTeam(this.state.name)
      // this.props.getTeams();
      this.setState({
        name: ''
      })
    }

    logOut = e => {
      e.preventDefault();
      localStorage.clear();
      this.props.history.push('/login')
    }
    
    toggleNavbar() {
      this.setState({
        collapsed: !this.state.collapsed
      });
    }
    render() {
        return (
        <UserBox>
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto">FIFA STATS</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/components">Search Teams</NavLink>
                <Button onClick={this.logOut}>Log Out</Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
            <Card>
                <CardBody>
                <CardTitle>User title</CardTitle>
                <CardSubtitle>User Favorite Team</CardSubtitle>
                </CardBody>
                  {Array.isArray(this.props.teamList) &&
					          this.props.teamList.map(team => {
							      return <div key={team.id}>{team.name}</div>;
						      })}
                <CardBody>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <form>
                  <input
                  value={this.state.name}
                  name="name"
                  onChange={this.handleChanges}
                  placeholder="Custom Team Name"
                  />
                 <button onClick={this.createTeam}>Create Team</button>
                </form>
                {/* <CardLink href="#">My Teams</CardLink> */}
                </CardBody>
            </Card>
            </UserBox>
        );
    }
};

const mapStateToProps = state => ({
  teamList: state.teamsReducer.teamList,
  // token: state.loginReducer.token
})

export default connect(
  mapStateToProps,
  {getTeams, createTeam}
)
(User);