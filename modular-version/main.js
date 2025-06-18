import users from './data/users.js';
import actions from './data/actions.js';
import reducerMap from './userReducers/index.js';
import createUserPipeline from './pipeline/createUserPipeline.js';

const userReducerDispatch = createUserPipeline(reducerMap);
const finalState = userReducerDispatch(users, actions);

console.log(finalState);
