import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Route, Routes } from 'react-router-dom';
import CustomerRouters from './routers/CustomerRouters';
import Checkout from './customer/pages/Checkout/Checkout';
import PaymentResult from './customer/pages/Checkout/PaymentResult';

function App() {
  return (
    <Routes>
      <Route path='/*' element={<CustomerRouters />} ></Route>
        <Route path="/cart/checkout" element={<Checkout />}>
        </Route>
        <Route path="/payment-result/*" element={<PaymentResult />}>
          {" "}
        </Route>
    </Routes>
  );
}

export default App;
