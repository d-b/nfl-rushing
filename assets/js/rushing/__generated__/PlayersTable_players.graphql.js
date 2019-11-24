/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type PlayerRow_player$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type PlayersTable_players$ref: FragmentReference;
declare export opaque type PlayersTable_players$fragmentType: PlayersTable_players$ref;
export type PlayersTable_players = $ReadOnlyArray<{|
  +id: string,
  +$fragmentRefs: PlayerRow_player$ref,
  +$refType: PlayersTable_players$ref,
|}>;
export type PlayersTable_players$data = PlayersTable_players;
export type PlayersTable_players$key = $ReadOnlyArray<{
  +$data?: PlayersTable_players$data,
  +$fragmentRefs: PlayersTable_players$ref,
}>;
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "PlayersTable_players",
  "type": "RushingPlayer",
  "metadata": {
    "plural": true
  },
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "PlayerRow_player",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '757a0968b01ea7a9e04e7d9538318621';
module.exports = node;
