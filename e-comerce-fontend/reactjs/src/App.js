import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Route, Routes } from 'react-router-dom';
import CustomerRouters from './Routers/CustomerRouters';

function App() {
  return (
<<<<<<< HEAD
    // <BrowserRouter>
      <Routes>
        <Route path='/*' element={<CustomerRouters />} ></Route>
      </Routes>
    // </BrowserRouter>

=======
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          kkkkkkkkkkkkkkkk
        </a>
      </header>
    </div>
>>>>>>> fe64a0d528b1a2e34f6a730a16aea88c9319af47
  );
}

export default App;
