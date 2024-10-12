
  import React, { useEffect, useState } from "react";
  
  function Countries() {
    const api="https://xcountries-backend.azurewebsites.net/all"
    const [countries,setCountries]=useState([])
    
  useEffect(()=>{
    const fetchCountries = async() => {
    try {
      const res = await fetch(api)
      const data=await res.json(); 
      setCountries(data) 
      // TODO: CRIO_TASK_MODULE_CART - Pass Bearer token inside "Authorization" header to get data from "GET /cart" API and return the response data
    } catch (error) {
        console.error("Error fetching data:",error);
    }

  };
  fetchCountries();
},[]);

return (
<div 
style={{
    display: "flex",
    flexWrap:"wrap",
  }} >
    {countries.map(({name,flag,abbr}) =>(
      <CountryCard name={name} flag={flag} abbr={abbr} />
    ))}
  </div>)}
  
  const CountryCard = ({name,flag,abbr}) => {

    return <div 
    style={{
        display: "flex",
        flexDirection: "column",
        height: "200px",
        width: "200px",
        justifyContent: "center",
        alignItems: "center",
        border:"1px solid #000",
        borderRadius:"5px",
        padding: "10px",
        margin:"10px",
        
        }} >
          <img src={flag} alt={`Flag of ${abbr}`} style={{ height: "100px", width: "100px",}}/>
         <h2>{name}</h2>
          </div>;
      
      
      
   };
  
  export default Countries;
  