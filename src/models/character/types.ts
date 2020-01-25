import { Types, Model, Document } from 'mongoose';
import { ObjectId } from 'mongodb';

import { CharacterStar } from '../../util';
import { ISeries } from '../series/types';

export interface ICharacter extends Document {
  name: string;
  stars: CharacterStar;
  popularity: number;
  slug: string;
  imageUrl: string;
  series: ObjectId[] | Types.DocumentArray<ISeries>;
  cardImageUrl: string;
  getStarRating(): CharacterStar;
  fetchInfo(userId: ObjectId): Promise<ICharacter & any>;
}

export interface ICharacterModel extends Model<ICharacter> {
  random(n: number, pipeline?: object[]): Promise<ICharacter[]>;
}
