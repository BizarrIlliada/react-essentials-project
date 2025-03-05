import { Fragment } from 'react';

import Header from '/src/components/Header/Header.jsx';
import CoreConcepts from '/src/components/CoreConcepts/CoreConcepts.jsx';
import Examples from './components/Examples/Examples';

function App() {
  return (
    <Fragment>
      <Header />

      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </Fragment>
  );
}

export default App;
