import styles from './CountriesList.module.css';
import Spinner from '../spinner/Spinner';
import CountryItem from '../countryItem/CountryItem';
import Message from '../message/Message';
import { useCities } from '../../contexts/CitiesContext';

const CountriesList = () => {
  const {cities, isLoading} = useCities();
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );
  const countries = cities.reduce((acc, city) => {
    if (!acc.map((el) => el.country).includes(city.country))
      return [...acc, { country: city.country, emoji: city.emoji }];
    else return acc;
  }, []);
  return (
    <ul className={styles.countriesList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
};

export default CountriesList;
