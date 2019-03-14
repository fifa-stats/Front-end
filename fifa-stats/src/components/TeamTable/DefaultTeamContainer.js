import React from 'react';
import { connect } from 'react-redux';

import { getTeams, getDefaultTeamRoster } from '../../actions/statsaction';
import { copyDefaultTeamToCustom } from '../../actions/customactions';
import './TeamTable.css';
import ViewTeamTable from './ViewTeamTable';


class DefaultTeamContainer extends React.Component {
  constructor(props) {
    super(props);
  };

  componentDidMount() {
    this.props.getDefaultTeamRoster(this.props.match.params.teamName);
    /** 
     * Check if the `customTeamsList` is longer than 0, otherwise fetch it.
     * NOTE: `checkCustomTeamsList()` is an Immediately Invoked Function 
     */
    (function checkCustomTeamsList() {
      return () => this.props.customTeamsList.length > 0
        ? null
        : this.props.getTeams();
    })();
  };

  componentDidUpdate(prevProps) {
    /**
     * Check if the `customTeamsList` has changed
     * If it has changed, user likely created a customTeam
     * using `copyDefaultTeamToCustom()`, and page should
     * redirect to page for newest customTeam.
     */
    if (this.props.customTeamsList !== prevProps.customTeamsList) {
      console.log('customTeamsList before redirect: ', this.props.customTeamsList);
      this.props.history.push(
        `/team/custom/${this.props.customTeamsList[
          this.props.customTeamsList.length - 1]}`
      )
    }
  };

  render() {
    return (
      <>
        {/* TODO: Create `TeamHeader` component to house stats and buttons */}
        <button onClick={() => 
          this.props.copyDefaultTeamToCustom(
            this.props.match.params.teamName)}
        >
          Create Custom Team from {this.props.match.params.teamName}
        </button>
        <ViewTeamTable
          customTeamsList={this.props.customTeamsList}
          roster={this.props.teamRoster}
          teamName={this.props.match.params.teamName}
          teamType={'default'}
        />
      </>
    );
  };
};

function mapStateToProps(state) {
  console.log('mapStateToProps customTeamsList: ', state.teamsReducer.teamList);
  return {
    customTeamsList: state.teamsReducer.teamList,
    teamRoster: state.teamRosterReducer.teamRoster
  }
};

export default connect(
  mapStateToProps,
  { copyDefaultTeamToCustom, getTeams, getDefaultTeamRoster }
)(DefaultTeamContainer);