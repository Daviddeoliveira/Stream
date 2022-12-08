import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import {Link} from "react-router-dom"

function Recherche(){

    const [film, setFilm] = useState("");
    const [filmRecherche, setFilmRecherche] = useState([]);

    async function getFilmRecherche(film) {
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=8c41b7fe30078f4211374d86ec032427&language=fr&query=${film}`);
        console.log("res", res.data);
        setFilmRecherche(res.data.results);
    }

    useEffect(() => {
        getFilmRecherche();
    }, []);

    function handleChange(e) {
        if (!e.target.value) {
          setFilm("");
          return;
        }
        setFilm(e.target.value)
        getFilmRecherche(film)
    }

    return(
        <><div>
            <Header/>
        </div>
        <section className="App">

            <center>
                <div className="container">
                    <div className="columns is-centered">

                        <form>
                            <div class="field">
                                <div class="control">
                                    <input onChange={handleChange} type="text"  placeholder="recherche un film" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div><br></br>


                <div class="container">
                    <div class="media-content">
                            <h1 class="title is-3">Liste des Films:</h1>
                            <div class="content">
                                {filmRecherche.map((item) => {
                                    return (
                                        <p key={item?.id}>
                                            <Link to={`/detail/${item.id}`}><img src={`http://image.tmdb.org/t/p/w185${item?.poster_path}`} alt="image"></img></Link>
                                        </p>
                                    );
                                })}
                            </div>
                    </div>
                </div>
            </center>

        </section></>
    );
}

export default Recherche;