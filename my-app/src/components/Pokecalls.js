import axios from "axios";
import React, { useEffect, useState } from 'react';

function Pokecalls() {
    const url = "https://pokeapi.co/api/v2/pokemon/ditto";
    const [post, setPost] = React.useState(null);

    //componentDidMount for Hooks
    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/pikachu/")
        .then((response) => {
            setPost(response.data)
        })
        .catch(error => console.error('That pokemon does not exist')) 
    },[]);

    if(!post) {
        return null;
    }

    return(
        <div> Name: {post.name} 
            ID: {post.id} </div>
    )

}



export default Pokecalls;