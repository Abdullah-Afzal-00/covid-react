import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const getCovidData = () => {
    axios
      .get("https://data.covid19india.org/data.json")
      .then((res) => {
        setData(res.data.statewise[0]);
        console.log(data);
      })
      .catch((e) => {
        console.log("error is found");
      });
  };

  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <>
      <div>Active Cases = {data.active}</div>
      <div>Confirmed Cases = {data.confirmed}</div>
      <div>Total Deaths = {data.deaths}</div>
      <div>Last Update Time = {data.lastupdatedtime}</div>
    </>
  );
}

export default App;
