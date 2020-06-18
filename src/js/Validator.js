
import { Character } from './Character';

// eslint-disable-next-line import/prefer-default-export
export class Validator {
  constructor(character) {
    if (character instanceof !Character) {
      throw new Error('переданный объект не является игровым персонажем');
    }
    this.name = character.name;
    this.type = character.type;
    this.level = character.level;
    this.health = character.health;
    this.defence = character.defence;
    this.attack = character.attack;
    this.stoned = character.stoned;
  }

  validateUsername() {
    if (this.name.search(/^[\d/-/_]|[\d/-/_]$/) !== -1) {
      throw new Error('Имя начинается или заканчивается неверным символом');
    }
    if (this.name.search(/[^a-zA-Z0-9/-/_]/) !== -1) {
      throw new Error('Имя содержит недопустимый символ');
    }
    if (this.name.search(/\d{4}/) !== -1) {
      throw new Error('Имя содержит недопустимую последовательность символов');
    }
    return true;
  }
}
