import React from 'react';
import { connect } from 'react-redux';
import { getTeamRoster } from '../../actions/statsaction';

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
  render() {
    return (
      // @TODO: update the props below
      // <ViewTeamTable
      //   playerList={this.props.WHATEVER}
      //   teamName={this.props.WHATEVER}
      // />
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
        <section>
          this.props.teamRoster<br></br>{this.props.teamRoster}
        </section>
      </>
    )
  };
};

function mapStateToProps(state) {
  console.log('mapStateToProps: ', state.teamsReducer.teamRoster);
  return {
    teamRoster: state.teamsReducer.teamRoster
  }
};

export default connect(mapStateToProps, { getTeamRoster })(TeamTableContainer);