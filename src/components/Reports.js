import axios from "axios";
import { useState, useEffect } from "react";
const Reports = () => {
     const [Cases, setCases] = useState('')
     useEffect(() => {
          axios.get('https://api.covidtracking.com/v1/states/current.json')
               .then(function (response) {
                    setCases(response)
               })
               .catch(function (error) {
                    // handle error
                    console.log(error);
               })
               .then(function () {
                    // always executed
               });
     },[]);
     return (
          <div className="main-content">
          {Cases ? Cases.data.map((e, i) => {

                    return (

                         <>

                              <h1 key={i} className="date">
                                   DATE : {e.date}
                              </h1>
                              <h2>
                                   STATE : {e.state}

                              </h2>
                              <h3>
                                   POSITIVE CASES : {e.positive} <br />
                                   DEATHS : {e.death}
                                   <hr/>

                              </h3>
                         </>
                    )
               }) : ""
          }


          </div>
     )
}

export default Reports;
