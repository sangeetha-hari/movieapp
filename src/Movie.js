import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container } from "reactstrap";
import Button from "@mui/material/Button";
// import AddMovielist from "./AddMovielist";
import TextField from '@mui/material/TextField';
import Counter from "./Counter";
//  import INTIAL_MOVIE_LIST from "./data.json";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { IconButton } from "@mui/material";
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import InfoIcon from '@mui/icons-material/Info';
// import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import NotFound from "./NotFound";
import { API } from "./gobal";

export default function Movie() {

  //  const [movielist, setMovielist] = useState(INTIAL_MOVIE_LIST);
  // const [movielist, setMovielist] = useState(INTIAL_MOVIE_LIST);
   const [movielist, setMovielist] = useState([]);
  useEffect(()=>{
    fetch(`${API}/movie_list`,{
      method:"GET"
    })
    .then((respone)=>respone.json())
    .then(data=>{setMovielist(data)})
  },[])

  return (
    <Container>
      <h1>Hello movie App</h1>
      
      <div className="displaymovies">
        {movielist.map((m, index) => (
          <MovieDisplay movie={m} id={m.id} />
        ))}
      </div>
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
        alt={props.movie.name}
      />
      <div className="moviespec">
        
        <h3>
          {props.movie.name} {props.id}
          <IconButton onClick={() => setshow(!show)}>
        {show?<ExpandLessIcon />: <ExpandMoreRoundedIcon/>}
      </IconButton>
      <IconButton onClick={() => navigate("/movies/" + props.id)} color="primary">
<InfoIcon/>
      </IconButton>

        </h3>
        <p style={style}>⭐{props.movie.rating}</p>{" "}
      </div>
      <button onClick={() => navigate("/movies/" + props.id)}>info</button>
     
      
      <div className="">
        <Counter />
       
      </div>

      <div style={summaryStyle}>{props.movie.summary}</div>
    </div>
  );
}

export function Trailer() {
  
  const { id } = useParams();
  console.log(id);
  // const movie= props.movielist[movieid];
  const [movie,setMovie]=useState({});
  useEffect(()=>{
    fetch(`${API}/movie_list/${id}`,
    {method:"GET"})
    .then((data)=>data.json())
    .then((mv) =>setMovie(mv))
  },[])
  const navigate=useNavigate();

  if(!movie)
  {
    return(<NotFound/>)
  }
  return <div>
    <div className="trailer-container">
    <iframe width="684" height="385" src={movie.trailer} title="RRR Official Trailer (Hindi) India’s Biggest Action Drama | NTR,RamCharan,AjayD,AliaB | SS Rajamouli" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <div className="moviespec">
        
        <h3>
          {movie.name}
          
        </h3>
        <p>⭐{movie.rating}</p>
      </div>
      <p>{movie.summary}</p>
      <Button onClick={()=>navigate(-1)}
      variant="contained" startIcon={<ArrowBackIosNewIcon />}>
  Back
</Button>
    </div>
    
  
  </div>;
}
