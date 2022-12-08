import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom"

function Liste(){
    
    const [filmList, setFilmList] = useState([]);
    const [filmListNote, setFilmListNote] = useState([]);
    const [filmListAvenir, setFilmListAvenir] = useState([]);

    async function getFilm() {
        const resF = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=8c41b7fe30078f4211374d86ec032427&language=fr");
        console.log("resf", resF.data);
        setFilmList(resF.data.results);
    }
    
    useEffect(() => {
        getFilm();
    }, []);

    async function getFilmNote() {
        const resN = await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=8c41b7fe30078f4211374d86ec032427&language=fr");
        console.log("resn", resN.data);
        setFilmListNote(resN.data.results);
    }
    
    useEffect(() => {
        getFilmNote();
    }, []);

    async function getFilmAvenir() {
        const resA = await axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=8c41b7fe30078f4211374d86ec032427&language=fr");
        console.log("resa", resA.data);
        setFilmListAvenir(resA.data.results);
    }
    
    useEffect(() => {
        getFilmAvenir();
    }, []);

    return(
        <section className="section">

            <center>
                <div className="container">
                    <div className="media-content">
                        <br></br>
                        <h1 className="title is-3">Liste des films les plus populaires:</h1>
                        <div className="content">
                            <div className="App-list">
                            {filmList.map((item) => {
                                return(
                                    <p key={item?.id}>
                                         <Link to={`/detail/${item.id}`}><img src={`http://image.tmdb.org/t/p/w185${item?.poster_path}`} alt="image"></img></Link>
                                    </p>
                                );                                
                            })}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="media-content">
                        <br></br>
                        <h1 className="title is-3">Les films bien noté:</h1>
                        <div className="content">
                            <div className="App-list">
                            {filmListNote.map((item) => {
                                return(
                                    <p key={item?.id}>
                                         <Link to={`/detail/${item.id}`}><img src={`http://image.tmdb.org/t/p/w185${item?.poster_path}`} alt="image"></img></Link>
                                    </p>
                                );                                
                            })}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="media-content">
                        <br></br>
                        <h1 className="title is-3">Les films avenir:</h1>
                        <div className="content">
                            <div className="App-list">
                            {filmListAvenir.map((item) => {
                                return(
                                    <p key={item?.id}>
                                         <Link to={`/detail/${item.id}`}><img src={`http://image.tmdb.org/t/p/w185${item?.poster_path}`} alt="image"></img></Link>
                                    </p>
                                );                                
                            })}
                            </div>
                        </div>
                    </div>
                </div>
                
            </center>


        </section>
    );
}

export default Liste;