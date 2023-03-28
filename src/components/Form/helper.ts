const errorObj = {
  name: 'name is not written or so short',
  date: 'date not selected',
  cat: 'cat not selected',
  imgSrc: 'image is not selected',
  roles: 'at least 1 must be selected',
  accepted: 'should be accepted',
};

export const helperForErrors = (name: string, value: string | boolean) => {
  return !value || (typeof value === 'string' && value.length < 2)
    ? errorObj[name as keyof typeof errorObj]
    : null;
};
