import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container } from "reactstrap";
import Button from "@mui/material/Button";
// import AddMovielist from "./AddMovielist";
import TextField from "@mui/material/TextField";
import Counter from "./Counter";
//  import INTIAL_MOVIE_LIST from "./data.json";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { IconButton } from "@mui/material";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import InfoIcon from "@mui/icons-material/Info";
// import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import NotFound from "./NotFound";
import { API } from "./gobal";
import DeleteIcon from "@mui/icons-material/Delete";
import { getMouseEventOptions } from "@testing-library/user-event/dist/utils";
import EditIcon from "@mui/icons-material/Edit";

export default function Movie() {
  const navigate = useNavigate();
  //  const [movielist, setMovielist] = useState(INTIAL_MOVIE_LIST);
  // const [movielist, setMovielist] = useState(INTIAL_MOVIE_LIST);
  const [movielist, setMovielist] = useState([]);

  const getMovies = () => {
    fetch(`${API}/movies`, {
      method: "GET",
    })
      .then((respone) => respone.json())
      .then((data) => {
        setMovielist(data);
        console.log(data);
        console.log(movielist);
      });
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <Container>
      <h1>Hello movie App</h1>

      <div className="displaymovies">
        {movielist.map((m, index) => (
          <MovieDisplay movie={m} id={m.id} 
          deleteButton={<IconButton onClick={()=>{
            fetch(`${API}/movies/${m.id}`,{
              method:"DELETE"
            }).then(()=>getMovies())
          }}> <DeleteIcon color="error"/> </IconButton> }

        // edit icon
        editButton={<IconButton 
        onClick={()=>{navigate(`/movies/edit/${m.id}`)}}> <EditIcon color="primary"/> </IconButton> }
/>
        ))}
      </div>

      {/* <div className="displaymovies">
        {movielist.map((m, index) => {
          return (
            <div>
            
              
              <MovieDisplay movie={m} id={m.id} key={index} />
            </div>
          );
        })}
      </div> */}
    </Container>
  );
}


function MovieDisplay(props) {
  const navigate = useNavigate();
  //condition styling
  const style = {
    color: props.movie.rating >= 8 ? "green" : "red",
  };
  const [show, setshow] = useState("true");
  const summaryStyle = {
    display: show ? "block" : "none",
  };

  return (
    <div className="movieContainer">
      <img
        className="moviepic"
        src={props.movie.poster}
        alt={props.movie.name.toString()}
      />
      <div className="moviespec">

        <h3>
          {props.movie.name.toString()} {props.id}
          <IconButton onClick={() => setshow(!show)}>
        {show?<ExpandLessIcon />: <ExpandMoreRoundedIcon/>}
      </IconButton>
      <IconButton onClick={() => navigate("/movies/" + props.id)} color="primary">
<InfoIcon/>
      </IconButton>

        </h3>
        <p style={style}>⭐{props.movie.rating}</p>{" "}
      </div>
      {/* <button onClick={() => navigate("/movies/" + props.id)}>info</button> */}

      <div className="">
        <Counter />

      </div>

      <div style={summaryStyle}>{props.movie.summary.toString()}</div>
      {props.deleteButton}
      {props.editButton}

    </div>
  );
}

export function Trailer() {
  const { id } = useParams();
  console.log(id);
  // const movie= props.movielist[movieid];
   const [movie, setMovie] = useState({});
  // useEffect(async() => {
  //  await fetch(`${API}/movies/${id}`, { method: "GET" })
  //     .then((data) =>{data.json(); console.log(data)})
  //     .then((mv) => {setMovie(mv); console.log(movie)});
  // }, []);
  const navigate = useNavigate();
  const getmovie=async()=>{
    await fetch(`https://movies-api-rtht.onrender.com/movies/${id}`,{
      method: "GET"
    }).then((data)=>data.json())
    .then((res)=>{setMovie(res);
    console.log(res)})

  }


  useEffect(async()=>{await getmovie()},[])

  if (!movie) {
    return <NotFound />;
  }
  return (
    <div>
      <h2>Trailer</h2>
      <div className="trailer-container">
        <iframe
          width="684"
          height="385"
          src={movie.trailer}
          title={movie.name}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div className="moviespec">
          <h3>{movie.name}</h3>
          <p>⭐{movie.rating}</p>
        </div>
        <p>{movie.summary}</p>
        <Button
          onClick={() => navigate(-1)}
          variant="contained"
          startIcon={<ArrowBackIosNewIcon />}
        >
          Back
        </Button>
      </div>
    </div>
  );
}
