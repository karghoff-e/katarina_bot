import { ICommand, ICommandHandler } from 'ghastly';

import { RichEmbed } from 'discord.js';
import { COMMAND_TRIGGERS } from '../util';
import { WallOfShame } from '../models';

const handler: ICommandHandler = async (context): Promise<any> => {
  const wall = await WallOfShame.aggregate([
    {
      $match: {
        guild: context.message.guild.id,
      },
    },
    {
      $group: {
        _id: '$user',
        count: { $sum: 1 },
      },
    },
    {
      $sort: {
        count: -1,
      },
    },
    {
      $limit: 10,
    },
  ]);
  const description = wall.map((result) => {
    const member = context.message.guild.members.get(result._id) || { displayName: 'Member left guild' };
    return `${member.displayName}: ${result.count}`;
  }).join('\n');

  const embed = new RichEmbed({
    title: 'Wall of Shame',
    description: `Cringe messages:\n${description}`,
    image: {
      url: 'https://cdn.discordapp.com/attachments/665974624022167619/708277846052700270/w4fbzh36nex41weircdchamp.png',
    },
  });
  return embed;
};

export default (): ICommand => ({
  handler,
  triggers: COMMAND_TRIGGERS.WALL_OF_SHAME,
  description: 'Wall of shame',
});