export const getFormDefaultState = () => {
  return {
    currentCard: {
      id: '',
      imgSrc: '',
      date: '',
      name: '',
      lastName: '',
      cat: '',
      roles: '',
      male: false,
      female: false,
      accepted: false,
    },
    errors: {
      imgSrc: null,
      date: null,
      name: null,
      lastName: null,
      cat: null,
      roles: null,
      accepted: null,
    },
    isDisabled: true,
    hasError: true,
  };
};
