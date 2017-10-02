import R from 'ramda';
import { getOrCreateUser } from './middleware';
import props from '../util/props';

export const middleware = [getOrCreateUser()];

const listRefs = R.ifElse(
  R.length,
  R.compose(
    R.join(', '),
    R.map(props.ref)
  ),
  R.always('nothing!'),
);

export const handler = async context => context.message.reply(listRefs(context.user.images));

export default () => ({
  middleware,
  handler,
  triggers: ['list', 'l'],
  description: 'Lists all available images',
});
