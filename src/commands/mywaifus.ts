import { Command } from '../types';
import { COMMAND_TRIGGERS } from '../util';
import { injectUser } from './middleware';
import { User } from '../models';
import { ErrorResponse } from './responses';

const handler = async (context) => {
  try {
    const { user, args: { stars }, message } = context;
    const data = await User.aggregate([
      {
        $match: {
          _id: user._id,
        },
      },
      {
        $lookup: {
          from: 'characters',
          as: 'characters',
          let: { characters: '$characters' },
          pipeline: [
            {
              $match: {
                stars: Number(stars),
                $expr: {
                  $in: ['$_id', '$$characters'],
                },
              },
            },
            { $sort: { stars: -1 } },
          ],
        },
      },
      {
        $unwind: '$characters',
      },
      {
        $group: {
          _id: '$characters._id',
          name: { $first: '$characters.name' },
          count: { $sum: 1 },
        },
      },
    ]);

    if (!data.length) {
      return 'Empty 🤷‍♀️';
    }

    const msg = data.map(({ name, count }) => `${name} x${count}`).join(', ');
    return message.reply(msg);
  } catch (err) {
    return ErrorResponse('Couldn\'t fetch waifus...', context);
  }
};

export default (): Command => ({
  middleware: [injectUser()],
  handler,
  triggers: COMMAND_TRIGGERS.MYWAIFUS,
  description: 'Displays a list of your collected waifus',
  parameters: [
    {
      name: 'stars',
      description: 'stars',
      defaultValue: 5,
      optional: true,
    },
  ],
});