import { useQuery } from '@tanstack/react-query';
import fetchCountries  from '../api/countryApi';

export function useCountriesQuery() {
    return useQuery({
        queryKey: ['countries'],
        queryFn: fetchCountries,
        staleTime: 1000 * 10,
    });
}
