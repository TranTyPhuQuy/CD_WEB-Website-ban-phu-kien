<<<<<<< HEAD:e-comerce-fontend/reactjs/src/App.js

import { Route, Routes, Link, NavLink } from 'react-router-dom';
import CustomerRouters from './Routers/CustomerRouters';

// Font and CSS
=======
>>>>>>> 322fccd33bbc5f28b3ef0b82749b12c3f93ebb55:e-comerce-fontend/src/App.js
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Route, Routes } from 'react-router-dom';
import CustomerRouters from './Routers/CustomerRouters';

function App() {
  return (
    <Routes>
      <Route path='/' element={<CustomerRouters/>}></Route>
    </Routes>
  );
}

export default App;
