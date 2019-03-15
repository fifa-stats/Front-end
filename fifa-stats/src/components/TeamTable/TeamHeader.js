import React from 'react';
import { connect } from 'react-redux';

import './TeamHeader.css';
import { getAnalysis } from '../../actions/statsaction';
import { copyDefaultTeamToCustom } from '../../actions/customactions';
import PlayerCard from './PlayerCard';

const TeamHeader = ({
    analysis,
    teamName,
    teamRoster,
    dispatch 
  }) => {

  console.log('analysis', analysis);
  return(
    <div className="team-summary-container">
      <div className="team-summary-header">
        <h1>{teamName}</h1>
        <div>
          <button
            className="team-button"
            disabled
            onClick={() => dispatch(getAnalysis(teamRoster))}
            style={{marginRight: '1rem'}
          }>
              Run Analytics
          </button>
          <button className="team-button" onClick={() => 
            dispatch(copyDefaultTeamToCustom(teamName))}
          >
            Copy{teamName}
          </button>
        </div>
      </div>
      {!(analysis.top2overvalued) ? null :
        <div className="player-container">
          <div className="player-card-container">
            <h3>Most Overvalued Players:</h3>
            <PlayerCard player={analysis.top2overvalued[0]} />
            <PlayerCard player={analysis.top2overvalued[1]} />
          </div>
          <div className="player-card-container">
            <h3>Weakest Players:</h3>
            <PlayerCard player={analysis.bottom2weak[0]} />
            <PlayerCard player={analysis.bottom2weak[1]} />
          </div>
          <div className="player-card-container">
            <h3>Suggested Replacements:</h3>
            <PlayerCard player={analysis.suggestedreplacements[0][0]} />
            <PlayerCard player={analysis.suggestedreplacements[1][0]} />
          </div>
          <div className="player-card-container">
            <h3>Suggested Trades:</h3>
            <PlayerCard player={analysis.suggestedtrades[0][0]} />
            <PlayerCard player={analysis.suggestedtrades[1][0]} />
          </div>
        </div>
      }
    </div>
  );
};

export default connect()(TeamHeader);