import React from 'react';
import MaterialTable from 'material-table';

/**
 * ViewTeamTable 
 * 
 */

const ViewTeamTable = props => {
  return (
    <MaterialTable 
      columns={[
        { title: 'Name', field: 'name', type: 'string' },
        { title: 'Overall Rating', field: 'overall', type: 'numeric' },
        { title: 'Potential Rating', field: 'potential', type: 'numeric' },
        { title: 'Reputation', field: 'internationalReputation', type: 'numeric' },
        { title: 'Value', field: 'value', type: 'currency' },
        { title: 'Wage', title: 'wage', type: 'currency' },
      ]}
      data={props.playerList}
      title={props.teamName}
      detailPanel={[
        {
          icon: 'account_circle',
          render: <PlayerDetailPanel rowData={rowData} />,
          tooltip: 'Show Player Details'
        }
      ]}
      onRowClick={(event, rowData, togglePanel) => togglePanel()}
    />
  );
};

export default ViewTeamTable;