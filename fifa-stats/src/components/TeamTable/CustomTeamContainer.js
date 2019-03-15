import React from 'react';
import { connect } from 'react-redux';

import Edit from '@material-ui/icons/Edit';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';

// @TODO: Create function to get players from a custom team `getCustomTeamRoster`
import { getCustomTeams, getCustomTeamRoster } from '../../actions/statsaction';
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
        <div className="team-summary-container">
          <div className="team-summary-header">
            <h1>My Custom Team – {this.props.match.params.teamID}</h1>
            <Icon>Edit</Icon>
            <Typography variant="srOnly">Change Team Name</Typography>
            <button className="team-button" onClick={() => {
              this.props.deleteTeam(
                this.props.match.params.teamID);
              this.props.history.push('/user');
            }}>
              Delete Custom Team
            </button>
          </div>
        </div>
        <ViewTeamTable
          // TODO: add actual data source to roster
          roster={this.props.teamRoster}
          // TODO: bring in Custom Team name, if possible
          teamID={this.props.match.params.teamID}
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
  { deletePlayer, deleteTeam, getCustomTeams, getCustomTeamRoster }
)(CustomTeamContainer);