import { Row, Col } from "react-bootstrap"
import HoverCard from "./card";
import MyPagination from "./pagination";
import { useDispatch, useSelector } from "react-redux"
import {useEffect} from "react"
import { getAllMovies } from "../redux/actions/moviesActions";

const Cards = () => {

    //{ movies , paginate , pageCount }
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllMovies())
    }, [])
    const movies = useSelector(state => state.movies);

    return (
        <Row >

            {
                movies.length > 0 ?
                    movies.map(movie => {
                        return (
                            <Col key={movie.id} xs={12} sm={6} md={4} lg={3}>
                                <HoverCard movie={movie} />
                            </Col>
                        )
                    })

                    :
                    <h2>No movies</h2>

            }
            <div className="d-flex justify-content-center my-4">
                <MyPagination  />
            </div>
        </Row >
    );
}

export default Cards