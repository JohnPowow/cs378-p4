import axios from "axios";
import React, { useEffect, useState } from 'react';

function Pokemenu({ pokemonList, pokeIndex}) {
    const url = "https://pokeapi.co/api/v2/pokemon/" + pokemonList[pokeIndex];
    const [post, setPost] = useState('');
    const [isLoading, setLoading] = useState(true);


    console.log("Menu changed! We are using pokemon: " + pokemonList[pokeIndex] + " with index: " + pokeIndex)

    console.log(url)
    useEffect(() => {
        axios.get(url)
            .then((response) => {
                setPost(response.data)
                setLoading(false);
            })
            .catch(error => {
                window.alert('That pokemon does not exist');
                console.error('That pokemon does not exist')
            })
    }, [url]);

    if (isLoading) {
      return <div className="App">Loading...</div>;
    }

    console.log("New data: " + post.name + ' ' + post.id + ' ' + post.base_experience)

  return ( 
    <div className="App">
      <h1>{post.name}</h1>
      <img alt={post.name} src={post.sprites.front_default} />
    </div>
    
    // <div> 
    //   <h1>Name: {post.name}</h1>
    //   <h1>ID: {post.id}</h1>
    //   <h1>Base Experience: {post.base_experience}</h1> 
    //   <h1>Weight: {post.weight}</h1>
    //   <h1>Height: {post.height}</h1>
    // </div> 
  ); 
  
}; 

export default Pokemenu;