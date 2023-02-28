import React, { useEffect, useState } from 'react';
import Pokecalls from "./Pokecalls";
import Pokemenu from './Pokemenu';

function Window() {
    const [pokeName, setPokeName] = useState('');
    const [pokeArray, setPokeArray] = useState(["pikachu", "ditto", "magikarp"])
    const [activeIndex, setActiveIndex] = useState(-1);
    const [activeMenu, setActiveMenu] = useState(false);

    const generateButtons = () => {
        let buttons = [];
        for (let i = 0; i < pokeArray.length; i++) {
            buttons.push(<Pokecalls pokemon={pokeArray[i]} menuState={setActiveMenu} />);
        }
        return buttons;
    }

    const ClickCheck = () => {
        const url = "https://pokeapi.co/api/v2/pokemon/" + pokeName;

        fetch(url)
            .then(async (response) => {
                if (response.ok) {
                    console.log("Found")
                    setPokeName(response.name);
                    setPokeArray([...pokeArray, pokeName]);
                }
            })
            .catch(error => {
                window.alert('That pokemon does not exist');
                console.error('That pokemon does not exist')
            })
    }

    return (
        <div>
             <form>
                <label>
                    <input type="text" id="pokeName" name="name" placeholder="Enter in a pokemon name!" onChange={event => setPokeName(event.target.value)} value={pokeName} />
                </label>
                <button type="button" onClick={ClickCheck}> Submit </button>
            </form>

            {generateButtons()}
             {/* ^^ Assume this can change parent's state of activeIndex. */}
             {/* Need to add indexes to button to know which button = which index. */}
            
            
             {activeMenu ? (
        <p>{ <Pokemenu pokemon={"pikachu"} /> }</p>) : (<p/>)}
           
        </div>
    );
};

export default Window;