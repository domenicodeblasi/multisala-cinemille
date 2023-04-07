import React from "react";
import { Link } from "react-router-dom";

export default function Card({ movie }) {
    return (
        <div
            className="relative bg-whiteDutch w-full h-fit flex flex-col items-center p-5 space-y-7 rounded-lg
            sm:w-[600px] sm:flex-row sm:space-x-5"
        >

            <img
                className="w-[200px] rounded shadow-md shadow-blackOlive"
                src={"https://image.tmdb.org/t/p/original" + movie.poster_path}
                alt={movie.title + " poster"}
            />

            <h3
                className="text-xl uppercase bg-orangeGiants px-2 py-1 rounded-md text-whiteDutch
                sm:absolute sm:top-0 sm:right-5 m-0"
            >
                sala {movie.room}
            </h3>

            <div className="w-full h-fit flex flex-col items-center sm:items-start">
                <h1 className="text-xl font-semibold mb-3">{movie.title}</h1>
                <h3>Inizio programmazione: {movie.release_date}</h3>
                <h3>Fine programmazione: {movie.end_date}</h3>
            </div>

            <Link to={`movie/${movie.id}`}>
                <button
                    className="uppercase cursor-pointer bg-gradient-to-r from-bluePicton to-purpleRoyal px-3 py-2 rounded-md text-whiteDutch transition-all
                sm:absolute sm:bottom-5 sm:right-5
                hover:scale-105 hover:from-purpleRoyal hover:to-orangeGiants hover:transition-all hover:shadow-md hover:shadow-blackOlive"
                >
                    vai al film
                </button>
            </Link>

        </div>
    )
}