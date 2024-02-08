import countries, { Country } from 'world-countries';

const formattedCountries = countries.map((country: Country) => ({
  value: country.cca2,
  label: country.name.common,
  flag: country.flag,
  latlng: country.latlng,
  region: country.region,
}));

export const getAll = () => formattedCountries;

export interface ICountry {
  value: string;
  label: string;
  flag: string;
  latlng: number[];
  region: string;
}
