import React from 'react';
import { connect } from 'react-redux';
import {getStats} from '../actions/statsaction';

/** 
 * This file holds BOTH the ViewTeamTable and the ManageTeamTable
 * ViewTeamTable will just display the default teams – no editing
 * ManageTeamTable will display teams, too, but also allow editing
 * 
 * This component will make an axios call to the API endpoint.
 * The endpoint will return a list of player IDs.
 * Then, the component will loop through that list of player IDs,
 * and set the state to hold those Players 
*/

class TeamTableContainer extends React.Component {
  
  render() {
    // @TODO: update the prop below
    <ViewTeamTable
      playerList={this.props.WHATEVER}
      teamName={this.props.WHATEVER}
    />
  };
};

function mapStateToProps(state) {
  return {
    // state goes here
    // `playerList` should be the array of players WITH data, if that's OK
    playerList: state.playerList
    // `teamName` should be the team name
  }
}

export default connect(mapStateToProps, { getStats })(TeamTableContainer);