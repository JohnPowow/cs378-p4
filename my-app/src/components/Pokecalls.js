import axios from "axios";
import React, { useEffect, useState } from 'react';
import Pokebutton from "./Pokebutton";

function Pokecalls({ pokemon }) {
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

    if (!post) {
        return null;
    }

    return (
        <Pokebutton Pokemon={post.name} />
    )

}



export default Pokecalls;