import React from 'react';
import { Button, Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Collapse
} from 'reactstrap';
import {getCustomTeams} from '../../actions/statsaction';
import{createTeam , deleteTeam} from '../../actions/customactions';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const UserBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
flex-flow: wrap;
justify-content: space-evenly;
margin: 10px 5%;
border: 1px solid #BDBA79;
border-radius: 40px;
background: gray;
`
// const InnerBox = styled.div`
// display:flex;
// flex-direction: row;
// align-items: center;
// flex-flow: nowrap;
// justify-content: space-evenly;
// border: 1px solid #BDBA79;
// border-radius: 40px;
// background: black;
// `
const TeamBox = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 1px solid gray;
width: 35%;
height: 75px;
margin: 10px;
border-radius: 25px
text-decoration: none;
background: 
  url('https://i.imgur.com/aJiApGC.jpg')
`
const TeamCard = styled.div`
text-decoration: none;
display: flex;
flex-direction: column;
flex-wrap: nowrap;
justify-content: space-evenly;
align-items: center;
`

const Cusbtn = styled(Button)`
background: orange;
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
            <div>
                <div>
                <h2>User Name</h2>
                <h3>User Custom Teams</h3>
                </div>
                <TeamCard>
                  {Array.isArray(this.props.teamList) &&
					          this.props.teamList.map(team => {
                    return <TeamBox>
                    <Link to={`team/custom/${team.id}`} key={team.id}>
                   <div>{team.name}</div>
                    </Link>
                    <Cusbtn onClick={() => {this.deleteItem(team.id)}}>Delete Team</Cusbtn>
                    </TeamBox>
                  })}
                  </TeamCard>
                <div>
                <div>Some quick example text to build on the card title and make up the bulk of the card's content.</div>
                <form>
                  <input
                  value={this.state.name}
                  name="name"
                  onChange={this.handleChanges}
                  placeholder="Custom Team Name"
                  />
                 <Cusbtn onClick={this.createTeam}>Create Team</Cusbtn>
                </form>
                {/* <CardLink href="#">My Teams</CardLink> */}
                </div>
            </div>
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