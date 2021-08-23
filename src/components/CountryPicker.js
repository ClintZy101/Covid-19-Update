import React, { useEffect, useState } from 'react'
import { fetchCountries } from '../api';

export const CountryPicker = ({handleCountryChange}) => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            setCountries(await fetchCountries())
        }
        fetchApi();
    }, [setCountries])

    console.log(countries)

   
    return (
        <div className="w-screen m-auto text-center">
            <h1>Choose a Country</h1>
            <form action="">
                <select name="" id="" onChange={(e) => handleCountryChange(e.target.value)}>
                    <option value="global" >Global</option>
                    {countries.map((country, i) => <option value={country} key={i}>{country}</option>)}
                </select>
            </form>
        </div>
    )
}
