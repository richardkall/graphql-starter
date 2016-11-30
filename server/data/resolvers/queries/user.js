import User from '../../connectors/User';

export default async function (root, { id }) {
  const user = await User.findOne({ _id: id });

  if (!user) {
    throw new Error(`No user found with id ${id}`);
  }

  return user;
}
