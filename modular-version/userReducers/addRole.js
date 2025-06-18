export default function addRoleReducer(user, action) {
  if (!user.roles.includes(action.role)) {
    return { ...user, roles: [...user.roles, action.role] };
  }
  return user;
}
