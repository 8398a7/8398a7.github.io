import { Record } from 'immutable';
import { recordOf } from 'react-immutable-proptypes';
import { PropTypes } from 'react';

const Iidx12Record = new Record({
  users: 0,
});

export default class Iidx12 extends Iidx12Record {
  static PropTypes = recordOf({
    users: PropTypes.number.isRequired,
  })
}
