import { Row, Col } from "react-bootstrap"
import HoverCard from "./card";
import MyPagination from "./pagination";

const Cards = ({ movies , paginate , pageCount }) => {
    return (
        <Row >

            {
                movies.length > 0 ?
                    movies.map(movie => {
                        return (
                            <Col key={movie.id} xs={12} sm={6} md={4} lg={3}>
                                <HoverCard movie={movie}  />
                            </Col>
                        )
                    })

                    :
                    <h2>No movies</h2>

            }
            <div className="d-flex justify-content-center my-4">
                <MyPagination paginate={paginate} pageCount = {pageCount}  />
            </div>
        </Row >
    );
}

export default Cards