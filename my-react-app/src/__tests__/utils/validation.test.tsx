import {
  productionDateValidator,
  snackNameValidator,
  modeValidator,
  tasteValidator,
  ingredientsValidator,
} from '../../core/utils/validation';
import { expect } from 'vitest';

/**
 * @vitest-environment jsdom
 */

// test productionDateValidator
test('should return error message when date is not provided', () => {
  const result = productionDateValidator('');
  expect(result).toEqual('Введи дату правильно');
});

test('should return error message when date is invalid', () => {
  const result = productionDateValidator('invalid date');
  expect(result).toEqual('Введи дату правильно');
});

test('should return true when date is provided and valid', () => {
  const result = productionDateValidator('2022-01-01');
  expect(result).toEqual(true);
});

// test snackNameValidator
test('should return error message when snack name is not provided', () => {
  const result = snackNameValidator('');
  expect(result).toEqual('Название сырка - дело святое');
});

test('should return error message when snack name is too short', () => {
  const result = snackNameValidator('ab');
  expect(result).toEqual('Название должно состоять более чем из 3 букв');
});

test('should return true when snack name is provided and valid', () => {
  const result = snackNameValidator('Delicious Snack');
  expect(result).toEqual(true);
});

// test modeValidator
test('should return error message when mode is not provided', () => {
  const result = modeValidator('');
  expect(result).toEqual('А как же режим хранения? Не у меня же');
});

test('should return true when mode is provided', () => {
  const result = modeValidator('refrigerated');
  expect(result).toEqual(true);
});

// test tasteValidator
test('should return error message when taste is not provided', () => {
  const result = tasteValidator('');
  expect(result).toEqual('Ну какой-нибудь вкус надо выбрать');
});

test('should return error message when taste is "-"', () => {
  const result = tasteValidator('-');
  expect(result).toEqual('Ты не выбрал вкус..');
});

test('should return true when taste is provided', () => {
  const result = tasteValidator('sweet');
  expect(result).toEqual(true);
});

// test ingredientsValidator
test('should return error message when no ingredients are provided', () => {
  const result = ingredientsValidator(false);
  expect(result).toEqual('Не выбраны ингридиенты!');
});
