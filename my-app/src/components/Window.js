import React, { useState } from 'react';
import Pokecalls from "./Pokecalls";
function Window() {
    const [pokeName, setPokeName] = useState('');
    const [pokeArray, setPokeArray] = useState(["pikachu", "ditto", "magikarp"])

    const generateButtons = () => {
        let buttons = [];
        console.log(pokeArray)
        for (let i = 0; i < pokeArray.length; i++) {
            console.log(pokeArray[i])
            buttons.push(<Pokecalls pokemon={pokeArray[i]} />);
        }
        return buttons;
    }

    return (
        <div>
            {generateButtons()}

            <form>
                <label>
                    <input type="text" id="pokeName" name="name"  onChange={event => setPokeName(event.target.value)} value={pokeName}/>
                </label>
                <button type="button" onClick={() => {setPokeArray([...pokeArray,  pokeName]);}}> Submit </button>
            </form>
        </div>
    );
};

export default Window;