// import request from superagent

export function getGroups() {
  // return request.get('#').then((res) => res.body)
  return Promise.resolve([
    { groupName: "Kahikatea", count: 25 },
    { groupName: "Placeholder", count: 33 },
  ]);
}

export function postGroupForm(info) {
  // return request.post('#').send(info)
  console.log(info);
  return null;
}
