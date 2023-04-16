import { useState } from 'react';
import SnackCardList from '../SnackCardList/SnackCardList';
import { SnackForm } from '../SnackForm/SnackForm';
import { ISnack, IFormValues } from '../../core/types';
import Message from '../../core/utils/message';
import { createUrl } from '../../core/utils/createUrl';

export const Form = (): JSX.Element => {
  const [snacks, setSnacks] = useState<ISnack[]>([]);
  const [isAlertShowed, setIsAlertShowed] = useState(false);

  const addSnack = (snack: IFormValues): void => {
    try {
      const newSnack: ISnack = {
        ...snack,
        id: `${Date.now()}`,
        image: createUrl(snack.image),
      };
      setSnacks((prevSnacks) => [...prevSnacks, newSnack]);
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
      <SnackCardList snacks={snacks} />
    </>
  );
};
