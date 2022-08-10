import React, { useState } from "react";




export default function Addcolor(){
    const [colorlist, setColorlist]=useState([]);
    const [color,setcolor]=useState("skyblue")
    const style={fontSize:"25px",
    backgroundColor: color};
    const insertcolor=(e)=>{
        setcolor(e.target.value);
    }

    return(
        <div>
            <input style={style} type="text" onChange={(event)=>{insertcolor(event)}} value={color}/>
            <button onClick={()=>setColorlist([...colorlist,color])}>Add ur color</button>
            {colorlist.map((c,index)=><ColorBox co={c}/>)}
        </div>
    )
}

function ColorBox(props){

    const style={
        height: "50px",
        width: "350px",
        backgroundColor: props.co
    }
    return(
        <div style={style}>

        </div>
    )
}