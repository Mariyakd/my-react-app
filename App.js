import './App.css';
import React from 'react';
const LazyDataFetching = React.lazy(() => import("./DataFetching"));
// import DataFetching from './DataFetching';


function App() {
  return (
    <div className="App">
      <React.Suspense fallback="Loading..."><LazyDataFetching /></React.Suspense>
      {/* <AvtarFetching />  */}
    </div>
  );
}

export default App;
