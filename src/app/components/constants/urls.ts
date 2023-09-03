const baseURL = "https://jsonplaceholder.typicode.com"

const users = `${baseURL}/users`;
const user = `${baseURL}/user`;

const urls = {
  users:{
    base: users,
    byId: (id:number):string => `${users}/${id}`
  }
}

export {urls};
