/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type PlayerRow_player$ref: FragmentReference;
declare export opaque type PlayerRow_player$fragmentType: PlayerRow_player$ref;
export type PlayerRow_player = {|
  +id: string,
  +name: ?string,
  +team: ?string,
  +position: ?string,
  +attempts: ?number,
  +attemptsPerGame: ?number,
  +yards: ?number,
  +yardsPerGame: ?number,
  +average: ?number,
  +touchdowns: ?number,
  +longestRush: ?number,
  +first: ?number,
  +firstPercentage: ?number,
  +twentyPlus: ?number,
  +fortyPlus: ?number,
  +fumbles: ?number,
  +$refType: PlayerRow_player$ref,
|};
export type PlayerRow_player$data = PlayerRow_player;
export type PlayerRow_player$key = {
  +$data?: PlayerRow_player$data,
  +$fragmentRefs: PlayerRow_player$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "PlayerRow_player",
  "type": "RushingPlayer",
  "metadata": null,
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
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '4f1e7fd39041df7a655bc88659bff36d';
module.exports = node;
