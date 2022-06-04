import React from "react";

export default function WeatherList(city:any,key:number,degree:number) {
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <ul className="list-group">
              <li className="list-group-item" key={key}>{`${city?.city?.name} ${city?.city?.main?.temp}K`}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

