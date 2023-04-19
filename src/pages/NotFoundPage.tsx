import * as React from 'react';

const NotFoundPage = () => {
  return (
    <div className="not-found" data-testid="not-found">
      <img
        className="not-found__img"
        src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTRkYmU3Y2YyZWRmNzljOGM4MjEzODdhYjRhYmE4ZDZjZjg4MjA3NSZjdD1n/xTiN0L7EW5trfOvEk0/giphy.gif"
        alt="404 Not Found"
      />
    </div>
  );
};

export default NotFoundPage;
