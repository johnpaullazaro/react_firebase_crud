import React, { useEffect, useState } from 'react';
import { db } from '../firebase'; 
import { doc, collection, getDocs } from 'firebase/firestore';

const PokemonList = () => { 
    const [pokemons, setPokemons] = useState([]);
    


    useEffect(()=>{  

        getDocs(collection(db,'pokemons'))
                .then((querySnapshot) => {
                    const data = querySnapshot.docs.map((doc)=> ({
                        ...doc.data(), id:doc.id
                    }));
                    setPokemons(data);
        });

    },[])



    return (
        <div>
            <ul>
                {
                    pokemons.map((item, index) => ( 
                        <li key={index}> 
                            {item.name} 
                            <img src={item.imgurl}
                            height="180" width="auto" />
                        </li>
                    ))
                } 
            </ul> 
        </div>
    ); 
};


export default PokemonList;


