import React from "react";
import styles from "./InputSearch.module.css";

const InputSearch = ({setSearchTerm}) => {
    return <input className={styles.input} type="text" placeholder="Enter country name..." onChange={event => {setSearchTerm(event.target.value)}}/>
}

export default InputSearch;