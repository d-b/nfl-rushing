/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type PlayersTable_players$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Players_players$ref: FragmentReference;
declare export opaque type Players_players$fragmentType: Players_players$ref;
export type Players_players = {|
  +rushingPlayers: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +$fragmentRefs: PlayersTable_players$ref
      |}
    |}>
  |},
  +$refType: Players_players$ref,
|};
export type Players_players$data = Players_players;
export type Players_players$key = {
  +$data?: Players_players$data,
  +$fragmentRefs: Players_players$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Players_players",
  "type": "RootQueryType",
  "metadata": {
    "connection": [
      {
        "count": "first",
        "cursor": "after",
        "direction": "forward",
        "path": [
          "rushingPlayers"
        ]
      }
    ]
  },
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "first",
      "type": "Int"
    },
    {
      "kind": "RootArgument",
      "name": "after",
      "type": "String"
    },
    {
      "kind": "RootArgument",
      "name": "name",
      "type": "String"
    },
    {
      "kind": "RootArgument",
      "name": "position",
      "type": "String"
    },
    {
      "kind": "RootArgument",
      "name": "team",
      "type": "String"
    }
  ],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": "rushingPlayers",
      "name": "__Players_rushingPlayers_connection",
      "storageKey": null,
      "args": [
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
      ],
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
                  "name": "__typename",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "FragmentSpread",
                  "name": "PlayersTable_players",
                  "args": null
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
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'b4b75e9a64d8d9c62eab921dec8e7965';
module.exports = node;
