import React from 'react';
import CurdSnackCard, { CurdSnackCardProps } from '../CardItem/CardItem';

interface CurdSnackListProps {
  data: CurdSnackCardProps[];
  searchText: string;
}

const CurdSnackList = ({ data, searchText }: CurdSnackListProps) => {
  const filteredData = React.useMemo(
    () => data.filter((item) => item.name.toLowerCase().includes(searchText.toLowerCase())),
    [data, searchText]
  );

  return (
    <div className="CurdSnackList">
      {filteredData.map((item) => (
        <CurdSnackCard key={item.name} {...item} />
      ))}
    </div>
  );
};

export default CurdSnackList;
