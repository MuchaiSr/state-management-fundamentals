export default function renameUserReducer(user, action) {
  if (action.type === "RENAME_USER") {
    return { ...user, name: action.newName };
  }
  return user;
}
