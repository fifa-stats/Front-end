import React from 'react';
import MaterialTable from 'material-table';

import PlayerDetailPanel from './PlayerDetailPanel';

/**
 * ViewTeamTable 
 * 
 */


const ViewTeamTable = props => {
  return (
    <section className="team-table">
      <MaterialTable 
        columns={[
          { 
            field: 'Photo', 
            render: rowData => 
              <img
                alt={rowData.Name} 
                src={rowData.Photo} 
                style={{ height: 36, borderRadius: '50%' }}
              />,
            title: '',
            cellStyle: {padding: '0 10px'}
          },
          { title: 'Name', field: 'Name', type: 'string', cellStyle: {padding: '0 10px'} },
          { title: 'Overall Rating', field: 'Overall', type: 'numeric' },
          { title: 'Potential Rating', field: 'Potential', type: 'numeric' },
          // { title: 'Reputation', field: 'internationalReputation', type: 'numeric' },
          // {
          //   title: 'Value',
          //   field: 'Value',
          //   render: rowData => `€${rowData.Value}`,
          // },
          { title: 'Value', field: 'Value', type: 'currency', currencySetting: { maximumFractionDigits: 1 } },
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