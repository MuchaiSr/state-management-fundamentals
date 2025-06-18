const actions = [
  { type: "TOGGLE_ACTIVE", id: 2 },
  { type: "ADD_ROLE", id: 3, role: "admin" },
  { type: "ADD_ROLE", id: 2, role: "editor" },
  { type: "RESET_ROLES", id: 2 },
  { type: "RESET_ROLES" },
  { type: "RENAME_USER", id: 3, newName: "Chuck" },
];

export default actions;