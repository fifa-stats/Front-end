import React from 'react';

const player = {
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
    return (
        <>
            <div className="player-header">
                <h2 className="player-name">{player.name}</h2>
                <p className="player-rank">{player.overall}</p>
            </div>
            <div>
                <img src={player.photo} alt={`Photo of ${player.name}`} />
            </div>
        </>
    );
};

export default PlayerView;