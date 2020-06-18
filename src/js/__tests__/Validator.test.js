import { Validator } from '../Validator';
import { Character } from '../Character';


test(' переданный объект не принадлежит к классу Character', () => {
  const result = function () {
    // eslint-disable-next-line no-unused-vars
    const validator = new Validator('Human');
  };

  expect(result).toThrow();
});

test(' начинается или заканчивается недопустимо', () => {
  const result = function () {
    const merlin = new Character('_Human');
    // eslint-disable-next-line no-unused-vars
    const validator = new Validator(merlin);
  };

  expect(result).toThrow();
});

test(' начинается или заканчивается недопустимо', () => {
  const result = function () {
    const merlin = new Character('-Human');
    // eslint-disable-next-line no-unused-vars
    const validator = new Validator(merlin);
  };

  expect(result).toThrow();
});

test(' начинается или заканчивается недопустимо', () => {
  const result = function () {
    const merlin = new Character('1Human');
    // eslint-disable-next-line no-unused-vars
    const validator = new Validator(merlin);
  };

  expect(result).toThrow();
});

test(' начинается или заканчивается недопустимо', () => {
  const result = function () {
    const merlin = new Character('Human2');
    // eslint-disable-next-line no-unused-vars
    const validator = new Validator(merlin);
  };

  expect(result).toThrow();
});

test(' начинается или заканчивается недопустимо', () => {
  const result = function () {
    const merlin = new Character('Human-');
    // eslint-disable-next-line no-unused-vars
    const validator = new Validator(merlin);
  };

  expect(result).toThrow();
});

test(' начинается или заканчивается недопустимо', () => {
  const result = function () {
    const merlin = new Character('Human_');
    // eslint-disable-next-line no-unused-vars
    const validator = new Validator(merlin);
  };

  expect(result).toThrow();
});

test('больше трех цифр подряд', () => {
  const result = function () {
    const merlin = new Character('Hu222222man');
    // eslint-disable-next-line no-unused-vars
    const validator = new Validator(merlin);
  };

  expect(result).toThrow();
});

test('недопустимый символ', () => {
  const result = function () {
    const merlin = new Character('Человече');
    // eslint-disable-next-line no-unused-vars
    const validator = new Validator(merlin);
  };

  expect(result).toThrow();
});

test('Успешно провалидировано', () => {
  const result = function () {
    const merlin = new Character('Mage');
    // eslint-disable-next-line no-unused-vars
    const validator = new Validator(merlin);
  };

  expect(result).toBeTruthy();
});
