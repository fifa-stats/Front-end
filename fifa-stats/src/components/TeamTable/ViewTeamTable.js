import React from 'react';
import MaterialTable from 'material-table';

/**
 * ViewTeamTable 
 * 
 */

const codedPlayer = {
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
  value: '€110.5M',
  wage: '€565K',
  special: 2202,
  preferredFoot: 'Left',
  internationalReputation: 5,
  weakFoot: 4,
  skillMoves:	4,
  workRate: 'Medium/ Medium',
};

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
      // @TODO: update the data below to use data drawn in
      //data={props.playerList}
      data={[codedPlayer]}
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