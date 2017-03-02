const axios = require('axios')
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=087d6f9e71803d047c61bd9efa246483&units=metric'

module.exports = {
  getTemp: function (location) {
    let encodedLocation = encodeURIComponent(location)
    let requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`

    return axios.get(requestUrl).then((res) => {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message)
      } else {
        return res.data.main.temp
      }
    }, (err) => {
      // throw new Error(res.data.message)
      throw new Error('Unable to fetch weather for that location.')
    })
  }
}
