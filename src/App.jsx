import { Routes, Route, Navigate } from 'react-router-dom';
import Product from './pages/Product';
import Pricing from './pages/Pricing';
import Homepage from './pages/Homepage';
import PageNotFound from './pages/PageNotFound';
import AppLayout from './pages/AppLayout';
import Login from './pages/Login';
import CityList from './components/cityList/CityList';
import CountriesList from './components/countriesList/CountriesList';
import City from './components/city/City';
import Form from './components/form/Form';
import { CitiesProvider } from './contexts/CitiesContext';

const App = () => {
  return (
    <CitiesProvider>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="app" element={<AppLayout />}>
          <Route index element={<Navigate replace to="cities" />} />
          <Route path="cities" element={<CityList />}></Route>
          <Route path="cities/:id" element={<City />}></Route>
          <Route path="countries" element={<CountriesList />}></Route>
          <Route path="form" element={<Form />}></Route>
        </Route>
        <Route path="*" element={<PageNotFound />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </CitiesProvider>
  );
};

export default App;
