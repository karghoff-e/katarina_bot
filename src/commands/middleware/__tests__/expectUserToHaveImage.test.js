import R from 'ramda';

import { createContext } from '../../../util/tests';
import expectUserToHaveImage, {
  YOU_DONT_HAVE_ANY_IMAGES,
  youDontHaveImage,
} from '../expectUserToHaveImage';

describe('expectUserToHaveImage', () => {
  const next = R.identity;

  it('should inject image to context args if the user has image', async () => {
    const ref = 'foo';
    const image = { ref };
    const context = createContext({
      args: { ref },
      user: {
        images: [{ ref: 'bar' }, image],
      },
    });
    const nextContext = await expectUserToHaveImage()(next, context);

    expect(nextContext.image).toEqual(image);
  });

  it('should dispatch an error when the user doesn\'t have any images', async () => {
    const context = createContext({
      args: {
        ref: 'foo',
      },
      user: {
        images: [],
      },
    });
    const errorResponse = await expectUserToHaveImage()(next, context);
    const response = await errorResponse.executor(context);

    expect(response.embed.fields[1].value).toBe(YOU_DONT_HAVE_ANY_IMAGES);
  });

  it('should dispatch an error when the user doesn\'t have requested image', async () => {
    const context = createContext({
      args: {
        ref: 'foo',
      },
      user: {
        images: [{ ref: 'bar' }],
      },
    });
    const errorResponse = await expectUserToHaveImage()(next, context);
    const response = await errorResponse.executor(context);
    const expectedResponseMessage = youDontHaveImage(context.args.ref);

    expect(response.embed.fields[1].value).toBe(expectedResponseMessage);
  });
});
