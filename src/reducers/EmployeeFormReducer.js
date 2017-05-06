import {
  PARK_CHECK_IN_UPDATE,
  PARK_CHECK_IN_CREATE,
  PARK_CHECK_IN_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PARK_CHECK_IN_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case PARK_CHECK_IN_CREATE:
      return INITIAL_STATE;
    case PARK_CHECK_IN_SAVE_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
