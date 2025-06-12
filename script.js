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
    console.log(`I'm here`);
    const users = [
  { id: 1, name: "Alice", active: true, roles: ["admin"] },
  { id: 2, name: "Bob", active: false, roles: ["user"] },
  { id: 3, name: "Charlie", active: true, roles: ["user", "moderator"] }
];

const actions = [
    {type: `TOGGLE_ACTIVE`, id: 2},
    {type: `ADD_ROLE`, id: 3, role: `admin`},
]

// Write a function updateUsers(users, action) that: 
// Returns a new array (do not mutate the original).
// If action.type is "TOGGLE_ACTIVE", toggle the user’s active status.
// If action.type is "ADD_ROLE", add the role to the user's roles array only if it’s not already there.
// If no matching user is found, return the original array unchanged.

function updateUsers(users, action) {
    const updateUsers = users.map((object) => {
        action.forEach((obj) => {
            if (obj.type === `TOGGLE_ACTIVE`) {
                return {...object, active: !object.active}
            } else if (obj.type === `ADD_ROLE`) {
                if (!object.roles.includes(obj.role)) {
                    object.roles.push(obj.role)
                }
            } else {
                return object;
            }
        });
    });
    return updateUsers;
}

console.log(updateUsers(users, actions))
})();