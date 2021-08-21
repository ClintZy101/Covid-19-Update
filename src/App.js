import { Cards } from "./components/Cards";
import { Charts } from "./components/Charts";
import { CountryPicker } from "./components/CountryPicker";
import { fetchData } from "./api"
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState({})
  useEffect(() => {
      fetchData()
    .then(response => {
      console.log(response);
      setData(response);
    })
  },[])
    console.log(data)

  return (
    <div className="grid grid-cols-1 gap-3  w-screen">
      <h1 className="m-auto my-3 font-bold">COVID-19 UPDATE</h1>
      <Cards data={data}/>
      <Charts />
      <CountryPicker />
    
    </div>
  );
}

export default App;


