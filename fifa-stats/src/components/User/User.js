import React from 'react';
import { Button, Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Collapse, 
} from 'reactstrap';
import {getCustomTeams} from '../../actions/statsaction';
import{createTeam , deleteTeam} from '../../actions/customactions';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const UserBox = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

 class User extends React.Component {
    constructor(props) {
      super(props);
  
      // this.toggleNavbar = this.toggleNavbar.bind(this);
      this.state = {
        collapsed: true,
        name: ''
      };
    }
    componentDidMount() {
      this.props.getCustomTeams();
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

    deleteItem = (id) => {
      //e.preventDefault();
      console.log(id)
      this.props.deleteTeam(id)
    }

    logOut = e => {
      e.preventDefault();
      localStorage.clear();
      this.props.history.push('/login')
    }

    render() {
        return (
        <UserBox>
            <Card>
                <CardBody>
                <CardTitle>User Name</CardTitle>
                <CardSubtitle>User Favorite Team</CardSubtitle>
                </CardBody>
                  {Array.isArray(this.props.teamList) &&
					          this.props.teamList.map(team => {
                    return <div>
                    <Link to={`team/custom/${team.id}`} key={team.id}>
                   <div>{team.name}</div>
                    </Link>
                    <button onClick={() => {this.deleteItem(team.id)}}>Delete Team</button>
                    </div>
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
  {getCustomTeams, createTeam, deleteTeam}
)
(User);