import React, { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import axios from "axios";
import Header from "./Header";

function Details(){

    let { id } = useParams();
    const [film, setFilm] = useState(null);
    const [favoris, setFavoris] = useState(JSON.parse(localStorage.getItem("favoris")) || []);

    async function getFilmDetail() {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=8c41b7fe30078f4211374d86ec032427&language=fr`);
        console.log("res", res.data);
        setFilm(res.data);
    }

    useEffect(() => {
        getFilmDetail();
    }, []);

    function handleSubmit() {
        console.log("ici", favoris)
        const tmpVal = film.title
        const tmpImg = film.poster_path
        const tmpId = film.id
        const tmpfavoris =[...favoris, {text: tmpVal, id: tmpId, image: tmpImg}] 
        console.log("tmp favori", tmpfavoris)
        setFavoris(tmpfavoris);
        setFilm(null);
        localStorage.setItem("favoris", JSON.stringify(tmpfavoris))
    }

    return(
        <><div>
            <Header/>
        </div>
        
        <section className="App">
                <div className="film">
                    <div className="media">
                        <div className="media-left">
                            <img src={`http://image.tmdb.org/t/p/w300${film?.poster_path}`} alt="Affiche"></img> 
                        </div>
                        <div className="media-content">
                            <div className="content">
                                <h1 className="title is-1">{film?.title}</h1><br></br>
                            </div>
                            <p><strong>Date de sortie: </strong>{film?.release_date}</p><br></br>
                            <p><strong>Résume:</strong>{film?.overview }</p><br></br>

                            <button className="bouton" onClick={handleSubmit}>Mettre dans les favoris</button>
                        </div>
                    </div>
                </div>
        </section></>
    );
}

export default Details;