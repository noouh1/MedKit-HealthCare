/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useCountriesQuery } from '../../service/countryServices';
import { InputAdornment, CircularProgress } from '@mui/material';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';

interface CountrySelectProps {
    label?: string;
    width?: string | number;
}

function CountrySelect({ label = "Location", width='100%' }: CountrySelectProps) {
    const { data: countries = [], isLoading } = useCountriesQuery();
    const [selectedCountry, setSelectedCountry] = useState<any>(null);

    return (
        <Autocomplete
            id="country-select-demo"
            sx={{ width:{ xs: '100%', md: width } }}
            options={countries}
            loading={isLoading}
            autoHighlight
            value={selectedCountry}
            onChange={(_, newValue) => setSelectedCountry(newValue)}
            getOptionLabel={(option) => option.label}
            ListboxProps={{
                style: {
                    maxHeight: 48 * 4,
                    overflowY: 'auto',
                },
            }}
            renderOption={(props, option) => (
                <Box
                    component="li"
                    sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                    {...props}
                >
                    <img
                        loading="lazy"
                        width="20"
                        srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                        src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                        alt=""
                    />
                    {option.label} ({option.code}) +{option.phone}
                </Box>
            )}
            renderInput={(params) => (
                <TextField
                    {...params}
                    fullWidth
                    label={label}
                    size="small"
                    sx={{ backgroundColor: '#fafbfc' }}
                    InputProps={{
                        ...params.InputProps,
                        startAdornment: selectedCountry ? (
                            <Box sx={{ display: 'flex', alignItems: 'center', mr: 1 }}>
                                <img
                                    loading="lazy"
                                    width="24"
                                    srcSet={`https://flagcdn.com/w40/${selectedCountry.code?.toLowerCase()}.png 2x`}
                                    src={`https://flagcdn.com/w20/${selectedCountry.code?.toLowerCase()}.png`}
                                    alt={selectedCountry.label}
                                    style={{ borderRadius: 4, marginRight: 0 }}
                                />
                            </Box>
                        ) : null,
                        endAdornment: (
                            <>
                                {isLoading ? <CircularProgress color="inherit" size={18} sx={{ mr: 1 }} /> : null}
                                <InputAdornment position="end">
                                    <GpsFixedIcon sx={{ color: '#bdbdbd', cursor: 'pointer' }} />
                                </InputAdornment>
                                {params.InputProps.endAdornment}
                            </>
                        ),
                    }}
                    slotProps={{
                        htmlInput: {
                            ...params.inputProps,
                            autoComplete: 'new-password',
                        },
                    }}
                />
            )}
        />
    );
}
export default CountrySelect;