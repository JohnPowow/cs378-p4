import React, { useState } from "react";

function Pokebutton({ Pokemon, menuStatee, pokeIndex, pokeStatee }) {
  const clickCheck = () => {
    pokeStatee(pokeIndex); // change parent's tracked pokemon
    menuStatee(true);
  };

  return <button onClick={clickCheck}>{Pokemon}</button>;
}
export default Pokebutton;
