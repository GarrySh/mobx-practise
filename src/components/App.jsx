import React from 'react';
import DevTools from 'mobx-react-devtools';
import { configure } from 'mobx';
import Controls from './Controls';
import Table from './Table';
import Store from './Store';

configure({ enforceActions: 'observed' });

const App = () => {
  const appStore = new Store();

  return (
    <div>
      <DevTools />
      <h1>Sprint Board:</h1>
      <Controls store={appStore} />
      <Table store={appStore} />
    </div>
  );
};

export default App;
