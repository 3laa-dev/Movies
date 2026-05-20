import { Container } from "react-bootstrap"
import { useEffect, useState } from "react"
import NavBar from "./components/NavBar";
import Cards from "./components/cards";
import axios from "axios";





function App() {
  const [movies, setMovies] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [searchValue , setSearchValue] = useState("");

  const getAllMovies = async () => {
    const res = await axios("https://api.themoviedb.org/3/movie/popular?api_key=9212ecc5bf4434d56dab8706a08ef6e5")
    setMovies(res.data.results)
    setPageCount(res.data.total_pages)
  }
  useEffect(() => {
    getAllMovies();
  }, [])
  const search = async (value) => {
    if (value) {
      const res = await axios(`https://api.themoviedb.org/3/search/movie?api_key=9212ecc5bf4434d56dab8706a08ef6e5&query=${value}`)
      setMovies(res.data.results)
      setPageCount(res.data.total_pages)
      setSearchValue(value)
    } else {
      getAllMovies();
      setSearchValue("")
    }


  }
  const paginate = async (page) => {
    let res;
    if (searchValue)
      res = await axios(`https://api.themoviedb.org/3/search/movie?api_key=9212ecc5bf4434d56dab8706a08ef6e5&query=${searchValue}&page=${page}`)
    else
      res = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=9212ecc5bf4434d56dab8706a08ef6e5&page=${page}`)
    setMovies(res.data.results)
    setPageCount(res.data.total_pages)
  }

  return (
    <div className="">
      <NavBar search={search} />
      <Container>
        <Cards movies={movies} paginate={paginate} pageCount={pageCount} />
      </Container>

    </div>
  );
}

export default App;
