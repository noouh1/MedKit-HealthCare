import { useQuery } from '@tanstack/react-query';
import { Countries } from '../api/countryApi';

export function useCountriesQuery() {
    return useQuery({
        queryKey: ['countries'],
        queryFn: async () => Countries,
        staleTime: Infinity,
    });
}
