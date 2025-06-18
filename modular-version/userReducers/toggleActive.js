export default function toggleActiveReducer(user, action) {
  if (action.type === "TOGGLE_ACTIVE") {
    return { ...user, active: !user.active };
  }
  return user;
}
