const axios = require("axios")
 async function getForecast(req, res) {
    try {
      const latitude = req.query.latitude;
      const longitude = req.query.longitude;
  
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relativehumidity_2m,dewpoint_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,precipitation_sum&current_weather=true&timezone=auto`;
  
      const response = await axios.get(url); // Making a GET request to the API
      const jsonData = response.data; // Extracting the response data
      res.json(jsonData); // Sending the response data as JSON
    } catch (error) {
      console.log("Error:", error); // Logging the error
      res.status(500).json({ error: "Internal server error", message: error.message }); // Sending an error response with status code 500
    }
  }
  module.exports = {getForecast}