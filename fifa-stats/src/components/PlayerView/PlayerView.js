import React, { useEffect, useState } from 'react';

import './Player.css';
import PlayerHeader from './PlayerHeader';

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


const PlayerView = () => {
    const [player, setPlayer] = useState({});

    useEffect(() => setPlayer(codedPlayer), []);

    return (
        <div className="player-view">
            <PlayerHeader player={player} />
            <div>
                <h3>More Content Here!</h3>
            </div>
        </div>
    );
};

export default PlayerView;