import React, { useState } from 'react';

function Pokebutton({ Pokemon, currentMenuState, menuStatee, pokeIndex, pokeStatee }) {
    //const [buttonMenu, setButtonMenu] = useState(false);

    const clickCheck = () => {

            console.log("Should be opening pokemon: " + Pokemon + " with index: " + pokeIndex)
            // menuStatee(false) //close menu
            pokeStatee(pokeIndex) // change parent's tracked pokemon
            menuStatee(true) 
            
       



        // console.log("menu state: " + currentMenuState)
        // console.log("pokemon now: " + pokeIndex)
        // if(currentMenuState && !buttonMenu) {
        //     console.log("flipping states")
        //     menuStatee(false)
        //     pokeStatee(pokeIndex)
        //     console.log("pokemon now: " + pokeIndex)
        //     setButtonMenu(!buttonMenu)
        //     menuStatee(buttonMenu)
        //     console.log("menu state: " + currentMenuState)
        // } else if(currentMenuState && buttonMenu) {
        //     console.log("closing menu")
        //     menuStatee(false)
        //     setButtonMenu(!buttonMenu)
        // } else {
        //     console.log("menu was closed, now adding with pokemon: " + pokeIndex)
        //     pokeStatee(pokeIndex)
        //     console.log("button menu before flip: " + buttonMenu)
        //     setButtonMenu(true)
        //     console.log("button menu after flip: " + buttonMenu)
        //     menuStatee(buttonMenu)
        // }
       
        // setButtonMenu(!buttonMenu)
        // menuStatee(buttonMenu)
    }

    return (
        <button onClick={clickCheck}> {Pokemon} button</button>
    )
}
export default Pokebutton;