import React from "react";
import styles from "./AlphabeticalSearch.module.css"

const AlphabeticalSearch = (props) => {

    const alphabetString = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    return <>
        {alphabetString.map((letter) => <button style={{backgroundColor: `${props.chosenLetter === letter ? "#F7F7F7" : "#FFFFFF"}`}} key={letter} className={styles.button} onClick={() => props.setChosenLetter(letter)}>{letter}</button>)}
        <button  className={styles.allButton} onClick={() => props.setChosenLetter("")}>Reset</button>
    </>
}

export default AlphabeticalSearch;