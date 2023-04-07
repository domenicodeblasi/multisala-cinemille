import React from "react";
import Card from "./Card";

export default function Home({ movies }) {
    return (
        <div className="flex flex-col items-center p-7 space-y-5 bg-gradient-to-t from-black to-blackOlive min-h-[calc(100vh-80px)] h-fit w-screen">
            {movies.map(movie => (
                <Card movie={movie} key={movie.id} />
            ))}
        </div>
    )
}