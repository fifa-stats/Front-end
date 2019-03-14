import React from 'react';

const PlayerDetailPanel = props => {
  return (
    <div
      className="player-detail-panel"
      style={{
        fontSize: 60,
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'blue'
      }}
    >
      {props.rowData.Name}
    </div>
  );
};

export default PlayerDetailPanel;