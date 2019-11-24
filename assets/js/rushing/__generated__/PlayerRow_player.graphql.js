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
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '00fe5a17ced6846e5beaf50e4e7331c7';
module.exports = node;
