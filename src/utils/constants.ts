import { UserSettings } from '../types';

export const Trigger = {
  HELP: ['help'],
  GAY: ['gay'],
  LOVE: ['love'],
  DICE: ['dice'],
  LIAR: ['liar'],
  SUDOKU: ['sudoku'],
  ROLL: ['roll'],
};

export enum CommandGroupName {
  GACHA = 'Gacha',
  FUN = 'Fun',
  UTILITY = 'Utility',
}

export enum ModelName {
  USER = 'user',
  USER_CHARACTER = 'userCharacter',
  CHARACTER = 'character',
  SERIES = 'series',
  GUILD = 'guild',
  ACHIEVEMENT = 'achievement',
  MISSION = 'mission',
}

export const DefaultUserSettings: UserSettings = {
  displayrollprice: 1,
};

export enum MissionCode {
  DAILY = 'DAILY',
  ROLL_DAILY = 'ROLL_DAILY',
  BATTLE_ROYALE_DAILY = 'BATTLE_ROYALE_DAILY',
  DUEL_DAILY = 'DUEL_DAILY',
  QUIZ_DAILY = 'QUIZ_DAILY',
  VERSUS_DAILY = 'VERSUS_DAILY',
  ALL_COMPLETE_DAILY = 'ALL_COMPLETE_DAILY',
}

export enum AchievementCode {
  SERIES_SET = 'SERIES_SET',
}

export enum BannerType {
  NORMAL = 'normal',
  LOCAL = 'local',
}

export enum UserSettingName {
  DISPLAY_ROLL_PRICE = 'displayrollprice',
}

export enum UserSetting {
  OFF = 0,
  ON = 1,
}
