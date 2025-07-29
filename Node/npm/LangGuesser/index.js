import {franc} from 'franc';
import langs from 'langs';
import colors from 'colors';

const input = process.agrv[2];
const langCode = franc(input);
const language = langs.where("3", langCode);
console.dir(language.name)