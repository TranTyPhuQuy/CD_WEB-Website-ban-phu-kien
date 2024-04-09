import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Route, Routes } from 'react-router-dom';
import CustomerRouters from './Routers/CustomerRouters';

function App() {
  return (
    // <BrowserRouter>
      <Routes>
        <Route path='/*' element={<CustomerRouters />} ></Route>
      </Routes>
    // </BrowserRouter>

  );
}

export default App;
