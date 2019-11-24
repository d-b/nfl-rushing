import React from 'react';
import {graphql, QueryRenderer, createPaginationContainer} from 'react-relay';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import environment from '../environment.js';
import PlayersFilter from './PlayersFilter.js';
import PlayersTable from './PlayersTable.js';

const Players = ({ players, relay }) => (
  <Container style={{ marginTop: 20, marginBottom: 20 }}>
    <Row>
      <Col>
        <h1>Players</h1>
      </Col>
    </Row>
    <Row style={{ marginTop: 20, marginBottom: 20 }}>
      <Col>
        <PlayersFilter refetch={relay.refetchConnection} />
      </Col>
    </Row>
    <Row>
      <Col>
        <PlayersTable players={players.rushingPlayers.edges.map(edge => edge.node)} />
      </Col>
    </Row>
    <Row>
      <Col className="text-center">
        has more

      </Col>
    </Row>
  </Container>
);

const PlayersContainer = createPaginationContainer(
  Players,
  {
    players: graphql`
      fragment Players_players on RootQueryType {
        rushingPlayers (
          first: $first
          after: $after
          name: $name
          position: $position
          team: $team
        ) @connection(key: "Players_rushingPlayers") {
          edges  {
            node {
              ...PlayersTable_players
            }
          }
          pageInfo {
            startCursor
            endCursor
            hasNextPage
            hasPreviousPage
          }
        }
      }`
  },
  {
    direction: 'forward',
    getConnectionFromProps(props) {
      return props.players.players;
    },
    getFragmentVariables(prevVars, totalCount) {
      return {
        ...prevVars,
        count: totalCount,
      };
    },
    getVariables(props, {count, cursor}, fragmentVariables) {
      return {
        first: count,
        after: cursor,
      };
    },
    query: graphql`
      query PlayersContainerPaginationQuery(
        $first: Int!
        $after: ID
        $name: String
        $position: String
        $team: String
      ) {
        ...Players_players
      }
    `
  }
);

export default () => (
  <QueryRenderer
    environment={environment}
    query={graphql`
      query PlayersContainerQuery($first: Int!, $after: ID, $name: String, $position: String, $team: String) {
        ...Players_players
      }
    `}
    variables={{ first: 9 }}
    render={({error, props}) => {

      if (!props) {
        return ( <p>Loading...</p> );
      }

      return (
        <PlayersContainer players={props} />
      );
    }}
  />
);
