import Header from '@components/Header';
import Focus from '@pages/Focus';
import Home from '@pages/Home';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Home/>} />
      <Route path="/focus" element={<Focus/>} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
</BrowserRouter>
);

export default Router;