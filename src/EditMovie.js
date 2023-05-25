import React, { useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import { API } from "./gobal";
// import { LocalDining } from "@mui/icons-material";


export default function EditMovie(){
    // const navigate= useNavigate();

    const { id } = useParams();
    // console.log(id);
    // const movie= props.movielist[movieid];
    const [movie,setMovie]=useState(null);
    useEffect(()=>{
      fetch(`${API}/movies/${id}`,
      {method:"GET"})
      .then((data)=>data.json())
      .then((mv) =>{setMovie(mv)
    console.log(mv)})
    },[])
   

  


    return (movie? <EditMovieForm movie={movie}/> : <h1>Loading...</h1>);
}



function EditMovieForm(props){
    const navigate= useNavigate();
    const [mname, setName] = useState(props.movie.name);
  const [mrate, setRate] = useState(props.movie.rating);
  const [msummary, setSummary] = useState(props.movie.summary);
  const [mposter, setPoster] = useState(props.movie.poster);
    return(
        <div>
            <div className="styleaddmovie">
      <TextField id="standard-basic" label="Enter Movie Name" variant="standard"  value={mname}onChange={(e) => setName(e.target.value)}/>
      <TextField id="standard-basic" label="Enter Movie rating" variant="standard"  value={mrate} onChange={(e) => setRate(e.target.value)}/>
      <TextField id="standard-basic" label="Enter Movie summary" variant="standard" value={msummary} onChange={(e) => setSummary(e.target.value)}/>
      <TextField id="standard-basic" label="Enter Movie poster" variant="standard"   value={mposter} onChange={(e) => setPoster(e.target.value)}/>
        

        <Button
          variant="contained"
          onClick={() => {
            const updatedmovie = {
              name: mname,
              poster: mposter,
              rating: mrate,
              summary:msummary,
            };

            //Add  New movie to old list
            // props.setMovielist([...props.movielist, newmovie]);

            fetch(`${API}/movies/${props.movie.id}`,{
              method:"PUT",
              body:JSON.stringify(updatedmovie),
              headers:{"Content-Type": "application/json"}
              
            }).then((data)=>{data.json()})
            .then(()=>navigate("/movies"))
            
          }}
        >
          Edit Movie
        </Button>
      </div>
        </div>
    )
}