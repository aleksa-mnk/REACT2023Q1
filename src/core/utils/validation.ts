const ALLOWED_IMAGES_TYPES = ['image/jpeg', 'image/png', 'image/webp'];

export const snackImageFileValidator = (fileList: FileList): string | true => {
  return !fileList[0]
    ? 'Загрузи фото пж'
    : !ALLOWED_IMAGES_TYPES.includes(fileList[0].type)
    ? 'Нужен верный формат (jpeg, png, webp)'
    : true;
};

export const productionDateValidator = (date: string): string | true => {
  const isValidDate = Boolean(Date.parse(date));
  if (!date || !isValidDate) {
    return 'Введи дату правильно';
  }
  return true;
};

export const snackNameValidator = (snackName: string): string | true => {
  if (!snackName.trim()) {
    return 'Название сырка - дело святое';
  } else if (snackName.length < 3) {
    return 'Название должно состоять более чем из 3 букв';
  }

  return true;
};

export const modeValidator = (position: string): string | true =>
  position ? true : 'А как же режим хранения? Не у меня же';

export const tasteValidator = (taste: string): string | true => {
  if (!taste) return 'Ну какой-нибудь вкус надо выбрать';
  if (taste === '-') return 'Ты не выбрал вкус..';
  return true;
};

export const ingredientsValidator = (ingredients: string[] | false): string | true => {
  if (ingredients === false || ingredients.length === 0) {
    return 'Не выбраны ингридиенты!';
  }
  return true;
};
