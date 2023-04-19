import { useState } from 'react';
import SnackCardList from '../SnackCardList/SnackCardList';
import { SnackForm } from '../SnackForm/SnackForm';
import { ISnack, IFormValues } from '../../core/types';
import Message from '../../core/utils/message';
import { createUrl } from '../../core/utils/createUrl';
import { useSelector } from 'react-redux';
import { getData, setData } from '../../core/store/formSlice';
import { useAppDispatch } from '../../core/store/store';

export const Form = (): JSX.Element => {
  const [isAlertShowed, setIsAlertShowed] = useState(false);
  const data = useSelector(getData);
  const dispatch = useAppDispatch();

  const addSnack = (snack: IFormValues): void => {
    try {
      const newCard: ISnack = {
        ...snack,
        id: `${Date.now()}`,
        image: createUrl(snack.image),
      };
      dispatch(setData([...data, newCard]));
      setIsAlertShowed(true);
      setTimeout(() => setIsAlertShowed(false), 5000);
    } catch (error) {
      console.error(`Failed to add snack. Error: ${(error as Error).message}`);
    }
  };

  return (
    <>
      <SnackForm addSnack={addSnack} />
      {isAlertShowed && <Message message="User data added successfully." />}
      <SnackCardList snacks={data} />
    </>
  );
};
