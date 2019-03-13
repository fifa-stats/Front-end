import React from 'react';
import { connect } from 'react-redux';

import { getTeamRoster } from '../../actions/statsaction';
import './TeamTable.css';
import ViewTeamTable from './ViewTeamTable';

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
  constructor(props) {
    super(props);
    this.formElement = React.createRef();
  };

  componentDidMount() {
    this.props.getTeamRoster(this.props.match.params.teamName);
  }

  render() {
    return (
      // testing stuff below
      <>
        <form
          onSubmit={event => {
            event.preventDefault();
            this.props.getTeamRoster(this.formElement.current.value);
          }}
        >
          <input
            defaultValue="Real Madrid"
            name="team"
            ref={this.formElement}
            type="text"
          />
          <button type="submit">Submit</button>
        </form>
        {/* <section>
          this.props.teamRoster<br></br>{this.props.teamRoster}
        </section> */}
      {/* end testing stuff */}
        <ViewTeamTable
          roster={this.props.teamRoster}
          teamName={'Real Madrid'}
          // teamName={this.props.WHATEVER}
        />
      </>
    )
  };
};

function mapStateToProps(state) {
  return {
    teamRoster: state.teamRosterReducer.teamRoster
  }
};

export default connect(mapStateToProps, { getTeamRoster })(TeamTableContainer);