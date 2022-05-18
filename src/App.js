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
      {" "}
      <h1 className="heading">Live Covid 19 tracker</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-3">
            <div className="infoBox">
              <span className="highlight">Confirmed Cases</span> <br></br>
              {data.confirmed}
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="infoBox">
              <span className="highlight">Total Deaths</span>
              <br></br>
              {data.deaths}
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="infoBox">
              <span className="highlight">Last Update Time</span>
              <br></br>
              {data.lastupdatedtime}
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="infoBox">
              <span className="highlight">Active Cases</span>
              <br></br>
              {data.active}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
