import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import { API } from "./gobal";


export default function AddMovielist(props){
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
              poster: mposter,
              rating: mrate,
              summary:msummary,
            };

            //Add  New movie to old list
            // props.setMovielist([...props.movielist, newmovie]);

            fetch(`${API}/movies`,{
              method:"POST",
              body:JSON.stringify(newmovie),
              headers:{"Content-Type": "application/json"}
              
            }).then((data)=>data.json())
            .then(()=>navigate("/movies"))
            
          }}
        >
          ADD Movie
        </Button>
      </div>
        </div>
    )
}
