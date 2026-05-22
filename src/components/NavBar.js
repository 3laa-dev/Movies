import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getMovieSearch, getAllMovies } from "../redux/actions/moviesActions";
function NavBar() {


    const dispatch = useDispatch();
   


    const search = async (value) => {
        if (value) {

            dispatch(getMovieSearch(value))

        } else {

            dispatch(getAllMovies())

        }
    }
    return (
        <Navbar className="justify-content-between" style={{ backgroundColor: "#b45b35" }}>
            <Container>

                <Row className='w-100' >
                    <Col sm="12">
                        <Form.Control
                            type="text"
                            placeholder="Search"
                            style={{ borderRadius: "50px" }}
                            className="shadow-none"
                            onChange={(e) => { search(e.target.value) }}
                        />
                    </Col>

                </Row>

            </Container>

        </Navbar>
    );
}

export default NavBar;