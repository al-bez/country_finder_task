import React from "react";
import AlphabeticalSearch from "./AlphabeticalSearch/AlphabeticalSearch";
import InputSearch from "./InputSearch/InputSearch";
import styles from "./Sidebar.module.css"

const Sidebar = (props) => {

    return <div className={styles.sidebar}>
        <div className={styles.wrapper}>
            <AlphabeticalSearch setChosenLetter={props.setChosenLetter} chosenLetter={props.chosenLetter}/>
            <InputSearch setSearchTerm={props.setSearchTerm}/>
        </div>
    </div>
}

export default Sidebar;