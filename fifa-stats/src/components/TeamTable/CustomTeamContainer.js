import React from 'react';
import { connect } from 'react-redux';

import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import { getCustomTeams, getCustomTeamRoster } from '../../actions/statsaction';
import { deletePlayer, deleteTeam } from '../../actions/customactions';
import './TeamTable.css';
import ViewTeamTable from './ViewTeamTable';


class CustomTeamContainer extends React.Component {
  constructor(props) {
    super(props);

    this.hedRef = React.createRef();
    this.editHedRef = React.createRef();
    this.formHedRef = React.createRef();
  };

  componentDidMount() {
    this.props.getCustomTeamRoster(this.props.match.params.teamID);
  };

  showEditHed = () => {
    this.editHedRef.current.defaultValue = this.hedRef.current.textContent;
    this.hedRef.current.hidden = true;
    this.editHedRef.current.hidden = false;
    this.formHedRef.current.hidden = false;
  };
  editHed = () => {
    this.hedRef.current.hidden = false;
    this.editHedRef.current.hidden = true;
    this.formHedRef.current.hidden = true;
    if (this.editHedRef.current.textContent === this.hedRef.current.textContent) {
      return;
    }
    // need to hook up redux action
    // this.props.editCustomTeamName(
    //   this.props.match.params.teamID, 
    //   this.editHedRef.current.textContent
    // );
  };

  render() {
    return (
      <>
        {/* TODO: add `onClick` for delete button below */}
        <div className="team-summary-container">
          <div className="team-summary-header">
            <div className="team-name" onClick={event => {
              event.preventDefault();
              if (Boolean(this.editHedRef.current.hidden === true)) {
                this.showEditHed();
              }
              return this.editHed(event);
            }}>
              <h1 ref={this.hedRef}>My Custom Team – {this.props.match.params.teamID}</h1>
                <IconButton><Icon>edit</Icon></IconButton>
                <Typography variant="srOnly">Change Team Name</Typography>
              <form hidden onSubmit={this.editHed} ref={this.formHedRef}>
                <input 
                  hidden
                  ref={this.editHedRef}
                ></input>
              </form>
            </div>
            
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