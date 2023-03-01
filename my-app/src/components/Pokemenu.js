import axios from "axios";
import React, { useEffect, useState } from "react";

function Pokemenu({ pokemonList, pokeIndex }) {
  const url = "https://pokeapi.co/api/v2/pokemon/" + pokemonList[pokeIndex];
  const [post, setPost] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setPost(response.data);
        setLoading(false);
      })
      .catch((error) => {
        window.alert("Error");
        console.error("Error");
      });
  }, [url]);

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  return (
    <div className="App">
      <h1>
        <b>Name of Pokemon:</b> {post.name}
      </h1>
      <h4>
        <b>Pokedex Entry:</b> {post.id}{" "}
      </h4>
      <h4>
        <b>Pokemon Base Experience:</b> {post.base_experience} exp{" "}
      </h4>
      <h4>
        <b>Pokemon Weight:</b> {post.weight} hg{" "}
      </h4>
      <h4>
        <b>Pokemon Height:</b> {post.height} dm{" "}
      </h4>
      <h4>
        <b>National Order:</b> {post.order}{" "}
      </h4>

      <h3>Regular Pokemon Sprites: </h3>
      <img alt={post.name} src={post.sprites.front_default} />
      <img alt={post.name} src={post.sprites.back_default} />

      <h3>Shiny Pokemon Sprites: </h3>
      <img alt={post.name} src={post.sprites.front_shiny} />
      <img alt={post.name} src={post.sprites.back_shiny} />
    </div>
  );
}

export default Pokemenu;
