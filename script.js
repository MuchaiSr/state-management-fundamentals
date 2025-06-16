// State is the current condition/data of your app at any moment in time.
// State matters because your app updates the UI based on changes to state.
// If the state changes, the UI should reflect that change.
// If you add a task or complete one, the display should update accordingly.

(() => {
    const state = [
  { id: 1, title: "Learn JS", done: false },
  { id: 2, title: "Write Code", done: true },
  { id: 3, title: "Read Book", done: false }
];

const action = { type: "TOGGLE_TASK", id: 2 };

// Do not mutate the original state.
// Use map() to create a new state.
// Only update the task whose ID matches the action.
// Flip its done status from true to false or vice versa.
// Print the new state.

const stateCopy = structuredClone(state);

const toggleState = stateCopy.map((object) => {
    return object.id === action.id ? {...object, done:!object.done} : object;
});
console.log(toggleState);
})();

(() => {
    const users = [
  { id: 1, name: "Alice", active: true, roles: ["admin"] },
  { id: 2, name: "Bob", active: false, roles: ["user"] },
  { id: 3, name: "Charlie", active: true, roles: ["user", "moderator"] }
];

const action1 = { type: "TOGGLE_ACTIVE", id: 2 };
const action2 = { type: "ADD_ROLE", id: 3, role: "admin" };


// Write a function updateUsers(users, action) that: 
// Returns a new array (do not mutate the original).
// If action.type is "TOGGLE_ACTIVE", toggle the user’s active status.
// If action.type is "ADD_ROLE", add the role to the user's roles array only if it’s not already there.
// If no matching user is found, return the original array unchanged.

function updateUsers(users, action) {
    const newUsersArray = users.map((object) => {
        if (object.id === action.id && action.type === `TOGGLE_ACTIVE`) {
            return {...object, active: !object.active};
        } 

        if (action.type === `ADD_ROLE` && !object.roles.includes(action.role)) {
            return {...object, roles:[...object.roles, action.role]};
        }
        
        return object;
    });
    return newUsersArray;
}

// This will work, but there is another way to do the same...
const result = updateUsers(users, action1); // When action 1 is applied, it will return a new array of users.
// The result of this can be used to call the function again, because users are updated but the concept remains the same
const finalResult = updateUsers(result, action2);
console.log(finalResult);

// This time, the 2 actions will be in their own arrays, so...
const actions = [
    {type: `TOGGLE_ACTIVE`, id: 2},
    {type: `ADD_ROLE`, id: 3, role: `admin`},
];
// Then we'll use the reduce method...
function updateUsersWithActions (users, actions) {
    return actions.reduce((currentUsers, action) => {
        return updateUsers(currentUsers, action);
    }, users);
}
// Let's understand what's going on here...This is possibly the most important statement to make.
// While the base code is important, this is more important because it feeds the base code.
// Why? Because when we use reduce, we introduce currentUsers as the argument for the function in the base code.
// Reduce processes a list of items and reduces them into a single result.
// The way reduce works is that currentUsers will hold the value of users in the first iteration, so...
// currentUsers === users (the original array). This reduce logic is meant to target the actions array,
// so for each action(object) in that array, the base code is applied to it and that application returns a new value
// to currentUsers, i.e the accumulator version. This statement is very interesting because a lot of things are feeding
// off each other.
// It allows us to simulate how state is updated in professional state-management systems like Redux.

const finalState = updateUsersWithActions(users, actions);
console.log(finalState);
})();

(() => {
const users = [
  { id: 1, name: "Alice", active: true, roles: ["admin"] },
  { id: 2, name: "Bob", active: false, roles: ["user"] },
  { id: 3, name: "Charlie", active: true, roles: ["user", "moderator"] }
];

const actions = [
  { type: "TOGGLE_ACTIVE", id: 2 },
  { type: "ADD_ROLE", id: 3, role: "admin" },
  { type: "ADD_ROLE", id: 2, role: "editor" }
];

function updateUsers(users, action) {
    return users.map((object) => {
        if (object.id !== action.id) {
            return object;
        }

        if (action.type === `TOGGLE_ACTIVE`) {
            return {...object, active: !object.active};
        }

        if (action.type === `ADD_ROLE`) {
            if (!object.roles.includes(action.role)) {
                return {...object, roles: [...object.roles, action.role]};
            }
            return object;
        }
        return object;
    });
}

function updateUsersWithActions (users, actions) {
    return actions.reduce((acc, action) => {
        return updateUsers(acc, action);
    }, users);
}

const finalState = updateUsersWithActions(users, actions);
console.log(finalState);
})();

(() => {
    // What we've been dealing with are called reducers. They are basically functions that take states and actions and 
    // returns a new state based on what the action demands. So...
    // Step 1: Reducer function
function userReducer(state, action) {
  return state.map((user) => {
    if (user.id !== action.id) {
        return user;
    }

    if (action.type === `TOGGLE_ACTIVE`) {
        return {...user, active: !user.active};
    }

    if (action.type === `ADD_ROLE`) {
        if (!user.roles.includes(action.role)) {
            return {...user, roles: [...user.roles, action.role]};
        }
        return user;
    }
    return user;
  });
}

// Step 2: Dispatcher function that applies many actions
function dispatchActions(users, actions) {
  return actions.reduce((acc, action) => {
    return userReducer(acc, action);
  }, users);
}

// Test data (same as before)
const users = [
  { id: 1, name: "Alice", active: true, roles: ["admin"] },
  { id: 2, name: "Bob", active: false, roles: ["user"] },
  { id: 3, name: "Charlie", active: true, roles: ["user", "moderator"] }
];

const actions = [
  { type: "TOGGLE_ACTIVE", id: 2 },
  { type: "ADD_ROLE", id: 3, role: "admin" },
  { type: "ADD_ROLE", id: 2, role: "editor" }
];

const finalState = dispatchActions(users, actions);
console.log(finalState);
})();

(() => {
const users = [
  { id: 1, name: "Alice", active: true, roles: ["admin"] },
  { id: 2, name: "Bob", active: false, roles: ["user"] },
  { id: 3, name: "Charlie", active: true, roles: ["user", "moderator"] }
];

const actions = [
  { type: "TOGGLE_ACTIVE", id: 2 },
  { type: "ADD_ROLE", id: 3, role: "admin" },
  { type: "ADD_ROLE", id: 2, role: "editor" }
];

// create first reducer function
function toggleActiveReducer (user, action) {
    if (action.type === `TOGGLE_ACTIVE`) {
        return {...user, active: !user.active};
    }
    return user
}

function addRoleReducer (user, action) {
    if (action.type === `ADD_ROLE`) {
        if (!user.roles.includes(action.role)) {
            return {...user, roles: [...user.roles, action.role]};
        }
        return user;
    }
    return user;
}

function userReducer (state, action) {
    return state.map((object) => {
        if (object.id !== action.id) return object;

        let updateUser = toggleActiveReducer(object, action);
        updateUser = addRoleReducer(updateUser, action);
        return updateUser;
    });
}

function userReducerDispatch (users, actions) { // Remember, this is the core of the entire operation. So 
    // remember that the dispatch function is where the main component of the operation are added in i.e this 
    // function has the parameter users and actions, and so, the arguments are added when it is called as will happen
    // below The parameter then get's used as the initial value of the method and that passes the value to the
    // accumulator, so acc === users === users(original array).
    return actions.reduce((acc, action) => {
        return userReducer(acc, action);
    }, users);
}

const finalState = userReducerDispatch(users, actions);
console.log(finalState);
})();

(() => { // Here, we introduce UPDATE_NAME as a new type of action and data pipeline structures.
    console.log(`I'm here`);
    const users = [
  { id: 1, name: "Alice", active: true, roles: ["admin"] },
  { id: 2, name: "Bob", active: false, roles: ["user"] },
  { id: 3, name: "Charlie", active: true, roles: ["user", "moderator"] }
];

const actions = [
  { type: "TOGGLE_ACTIVE", id: 2 },
  { type: "ADD_ROLE", id: 3, role: "admin" },
  { type: "ADD_ROLE", id: 2, role: "editor" },
  { type: "UPDATE_NAME", id: 2, name: "Robert" }
];

function toggleActiveReducer (user, action) {
    if (action.type === `TOGGLE_ACTIVE`) {
        return {...user, active: !user.active};
    }
    return user;
}

function addRoleReducer (user, action) {
    if (action.type === `ADD_ROLE` && !user.roles.includes(action.role)) {
        return {...user, roles: [...user.roles, action.role]};
    }
    return user;
}

function updateNameReducer (user, action) {
    if (action.type === `UPDATE_NAME`) {
           return {...user, name: action.name}; 
    }
    return user;
}

const userReducerFunctions = [toggleActiveReducer, addRoleReducer, updateNameReducer];  // create an array of functions
function userReducer (state, action) {
    return state.map((object) => {
        if (object.id !== action.id) return object;

        let updateUser = toggleActiveReducer(object, action); // Now this part is worth considering...
        // This type of operation will create a pipeline. A pipeline is a programming pattern where data flows
        // through a series of functions, and each function transforms the data a bit more.
        // Instead, what you should do is push the items in an array and then come here and write an operation that
        // utilizes arrays. So for example, this is what we'd do...(refer to the array above and then the return statem-
        // ent below)
        updateUser = addRoleReducer (updateUser, action);
        updateUser = updateNameReducer (updateUser, action);

        // Much cleaner!
        return userReducerFunctions.reduce((user, reducerFunction) => {
            return reducerFunction(user, action);
        }, object);
    });
}

function userReducerDispatch (users, actions) {
    return actions.reduce((acc, action) => {
        return userReducer(acc, action);
    }, users);
}

const finalState = userReducerDispatch(users, actions);
console.log(finalState);
})();
