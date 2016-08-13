import {GraphQLError} from 'graphql/error';

import {User} from '../../connectors';

export default async function (root, {id}) {
  const user = await User.findOne({_id: id});

  if (!user) {
    throw new GraphQLError(`No user found with id ${id}`);
  }

  return user;
}
