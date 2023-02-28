import axios from "axios";
import React, { useEffect, useState } from 'react';

function Pokemenu({ pokemon }) {
    const url = "https://pokeapi.co/api/v2/pokemon/" + pokemon;
    const [post, setPost] = useState('');

    //componentDidMount for Hooks
    useEffect(() => {
        axios.get(url)
            .then((response) => {
                setPost(response.data)
            })
            .catch(error => {
                window.alert('That pokemon does not exist');
                console.error('That pokemon does not exist')
            })
    }, []);


  return ( 
    
    <div> 
      <h1>ID: {post.id}</h1>
      <h1>Base Experience: {post.base_experience}</h1> 
      <h1>Weight: {post.weight}</h1>
      <h1>Height: {post.height}</h1>
    </div> 
  ); 
  
}; 

export default Pokemenu;