import React from 'react'
import {graphql, createFragmentContainer} from 'react-relay';

const PlayerRow = ({ player }) => (
  <>
    <td>{player.name}</td>
    <td>{player.team}</td>
    <td>{player.position}</td>
    <td>{player.attempts}</td>
    <td>{player.attemptsPerGame}</td>
    <td>{player.yards}</td>
    <td>{player.average}</td>
    <td>{player.yardsPerGame}</td>
    <td>{player.touchdowns}</td>
    <td>{player.longestRush}</td>
    <td>{player.first}</td>
    <td>{player.firstPercentage}</td>
    <td>{player.twentyPlus}</td>
    <td>{player.fortyPlus}</td>
    <td>{player.fumbles}</td>
  </>
);

const PlayerRowFragmentContainer = createFragmentContainer(PlayerRow, {
  player: graphql`
     fragment PlayerRow_player on RushingPlayer {
        id
        name
        team
        position
        attempts
        attemptsPerGame
        yards
        yardsPerGame
        average
        touchdowns
        longestRush
        first
        firstPercentage
        twentyPlus
        fortyPlus
        fumbles
     }
  `
});

export default PlayerRowFragmentContainer;
