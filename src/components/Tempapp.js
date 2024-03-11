import React, { useEffect, useState } from "react"
import {CiLocationOn} from  "react-icons/ci"
const Temopapp=()=>{
    const [city ,setcity]=useState(null)
    const [searchcity,setsearchcity]=useState("Nagpur")
    const [search,setsearch]=useState("Nagpur")
    useEffect(()=>{
        const fetchApi = async () =>{
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${searchcity}&appid=f896cbb7116ba4ee74a18fd14b1c6404
            `
            const reponse = await fetch(url);
            const reJson= await reponse.json();
            console.log(reJson)
            setcity(reJson.main);
        }
        fetchApi();
    },[searchcity])
    return (
        <>
        <div className="Mainbox">
            <div className="inputdata">
                <input type="text" value={search} className="inputbox" onChange={(event)=>{
    setsearch(event.target.value)}} />
           <button onClick={()=>{
            setsearchcity(search);
           }}> Search</button>
            </div>
            {!city ? (
                <p id="p">No data found </p>
            ):(    <div className="InfoDisplay">
            <h1>
            <div id="loc"> <CiLocationOn/></div>{searchcity}
            </h1>
            <h2>
             Temp:-{(city.temp-273).toFixed(2)} 
            </h2>
            <h3>
            Min Temp:-{(city.temp_min-273).toFixed(2)}
            </h3>
            <h3>
            Max Temp:-{(city.temp_max-273).toFixed(2)}
            </h3>
                      </div>
            )
        
                  
            }
            
         </div>
        </>
    );
}
export default Temopapp;