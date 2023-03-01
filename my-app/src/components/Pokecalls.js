import axios from "axios";
import React, { useEffect, useState } from "react";
import Pokebutton from "./Pokebutton";

function Pokecalls({ pokemon, menuState, buttonIndex, pokeState }) {
  const url = "https://pokeapi.co/api/v2/pokemon/" + pokemon;
  const [post, setPost] = useState("");

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        window.alert("Error");
        console.error("Error");
      });
  }, []);

  if (!post) {
    return null;
  }

  return (
    <Pokebutton
      Pokemon={post.name}
      menuStatee={menuState}
      pokeIndex={buttonIndex}
      pokeStatee={pokeState}
    />
  );
}

export default Pokecalls;
