import { combineReducers } from 'redux';

import user from './user/reducer';
import menu from './menu/reducer';

export default combineReducers({
  user,
  menu,
});
