import React from 'react'
import {graphql, createFragmentContainer} from 'react-relay';

const PlayerRow = ({ player }) => (
  <>
    <td>{player.name}</td>
    <td>{player.team}</td>
    <td>{player.position}</td>
  </>
);

const PlayerRowFragmentContainer = createFragmentContainer(PlayerRow, {
  player: graphql`
     fragment PlayerRow_player on RushingPlayer {
        id
        name
        team
        position
     }
  `
});

export default PlayerRowFragmentContainer;
