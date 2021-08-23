
import { LineChart } from "./components/LineChart";
import { CountryPicker } from "./components/CountryPicker";
import { fetchData } from "./api"
import { useEffect, useState } from "react";
import { CountryCards } from "./components/CountryCards";
import { GlobalCards } from "./components/GlobalCards";
import { BarChart } from "./components/BarChart";


function App() {
  const [globalData, setGlobalData] = useState({})
  const [country, setCountry] = useState([])
  const [countryData, setCountryData] = useState({})

  useEffect(() => {
      fetchData()
    .then(response => {
      console.log(response);
      setGlobalData(response);
    })
  },[])
    // console.log(data)
    
    const handleCountryChange = async(country) => {
      const fetchedData = await fetchData(country);

      setCountry(country);
      setCountryData(fetchedData);

      console.log(country);
      console.log(fetchedData);
    }
    // console.log(nation)


  return (
    <div className="grid grid-cols-1 gap-3  w-screen">

      <h1 className="m-auto my-3 font-bold text-2xl font-sans  text-blue">COVID-19 UPDATE</h1>
    

     <GlobalCards globalData={globalData}  /> 
       { countryData &&
         <CountryCards countryData={countryData} country={country}/>
       }  
       

       
      <CountryPicker handleCountryChange={handleCountryChange}/>
      
   {countryData && <BarChart country={country} countryData={countryData} /> } 
    <LineChart/> 

    </div>
  );
}

export default App;


