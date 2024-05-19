import React, { useEffect, useState } from "react"
import {CiLocationOn} from  "react-icons/ci"
import './TempappStyle.css'
import { FiSearch } from "react-icons/fi"
const Temopapp=()=>{
    const [city ,setcity]=useState(null)
    const [weather,setweather]=useState([])
    const [searchcity,setsearchcity]=useState("Nagpur")
    const [search,setsearch]=useState("Nagpur")
    useEffect(()=>{
        const fetchApi = async () =>{
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${searchcity}&appid=f896cbb7116ba4ee74a18fd14b1c6404
            `
            const reponse = await fetch(url);
            const reJson= await reponse.json();
            console.log(reJson);
            setweather(reJson.weather);
            setcity(reJson.main);
        }
        fetchApi();
    },[searchcity])
    return (
        <div className="container">
            <div className="heading">
            <h1>Fortcase</h1><h1> Now</h1>
            </div>
        <div className="Mainbox">
            <div className="inputdata">
                <FiSearch size={30} className="search-icon" onClick={()=>{
            setsearchcity(search);
           }}/>
                <input type="text" value={search} className="inputbox" onChange={(event)=>{
    setsearch(event.target.value)}} />
    </div>
           
            
            {!city ? (
                <p id="p">No data found </p>
            ):(    <div className="InfoDisplay">
                <div className="left-Infodisplay">
                <div className="location">
            <h1>
             <CiLocationOn size={30} /></h1>
             <h1>{searchcity}
            
            </h1>
            </div>
            <h2>
             {(city.temp-273).toFixed(2)}℃
            </h2>
          </div>
          <div className="right-Infodisplay">
            <img src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}/>
            <h2>{weather[0].description}</h2>
            </div>
                      </div>
            )       
            }         
         </div>
         <div className="footer">
            <h3>Made by Dhyanesh Dharmik</h3>
            <a href="https://github.com/dhyaneshd25/Weather-App-using-React-js">Github</a>
         </div>
        </div>
    );
}
export default Temopapp;