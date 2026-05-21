import { Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Movie =  () => {
    const params = useParams()
    const [movie, setMovie] = useState({});

    const getMovie = async()=>{
      
        setMovie((await axios(`https://api.themoviedb.org/3/movie/${params.id}?api_key=9212ecc5bf4434d56dab8706a08ef6e5`)).data)
  
    
    }
    useEffect(()=>{getMovie()}, []);
    
    return (
        <div>
            <Row style={{ backgroundColor: "#ddd",  borderRadius: "30px" , alignItems:"center"}} className="my-3 p-3">
                <Col sm={3}>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="img-fluid" />
                </Col>

                <Col sm={9} className="d-flex justify-content-center" >
                    <div>
                        <div className="text-dark fs-3 fw-bold border-bottom border-2 border-dark pb-2 mb-3">
                            Movie Name : {movie.title}
                        </div>
                        <div className="text-dark fs-3 fw-bold border-bottom border-2 border-dark pb-2 mb-3">
                            Release Date : {movie.release_date}
                        </div>
                        <div className="text-dark fs-3 fw-bold border-bottom border-2 border-dark pb-2 mb-3">
                            Vote Vount : {movie.vote_count}
                        </div>
                        <div className="text-dark fs-3 fw-bold border-bottom border-2 border-dark pb-2 mb-3">
                            Vote Average : {movie.vote_average}
                        </div>


                    </div>
                </Col>
            </Row>
            <Row style={{ backgroundColor: "#ddd", minHeight: "300px", borderRadius: "30px" }} className="my-3 p-3">
                <div className="text-dark fs-3 fw-bold   pb-2 mb-3">
                    Story : {movie.overview}
                </div>
            </Row>
            <Row className="d-flex justify-content-center">
                <Button as={Link} to="/" variant="light" className="w-auto m-2" style={{ backgroundColor: "#b45b35", color: "white" }}>Home Page</Button>
                <Button  href={movie.homepage} variant="light" className="w-auto m-2" style={{ backgroundColor: "#b45b35", color: "white" }}>Watch Movie</Button>
            </Row>
        </div>
    );
}

export default Movie;