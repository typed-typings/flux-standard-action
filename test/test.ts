import test = require('blue-tape');

import { isFSA, isError, Action } from 'flux-standard-action';

test('isFSA()', t => {
  const action = {
    type: 'something'
  };

  t.plan(2);
  t.assert(isFSA(action), 'action is FSA');
  t.false(isFSA(t), 't is not FSA');
});

test('isError()', t => {
  const action = {
    type: 'something'
  };
  const err = {
    type: 'other',
    error: true
  };

  t.plan(2);
  t.false(isError(action), 'action is not error');
  t.true(isError(err), 'err is error');
});
