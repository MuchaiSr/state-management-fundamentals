export default function resetRolesReducer(user, action) {
  if (action.type === "RESET_ROLES") {
    return { ...user, roles: [] };
  }
  return user;
}
