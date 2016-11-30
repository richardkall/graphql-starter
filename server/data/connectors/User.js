const USERS = [
  {
    id: '1',
    email: 'user1@example.com',
  },
  {
    id: '2',
    email: 'user2@example.com',
  },
  {
    id: '3',
    email: 'user3@example.com',
  },
];

export default {
  findOne(id) {
    return USERS.find(user => user.id === id);
  },
};
