import React from 'react';

const PlayerDetailPanel = props => {
  return (
    <div
      className="player-detail-panel"
      style={{
        fontSize: 60,
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.1)'
      }}
    >
      {props.rowData.Name}
    </div>
  );
};

export default PlayerDetailPanel;