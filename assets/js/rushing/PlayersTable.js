  
import React from 'react'
import Table from 'react-bootstrap/Table';
import {graphql, createFragmentContainer} from 'react-relay';
import PlayerRow from './PlayerRow.js';

const PlayersTable = ({ players, ...rest }) => (
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>Player</th>
        <th>Team</th>
        <th>Pos</th>
        <th>Att/G</th>
        <th>Att</th>
        <th>Yrds</th>
        <th>Avg</th>
        <th>Yds/G</th>
        <th>TD</th>
        <th>Lng</th>
        <th>1st</th>
        <th>1st&#37;</th>
        <th>20+</th>
        <th>40+</th>
        <th>FUM</th>
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
