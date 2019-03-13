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

const fakeRoster = [
  {
    row: 1,
    id: 158023,
    name: 'L. Messi',
    age: 31,
    photo: 'https://cdn.sofifa.org/players/4/19/158023.png',
    nationality: 'Argentina',
    flag: 'https://cdn.sofifa.org/flags/52.png',
    overall: 94,
    potential: 94,
    club: 'FC Barcelona',
    clubLogo: 'https://cdn.sofifa.org/teams/2/light/241.png',
    value: '110.5',
    wage: '565',
    special: 2202,
    preferredFoot: 'Left',
    internationalReputation: 5,
    weakFoot: 4,
    skillMoves:	4,
    workRate: 'Medium/ Medium',
    performanceRatio: 4.308511
  }
]

class TeamTableContainer extends React.Component {
  constructor(props) {
    super(props);
    this.formElement = React.createRef();
  };
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
  console.log('mapStateToProps teamRoster: ', state.teamRosterReducer.teamRoster);
  return {
    teamRoster: state.teamRosterReducer.teamRoster
  }
};

export default connect(mapStateToProps, { getTeamRoster })(TeamTableContainer);