import { ISnack } from '../../core/types';
import SnackCard from '../SnackCard/SnackCard';

interface ISnackCardListProps {
  snacks: ISnack[];
}

const SnackCardList = ({ snacks }: ISnackCardListProps): JSX.Element => (
  <div className="snack-list">
    {snacks.length === 0 ? (
      <h2 className="no-data">No data!</h2>
    ) : (
      snacks.map(({ id, ...snack }) => <SnackCard key={id} snack={snack} />)
    )}
  </div>
);

export default SnackCardList;
