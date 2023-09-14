const baseURL = "https://jsonplaceholder.typicode.com"

const users = `${baseURL}/users`;
const user = `${baseURL}/user`;

const posts = `${baseURL}/posts`;
const post = `${baseURL}/post`;

const urls = {
  users: {
    base: users,
    byId: (id: number): string => `${users}/${id}`
  },
  posts: {
    base: posts,
    byId: (id: number): string =>`${posts}/${id}`
  }
}

export {urls};
