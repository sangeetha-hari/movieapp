import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Container } from "reactstrap";
import Button from "@mui/material/Button";
// import AddMovielist from "./AddMovielist";
import TextField from '@mui/material/TextField';
// import Counter from "./Counter";
// import INTIAL_MOVIE_LIST from "./data.json";
// import ExpandLessIcon from '@mui/icons-material/ExpandLess';
// import { IconButton } from "@mui/material";
// import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
// import InfoIcon from '@mui/icons-material/Info';
// import DeleteIcon from '@mui/icons-material/Delete';
// import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// import NotFound from "./NotFound";


export default function(props){
    const navigate= useNavigate();
    const [mname, setName] = useState("");
  const [mrate, setRate] = useState("");
  const [msummary, setSummary] = useState("");
  const [mposter, setPoster] = useState("");
    return(
        <div>
            <div className="styleaddmovie">
      <TextField id="standard-basic" label="Enter Movie Name" variant="standard" onChange={(e) => setName(e.target.value)}/>
      <TextField id="standard-basic" label="Enter Movie rating" variant="standard"   onChange={(e) => setRate(e.target.value)}/>
      <TextField id="standard-basic" label="Enter Movie summary" variant="standard" onChange={(e) => setSummary(e.target.value)}/>
      <TextField id="standard-basic" label="Enter Movie poster" variant="standard"   onChange={(e) => setPoster(e.target.value)}/>
        

        <Button
          variant="contained"
          onClick={() => {
            const newmovie = {
              name: mname,
              poster:
              mposter,
              rating: mrate,
              summary:
              msummary,
            };
            //Add  New movie to old list
            props.setMovielist([...props.movielist, newmovie]);
            navigate("/movies")
          }}
        >
          ADD Movie
        </Button>
      </div>
        </div>
    )
}
