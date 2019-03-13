import React from 'react';

const PlayerHeader = ({ player }) => {
    return (
        <>
            <header className="player-header">
              <img
                  alt={`${player.name}`}
                  className="player-image"
                  src={player.photo}
              />
              <h1 className="player-name">{player.name}</h1>
            </header>
            <>
                
            </>
            <div className="top-player-content">
                <div className="left-content">
                    <div className="club-nationality-wrapper">
                        <div className="player-nationality">
                            <p className="custom-label-left">NATIONALITY</p>
                            <img
                                alt={`${player.nationality} flag`}
                                className="player-flag-image"
                                src={player.flag}
                            />
                            <p className="player-nationality-text">{player.nationality}</p>
                        </div>
                        <div className="player-club">
                            <p className="custom-label-left">CLUB</p>
                            <div className="flex-center">
                                <img
                                    alt={`${player.club} logo`}
                                    className="player-club-image"
                                    src={player.clubLogo}
                                />
                                <p className="player-club-text">{player.club}</p>
                            </div>
                        </div> 
                    </div>
                    <div className="value-wage-wrapper">
                        <div className="player-value">
                            <p className="custom-label-left">VALUE</p>
                            <p className="player-data-value">{player.value}</p>
                        </div>
                        <div className="player-wage">
                            <p className="custom-label-left">WAGE</p>
                            <p className="player-data-value">{player.wage}</p>
                        </div>
                    </div>
                </div>
                <div className="player-rankings">
                    <p className="player-rank-overall">
                        {player.overall}
                    </p>
                    <p className="custom-label-right">OVERALL</p>
                    <p className="player-rank-potential">
                        {player.potential}
                    </p>
                    <p className="custom-label-right">POTENTIAL</p>
                </div>
            </div>
        </>
    )
}

export default PlayerHeader;