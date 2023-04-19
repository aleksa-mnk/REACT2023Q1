import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { Store } from 'redux';
import React from 'react';

const withComponents = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  store: Store
) => {
  return class extends React.Component<P> {
    render() {
      return (
        <Provider store={store}>
          <MemoryRouter>
            <WrappedComponent {...(this.props as P)} />
          </MemoryRouter>
        </Provider>
      );
    }
  };
};

export default withComponents;
