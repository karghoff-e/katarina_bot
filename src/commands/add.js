import R from 'ramda';

import { User } from '../models';
import {
  injectUser,
  expectValidUrl,
  expectValidImageUrl,
  expectRefToBeUnique,
  checkAttachment,
  deleteMessage,
} from './middleware';
import { ref, url } from '../util/parameters';
import { lenses } from '../util';
import { COMMAND_TRIGGERS } from '../util/constants';

export const middleware = [
  injectUser(),
  checkAttachment(),
  expectValidUrl(),
  expectValidImageUrl(),
  expectRefToBeUnique(R.view(lenses.user.images)),
  deleteMessage(),
];

export const handler = User.addImageLink.bind(User);

export default () => ({
  middleware,
  handler,
  parameters: [ref, {
    ...url,
    optional: true,
    defaultValue: '',
  }],
  triggers: COMMAND_TRIGGERS.ADD,
  description: 'Adds an image link for the user',
});
