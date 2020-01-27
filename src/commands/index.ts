import add from './add';
import post from './post';
import list from './list';
import remove from './remove';
import removeAll from './removeAll';
import art from './art';
import help from './help';
import guildAdd from './guildAdd';
import guildPost from './guildPost';
import guildList from './guildList';
import guildRemove from './guildRemove';
// import write from './write';
import join from './join';
import play from './play';
import stop from './stop';
import skip from './skip';
import pause from './pause';
import resume from './resume';
import eh from './eh';
// import exh from './exh';
import danbooru from './danbooru';
import roll from './roll';
import mywaifus from './mywaifus';
import mywaifu from './mywaifu';
import addfav from './addfav';
import favs from './favs';
import delfav from './delfav';
import scrape from './scrape';
import versus from './versus';
import whois from './whois';
import whatseries from './whatseries';
// import stealwaifu from './stealwaifu';
import love from './love';
import gay from './gay';
import profile from './profile';
import setwaifu from './setwaifu';
import setquote from './setquote';
import builddeck from './builddeck';
import deck from './deck';
import marry from './marry';
import divorce from './divorce';
import sudoku from './sudoku';
import resurrect from './resurrect';
import liar from './liar';
import dice from './dice';
import protecc from './protecc';
import handholding from './handholding';
import awoo from './awoo';
import disgust from './disgust';
import smug from './smug';
import pantsu from './pantsu';
import visit from './visit';

const commands = [
  add,
  post,
  list,
  remove,
  removeAll,
  help,
  guildAdd,
  guildPost,
  guildList,
  guildRemove,
  // write,
  join,
  play,
  stop,
  skip,
  pause,
  resume,
  eh,
  // exh,
  danbooru,
  roll,
  mywaifus,
  mywaifu,
  addfav,
  favs,
  delfav,
  scrape,
  versus,
  whois,
  whatseries,
  // stealwaifu,
  love,
  gay,
  profile,
  setwaifu,
  setquote,
  builddeck,
  deck,
  marry,
  divorce,
  sudoku,
  resurrect,
  liar,
  dice,
  protecc,
  handholding,
  awoo,
  disgust,
  smug,
  pantsu,
  visit,
];

if (process.env.IMAGE_ART_DIR) commands.push(art);

export default client => client.commands.add(...commands);
