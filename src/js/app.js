// TODO: write your code here
import { Character } from './Character';
import { Validator } from './Validator';

const human = new Character('Human');

const validator = new Validator(human);

validator.validateUsername();
