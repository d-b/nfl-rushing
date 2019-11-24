  
import React from 'react'
import Table from 'react-bootstrap/Table';
import {graphql, createFragmentContainer} from 'react-relay';
import PlayerRow from './PlayerRow.js';

const PlayersTable = ({ players, ...rest }) => (
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>Name</th>
        <th>Team</th>
        <th>Position</th>
      </tr>
    </thead>
    <tbody>
      {
        players.map(player => (
          <tr key={player.id}>
            <PlayerRow player={player} />
          </tr>
        ))
      }
    </tbody>
  </Table>
);

const PlayersTableFragmentContainer = createFragmentContainer(PlayersTable, {
  players: graphql`
    fragment PlayersTable_players on RushingPlayer @relay(plural: true) {
      id
      ...PlayerRow_player
    }
  `
});

export default PlayersTableFragmentContainer;
