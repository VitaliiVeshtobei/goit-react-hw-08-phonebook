import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Contacts } from '../pages/Contacts';
import { Login } from 'pages/Login';
import { Register } from '../pages/Register';
import { Layout } from './Layout';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
}
