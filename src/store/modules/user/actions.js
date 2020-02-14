export function listUser(data) {
  return {
    type: '@user/LIST',
    user: data,
  };
}

export function addUser(user) {
  return {
    type: '@user/ADD',
    user,
  };
}

export function removeUser(id) {
  return {
    type: '@user/REMOVE',
    id,
  };
}
