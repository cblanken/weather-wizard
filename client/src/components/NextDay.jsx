import React from 'react'
import { useState } from 'react'
import {
  PiCloudFogDuotone,
  PiCloudLightningDuotone,
  PiCloudRainDuotone,
  PiCloudSnowDuotone,
  PiCloudSunDuotone,
  PiSunDuotone,
} from 'react-icons/pi'
// import { IconContext } from 'react-icons'

class ForecastType {
  constructor(text, component) {
    this.text = text
    this.component = component
  }
}

const ForecastTypeComponents = Object.freeze({
  0: new ForecastType("Sunny", <PiSunDuotone />),
  1: new ForecastType("Partly cloudy", <PiCloudSunDuotone />),
  2: new ForecastType("Partly cloudy", <PiCloudSunDuotone />), 
  3: new ForecastType("Partly cloudy", <PiCloudSunDuotone />),
  45: new ForecastType("Foggy", <PiCloudFogDuotone />),
  48: new ForecastType("Foggy", <PiCloudFogDuotone />),
  51: new ForecastType("Rainy", <PiCloudRainDuotone />),
  53: new ForecastType("Rainy", <PiCloudRainDuotone />),
  55: new ForecastType("Rainy", <PiCloudRainDuotone />),
  56: new ForecastType("Rainy", <PiCloudRainDuotone />),
  57: new ForecastType("Rainy", <PiCloudRainDuotone />),
  61: new ForecastType("Rainy", <PiCloudRainDuotone />),
  63: new ForecastType("Rainy", <PiCloudRainDuotone />),
  65: new ForecastType("Rainy", <PiCloudRainDuotone />),
  66: new ForecastType("Rainy", <PiCloudRainDuotone />),
  67: new ForecastType("Rainy", <PiCloudRainDuotone />),
  71: new ForecastType("Snowy", <PiCloudSnowDuotone />),
  73: new ForecastType("Snowy", <PiCloudSnowDuotone />),
  75: new ForecastType("Snowy", <PiCloudSnowDuotone />),
  77: new ForecastType("Snowy", <PiCloudSnowDuotone />),
  80: new ForecastType("Rainy", <PiCloudRainDuotone />),
  81: new ForecastType("Rainy", <PiCloudRainDuotone />),
  82: new ForecastType("Heavy rain", <PiCloudLightningDuotone />),
  85: new ForecastType("Snowy", <PiCloudSnowDuotone />),
  86: new ForecastType("Snowy", <PiCloudSnowDuotone />),
  95: new ForecastType("Thunderstorms", <PiCloudLightningDuotone />),
  96: new ForecastType("Thunderstorms / hail", <PiCloudLightningDuotone />),
  99: new ForecastType("Thunderstorms / heavy hail", <PiCloudLightningDuotone />),
})

const NextDay = (props) => {
  let [lowTemp, setLowTemp] = useState(props.lowTemp);
  let [highTemp, setHighTemp] = useState(props.highTemp);
  let [day, setDay] = useState(props.day)
  let [weathercode, setWeathercode] = useState(props.weathercode)
  let [degreeUnit, setDegreeUnit] = useState(props.degreeUnit)
  let [precipitationSum, setPrecipitationSum] = useState(props.precipitationSum)
  let [precipitationSumUnit, setPrecipitationSumUnit] = useState(props.precipitationSumUnit)
  let [windspeedMax, setWindspeedMax] = useState(props.windspeedMax)
  let [windspeedMaxUnit, setWindspeedMaxUnit] = useState(props.windspeedMaxUnit)
  let [UVIndexMax, setUVIndexMax] = useState(props.UVIndexMax)
  let [UVIndexMaxUnit, setUVIndexMaxUnit] = useState(props.UVIndexMaxUnit)

  return (
    <section className="collapse">
      <input type="radio" name="forecast"/>
      <div className="flex justify-between items-center gap-4 collapse-title text-xl px-0">
        <span className="flex items-center gap-5">
          <span className="text-left text-md text-neutral200 w-8 me-8">{day.slice(0, 3)}</span>
          {/* <IconContext.Provider value={{ className: "fill-black" }}> */}
            <span className="text-5xl inline">{ForecastTypeComponents[weathercode].component}</span>
          {/* </IconContext.Provider> */}
          <span className="text-neutral300 text-md w-100px inline">{ForecastTypeComponents[weathercode].text}</span>
        </span>
        <span className="text-md font-bold super">
          <sup className="text-neutral200">{highTemp >= 0 ? "+" : "-"}{highTemp.toFixed(1)}{degreeUnit}</sup>
          <span className="m-1 text-neutral200">/</span>
          <sub className="text-neutral200">{lowTemp >= 0 ? "+" : "-"}{lowTemp.toFixed(1)}{degreeUnit}</sub>
        </span>
      </div>
      <section className="collapse-content text-center">
        <div className="flex justify-center">Precipitation: {precipitationSum} {precipitationSumUnit}</div>
        <div className="flex justify-center">Windspeed Max: {windspeedMax} {windspeedMaxUnit}</div>
        <div className="flex justify-center">UV Index Max: {UVIndexMax} {UVIndexMaxUnit}</div>
      </section>
    </section>
  )
}

export default NextDay