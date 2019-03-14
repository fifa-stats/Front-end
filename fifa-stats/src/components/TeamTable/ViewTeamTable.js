import React, { useState } from 'react';
import { connect } from 'react-redux';
import AriaModal from 'react-aria-modal';
import MaterialTable from 'material-table';

import { addPlayer, deletePlayer } from '../../actions/customactions';
import PlayerDetailPanel from './PlayerDetailPanel';
import './Modal.css';

const ViewTeamTable = ({ dispatch, ...props }) => {
  const [modalActive, setModalActive] = useState(false);
  const [modalPlayer, setModalPlayer] = useState({id: 0, name: 'default test'});
  const getApplicationNode = () => document.querySelector('.root');

  const defaultActionAddPlayer = {
    icon: 'add',
    tooltip: 'Add to My Team',
    onClick: (event, rowData) => {
      // console.log('onClick test: ', rowData.id, rowData.Name);
      setModalPlayer({
        id: rowData.id,
        name: rowData.Name
      });
      setModalActive(true);
      return;
    }
  };
  const customActionDeletePlayer = {
    icon: 'delete',
    tooltip: 'Remove From Team',
    onClick: (event, rowData) => dispatch(deletePlayer(props.teamID, rowData.id))
  };

  const modal = modalActive
    ? <AriaModal
      initialFocus="#cancel"
      getApplicationNode={() => getApplicationNode()}
      onExit={() => setModalActive(false)}
      titleText="Select Custom Team"
      underlayStyle={{ paddingTop: '2rem' }}
      verticallyCenter
    >
      <div className="select-custom-team-modal">
        <header>
            <h3>Add Player to Custom Team</h3>
        </header>
        <div className="modal-body">
          <p>To which custom team would you like to add {modalPlayer.name}?</p>
          {props.customTeamsList.map(team => {
            return <button
              key={team.id}
              onClick={() => {
                setModalActive(false);
                dispatch(addPlayer(team.id, modalPlayer.id));
              }}
              type="button"
            >{`${team.name} – ${team.id}`}</button>
          })}
        </div>
        <footer className="modal-footer">
          <button
            id="cancel"
            onClick={() => setModalActive(false)}
            type="button"
          >
            Cancel
          </button>
        </footer>
      </div>
    </AriaModal>
    : false;

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
          { title: 'Market Value', field: 'Value', type: 'currency', currencySetting: { currencyCode: 'EUR' } },
          { title: 'Wage', field: 'Wage', currencySetting: { currencyCode: 'EUR' }, type: 'currency' },
          { title: 'Performance Ratio', field: 'performanceRatio', type: 'numeric' }
        ]}
        data={props.roster}
        title={`${props.teamName} – Full Roster`}
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
          actionsColumnIndex: -1,
          paging: false,
          search: false
        }}
        actions={
          props.teamType === 'default'
            ? [defaultActionAddPlayer]
            : [customActionDeletePlayer]
        }
      />
      {modal}
    </section>
  );
};

export default connect()(ViewTeamTable);