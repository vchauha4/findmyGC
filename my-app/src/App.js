import React from 'react';
import Header from './Header';
import NestedGrid from './Grid';
import Header2 from './Header2';
import AddNewGroup from './AddNewGroup';
import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";

function App() {



  return (
    <Router>
      <Routes>
        <Route path='/' element={ [<Header/> ,<NestedGrid/>]}/>
        <Route path='/addForm' element={[ <Header2/>,<AddNewGroup/>]}/>
      </Routes>
    </Router>
    
  );
}

export default App;