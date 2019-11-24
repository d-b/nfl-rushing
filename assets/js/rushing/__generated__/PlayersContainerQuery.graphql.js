/**
 * @flow
 * @relayHash 79aea8b09855c3d68bcbd573a53c9103
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Players_players$ref = any;
export type OrderDirection = "ASC" | "DESC" | "%future added value";
export type RushingOrder = "LONGEST_RUSH" | "TOUCHDOWNS" | "YARDS" | "%future added value";
export type RushingPlayerOrder = {|
  direction?: ?OrderDirection,
  order?: ?RushingOrder,
|};
export type PlayersContainerQueryVariables = {|
  first: number,
  after?: ?string,
  name?: ?string,
  position?: ?string,
  team?: ?string,
  orderBy?: ?RushingPlayerOrder,
|};
export type PlayersContainerQueryResponse = {|
  +$fragmentRefs: Players_players$ref
|};
export type PlayersContainerQuery = {|
  variables: PlayersContainerQueryVariables,
  response: PlayersContainerQueryResponse,
|};
*/


/*
query PlayersContainerQuery(
  $first: Int!
  $after: ID
  $name: String
  $position: String
  $team: String
  $orderBy: RushingPlayerOrder
) {
  ...Players_players
}

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

fragment PlayersTable_players on RushingPlayer {
  id
  ...PlayerRow_player
}

fragment Players_players on RootQueryType {
  rushingPlayers(first: $first, after: $after, name: $name, position: $position, team: $team, orderBy: $orderBy) {
    edges {
      node {
        ...PlayersTable_players
        id
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "first",
    "type": "Int!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "after",
    "type": "ID",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "name",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "position",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "team",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "orderBy",
    "type": "RushingPlayerOrder",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "after"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "first"
  },
  {
    "kind": "Variable",
    "name": "name",
    "variableName": "name"
  },
  {
    "kind": "Variable",
    "name": "orderBy",
    "variableName": "orderBy"
  },
  {
    "kind": "Variable",
    "name": "position",
    "variableName": "position"
  },
  {
    "kind": "Variable",
    "name": "team",
    "variableName": "team"
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "PlayersContainerQuery",
    "type": "RootQueryType",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "Players_players",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "PlayersContainerQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "rushingPlayers",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "RushingPlayerConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "RushingPlayerEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "RushingPlayer",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "id",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "name",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "team",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "position",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "attempts",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "attemptsPerGame",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "yards",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "yardsPerGame",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "average",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "touchdowns",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "longestRush",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "first",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "firstPercentage",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "twentyPlus",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "fortyPlus",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "fumbles",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "__typename",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "cursor",
                "args": null,
                "storageKey": null
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "pageInfo",
            "storageKey": null,
            "args": null,
            "concreteType": "PageInfo",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "endCursor",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "hasNextPage",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      },
      {
        "kind": "LinkedHandle",
        "alias": null,
        "name": "rushingPlayers",
        "args": (v1/*: any*/),
        "handle": "connection",
        "key": "Players_rushingPlayers",
        "filters": [
          "name",
          "position",
          "team",
          "orderBy"
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "PlayersContainerQuery",
    "id": null,
    "text": "query PlayersContainerQuery(\n  $first: Int!\n  $after: ID\n  $name: String\n  $position: String\n  $team: String\n  $orderBy: RushingPlayerOrder\n) {\n  ...Players_players\n}\n\nfragment PlayerRow_player on RushingPlayer {\n  id\n  name\n  team\n  position\n  attempts\n  attemptsPerGame\n  yards\n  yardsPerGame\n  average\n  touchdowns\n  longestRush\n  first\n  firstPercentage\n  twentyPlus\n  fortyPlus\n  fumbles\n}\n\nfragment PlayersTable_players on RushingPlayer {\n  id\n  ...PlayerRow_player\n}\n\nfragment Players_players on RootQueryType {\n  rushingPlayers(first: $first, after: $after, name: $name, position: $position, team: $team, orderBy: $orderBy) {\n    edges {\n      node {\n        ...PlayersTable_players\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8cb4a2eb24ebb338cbf06574cf7bb33c';
module.exports = node;
