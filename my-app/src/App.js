import React from 'react';
import Header from './Header';

import Header2 from './Header2';
import AddNewGroup from './AddNewGroup';
import SimpleAccordion from './Departments';
import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";
import SearchRes from './SearchRes';
function App() {
  const[searchResult, setSearchResult] = React.useState('')
  console.log(searchResult);

  return (
    <Router>
      <Routes>
        <Route path='/' element={ [<Header setSearchResult={setSearchResult}/>,<SearchRes searchResult={searchResult}/>,<SimpleAccordion/>]}/>
        <Route path='/addForm' element={[ <Header2/>,<AddNewGroup/>]}/>
      </Routes>
    </Router>
    
  );
}

export default App;