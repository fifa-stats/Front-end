import React from 'react';
import { connect } from 'react-redux';

// @TODO: Create function to get players from a custom team `getCustomTeamRoster`
import { getTeams } from '../../actions/statsaction';
import { deletePlayer, deleteTeam } from '../../actions/customactions';
import './TeamTable.css';
import ViewTeamTable from './ViewTeamTable';


class CustomTeamContainer extends React.Component {
  constructor(props) {
    super(props);
  };

  componentDidMount() {
    this.props.getTeamRoster(this.props.match.params.teamName);
  };

  render() {
    return (
      <>
        <button>Delete Custom Team</button>
        <ViewTeamTable
          roster={null}
          teamName={'Custom Team'}
          teamtype={'custom'}
        />
      </>
    );
  };
};

function mapStateToProps(state) {
  console.log('mapStateToProps customTeamsList: ', state.teamsReducer.teamList);
  return {
    // customTeamsList: state.teamsReducer.teamList,
    teamRoster: state.teamRosterReducer.teamRoster
  }
};

export default connect(
  mapStateToProps,
  { deletePlayer, deleteTeam, getTeams }
)(CustomTeamContainer);