import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

function MaListe(){

    const favoris = JSON.parse(localStorage.getItem('favoris')) || [];

    function deleteFavoris(id) {

        const tmpFavoris = [...favoris];
        var index = tmpFavoris.findIndex(function (o) {
            return o.id === id;
        });
        if (index !== -1) tmpFavoris.splice(index, 1);
        console.log("ma liste après supression", tmpFavoris);
        localStorage.setItem("favoris", JSON.stringify(tmpFavoris))
    }

    return(
        <><div>
            <Header/>
        </div>
            
        <div className="App">
            <section className="section">

                <center>
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="film">
                                <h1 className="title is-1">Mes favories:</h1><br></br>
                                <div>
                                <div>
                                    {favoris.map((item) => {
                                        return (
                                            <p key={item.id}>
                                                <Link to={`/detail/${item?.id}`}><img src={`http://image.tmdb.org/t/p/w185${item?.image}`} alt="image"></img></Link>
                                                <br></br><button className="bouton" onClick={() =>deleteFavoris(item.id)}>Supprimer des favoris</button>
                                            </p>
                                        );
                                    })}
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </center>

            </section>
        </div>
        </>
    );
}

export default MaListe;