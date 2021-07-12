import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../../components/Card';
import {Container} from './HomeElements'


function Home() {
    const [movies, setMovies] = useState([])

    useEffect(
        function (){
            load()
        }, []
    )


    async function load(){
        try{
            const response = await axios.get('https://api.themoviedb.org/3/tv/airing_today?api_key=62e0421dd26fa612590aa7e68e3672cf&language=pt-BR')
            setMovies(response.data.results);
        }catch(error){
            console.log(error)
        }        
    }

    console.log(movies)

  return(
      <Container>
        {movies?.map((movie) => {                
            return (            
           <Card key={movie.id} movie={movie} />
            )     
        })}
    </Container>
    );
}

export default Home;