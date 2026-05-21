import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom"

function HoverCard({movie}) {
  return (
    <Link to={`/movie/${movie.id}`}>
    <Card className="text-white border-0 hover-card my-2">
      <Card.Img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="image" />

      <Card.ImgOverlay className="d-flex flex-column justify-content-center align-items-center overlay">
        <Card.Title>Title : {movie.title}</Card.Title>
        <Card.Text>Release Date{movie.release_date}</Card.Text>
        <Card.Text>Vote Count : {movie.vote_count}</Card.Text>
        <Card.Text>Vote Average : {movie.vote_average}</Card.Text>
      </Card.ImgOverlay>
    </Card>
    </Link>
  );
}

export default HoverCard;