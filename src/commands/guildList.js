import { injectUser, injectGuild } from './middleware';
import { TextResponse } from './responses';
import { listRefs } from './list';

export const middleware = [injectUser(), injectGuild()];

export const handler = async ({ guild: { images } }) =>
  new TextResponse('This guild\'s images:', listRefs(images));

export default () => ({
  middleware,
  handler,
  triggers: ['glist'],
  description: 'Lists guild\'s images',
});
