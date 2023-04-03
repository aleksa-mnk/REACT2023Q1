export const createUrl = (target: FileList | null): string =>
  target && target[0] ? URL.createObjectURL(target[0]) : '';
