import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Movie({ movies }) {

    const [movie, setMovie] = useState({});
    const { id } = useParams();

    useEffect(() => {
        updateState()
    }, [])

    function updateState() {
        const filteredArray = movies.filter(movie => movie.id == id)[0]
        console.log(filteredArray)
        setMovie(filteredArray);
    }

    return (
        <>
            <div className="min-h-[calc(100vh-80px)] h-fit w-screen relative bg-black -z-40 sm:overflow-hidden">
                <img
                    src={"https://image.tmdb.org/t/p/original" + movie.backdrop_path}
                    className="absolute object-cover object-center min-h-[calc(100vh-80px)] h-fit w-screen brightness-[0.4] -z-30"
                />
                <div className="w-screen min-h-[calc(100vh-80px)] flex flex-col items-center p-10 space-y-10 bg-gradient-to-b from-transparent via-black to-black
                    sm:flex-row sm:space-x-10 sm:bg-gradient-to-b sm:from-transparent sm:to-black">
                    <img
                        className="w-[200px] shadow-lg shadow-black rounded-md 
                        sm:w-[250px]"
                        src={"https://image.tmdb.org/t/p/original" + movie.poster_path}
                        alt={movie.title + " poster"}
                    />
                    <div className="flex flex-col items-center space-y-5 p-5 text-whiteDutch
                        sm:backdrop-blur-[10px] sm:rounded sm:max-w-[800px]">
                        <h3 className="text-3xl font-semibold">{movie.title}</h3>
                        <p className="font-thin">{movie.overview}</p>
                        <div className="w-full">
                            <p><span className="font-semibold">Inizio programmazione: </span>{movie.release_date}</p>
                            <p><span className="font-semibold">Fine programmazione: </span>{movie.end_date}</p>
                        </div>
                        <h3 className="py-1 px-2 uppercase text-lg rounded bg-orangeGiants">sala {movie.room}</h3>
                    </div>
                </div>
            </div>
        </>

    )
}