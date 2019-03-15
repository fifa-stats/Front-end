import React from 'react';
import { connect } from 'react-redux';

import { getCustomTeams, getDefaultTeamRoster } from '../../actions/statsaction';
import { copyDefaultTeamToCustom } from '../../actions/customactions';
import './TeamTable.css';
import ViewTeamTable from './ViewTeamTable';


class DefaultTeamContainer extends React.Component {
  constructor(props) {
    super(props);
    this.props.customTeamsList.length > 0
        ? console.log('checkCustomTeamsList null', this.props.customTeamsList.length)
        : this.props.getCustomTeams();
  };

  componentDidMount() {
    this.props.getDefaultTeamRoster(this.props.match.params.teamName);
    /** 
     * Check if the `customTeamsList` is longer than 0, otherwise fetch it.
     * NOTE: `checkCustomTeamsList()` is an Immediately Invoked Function 
     */
    // (function checkCustomTeamsList() {
    //   console.log('checkCustomTeamsList null', () => this.props.customTeamsList.length);
    //   return () => this.props.customTeamsList.length > 0
    //     ? console.log('checkCustomTeamsList null', this.props.customTeamsList.length)
    //     : () => this.props.getTeams();
    // })();
  };

  componentDidUpdate(prevProps) {
    /**
     * Check if the `customTeamsList` has changed
     * If it has changed, user likely created a customTeam
     * using `copyDefaultTeamToCustom()`, and page should
     * redirect to page for newest customTeam.
     */
    if (prevProps.customTeamsList.length !== 0) {
      if (this.props.customTeamsList.length !== prevProps.customTeamsList.length) {
       console.log('customTeamsList before redirect: ', this.props.customTeamsList);
       this.props.history.push(
         `/team/custom/${this.props.customTeamsList[
           this.props.customTeamsList.length - 1].id}`
       )
     };
    };
  };

  render() {
    return (
      <>
        {/* TODO: Create `TeamHeader` component to house stats and buttons */}
        <div className="team-summary-container">
          <div className="team-summary-header">
            <h1>{this.props.match.params.teamName}</h1>
            <button className="team-button" onClick={() => 
              this.props.copyDefaultTeamToCustom(
                this.props.match.params.teamName)}
            >
              Copy {this.props.match.params.teamName}
            </button>
          </div>
        </div>
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
  { copyDefaultTeamToCustom, getCustomTeams, getDefaultTeamRoster }
)(DefaultTeamContainer);