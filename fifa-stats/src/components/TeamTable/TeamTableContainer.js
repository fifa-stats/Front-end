import React from 'react';
import { connect } from 'react-redux';

import { getTeams, getTeamRoster } from '../../actions/statsaction';
import { copyDefaultTeamToCustom } from '../../actions/customactions';
import './TeamTable.css';
import ViewTeamTable from './ViewTeamTable';


class TeamTableContainer extends React.Component {
  constructor(props) {
    super(props);
    this.formElement = React.createRef();
  };

  componentDidMount() {
    this.props.getTeamRoster(this.props.match.params.teamName);

    // check if the `customTeamsList` is longer than 0, otherwise fetch it
    (function checkCustomTeamsList() {
      return () => this.props.customTeamsList.length > 0
        ? null
        : this.props.getTeams();
    })();
  };

  render() {
    return (
      <>
        {this.props.location.pathname.includes('default')
          ? <button onClick={this.props.copyDefaultTeamToCustom(this.props.match.params.teamName)}>
              Create Custom Team from {this.props.match.params.teamName}
            </button>
          : <button>Delete Custom Team</button>
        }
        <ViewTeamTable
          roster={this.props.teamRoster}
          teamName={this.props.match.params.teamName}
          teamtype={this.props.teamType}
        />
      </>
    )
  };
};

function mapStateToProps(state) {
  console.log('mapStateToProps customTeamsList: ', state.teamsReducer.teamList);
  return {
    customTeamsList: state.teamsReducer.teamList,
    teamRoster: state.teamRosterReducer.teamRoster
  }
};

export default connect(mapStateToProps, { copyDefaultTeamToCustom, getTeams, getTeamRoster })(TeamTableContainer);


// {/* <form
//           onSubmit={event => {
//             event.preventDefault();
//             this.props.getTeamRoster(this.formElement.current.value);
//           }}
//         >
//           <input
//             defaultValue="Real Madrid"
//             name="team"
//             ref={this.formElement}
//             type="text"
//           />
//           <button type="submit">Submit</button>
//         </form>
//         {/* <section>
//           this.props.teamRoster<br></br>{this.props.teamRoster}
//         </section> */}
//       end testing stuff */}