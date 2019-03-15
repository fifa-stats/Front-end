import React from 'react';

import './TeamHeader.css';

const PlayerCard = ({ player }) => {
  return (
    <div className="player-card">
      <h3 className="player-name">{player.Name}</h3>
      <table>
        <tr>
          <td className="bold-cell">Over Valued Ratio</td>
          <td>{player.OvervalueRatio}</td>
        </tr>
        <tr>
          <td className="bold-cell">Position</td>
          <td>{player.Position}</td>
        </tr>
        <tr>
          <td className="bold-cell">Overall Rating</td>
          <td>{player.Overall}</td>
        </tr>
        <tr>
          <td className="bold-cell">Potential Rating</td>
          <td>{player.Potential}</td>
        </tr>
        <tr>
          <td className="bold-cell">Wage</td>
          <td>{player.Wage}</td>
        </tr>
      </table>
    </div>
  );
};

export default PlayerCard;