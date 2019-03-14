import React, { useEffect, useState } from 'react';
import AriaModal from 'react-aria-modal';

import { addPlayer } from '../../actions/customactions';

import './Modal.css';

const SelectCustomTeamModal = props => {
    const [modalActive, setModalActive] = useState(props.modalBoolean);
    useEffect(() => {
        console.log('useEffect: ', props.modalBoolean);
        setModalActive(props.modalBoolean)
    }, [props.modalBoolean]);

    const getApplicationNode = () => document.querySelector('.root');

    const modal = modalActive
        ?   <AriaModal
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
                    <p>To which custom team would you like to add {props.modalPlayer.name}?</p>
                    {props.customTeamsList.map(team => {
                      return <button
                        onClick={addPlayer(props.modalPlayer.id, team)}
                        type="button"
                      >{team}</button>
                    })}
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
        <React.Fragment>
            <div
                onClick={event => {
                    setModalActive(true)}
                }
                style={{height: '36px', width: '36px'}}
            >
                +
            </div>
            {modal}
        </React.Fragment>
    )
}

export default SelectCustomTeamModal;