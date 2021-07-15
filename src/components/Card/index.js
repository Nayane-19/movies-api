import React from "react";
import {
  CardContainer,
  CardBody,
  CardImg,
} from "./CardElements";

const img = "https://image.tmdb.org/t/p/w200";

function Card({ movie }) {
    
  return (
    <>
      {movie.poster_path && (
        <CardContainer>
          <CardBody>
            <CardImg
              style={{ backgroundImage: `url(${img}${movie.poster_path})` }}
            />
            {/* <CardTitle>{movie.name}</CardTitle> */}
          </CardBody>
        </CardContainer>
      )}
    </>
  );
}

export default Card;
