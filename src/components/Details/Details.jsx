import {useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";
import React from "react";
import styles from "./Details.module.css"

function Details() {

    const countries = useSelector((state) => state.countriesReducer.countries);
    const { cca3 } = useParams();
    const selectedCountry = countries.filter((country) => country.cca3 === cca3)

    return (
        <div className={styles.details}>
            <p className={styles.name}>{`${selectedCountry[0].name.common}`}</p>
            <p className={styles.capital}>{`Capital: ${selectedCountry[0].capital}`}</p>
            <p className={styles.population}>{`Population: ${selectedCountry[0].population}`}</p>
            <p className={styles.cca2}>{`Alpha2Code: ${selectedCountry[0].cca2}`}</p>
            <div className={styles.flag}>
                <img src={selectedCountry[0].flags.png} alt="country flag"/>
            </div>
            <div className={styles.returnButton}>
                <Link to="/">Return Back</Link>
            </div>
        </div>
    );
}

export default Details;