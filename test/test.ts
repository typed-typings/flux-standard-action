import test = require('blue-tape');

import { isFSA, FSA, FluxStandardAction } from 'flux-standard-action';

test('isFSA()', t => {
  const action = {
    type: 'something'
  };
  const x = action as FSA;
  const y = action as FluxStandardAction;

  t.plan(2);
  t.assert(isFSA(action), 'action is FSA');
  t.false(isFSA(t), 't is not FSA');
});
