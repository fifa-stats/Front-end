import React from 'react';
import { connect } from 'react-redux';

import { getAnalysis, getCustomTeams, getDefaultTeamRoster } from '../../actions/statsaction';
import './TeamTable.css';
import TeamHeader from './TeamHeader';
import ViewTeamTable from './ViewTeamTable';


class DefaultTeamContainer extends React.Component {
  constructor(props) {
    super(props);
    this.teamName = this.props.match.params.teamName;
    /** 
     * Check if the `customTeamsList` is longer than 0, otherwise fetch it.
     * NOTE: `checkCustomTeamsList()` is an Immediately Invoked Function 
     */
    this.props.customTeamsList.length > 0
        ? console.log('checkCustomTeamsList null', this.props.customTeamsList.length)
        : this.props.getCustomTeams();
  };

  componentDidMount() {
    this.props.getDefaultTeamRoster(this.teamName);
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

    if (this.props.teamRoster.length !== 0) {
      console.log('componentDidUpdate – bool, length: ', this.props.teamRoster.length !== 0, this.props.teamRoster.length);
      if (prevProps.teamRoster !== this.props.teamRoster) {
        this.props.getAnalysis(this.props.teamRoster);
      };
    };
  };

  render() {
    return (
      <>
        <TeamHeader
          // copyDefaultTeamToCustom={this.props.copyDefaultTeamToCustom}
          analysis={this.props.analysis}
          teamRoster={this.props.teamRoster}
          teamName={this.teamName}
        />
        <ViewTeamTable
          customTeamsList={this.props.customTeamsList}
          roster={this.props.teamRoster}
          teamName={this.teamName}
          teamType={'default'}
        />
      </>
    );
  };
};

function mapStateToProps(state) {
  console.log('mapStateToProps analysis: ', state.teamRosterReducer.analysis);
  return {
    analysis: state.teamRosterReducer.analysis,
    customTeamsList: state.teamsReducer.teamList,
    teamRoster: state.teamRosterReducer.teamRoster
  }
};

export default connect(
  mapStateToProps,
  { getAnalysis, getCustomTeams, getDefaultTeamRoster }
)(DefaultTeamContainer);