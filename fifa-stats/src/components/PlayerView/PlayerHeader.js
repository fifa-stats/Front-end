import React from 'react';

const PlayerHeader = ({ player }) => {
    return (
        <>
            <header className="player-header">
                <h2 className="player-name">{player.name}</h2>
                <p className="player-rank-overall">{player.overall}</p>
                <p className="player-rank-potential">{player.potential}</p>
            </header>
            <>
                <img
                    alt={`Photo of ${player.name}`}
                    className="player-image"
                    src={player.photo}
                />
            </>
            <div className="top-player-content">
                <p className="player-club">
                    <strong>Club:</strong> {player.club}
                </p>
                <img
                    alt={`${player.club} logo`}
                    className="player-club-image"
                    src={player.clubLogo}
                />
                <p className="player-nationality">
                    <strong>Nationality:</strong> {player.nationality}
                </p>
                <img
                    alt={`${player.nationality} flag`}
                    className="player-flag-image"
                    src={player.flag}
                />
                <p className="player-value">
                    <strong>Value:</strong> {player.value}
                </p>
                <p className="player-wage">
                    <strong>Wage:</strong> {player.wage}
                </p>
            </div>
        </>
    )
}

export default PlayerHeader;