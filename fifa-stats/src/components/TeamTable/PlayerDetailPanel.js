import React from 'react';
import './PlayerDetailPanel.css';

const PlayerDetailPanel = props => {
  return (
    <div className="player-detail-panel">
      <h4>Player Details</h4>
      <div className="player-details">
        <p>Age:</p>             <p>{props.rowData.Age}</p>
        <p>Height:</p>          <p>{props.rowData.Height}</p>
        <p>FieldPosition:</p>   <p>{props.rowData.FieldPosition}</p>
        <p>PreferredFoot:</p>   <p>{props.rowData.PreferredFoot}</p>
        <p>Nationality:</p>     <p>{props.rowData.Nationality}</p>
        <p>Weight:</p>          <p>{props.rowData.Weight}</p>
        <p>Position:</p>        <p>{props.rowData.Position}</p>
        <p>Work Rate:</p>       <p>{props.rowData.WorkRate}</p>
      </div>
      <h4>Player Stats</h4>
      <div className="player-stats">
        <p>Acceleration:</p>    <p>{props.rowData.Acceleration}</p>
        <p>Aggression:</p>      <p>{props.rowData.Aggression}</p>
        <p>Agility:</p>         <p>{props.rowData.Agility}</p>
        <p>Balance:</p>         <p>{props.rowData.Balance}</p>
        <p>BallControl:</p>     <p>{props.rowData.BallControl}</p>
        <p>Composure:</p>       <p>{props.rowData.Composure}</p>
        <p>Crossing:</p>        <p>{props.rowData.Crossing}</p>
        <p>Curve:</p>           <p>{props.rowData.Curve}</p>
        <p>Dribbling:</p>       <p>{props.rowData.Dribbling}</p>
        <p>FKAccuracy:</p>      <p>{props.rowData.FKAccuracy}</p>
        <p>Finishing:</p>       <p>{props.rowData.Finishing}</p>
        <p>GKDiving:</p>        <p>{props.rowData.GKDiving}</p>
        <p>GKHandling:</p>      <p>{props.rowData.GKHandling}</p>
        <p>GKKicking:</p>       <p>{props.rowData.GKKicking}</p>
        <p>GKPositioning:</p>   <p>{props.rowData.GKPositioning}</p>
        <p>GKReflexes:</p>      <p>{props.rowData.GKReflexes}</p>
        <p>HeadingAccuracy:</p> <p>{props.rowData.HeadingAccuracy}</p>
        <p>Interceptions:</p>   <p>{props.rowData.Interceptions}</p>
        <p>Jumping:</p>         <p>{props.rowData.Jumping}</p>
        <p>LongPassing:</p>     <p>{props.rowData.LongPassing}</p>
        <p>LongShots:</p>       <p>{props.rowData.LongShots}</p>
        <p>Marking:</p>         <p>{props.rowData.Marking}</p>
        <p>Penalties:</p>       <p>{props.rowData.Penalties}</p>
        <p>Positioning:</p>     <p>{props.rowData.Positioning}</p>
        <p>Reactions:</p>       <p>{props.rowData.Reactions}</p>
        <p>ShortPassing:</p>    <p>{props.rowData.ShortPassing}</p>
        <p>ShotPower:</p>       <p>{props.rowData.ShotPower}</p>
        <p>SkillMoves:</p>      <p>{props.rowData.SkillMoves}</p>
        <p>SlidingTackle:</p>   <p>{props.rowData.SlidingTackle}</p>
        <p>SprintSpeed:</p>     <p>{props.rowData.SprintSpeed}</p>
        <p>Stamina:</p>         <p>{props.rowData.Stamina}</p>
        <p>StandingTackle:</p>  <p>{props.rowData.StandingTackle}</p>
        <p>Strength:</p>        <p>{props.rowData.Strength}</p>
        <p>Vision:</p>          <p>{props.rowData.Vision}</p>
        <p>Volleys:</p>         <p>{props.rowData.Volleys}</p>
        <p>WeakFoot:</p>        <p>{props.rowData.WeakFoot}</p>
      </div>
    </div>
  );
};

export default PlayerDetailPanel;

// Age: 30
// Club: "Paraná"
// ClubLogo: "https://cdn.sofifa.org/teams/2/light/111048.png"
// FieldPosition: "Defense"
// FieldPositionNum: 1
// Height: "6'2"
// Name: "Rafael Cachoira"
// Nationality: "Brazil"
// Overall: 76
// OvervalueRatio: "0.26"
// Photo: "https://cdn.sofifa.org/players/4/19/230528.png"
// Position: "RCB"
// Potential: 76
// PreferredFoot: "Right"
// Weight: "185lbs"
// WorkRate: "Medium/ Medium"

// Acceleration: 49
// Aggression: 84
// Agility: 51
// Balance: 53
// BallControl: 62
// Composure: 70
// Crossing: 56
// Curve: 62
// Dribbling: 58
// FKAccuracy: 49
// Finishing: 30
// GKDiving: 12
// GKHandling: 12
// GKKicking: 12
// GKPositioning: 13
// GKReflexes: 11
// HeadingAccuracy: 73
// Interceptions: 75
// Jumping: 51
// LongPassing: 76
// LongShots: 42
// Marking: 82
// Penalties: 42
// Positioning: 40
// Reactions: 67
// ShortPassing: 66
// ShotPower: 60
// SkillMoves: 2
// SlidingTackle: 73
// SprintSpeed: 60
// Stamina: 61
// StandingTackle: 77
// Strength: 83
// Vision: 36
// Volleys: 49
// WeakFoot: 3