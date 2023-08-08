import React, {useState} from 'react'
import data from "../data/today_data.json"


const Today = (props) => {
  // let [backgroundUrl, setBackgroundUrl] = useState(props.backgroundUrl)
  let [currentTemp, setCurrentTemp] = useState(props.currentTemp);
  let [lowTemp, setLowTemp] = useState(props.lowTemp);
  let [highTemp, setHighTemp] = useState(props.highTemp);
  let [day, setDay] = useState(props.day)
  let [weatherStatus, setWeatherStatus] = useState(props.weatherStatus)
  let [image, setImage] = useState("")
  return (
    <div className="font-bold text-neutral300 card w-96 bg-base-100 shadow-xl">
      <div className="card backdrop-opacity-50 bg-rainy bg-no-repeat">
        <div className="card-body" style={{ backgroundImage:`url(${image})`}}>
          <h2 className="card-title">{day}</h2>
          <div className="text-left">
            <p>Current Temp: {currentTemp}</p>
            <p>Low: {lowTemp}</p>
            <p>High: {highTemp}</p>
            <p>status: {weatherStatus}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-sm">Expand for more</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Today