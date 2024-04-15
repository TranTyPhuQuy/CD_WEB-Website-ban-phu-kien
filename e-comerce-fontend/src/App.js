import { Route, Routes } from 'react-router-dom';
import CustomerRouters from './Routers/CustomerRouters';

// Font and CSS
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<CustomerRouters/>}></Route>
    </Routes>
  );
}

export default App;
