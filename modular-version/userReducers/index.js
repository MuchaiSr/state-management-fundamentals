import toggleActiveReducer from './toggleActive.js';
import addRoleReducer from './addRole.js';
import resetRolesReducer from './resetRoles.js';
import renameUserReducer from './renameUser.js';

const reducerMap = {
  TOGGLE_ACTIVE: toggleActiveReducer,
  ADD_ROLE: addRoleReducer,
  RESET_ROLES: resetRolesReducer,
  RENAME_USER: renameUserReducer,
};

export default reducerMap;
