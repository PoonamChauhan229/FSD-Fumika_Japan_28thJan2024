import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Sample from "../Sample";

const MovieInfo = ({ movie }) => {
  const { id } = useParams();
  console.log(id);
  console.log(movie);
  console.log(movie[id]);
  const [movieInfo, setMovieInfo] = useState(movie[id]);

  return (
    <>
      {/* parent */}
      <div style={{ position: "relative", marginBottom: "320px" }}>
        <iframe
          width="100%"
          height="300"
          src="https://www.youtube.com/embed/1ZJZV_-5lUM"
          title="Tuu - Auron Mein Kahan Dum Tha | Ajay, Tabu, Shantanu, Saiee | Sukhwinder, Javed, MM Kreem, Manoj M"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>

        {/* Child */}
        <div
          style={{
            height: "300px",
            width: "90%",
            backgroundColor: "green",
            margin: "0 5%",
            boxShadow: "10px 5px 5px red",
            position: "absolute",
            top: "90%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <h1>Hello World - ID || Index = {id}</h1>
          <h1>{movieInfo.moviename}</h1>
          <h4>{movieInfo.publishedYear}</h4>
        </div>
      </div>

      <div>
        <h4>Hello World</h4>
      </div>
    </>
  );
};

export default MovieInfo;
