import type { CountryType2 } from '../types/countryType';

const COUNTRIES_API_URL = 'https://restcountries.com/v3.1/independent?status=true';

async function fetchCountries(): Promise<CountryType2[]> {
    const response = await fetch(COUNTRIES_API_URL);
    if (!response.ok) {
        throw new Error('Failed to fetch countries');
    }
    return response.json();
}
export default fetchCountries;