import Sidebar from "../Sidebar/Sidebar";
import CountryList from "../CountryList/CountryList";
import {useState} from "react";

function Home() {

    const [chosenLetter, setChosenLetter] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <>
            <Sidebar setSearchTerm={setSearchTerm} setChosenLetter={setChosenLetter} chosenLetter={chosenLetter}/>
            <CountryList chosenLetter={chosenLetter} searchTerm={searchTerm}/>
        </>
    );
}

export default Home;