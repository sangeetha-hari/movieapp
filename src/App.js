// import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import Counter from './Counter';
import Movie, { Trailer } from './Movie';
import Addcolor from './Addcolor';
import Home from './Home';
import NotFound from './NotFound';
// import { Msg } from './Msg';
 import {Navigate, Routes, Route,useNavigate} from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Button from '@mui/material/Button';
import AddMovielist from './AddMovielist';
// import AddMovielist from './AddMovielist';
// import { BrowserRouter } from 'react-router-dom';
//  import INTIAL_MOVIE_LIST from "./data.json";
//  import CssBaseline from '@mui/material/CssBaseline';
 import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Paper from '@mui/material/Paper';
 import EditMovie from './EditMovie';
 import AppBar from '@mui/material/AppBar';
 import BasicForm from './BasicForm';
// const users = [
//   {
//     name: "Abi",
//     pic:
//       "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHcATwMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAACAIEBQYHAwH/xAA3EAABAwMCBQEGBAQHAAAAAAABAAIDBAUREiEGBxMxUUEiMmFxgZEUM0KyUqGxwQgVFhcjJCX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APeitIDR7Ky0FsG3srMU9GABsrxtOGjsqjFRW0Ae6sdfbxZuHWsN2qmwuk9xgaXOd8QAO3xWj8Xcwq6K5yR2mq6EYldC0uZ+WwbF2CN3E5PgAN2ySTz/AIku0t4uklTLUzVLWgRxyT41lo7Zxt5P1UV1K8czLHSQROtcT66R4JcCOmGeM53+y1X/AHTvOW5pKAgOJd7DvaGe3vbLQkQdPHNWI1rdVp00f6sSZk+nYd1vtkuVvv8AQirtsokYThzTs5jvDh6FRzV5bbnW2ycS0NVLA4EE9N5AOPOO6CQtVRgg7LX7jbg7Psr34C4sg4htsVNVzF11jaermPSH7nBB7ZxjPb5LO1tMD6Ko21lPoG4VFXAJaWaIuLQ9hbqHcZGMrJSBpGys62l/FUs0Bdp6jS3OM/ceo+CCLHFJ/wAxutdcoGMY10560Qfksd6nBA2J8ZwfXssCpJcQcsrJe6Yu6UNsrDgvnpGDScZ7tPz9MHyThR5u8VLBdKuK3TOmo453tglcN3sB2Jx8FFWaIiAiIg3HlZcX0fFVPEInStnyzDQNnHYOJ8DJ+67lVsyOy4/yRc3/AFZOxzGnVRPwSNxhzDsu1VTMhVGwalS4lV6V8LUHOeJrxWzNvcNfBcaelheYaY0u0UzQAX65AQWuLScasN7dyo+TGPWejq0Z21DdSM5l8OXq6cPVtPY6iPRNUCpmgc7Q57QzDmh3YjLWuwcb537BRyljdFI+OQYewlrh4IUVQiIgIiqY0ucGtBLicAAZJKDqHIigEl1uVe4Z6MDYmn4vOT+1dimbkLC8vuGBwzw1BSytH4yb/lqXD+M/p+gwPus/M3ZVGYKocvXQVQWoPJ0fUY5mot1tLdQ9M+qh7cqWShuFTSTEmSCV0biRjJBxlTGUb+dFpdQ8bVEsNJKyGqYJRIWnTI8gl2D8PHphRWgIqpGPjeWSNcxw7tcMEKlAW2cs6qx0PE9NV3/qFsb2/h2tj1NEpOA5++wb39d8eFqa96Dp/jqfryCOLqt1vIJ0tzucDcoJeSHCtZXbL0paumuVHFW0MzZqaZuuORnZwVEjDhVGdVDivp3VhertQWO3SXC61LaeljIDnkE7nsMAZKC6JABc4gAbkn0XFuanM6Cf/wAXh6cSQNkBq6hoyyXB/Lb5btuex9F7cxeZVvuvD9TR8O15b1AGF+ksfIC4ZAB3AxlcSUVdXSsdcLjUVjm6XTyF5Gc4yrVEQEREG/8AAXMyo4UtxttRQitpOrrjxLodED7wGxBHrjbfPnbtPD3FFm4mphLaqxj5MZfTvOmWP5t/uMj4qK6+tc5jg5ri0j1BQTGvt3orDaqi53KXp00DcuI3JPYADyTgKNXGHMi/8UNmppp209ue7alhYAMZ21HuT9V0H/ELeP8Ao0Nohlx7YnnYPUEODP2u/kuGICIiAiIgIiICIiDbOZt6fd+Mbq7VmKOoMTPkwaP6gn6rU16VEz6ieSaU5fI4vcfJJyV5oCIiAiIgIiICIiAiIgIiICIiAiIgIiIP/9k="
//   },
//   {
//     name: "kiram",
//     pic:
//       "data:image/jpeg;base64,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"
//   }
// ];

export default function App() {
  //  const [movielist, setMovielist] = useState([]);
  // useEffect(()=>{
  //   fetch("https://630dd315b37c364eb70c4e81.mockapi.io/movie_list")
  //   .then((respone)=>respone.json)
  //   .then(data=>{setMovielist(data)})
  // },[])
  
  const navigate=useNavigate();
  let [mode,setMode]=useState("light");


  
  
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  
  return (
    <div className="App">
      {/* users.map((e)=>{return{console.log(e.name)}}) */}
      {/* <h1>Welcom to user profile</h1> */}
      
     
{/* {users.map(person =><Msg name={person.name} pic={person.pic}/>)} */}
{/* {users.map((p,index)=>{return(<Msg name={p.name} pic={p.pic}/>)})} */}
{/* <Counter/> */}
{/* <Movie/> */}
{/* <Addcolor/> */}
<ThemeProvider theme={theme}>
{/* <CssBaseline /> */}
<Paper style={{minHeight:"100vh"}}elevation={24}>

      <Button>Primary</Button>
      <Button color="secondary">Secondary</Button>



      {/* <ul>
        <li><Link to ="/">Home</Link></li>
        <li><Link to ="/counter">COUNTER </Link></li>
        <li><Link to ="/addcolor">ADDING COLOR</Link></li>
        <li><Link to ="/movies">MOVIES </Link></li>
        <li><Link to ="/movies/add"> ADD YOUR MOVIES </Link></li>

      </ul>
      */}
 <AppBar position="static">
 <Button color="inherit" onClick={()=>navigate('/')}>HOME</Button>
 <Button color="inherit" onClick={()=>navigate('/basic_form')}>Basic Form</Button>
 <Button color="inherit" onClick={()=>navigate('/movies')}>Movies</Button>
 <Button color="inherit" onClick={()=>navigate('/addcolor')}>Color Game</Button>
 <Button color="inherit" onClick={()=>navigate('/movies/add')}>Add movies</Button>
 <Button color="inherit" 
 startIcon= {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
 onClick={()=>setMode(mode==="light"?"dark":"light")}>
  {mode==="light"?"dark":"light"} Mode
  </Button>

 </AppBar>


      <Routes> 
      <Route path="/" element={<Home/>} />
      <Route path="/home" element={<Home/>} />
       <Route path="/counter" element={<Counter/>} />
        <Route path="/movies" element={ <Movie />} /> 
       <Route path="/movies/:id" element={ <Trailer/>} /> 
       <Route path="/addcolor" element={<Addcolor/>} /> 
       <Route path="/movies/add" element={<AddMovielist  />} /> 
       <Route path="/films" element={<Navigate replace to ="/movies"/>}/>
       {/* <Route path="/addmovie" element={<AddMovielist/>} />  */}
       <Route path="/movies/edit/:id" element={<EditMovie/>} /> 
       <Route path="/basic_form" element={<BasicForm/>} /> 
       <Route path="/404" element={<NotFound />} />
       <Route path="*" element={<Navigate replace to="/404"/>} />

        </Routes>
      </Paper>
      </ThemeProvider>
    </div>
  );
}


