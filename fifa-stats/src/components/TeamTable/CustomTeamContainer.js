import React from 'react';
import { connect } from 'react-redux';

// @TODO: Create function to get players from a custom team `getCustomTeamRoster`
import { getTeams, getCustomTeamRoster } from '../../actions/statsaction';
import { deletePlayer, deleteTeam } from '../../actions/customactions';
import './TeamTable.css';
import ViewTeamTable from './ViewTeamTable';


class CustomTeamContainer extends React.Component {
  constructor(props) {
    super(props);
  };

  componentDidMount() {
    this.props.getCustomTeamRoster(this.props.match.params.teamID);
  };

  render() {
    return (
      <>
        {/* TODO: add `onClick` for delete button below */}
        <button>Delete Custom Team</button>
        <ViewTeamTable
          // TODO: add actual data source to roster
          roster={this.props.teamRoster}
          // TODO: bring in Custom Team name, if possible
          teamName={'Custom Team'}
          teamtype={'custom'}
        />
      </>
    );
  };
};

function mapStateToProps(state) {
  return {
    // customTeamsList: state.teamsReducer.teamList, // don't think this is needed here
    teamRoster: state.teamRosterReducer.teamRoster
  }
};

export default connect(
  mapStateToProps,
  { deletePlayer, deleteTeam, getTeams, getCustomTeamRoster }
)(CustomTeamContainer);