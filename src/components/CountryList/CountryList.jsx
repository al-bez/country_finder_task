import React from "react";
import {useSelector} from "react-redux";
import styles from "./CountryList.module.css"
import {Link} from "react-router-dom";

const CountryList = ({chosenLetter, searchTerm}) => {

    const countries = useSelector((state) => state.countriesReducer.countries);

    const filterCountries = (countriesList) => {
        if (!!chosenLetter) {
            return countriesList.filter(country => country.name.common.startsWith(chosenLetter))
        } else if (!!searchTerm) {
            return countriesList.filter(country => country.name.common.toLowerCase().includes(searchTerm.toLowerCase()))
        }
        return countriesList
    }

    return <div className={styles.countryList}>
        {filterCountries(countries).map((country) => <Link key={country.name.common} className={styles.link} to={`/details/${country.cca3}`}>
            {country.name.common}
        </Link>)}
    </div>
}

export default CountryList;