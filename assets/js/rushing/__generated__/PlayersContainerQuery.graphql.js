/**
 * @flow
 * @relayHash 2c8068004272480ad4ac91071210fe4c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Players_players$ref = any;
export type PlayersContainerQueryVariables = {|
  first: number,
  after?: ?string,
  name?: ?string,
  position?: ?string,
  team?: ?string,
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
) {
  ...Players_players
}

fragment PlayerRow_player on RushingPlayer {
  id
  name
  team
  position
}

fragment PlayersTable_players on RushingPlayer {
  id
  ...PlayerRow_player
}

fragment Players_players on RootQueryType {
  rushingPlayers(first: $first, after: $after, name: $name, position: $position, team: $team) {
    edges {
      node {
        ...PlayersTable_players
        id
        __typename
      }
      cursor
    }
    pageInfo {
      startCursor
      endCursor
      hasNextPage
      hasPreviousPage
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
                "name": "startCursor",
                "args": null,
                "storageKey": null
              },
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
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "hasPreviousPage",
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
          "team"
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "PlayersContainerQuery",
    "id": null,
    "text": "query PlayersContainerQuery(\n  $first: Int!\n  $after: ID\n  $name: String\n  $position: String\n  $team: String\n) {\n  ...Players_players\n}\n\nfragment PlayerRow_player on RushingPlayer {\n  id\n  name\n  team\n  position\n}\n\nfragment PlayersTable_players on RushingPlayer {\n  id\n  ...PlayerRow_player\n}\n\nfragment Players_players on RootQueryType {\n  rushingPlayers(first: $first, after: $after, name: $name, position: $position, team: $team) {\n    edges {\n      node {\n        ...PlayersTable_players\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      startCursor\n      endCursor\n      hasNextPage\n      hasPreviousPage\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7754b87e8322eb316ec0926ebf0425ef';
module.exports = node;
