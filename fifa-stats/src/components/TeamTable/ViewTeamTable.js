import React from 'react';
import MaterialTable from 'material-table';

import PlayerDetailPanel from './PlayerDetailPanel';

/**
 * ViewTeamTable 
 * 
 */


const ViewTeamTable = props => {
  console.log('ViewTeamTable roster: ', props.roster);
  console.log('array test', [{1: 'one'}, {2: 'two'}, {3: 'three'}]);
  return (
    <section className="team-table">
      <MaterialTable 
        columns={[
          { title: 'Name', field: 'Name', type: 'string' },
          { title: 'Overall Rating', field: 'Overall', type: 'numeric' },
          { title: 'Potential Rating', field: 'Potential', type: 'numeric' },
          // { title: 'Reputation', field: 'internationalReputation', type: 'numeric' },
          {
            title: 'Value',
            field: 'Value',
            render: rowData => `€${rowData.Value}`,
          },
          {
            field: 'Wage',
            render: rowData => `€${rowData.Wage}`,
            title: 'Wage',
          },
          { title: 'Performance Ratio', field: 'performanceRatio', type: 'numeric' }
        ]}
        // @TODO: update the data below to use data drawn in
        //data={props.playerList}
        data={props.roster}
        title={props.teamName}
        detailPanel={[
          {
            icon: 'account_circle',
            render: rowData => {
              return <PlayerDetailPanel rowData={rowData} />
            },
            tooltip: 'Show Player Details',
          }
        ]}
        onRowClick={(event, rowData, togglePanel) => togglePanel()}
        options={{
          paging: false,
          search: false
        }}
      />
    </section>
  );
};

export default ViewTeamTable;