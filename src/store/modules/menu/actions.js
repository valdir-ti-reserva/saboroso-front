export function listMenu(data) {
  return {
    type: '@menu/LIST',
    menu: data,
  };
}

export function addMenu(menu) {
  return {
    type: '@menu/ADD',
    menu,
  };
}

export function removeMenu(id) {
  return {
    type: '@menu/REMOVE',
    id,
  };
}
